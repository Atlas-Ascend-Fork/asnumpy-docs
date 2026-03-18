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

算子通过 CANN ACLNN 直接在 NPU 上运行，无框架开销：

| 形状 | AsNumpy (NPU) | NumPy (CPU) | 加速比 |
|-------|---------------|-------------|---------|
| (1000, 1000) | 0.0692 s | 0.7029 s | 10.16× |
| (2000, 2000) | 0.1033 s | 3.8387 s | 37.17× |
| (3000, 3000) | 0.1115 s | 14.3567 s | **128.70×** |

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
| **Ascend 910B 原生加速** | 算子通过 CANN ACLNN 直接在 NPU 上运行 |
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
| **版本** | 0.2.0 |
| **许可证** | Apache 2.0 |
| **Python** | 3.9+ |
| **CANN** | 8.2.RC1+ |
| **平台** | Ascend 910B |

## 路线图

| 版本 | 季度 | 关键交付内容 |
|---------|---------|-----------------|
| **v0.3.0** | 26Q1 | 文档网站（VitePress + GitCode Pages）、带硬件白名单的 CI/CD 流水线、代码质量改进（spdlog, clang-format）、PyPI 发布 |
| **v0.4.0** | 26Q2 | 数学函数 100% API 覆盖、Ascend 950 验证、triton-ascend 算子集成（10 个算子）、内存池（实验性） |
| **v0.5.0** | 26Q2 | 线性代数完整覆盖、triton-ascend 算子库扩展至 20 个算子、多 NPU 分布式计算研究 |

## 致谢

- 哈尔滨工业大学计算学部 AISS 团队 — 苏统华教授团队
- 哈尔滨工业大学计算学部 ISE 团队— 王甜甜教授团队
- 华为 CANN 团队

## 资源

- [快速开始](quick-start) — 5 分钟入门
- [安装指南](installation) — 详细安装说明
- [基本用法](basic-usage) — 核心概念和操作
- [架构设计](architecture) — 系统设计和内部实现
- [性能测试](benchmarks) — 性能数据
- [常见问题](faq) — 常见问题解答
- [开发指南](../developer/developer_guide) — 如何开发
- [API 参考](../api/index) — 完整 API 文档
- [Issue 追踪](https://gitcode.com/cann/asnumpy/issues) — 报告 Bug
- [OpenBOAT](https://gitcode.com/HIT1920/OpenBOAT) — 算子库
