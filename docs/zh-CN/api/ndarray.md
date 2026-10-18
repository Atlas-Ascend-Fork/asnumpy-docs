# N 维数组对象

## 构造函数

### asnumpy.ndarray

```python
asnumpy.ndarray(shape_or_array: Sequence[int], dtype: np.dtype) -> ndarray
asnumpy.ndarray(shape_or_array: ndarray) -> ndarray
```

表示设备上的多维数组。

该类封装了 C++ 后端数组，并提供 Python 接口，用于直接在加速器（NPU）上执行数组操作。用户通过此类与驻留在设备上的数组进行交互，在保持类似 NumPy 接口的同时实现高效计算。

按形状构造时必须同时提供 `dtype`（省略会抛出 ValueError）；也可以从已有的 `asnumpy.ndarray` 深拷贝构造，得到一个数据相同的新数组，原数组不受影响。首参数名为 `shape_or_array`，两个参数均按位置传入：只有当首参数是形状时才会使用 `dtype`。

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
>>> x_cpu = np.array([1, 2, 3], dtype=np.int64)
>>> x_npu = ap.ndarray.from_numpy(x_cpu)
>>> type(x_cpu)
<class 'numpy.ndarray'>
>>> type(x_npu)
<class 'asnumpy.utils.ndarray'>
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

### asnumpy.ndarray.ndim

```python
asnumpy.ndarray.ndim -> int
```

数组的维度（轴）数量。

**返回值**
- `int`: 维度数量。

**参见**
- [`numpy.ndarray.ndim`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.ndim.html)

### asnumpy.ndarray.itemsize

```python
asnumpy.ndarray.itemsize -> int
```

单个数组元素的字节长度。

**返回值**
- `int`: 单个元素的字节数。

**参见**
- [`numpy.ndarray.itemsize`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.itemsize.html)

### asnumpy.ndarray.nbytes

```python
asnumpy.ndarray.nbytes -> int
```

数组数据占用的总字节数（等于 `itemsize` 与元素总数的乘积）。

**返回值**
- `int`: 总字节数。

**参见**
- [`numpy.ndarray.nbytes`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.nbytes.html)

### asnumpy.ndarray.strides

```python
asnumpy.ndarray.strides -> tuple
```

遍历数组每一维时所需的字节步长。

**返回值**
- `tuple`: 每个维度上的字节步长。

**参见**
- [`numpy.ndarray.strides`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.strides.html)

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
>>> x_npu = ap.zeros(3, dtype=ap.float32)
>>> x_cpu = x_npu.to_numpy()
>>> type(x_cpu)
<class 'numpy.ndarray'>
```

### asnumpy.ndarray.astype

```python
asnumpy.ndarray.astype(dtype, order="K", casting="unsafe", subok=True, copy=True) -> ndarray
```

返回转换为指定 dtype 的数组，转换在设备上完成。

**参数**
- `dtype`: 目标数据类型，接受 NumPy dtype 或标量类型（如 `numpy.float32`）等写法。
- `order` (str, 可选): 仅为签名兼容保留。asnumpy 数组总是 C 连续的稠密布局，只支持 `"K"` 与 `"C"`，传入其他值会抛出 ValueError。默认为 `"K"`。
- `casting` (str, 可选): 转换规则，经 `numpy.can_cast` 检查。默认为 `"unsafe"`（与 NumPy 默认一致）。
- `subok` (bool, 可选): 仅为签名兼容保留，只允许默认值 True，传入 False 会抛出 ValueError。
- `copy` (bool, 可选): 默认 True，总是返回新数组；为 False 且目标 dtype 与当前一致时返回原数组本身，dtype 不同时仍返回新数组。

**返回值**
- `ndarray`: 转换为目标 dtype 的数组。

**参见**
- [`numpy.ndarray.astype`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.astype.html)

**示例**
```python
>>> import asnumpy as ap
>>> x = ap.ones(3, dtype=ap.float32)
>>> x.astype(ap.int32).to_numpy()
array([1, 1, 1], dtype=int32)
```
