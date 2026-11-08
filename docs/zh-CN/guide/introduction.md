# 简介

AsNumpy 是一个轻量级的 Python 科学计算库，专为 Ascend NPU 设计，完全兼容 NumPy API。它通过 pybind11 绑定层封装华为 CANN 算子，通过 `NPUArray` 数据结构暴露接口，该结构与 `numpy.ndarray` 保持一致。

由哈尔滨工业大学 AISS 团队，哈尔滨工业大学 ISE 团队与华为 CANN 团队合作开发。

## 为什么选择 AsNumpy？

### 兼容 NumPy 的 API

函数名称和签名与 NumPy 一致，使迁移变得轻松：

```python
import numpy as np
import asnumpy as ap

# NumPy 代码
result = np.multiply(a, b)

# AsNumpy 代码 — 相同的 API！
result = ap.multiply(a_npu, b_npu)
```

### Ascend NPU 加速

原生算子路径通过 CANN ACLNN 在 NPU 上运行。部分前端操作在 Host 计算：`linalg.norm` 通常使用 `numpy.linalg.norm`，`linalg.matrix_power` 使用 `numpy.linalg.matrix_power`。设备数组输入先复制到 Host，结果再复制回设备；这些路径的计算和传输成本与原生 NPU 路径不同。以 `mean()` 归约算子为例（完整数据见[性能测试](./benchmarks.md)）：

| 形状 | AsNumpy (ms) | NumPy (ms) | 加速比 |
|-------|--------------|------------|--------|
| (1000, 1000) | 0.1510 | 0.4904 | 3.25× |
| (2000, 2000) | 0.1636 | 1.9372 | 11.84× |
| (3000, 3000) | 0.1857 | 6.6303 | **35.70×** |

### 自动资源管理

`NPUArray` 析构函数自动释放设备内存（RAII）。无需手动清理。

### 无缝数据传输

```python
# CPU → NPU
npu_array = ap.ndarray.from_numpy(np_array)

# NPU → CPU
np_array = npu_array.to_numpy()
```

## 核心特性

| 特性 | 描述 |
|---------|-------------|
| **兼容 NumPy 的 API** | 函数名称和签名与 NumPy 一致 |
| **Ascend 910B 原生加速** | 原生路径使用 CANN ACLNN；部分前端操作包含 Host 计算和数据传输 |
| **自动资源管理** | 基于 RAII 的内存管理 |
| **双向数据传输** | `from_numpy()` 和 `to_numpy()` 实现 CPU↔NPU 交换 |
| **广播支持** | 遵循 NumPy 广播语义 |
| **算子可扩展性** | 缺失的算子由 [OpenBOAT](https://gitcode.com/HIT1920/OpenBOAT) 补充 |

## 使用场景

AsNumpy 适用于：

- **科学计算** — 数值方法、数据分析、信号处理
- **机器学习** — 预处理、数据转换
- **高性能计算** — 大规模矩阵运算
- **NumPy 迁移** — 以最小改动将现有 NumPy 代码移植到 NPU

## 项目状态

| 属性 | 值 |
|-----------|-------|
| **版本** | 0.4.0 |
| **许可证** | Apache 2.0 |
| **Python** | 3.10+ |
| **CANN** | 8.2.RC1.alpha003+ |
| **平台** | Ascend 910B |

## 版本历史

下表列出已发布版本及其主要交付内容。

| 版本 | 发布日期 | 主要交付内容 |
|---------|---------|-----------------|
| **v0.3.0** | 2026-05-29 | 仓库重构为 src-layout；C++ 代码拆分为 `csrc/`、`bindings/`、`include/`；引入 setuptools-scm 版本管理与 towncrier CHANGELOG |
| **v0.3.1** | 2026-08-27 | 建立 NumPy 2.x 基线（依赖 `numpy>=2.0`）；逐元素算子改为 NumPy 式 dtype 提升；补齐 NumPy ufunc 互操作；更新 dtype 表并新增 CI 流水线 |
| **v0.4.0** | 2026-09-24 | 新增 `nanmin`；角度/弧度算子改用 aclnnMuls（修复 float16/float32 量级错误并原生支持 float64）；修复 `hypot`/`mean` 数值错误；修复 `clip` 等 4 处 host 侧内存泄漏与 `radians`/`around`/`round_` 的 NPU 流泄漏；`linspace` 保留显式 int64 dtype |

## 致谢

- 哈尔滨工业大学计算学部 AISS 团队 — 苏统华教授团队
- 哈尔滨工业大学计算学部 ISE 团队— 王甜甜教授团队
- 华为 CANN 团队

## 资源

- [快速开始](./quick-start.md) — 5 分钟入门
- [安装指南](./installation.md) — 详细安装说明
- [基本用法](./basic-usage.md) — 核心概念和操作
- [架构设计](./architecture.md) — 系统设计和内部实现
- [性能测试](./benchmarks.md) — 性能数据
- [常见问题](./faq.md) — 常见问题解答
- [开发指南](../developer/developer_guide.md) — 如何开发
- [API 参考](../api/index.md) — 完整 API 文档
- [Issue 追踪](https://gitcode.com/cann/asnumpy/issues) — 报告 Bug
- [OpenBOAT](https://gitcode.com/HIT1920/OpenBOAT) — 算子库
