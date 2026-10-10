# 基本用法

本指南涵盖 AsNumpy 的核心概念：

- [`ndarray` 对象](#the-ndarray-object)
- [当前设备](#current-device)
- [数据传输](#data-transfer)
- [数组创建](#array-creation)
- [数学运算](#mathematical-operations)
- [内存管理](#memory-management)

## `ndarray` 对象

`asnumpy.ndarray` 类是 AsNumpy 的核心。它与 `numpy.ndarray` 兼容，同时将数据存储在 NPU 上。

### 基本用法

```python
import numpy as np
import asnumpy as ap

# 在 CPU 上创建 NumPy 数组
x_cpu = np.array([1, 2, 3], dtype=np.float32)

# 传输到 NPU
x_npu = ap.ndarray.from_numpy(x_cpu)

# x_npu 现在是当前设备上的 asnumpy.ndarray
print(type(x_npu))  # <class 'asnumpy.utils.ndarray'>
```

### 属性

与 NumPy 数组一样，`ndarray` 对象具有标准属性：

```python
>>> x = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.float32))
>>> x.shape
(2, 2)
>>> x.dtype
dtype('float32')
```

> **注意：** `ndim` 属性可直接使用；`size` 可从 `shape` 派生：
> ```python
> >>> x.ndim  # 维度数
> 2
> >>> import numpy as np
> >>> int(np.prod(x.shape))  # size（元素总数）
> 4
> ```

## 当前设备

AsNumpy 有一个*当前设备*的概念 — 这是数组分配和操作发生的默认 NPU。

### 切换设备

```python
import asnumpy as ap

# 默认设备是 0
ap.set_device(0)

# 切换到设备 1
ap.set_device(1)

# 在设备 1 上创建数组
x = ap.ndarray.from_numpy(np.array([1, 2, 3]))

# 切换回设备 0
ap.set_device(0)
```

> **注意：** 要检查可用的 NPU 设备，请使用系统命令：
> ```bash
> npu-smi info
> ```

### 自动初始化

AsNumpy 在导入时自动初始化 NPU 设备，在程序退出时自动释放：

```python
import asnumpy as ap  # NPU 自动初始化

# 您的代码...

# 程序退出时 NPU 自动释放
```

无需手动初始化或终结。

## 数据传输

### CPU 到 NPU

使用 `ap.ndarray.from_numpy()` 将数据从 CPU 传输到 NPU：

```python
import numpy as np
import asnumpy as ap

# 在 CPU 上创建数据
cpu_data = np.random.randn(1000, 1000).astype(np.float32)

# 传输到 NPU
npu_data = ap.ndarray.from_numpy(cpu_data)
```

### NPU 到 CPU

使用 `.to_numpy()` 将数据从 NPU 传回 CPU：

```python
# 传回 CPU
result_cpu = npu_data.to_numpy()

print(type(result_cpu))  # <class 'numpy.ndarray'>
```

### 传输流程

```
┌──────────────┐    from_numpy()    ┌──────────────┐
│   NumPy      │ ─────────────────► │   AsNumpy    │
│   ndarray    │                    │   ndarray    │
│   (CPU)      │ ◄───────────────── │   (NPU)      │
└──────────────┘    to_numpy()      └──────────────┘
```

## 数组创建

### 从 NumPy 数组创建

```python
import numpy as np
import asnumpy as ap

# 从现有 NumPy 数组
np_arr = np.array([1, 2, 3, 4, 5], dtype=np.float32)
ap_arr = ap.ndarray.from_numpy(np_arr)
```

### 使用创建函数

AsNumpy 提供与 NumPy 兼容的数组创建函数：

```python
import asnumpy as ap

# 直接在 NPU 上创建数组
zeros = ap.zeros((3, 4), dtype=ap.float32)
ones = ap.ones((3, 4), dtype=ap.float32)
full = ap.full((3, 4), 5.0, dtype=ap.float32)
```

## 数学运算

AsNumpy 支持广泛的数学运算，API 与 NumPy 相同。

### 算术运算

```python
import asnumpy as ap
import numpy as np

a = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.float32))
b = ap.ndarray.from_numpy(np.array([4, 5, 6], dtype=np.float32))

# 逐元素运算
c = ap.add(a, b)        # [5, 7, 9]
d = ap.subtract(a, b)   # [-3, -3, -3]
e = ap.multiply(a, b)   # [4, 10, 18]
f = ap.divide(a, b)     # [0.25, 0.4, 0.5]
```

### 三角函数

```python
import asnumpy as ap
import numpy as np

x = ap.ndarray.from_numpy(np.array([0, np.pi/2, np.pi], dtype=np.float32))

sin_x = ap.sin(x)
cos_x = ap.cos(x)
tan_x = ap.tan(x)
```

### 指数和对数

```python
import asnumpy as ap
import numpy as np

x = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.float32))

exp_x = ap.exp(x)    # e^x
log_x = ap.log(x)    # 自然对数
log10_x = ap.log10(x)  # 以 10 为底的对数
```

### 规约操作

```python
import asnumpy as ap
import numpy as np

arr = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.float32))

total = ap.sum(arr)      # 10.0（无 axis 时返回 Python 标量）
mean_val = ap.mean(arr)  # 2.5
max_val = ap.max(arr)    # 4.0
min_val = ap.min(arr)    # 1.0
```

### 线性代数

```python
import asnumpy as ap
import numpy as np

a = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.float32))
b = ap.ndarray.from_numpy(np.array([[5, 6], [7, 8]], dtype=np.float32))

# 矩阵乘法
c = ap.matmul(a, b)

# 矩阵范数
norm = ap.linalg.norm(a)
```

## 内存管理

AsNumpy 使用 RAII（资源获取即初始化）进行自动内存管理：

### 自动清理

```python
import asnumpy as ap

def compute():
    # 在 NPU 上分配数组
    arr = ap.ones((1000, 1000), dtype=ap.float32)
    result = ap.sum(arr)  # 无 axis 时返回 Python 标量
    return result
    # arr 在离开作用域时自动释放

# 没有内存泄漏！
for _ in range(1000):
    compute()
```

### 关键点

- **无需手动释放**：设备内存自动释放
- **RAII**：资源与对象生命周期绑定
- **异常安全**：即使发生异常，内存也会被释放

## 性能考虑

### 数组大小很重要

NPU 加速对大数组最有效：

| 数组形状 | 建议 |
|-------------|----------------|
| < 1000×1000 | 考虑使用 NumPy（CPU 可能更快） |
| ≥ 1000×1000 | 使用 AsNumpy 以获得最佳性能 |
| ≥ 2000×2000 | 预期有显著加速 |

### 最小化数据传输

```python
# ❌ 不好：频繁传输
for i in range(1000):
    arr = ap.ndarray.from_numpy(np_array)  # 每次迭代都传输
    result = ap.multiply(arr, arr)
    cpu_result = result.to_numpy()  # 每次迭代都传回

# ✅ 好：传输一次，计算多次
arr = ap.ndarray.from_numpy(np_array)  # 传输一次
for i in range(1000):
    result = ap.multiply(arr, arr)
cpu_result = result.to_numpy()  # 最后传输一次
```