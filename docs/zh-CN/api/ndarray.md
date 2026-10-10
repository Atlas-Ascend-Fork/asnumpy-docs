# N 维数组对象

::: info
当前 API 文档站仅保留了一组代表性API。由于 AsNumpy 前端与文档体系仍在进行较大幅度整改，其余接口文档暂时隐藏，待前端稳定后再逐步补全。当前文档仅供参考。
:::

## 构造函数

### asnumpy.ndarray

```python
asnumpy.ndarray(shape: Sequence[int], dtype: np.dtype) -> None
```

表示设备上的多维数组。

该类封装了 C++ 后端数组，并提供 Python 接口，用于直接在加速器（NPU）上执行数组操作。用户通过此类与驻留在设备上的数组进行交互，在保持类似 NumPy 接口的同时实现高效计算。

::: tip
此类通常不直接创建。请使用数组创建例程（如 `asnumpy.zeros`、`asnumpy.ones` 或 `asnumpy.ndarray.from_numpy`）在设备上构造数组。
:::

### asnumpy.ndarray.from_numpy

```python
asnumpy.ndarray.from_numpy(host_data: numpy.ndarray) -> "ndarray"
```

从 numpy.ndarray 创建 asnumpy.ndarray。

此函数将数据从主机（CPU）复制到设备（NPU）。

**参数**
- `host_data` (numpy.ndarray): 输入的 NumPy 数组。

**返回值**
- `asnumpy.ndarray`: 设备上的新数组，包含与 `host_data` 相同的数据。

**示例**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> x_cpu = np.array([1, 2, 3])
>>> x_npu = ap.ndarray.from_numpy(x_cpu)
>>> type(x_cpu)
<class 'numpy.ndarray'>
>>> type(x_npu)
<class 'asnumpy.ndarray'>
```

## 属性

### asnumpy.ndarray.shape

```python
asnumpy.ndarray.shape -> tuple
```

数组维度的元组。

**返回值**
- `tuple`: 数组的形状。

**参见**
- [`numpy.ndarray.shape`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html)

### asnumpy.ndarray.dtype

```python
asnumpy.ndarray.dtype -> np.dtype
```

数组元素的数据类型。

**返回值**
- `numpy.dtype`: 数组元素的数据类型。

**参见**
- [`numpy.ndarray.dtype`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.dtype.html)

### asnumpy.ndarray.acl_dtype

```python
asnumpy.ndarray.acl_dtype -> int
```

内部 ACL 数据类型标识符。

**返回值**
- `int`: ACL 数据类型枚举值。

## 方法

### asnumpy.ndarray.to_numpy

```python
asnumpy.ndarray.to_numpy() -> numpy.ndarray
```

将数组数据的副本作为 numpy.ndarray 返回。

此函数将数据从设备（NPU）复制到主机（CPU）。

**返回值**
- `numpy.ndarray`: 包含设备数组数据的 NumPy 数组。

**示例**
```python
>>> import asnumpy as ap
>>> x_npu = ap.zeros(3)
>>> x_cpu = x_npu.to_numpy()
>>> type(x_cpu)
<class 'numpy.ndarray'>

```
