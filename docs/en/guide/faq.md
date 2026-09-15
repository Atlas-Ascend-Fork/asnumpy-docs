# FAQ

Frequently asked questions about installing and using AsNumpy.

## Installation

### How do I check if CANN is correctly installed?

```bash
cat /usr/local/Ascend/ascend-toolkit/latest/version.cfg
```

### What should I do if I encounter a compilation error?

1. Confirm CMake version >= 3.26: `cmake --version`
2. Confirm GCC version >= 11.2: `gcc --version`
3. Ensure the CANN environment variable is set:
   ```bash
   export ASCEND_TOOLKIT_HOME=/usr/local/Ascend/ascend-toolkit/latest
   ```
4. Try a clean rebuild:
   ```bash
   pip install -e . --no-build-isolation
   ```

### What are the hardware requirements?

| Requirement | Specification |
|-------------|---------------|
| **CPU** | AArch64 or X86_64 |
| **NPU** | Ascend 910B |
| **OS** | Linux (Ubuntu 20.04+ recommended) |

## Usage

### How compatible is AsNumpy with NumPy?

AsNumpy is designed to be API-compatible with NumPy, but operator coverage is not yet complete. The current version (v0.2.0) covers the most common math, logic, sorting, and array-creation APIs.

The roadmap target is to cover the **top 100 most-used NumPy APIs** by v1.0. See the [Roadmap](./introduction.md#roadmap) for the full plan.

### Do I need to manually initialize or finalize the NPU?

No. AsNumpy handles device initialization automatically on `import asnumpy` and releases the device on program exit. You only need to call `ap.set_device(n)` if you want to select a specific NPU other than device 0.

```python
import asnumpy as ap  # Auto-initialized

# Your code...

# Auto-released on exit
```

### Why is AsNumpy slower than NumPy for small arrays?

For small tensors (e.g., 500×500), NPU kernel launch overhead dominates the measured time. NPU acceleration becomes significant starting around 1000×1000 (`float32`). See [Benchmarks](./benchmarks.md) for detailed data.

| Shape | Speedup |
|-------|---------|
| (500, 500) | 0.99× (roughly on par) |
| (1000, 1000) | 3.25× |
| (3000, 3000) | **35.70×** |

### How do I transfer data between CPU and NPU?

```python
import numpy as np
import asnumpy as ap

# CPU → NPU
cpu_array = np.array([1, 2, 3], dtype=np.float32)
npu_array = ap.ndarray.from_numpy(cpu_array)

# NPU → CPU
result_cpu = npu_array.to_numpy()
```

### Can I use multiple NPUs?

Yes. Use `ap.set_device(n)` to switch between devices:

```python
import asnumpy as ap

# Use device 0
ap.set_device(0)
arr0 = ap.ones((100, 100))

# Use device 1
ap.set_device(1)
arr1 = ap.ones((100, 100))
```

### What data types are supported?

AsNumpy supports the following data types:

| Category | Types |
|----------|-------|
| **Float** | `float16`, `float32`, `float64` |
| **Integer** | `int8`, `int16`, `int32`, `int64` |
| **Unsigned** | `uint8`, `uint16`, `uint32`, `uint64` |
| **Complex** | `complex64`, `complex128` |
| **Boolean** | `bool` |

> **Note:** Some operations may have restrictions on certain data types. Check the API documentation for details.

## Troubleshooting

### I get `ModuleNotFoundError: No module named 'asnumpy'`

1. Verify installation:
   ```bash
   pip list | grep asnumpy
   ```

2. Check your Python environment:
   ```bash
   which python
   ```

3. Reinstall:
   ```bash
   pip install -e . --no-build-isolation
   ```

### I get `RuntimeError: ACL error ...`

1. Verify NPU is available:
   ```bash
   npu-smi info
   ```

2. Check CANN installation:
   ```bash
   cat /usr/local/Ascend/ascend-toolkit/latest/version.cfg
   ```

3. Ensure environment variable is set:
   ```bash
   export ASCEND_TOOLKIT_HOME=/usr/local/Ascend/ascend-toolkit/latest
   ```

### My results don't match NumPy exactly

Small numerical differences are expected due to:

- Different floating-point implementations
- Hardware-specific rounding

Use `np.allclose()` for comparison:

```python
import numpy as np

npu_result = ap.sum(arr)  # Returns a Python scalar when axis is None
np_result = np.sum(cpu_arr)

# Allow small tolerance
assert np.allclose(npu_result, np_result, rtol=1e-5, atol=1e-8)
```

## Contributing

### How to develop?

For more details, please refer to the [Developer Guide](../developer/developer_guide.md).

### Where can I report bugs?

Open an issue on [GitCode](https://gitcode.com/cann/asnumpy/issues).

Please include:
- System information (OS, Python version, CANN version)
- Complete error message
- Minimal reproducible example
