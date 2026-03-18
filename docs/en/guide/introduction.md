# Introduction

AsNumpy is a lightweight Python library for scientific computing on Ascend NPU, fully compatible with the NumPy API. It wraps Huawei CANN operators through a pybind11 binding layer, exposing them via the `NPUArray` data structure that mirrors `numpy.ndarray`.

Developed by the AISS team of Harbin Institute of Technology, the ISE team of Harbin Institute of Technology, and the Huawei CANN team in collaboration.

## Why AsNumpy?

### NumPy-Compatible API

Function names and signatures match NumPy, making migration effortless:

```python
import numpy as np
import asnumpy as ap

# NumPy code
result = np.multiply(a, b)

# AsNumpy code — same API!
result = ap.multiply(a_npu, b_npu)
```

### Ascend NPU Acceleration

Operators run directly on NPU via CANN ACLNN without framework overhead:

| Shape | AsNumpy (NPU) | NumPy (CPU) | Speedup |
|-------|---------------|-------------|---------|
| (1000, 1000) | 0.0692 s | 0.7029 s | 10.16× |
| (2000, 2000) | 0.1033 s | 3.8387 s | 37.17× |
| (3000, 3000) | 0.1115 s | 14.3567 s | **128.70×** |

### Automatic Resource Management

`NPUArray` destructor releases device memory automatically (RAII). No manual cleanup needed.

### Seamless Data Transfer

```python
# CPU → NPU
npu_array = ap.ndarray.from_numpy(np_array)

# NPU → CPU
np_array = npu_array.to_numpy()
```

## Key Features

| Feature | Description |
|---------|-------------|
| **NumPy-compatible API** | Function names and signatures match NumPy |
| **Ascend 910B native acceleration** | Operators run directly on NPU via CANN ACLNN |
| **Automatic resource management** | RAII-based memory management |
| **Bidirectional data transfer** | `from_numpy()` and `to_numpy()` for CPU↔NPU exchange |
| **Broadcasting support** | Follows NumPy broadcasting semantics |
| **Operator extensibility** | Missing operators supplemented by [OpenBOAT](https://gitcode.com/HIT1920/OpenBOAT) |

## Use Cases

AsNumpy is ideal for:

- **Scientific Computing** — Numerical methods, data analysis, signal processing
- **Machine Learning** — Preprocessing, data transformation
- **High-Performance Computing** — Large-scale matrix operations
- **NumPy Migration** — Port existing NumPy code to NPU with minimal changes

## Project Status

| Attribute | Value |
|-----------|-------|
| **Version** | 0.2.0 |
| **License** | Apache 2.0 |
| **Python** | 3.9+ |
| **CANN** | 8.2.RC1+ |
| **Platform** | Ascend 910B |

## Roadmap

| Release | Quarter | Key Deliverables |
|---------|---------|-----------------|
| **v0.3.0** | 26Q1 | Documentation site (VitePress + GitCode Pages), CI/CD pipeline with hardware whitelist, code quality overhaul (spdlog, clang-format), PyPI release |
| **v0.4.0** | 26Q2 | Mathematical functions 100% API coverage, Ascend 950 validation, triton-ascend operator integration (10 ops), memory pool (experimental) |
| **v0.5.0** | 26Q2 | Linear algebra full coverage, triton-ascend operator library expanded to 20 ops, multi-NPU distributed computing research |

## Acknowledgements

- AISS Group, School of Computer Science, Harbin Institute of Technology — Prof. Su Tonghua's team
-  ISE Group，School of Computer Science, Harbin Institute of Technology — Prof. Wang Tiantian's team
- Huawei CANN team

## Resources

- [Quick Start](quick-start) — Get started in 5 minutes
- [Installation](installation) — Detailed installation guide
- [Basic Usage](basic-usage) — Core concepts and operations
- [Architecture](architecture) — System design and internals
- [Benchmarks](benchmarks) — Performance data
- [FAQ](faq) — Frequently asked questions
- [Developer Guide](../developer/developer_guide) — How to develop
- [API Reference](../api/index) — Complete API documentation
- [Issue Tracker](https://gitcode.com/cann/asnumpy/issues) — Report bugs
- [OpenBOAT](https://gitcode.com/HIT1920/OpenBOAT) — Operator library
