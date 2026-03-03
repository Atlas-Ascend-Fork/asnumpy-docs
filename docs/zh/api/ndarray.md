# N 维数组对象

<!-- docsify-toc:start -->
- [构造函数](#构造函数)
  - [asnumpy.ndarray](#asnumpyndarray)
  - [asnumpy.ndarray.from_numpy](#asnumpyndarrayfrom_numpy)
- [属性](#属性)
  - [asnumpy.ndarray.shape](#asnumpyndarrayshape)
  - [asnumpy.ndarray.dtype](#asnumpyndarraydtype)
  - [asnumpy.ndarray.acl_dtype](#asnumpyndarrayacl_dtype)
- [方法](#方法)
  - [asnumpy.ndarray.to_numpy](#asnumpyndarrayto_numpy)
<!-- docsify-toc:end -->

## 构造函数

### asnumpy.ndarray

```python
asnumpy.ndarray(shape: Sequence[int], dtype: np.dtype) -> None
```

表示设备上的多维数组。

此类封装了 C++ 后端数组并提供 Python 接口，
用于直接在加速器（NPU）上执行数组操作。
用户可以通过此类与设备驻留数组交互，同时
保持 NumPy 风格的接口，实现高效计算。

.. note::

    此类通常不直接创建。使用数组创建
    例程，如 :func:`asnumpy.zeros`、:func:`asnumpy.ones` 或
    :meth:`asnumpy.ndarray.from_numpy` 在设备上构造数组。

### asnumpy.ndarray.from_numpy

```python
asnumpy.ndarray.from_numpy(host_data: numpy.ndarray) -> "ndarray"
```

从 numpy.ndarray 创建 asnumpy.ndarray。

此函数将数据从主机（CPU）复制到设备（NPU）。

**参数**
- `host_data` (numpy.ndarray): 输入 NumPy 数组。

**返回值**
- `asnumpy.ndarray`: 包含与 `host_data` 相同数据的新设备数组。

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

**另请参阅**
- [`numpy.ndarray.shape`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html)

### asnumpy.ndarray.dtype

```python
asnumpy.ndarray.dtype -> np.dtype
```

数组元素的数据类型。

**返回值**
- `numpy.dtype`: 数组元素的数据类型。

**另请参阅**
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

将数组数据复制为 numpy.ndarray。

此函数将数据从设备（NPU）复制到主机（CPU）。

**返回值**
- `numpy.ndarray`: 包含来自设备数组数据的 NumPy 数组。

**示例**
```python
>>> import asnumpy as ap
>>> x_npu = ap.zeros(3)
>>> x_cpu = x_npu.to_numpy()
>>> type(x_cpu)
<class 'numpy.ndarray'>