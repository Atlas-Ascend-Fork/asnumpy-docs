# 架构设计

本文档描述 AsNumpy 的内部架构，包括三层设计、核心 `NPUArray` 数据结构、API 模块布局，以及通过 OpenBOAT 进行 NPU 扩展的策略。

## 三层架构

AsNumpy 建立在三层结构上，清晰地分离关注点：

```
+------------------------------------------+
|     Python 前端 (asnumpy/*.py)            |
|  - __init__.py   122+ 导出符号            |
|  - array.py      数组创建 (10 个函数)     |
|  - math.py       数学运算 (80+ 个函数)    |
|  - linalg/       线性代数                 |
|  - random/       随机采样                 |
|  - logic.py      逻辑函数 (16 个函数)     |
|  - nn.py         神经网络 (softmax)       |
|  - statistics.py 统计函数 (mean)          |
+------------------------------------------+
                    |
         pybind11 绑定层 (python/*.cpp)
         PYBIND11_MODULE(asnumpy_core, ...)
                    |
+------------------------------------------+
|     C++ 核心 (src/, include/)             |
|  - NPUArray      核心数据结构             |
|  - namespace asnumpy  算子实现            |
|  - Ascend ACL / ACLNN 算子封装            |
|  - CANN Runtime  设备管理                 |
+------------------------------------------+
                    |
    华为 CANN (ascendcl, runtime, nnopbase, opapi)
                    |
+------------------------------------------+
|     Ascend NPU 硬件 (910B)                |
+------------------------------------------+
```

## NPUArray 设计

`NPUArray` 是 AsNumpy 的核心数据结构。它围绕三个原则设计：

### 兼容性

`NPUArray` 在 Python 层面暴露与 `numpy.ndarray` 相同的接口。函数名称相同（`add`、`multiply`、`matmul` 等），因此现有的 NumPy 代码只需更改导入并添加数据传输调用即可迁移。

### 封装性

在内部，`NPUArray` 包含：
- `dtype` — 元素类型 (`aclDtype`)
- `shape` — 维度大小
- `strides` — 内存布局
- `tensorPtr` — 指向底层 `aclTensor` 的指针
- `devicePtr` (私有) — 原始设备内存地址，通过 `device_address()` 暴露

用户永远不会直接与这些字段交互；Python 层提供了简洁的 ndarray 风格接口。

### 资源管理

`NPUArray` 遵循 RAII：析构函数自动调用 `aclDestroyTensor` 和 `aclrtFree`，无需手动内存管理。实现了所有四种 C++ 值语义（拷贝构造、移动构造、拷贝赋值、移动赋值）。

数据传输：
- `FromNumpy` — 使用 `ACL_MEMCPY_HOST_TO_DEVICE`
- `ToNumpy` — 使用 `ACL_MEMCPY_DEVICE_TO_HOST`；`float16` / `BF16` 需要特殊的 `uint16_t` 解包处理

## API 架构

AsNumpy 的 API 分为**功能模块**和**基础模块**：

**功能模块**涵盖主要的科学计算领域：

| 模块 | Python | C++ 命名空间 | 状态 |
|--------|--------|---------------|--------|
| 数学（算术、三角、指数、对数） | `math.py` | `asnumpy::` | 完成 |
| 线性代数 | `linalg/` | global | 开发中 |
| 随机采样 | `random/` | global | 开发中 |
| 逻辑函数 | `logic.py` | `asnumpy::` | 完成 |
| 数组创建 | `array.py` | global | 完成 |
| 排序 | `sorting.py` | global | 完成 |
| 神经网络 | `nn.py` | `asnumpy::` | 完成 (softmax) |
| 统计 | `statistics.py` | `asnumpy::` | 完成 (mean) |
| I/O | `io.py` | 委托给 NumPy | 完成 |

**基础模块**支撑功能层：

| 模块 | 角色 |
|--------|------|
| `NPUArray` (`src/utils/`) | 核心数据结构 |
| `CANN driver` (`src/cann/`) | 设备初始化和生命周期 |
| `dtypes` (`src/dtypes/`) | 数据类型注册 |
| `pybind11 bindings` (`python/`) | Python-C++ 接口 |

## NPU 扩展模块

CANN 的内置算子主要针对深度学习（训练和推理）。AsNumpy 面向通用科学计算 — 数据分析、数值方法、信号处理 — 这需要比 CANN 单独提供的更广泛的算子集。

**差距：** CANN 内置算子无法覆盖所有 NumPy API。

**策略：**
- 直接封装现有 CANN 内置算子
- 手动开发缺失的算子 (Ascend C)
- 补充 [OpenBOAT](https://gitcode.com/HIT1920/OpenBOAT) 开源算子库

**价值：** 这种三管齐下的方法逐步缩小兼容性差距，目标是在 v1.0 版本覆盖最常用的 100 个 NumPy API。

## OpenBOAT

[**OpenBOAT**](https://gitcode.com/HIT1920/OpenBOAT) 是由**哈尔滨工业大学计算机学院 AISS 小组**（苏统华教授领导）构建和维护的开源 Ascend C 算子库。

| 属性 | 详情 |
|-----------|--------|
| 项目地址 | [https://gitcode.com/HIT1920/OpenBOAT](https://gitcode.com/HIT1920/OpenBOAT) |
| 团队 | AISS Group, HIT — 苏统华教授 |
| 技术 | 华为 Ascend C 编程语言 |
| 在 AsNumpy 中的角色 | 提供 CANN 内置不覆盖的算子实现，实现更广泛的 NumPy API 兼容性 |

AsNumpy 和 OpenBOAT 由同一研究小组开发，确保紧密集成和协调的路线图规划。
