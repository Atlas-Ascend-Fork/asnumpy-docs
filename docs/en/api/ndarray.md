# The N-Dimensional Array Object

## Constructor

### asnumpy.ndarray

```python
asnumpy.ndarray(shape_or_array: Sequence[int], dtype: np.dtype) -> ndarray
asnumpy.ndarray(shape_or_array: ndarray) -> ndarray
```

Represent a multi-dimensional array on the device.

This class encapsulates a C++ backend array and provides a Python interface
for performing array operations directly on the accelerator (NPU).
Users interact with device-resident arrays through this class, enabling
efficient computations while maintaining a NumPy-like interface.

When constructing from a shape, `dtype` is mandatory (omitting it raises
ValueError); the class can also be constructed as a deep copy of an existing
`asnumpy.ndarray`, producing a new array with the same data while leaving the
source array untouched. The first parameter is `shape_or_array`, and both
arguments are passed positionally: `dtype` is only used when the first argument
is a shape.

::: tip
This class is typically not created directly. Use array creation
routines such as `asnumpy.zeros`, `asnumpy.ones`, or
`asnumpy.ndarray.from_numpy` to construct arrays on the device.
:::

### asnumpy.ndarray.from_numpy

```python
asnumpy.ndarray.from_numpy(host_data: numpy.ndarray) -> "ndarray"
```

Create an asnumpy.ndarray from a numpy.ndarray.

This function copies the data from the host (CPU) to the device (NPU).

**Arguments**
- `host_data` (numpy.ndarray): The input NumPy array.

**Returns**
- `asnumpy.ndarray`: A new array on the device containing the same data as `host_data`.

**Examples**
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

## Properties

### asnumpy.ndarray.shape

```python
asnumpy.ndarray.shape -> tuple
```

Returns the dimensions of the array as a tuple of integers.

**Returns**
- `tuple`: The shape of the array.

**See Also**
- [`numpy.ndarray.shape`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html)

### asnumpy.ndarray.dtype

```python
asnumpy.ndarray.dtype -> np.dtype
```

Returns the data type information for elements stored in the array.

**Returns**
- `numpy.dtype`: The data type of the array elements.

**See Also**
- [`numpy.ndarray.dtype`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.dtype.html)

### asnumpy.ndarray.acl_dtype

```python
asnumpy.ndarray.acl_dtype -> int
```

Internal ACL data type identifier.

**Returns**
- `int`: The ACL data type enum value.

### asnumpy.ndarray.ndim

```python
asnumpy.ndarray.ndim -> int
```

Number of array dimensions (axes).

**Returns**
- `int`: The number of dimensions.

**See Also**
- [`numpy.ndarray.ndim`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.ndim.html)

### asnumpy.ndarray.itemsize

```python
asnumpy.ndarray.itemsize -> int
```

Length of one array element in bytes.

**Returns**
- `int`: The size in bytes of a single element.

**See Also**
- [`numpy.ndarray.itemsize`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.itemsize.html)

### asnumpy.ndarray.nbytes

```python
asnumpy.ndarray.nbytes -> int
```

Total bytes consumed by the array data (the product of `itemsize` and the number of elements).

**Returns**
- `int`: The total number of bytes.

**See Also**
- [`numpy.ndarray.nbytes`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.nbytes.html)

### asnumpy.ndarray.strides

```python
asnumpy.ndarray.strides -> tuple
```

Byte strides required to traverse each dimension of the array.

**Returns**
- `tuple`: The byte stride of each dimension.

**See Also**
- [`numpy.ndarray.strides`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.strides.html)

## Methods

### asnumpy.ndarray.to_numpy

```python
asnumpy.ndarray.to_numpy() -> numpy.ndarray
```

Return a copy of the array data as a numpy.ndarray.

This function copies the data from the device (NPU) to the host (CPU).

**Returns**
- `numpy.ndarray`: A NumPy array containing the data from the device array.

**Examples**
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

Return the array cast to the given dtype; the cast is performed on the device.

**Arguments**
- `dtype`: Target data type; accepts NumPy dtypes and scalar-type spellings (e.g. `numpy.float32`).
- `order` (str, optional): Kept for signature compatibility only. asnumpy arrays are always dense and C-contiguous, so only `"K"` and `"C"` are supported; any other value raises ValueError. Defaults to `"K"`.
- `casting` (str, optional): Casting rule, checked against `numpy.can_cast`. Defaults to `"unsafe"` (matching NumPy).
- `subok` (bool, optional): Kept for signature compatibility only; only the default value True is allowed, and passing False raises ValueError.
- `copy` (bool, optional): Defaults to True, always returning a new array; when False and the target dtype already matches, the original array itself is returned, while a different dtype still yields a new array.

**Returns**
- `ndarray`: The array cast to the target dtype.

**See Also**
- [`numpy.ndarray.astype`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.astype.html)

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.ones(3, dtype=ap.float32)
>>> x.astype(ap.int32).to_numpy()
array([1, 1, 1], dtype=int32)
```
