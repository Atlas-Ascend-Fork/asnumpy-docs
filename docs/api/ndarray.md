# The N-Dimensional Array Object

<!-- docsify-toc:start -->
- [Constructor](#constructor)
  - [asnumpy.ndarray](#asnumpyndarray)
  - [asnumpy.ndarray.from_numpy](#asnumpyndarrayfrom_numpy)
- [Properties](#properties)
  - [asnumpy.ndarray.shape](#asnumpyndarrayshape)
  - [asnumpy.ndarray.dtype](#asnumpyndarraydtype)
  - [asnumpy.ndarray.acl_dtype](#asnumpyndarrayacl_dtype)
- [Methods](#methods)
  - [asnumpy.ndarray.to_numpy](#asnumpyndarrayto_numpy)
<!-- docsify-toc:end -->

## Constructor

### asnumpy.ndarray

```python
asnumpy.ndarray(shape: Sequence[int], dtype: np.dtype) -> None
```

Represent a multi-dimensional array on the device.

This class encapsulates a C++ backend array and provides a Python interface
for performing array operations directly on the accelerator (NPU).
Users interact with device-resident arrays through this class, enabling
efficient computations while maintaining a NumPy-like interface.

.. note::

    This class is typically not created directly. Use array creation
    routines such as :func:`asnumpy.zeros`, :func:`asnumpy.ones`, or
    :meth:`asnumpy.ndarray.from_numpy` to construct arrays on the device.

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
>>> x_cpu = np.array([1, 2, 3])
>>> x_npu = ap.ndarray.from_numpy(x_cpu)
>>> type(x_cpu)
<class 'numpy.ndarray'>
>>> type(x_npu)
<class 'asnumpy.ndarray'>
```

## Properties

### asnumpy.ndarray.shape

```python
asnumpy.ndarray.shape -> tuple
```

Tuple of array dimensions.

**Returns**
- `tuple`: The shape of the array.

**See Also**
- [`numpy.ndarray.shape`](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html)

### asnumpy.ndarray.dtype

```python
asnumpy.ndarray.dtype -> np.dtype
```

Data-type of the array's elements.

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
>>> x_npu = ap.zeros(3)
>>> x_cpu = x_npu.to_numpy()
>>> type(x_cpu)
<class 'numpy.ndarray'>

```