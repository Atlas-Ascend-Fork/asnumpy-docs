# Basic Usage

This guide covers the fundamental concepts of AsNumpy:

- [The `ndarray` Object](#the-ndarray-object)
- [Current Device](#current-device)
- [Data Transfer](#data-transfer)
- [Array Creation](#array-creation)
- [Mathematical Operations](#mathematical-operations)
- [Memory Management](#memory-management)

## The `ndarray` Object

The `asnumpy.ndarray` class is the core of AsNumpy. It is designed to be compatible with `numpy.ndarray` while storing data on the NPU.

### Basic Usage

```python
import numpy as np
import asnumpy as ap

# Create a NumPy array on CPU
x_cpu = np.array([1, 2, 3], dtype=np.float32)

# Transfer to NPU
x_npu = ap.ndarray.from_numpy(x_cpu)

# x_npu is now an asnumpy.ndarray on the current device
print(type(x_npu))  # <class 'asnumpy.ndarray'>
```

### Properties

Like NumPy arrays, `ndarray` objects have standard properties:

```python
>>> x = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.float32))
>>> x.shape
(2, 2)
>>> x.dtype
dtype('float32')
```

> **Note:** Additional properties like `ndim` and `size` can be derived from `shape`:
> ```python
> >>> len(x.shape)  # ndim
> 2
> >>> import numpy as np
> >>> int(np.prod(x.shape))  # size
> 4
> ```

## Current Device

AsNumpy has a concept of *current device* — the default NPU where array allocation and operations occur.

### Switching Devices

```python
import asnumpy as ap

# Default device is 0
ap.set_device(0)

# Switch to device 1
ap.set_device(1)

# Create array on device 1
x = ap.ndarray.from_numpy(np.array([1, 2, 3]))

# Switch back to device 0
ap.set_device(0)
```

> **Note:** To check available NPU devices, use the system command:
> ```bash
> npu-smi info
> ```

### Automatic Initialization

AsNumpy automatically initializes the NPU device on import and releases it on program exit:

```python
import asnumpy as ap  # NPU auto-initialized

# Your code here...

# NPU released on program exit
```

No manual initialization or finalization is required.

## Data Transfer

### CPU to NPU

Use `ap.ndarray.from_numpy()` to transfer data from CPU to NPU:

```python
import numpy as np
import asnumpy as ap

# Create data on CPU
cpu_data = np.random.randn(1000, 1000).astype(np.float32)

# Transfer to NPU
npu_data = ap.ndarray.from_numpy(cpu_data)
```

### NPU to CPU

Use `.to_numpy()` to transfer data from NPU back to CPU:

```python
# Transfer back to CPU
result_cpu = npu_data.to_numpy()

print(type(result_cpu))  # <class 'numpy.ndarray'>
```

### Transfer Workflow

```
┌──────────────┐    from_numpy()    ┌──────────────┐
│   NumPy      │ ─────────────────► │   AsNumpy    │
│   ndarray    │                    │   ndarray    │
│   (CPU)      │ ◄───────────────── │   (NPU)      │
└──────────────┘    to_numpy()      └──────────────┘
```

## Array Creation

### From NumPy Arrays

```python
import numpy as np
import asnumpy as ap

# From existing NumPy array
np_arr = np.array([1, 2, 3, 4, 5], dtype=np.float32)
ap_arr = ap.ndarray.from_numpy(np_arr)
```

### Using Creation Functions

AsNumpy provides NumPy-compatible array creation functions:

```python
import asnumpy as ap

# Create arrays directly on NPU
zeros = ap.zeros((3, 4), dtype=ap.float32)
ones = ap.ones((3, 4), dtype=ap.float32)
full = ap.full((3, 4), fill_value=5.0, dtype=ap.float32)
```

## Mathematical Operations

AsNumpy supports a wide range of mathematical operations with the same API as NumPy.

### Arithmetic Operations

```python
import asnumpy as ap
import numpy as np

a = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.float32))
b = ap.ndarray.from_numpy(np.array([4, 5, 6], dtype=np.float32))

# Element-wise operations
c = ap.add(a, b)        # [5, 7, 9]
d = ap.subtract(a, b)   # [-3, -3, -3]
e = ap.multiply(a, b)   # [4, 10, 18]
f = ap.divide(a, b)     # [0.25, 0.4, 0.5]
```

### Trigonometric Functions

```python
import asnumpy as ap
import numpy as np

x = ap.ndarray.from_numpy(np.array([0, np.pi/2, np.pi], dtype=np.float32))

sin_x = ap.sin(x)
cos_x = ap.cos(x)
tan_x = ap.tan(x)
```

### Exponential and Logarithmic

```python
import asnumpy as ap
import numpy as np

x = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.float32))

exp_x = ap.exp(x)    # e^x
log_x = ap.log(x)    # natural log
log10_x = ap.log10(x)  # base-10 log
```

### Reduction Operations

```python
import asnumpy as ap
import numpy as np

arr = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.float32))

total = ap.sum(arr)      # 10.0
mean_val = ap.mean(arr)  # 2.5
max_val = ap.max(arr)    # 4.0
min_val = ap.min(arr)    # 1.0
```

### Linear Algebra

```python
import asnumpy as ap
import numpy as np

a = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.float32))
b = ap.ndarray.from_numpy(np.array([[5, 6], [7, 8]], dtype=np.float32))

# Matrix multiplication
c = ap.matmul(a, b)

# Matrix norm
norm = ap.linalg.norm(a)
```

## Memory Management

AsNumpy uses RAII (Resource Acquisition Is Initialization) for automatic memory management:

### Automatic Cleanup

```python
import asnumpy as ap

def compute():
    # Array allocated on NPU
    arr = ap.ones((1000, 1000), dtype=ap.float32)
    result = ap.sum(arr)
    return result.to_numpy()
    # arr is automatically freed when it goes out of scope

# No memory leak!
for _ in range(1000):
    compute()
```

### Key Points

- **No manual free**: Device memory is released automatically
- **RAII**: Resources are tied to object lifetime
- **Exception-safe**: Memory is freed even if exceptions occur

## Performance Considerations

### Array Size Matters

NPU acceleration is most effective for large arrays:

| Array Shape | Recommendation |
|-------------|----------------|
| < 1000×1000 | Consider using NumPy (CPU may be faster) |
| ≥ 1000×1000 | Use AsNumpy for best performance |
| ≥ 2000×2000 | Significant speedup expected |

### Minimize Data Transfer

```python
# ❌ Bad: Frequent transfers
for i in range(1000):
    arr = ap.ndarray.from_numpy(np_array)  # Transfer every iteration
    result = ap.sum(arr)
    cpu_result = result.to_numpy()  # Transfer back every iteration

# ✅ Good: Transfer once, compute many times
arr = ap.ndarray.from_numpy(np_array)  # Transfer once
for i in range(1000):
    result = ap.sum(arr)
cpu_result = result.to_numpy()  # Transfer once at the end
```