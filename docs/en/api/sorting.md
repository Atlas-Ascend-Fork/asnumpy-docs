# Sorting Functions

::: info
This API section currently keeps a curated subset of representative APIs. Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes. This document is for reference only.
:::

This module provides sorting and ordering functions for array elements.

## asnumpy.sort

```python
asnumpy.sort(a: ArrayLike, axis: int = -1, stable: bool = False) -> ndarray
```

Arrange array elements in ascending order.

This function produces a new array with elements arranged from smallest to largest along the specified axis. If no axis is given, the last axis is used by default. The `stable` flag ensures that the relative order of equal elements is preserved when set to True.

Current test coverage indicates verified support for `int8`, `int16`, `int32`, `int64`, `uint8`, and `float32`. The `bool` dtype is marked as `xfail` in tests (CANN sort operator does not support bool) and is not a stable supported scenario. Inputs containing `NaN` and empty arrays are also `xfail`.

**Arguments**
- `a` (ArrayLike): The input array whose elements will be rearranged.
- `axis` (int, optional): Dimension for sorting operations. Defaults to the final dimension (-1). The current native binding requires an integer axis; `axis=None` does not flatten the input and is not supported.
- `stable` (bool, optional): Whether to perform a stable sort that preserves the order of equal elements. Default is False.

**Returns**
- `ndarray`: A new array with elements sorted along the specified axis. Shape matches the input.

**See Also**
- [`numpy.sort`](https://numpy.org/doc/stable/reference/generated/numpy.sort.html): NumPy equivalent for sorting arrays.

::: warning
AsNumPy does not currently implement `kind` or `order` parameters from NumPy. Use the `stable` boolean to control sorting stability.
:::

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> arr = ap.ndarray.from_numpy(np.array([[3, 1], [2, 4]], dtype=np.int32))
>>> ap.sort(arr)
array([[1, 3],
       [2, 4]])
>>> ap.sort(arr, axis=0)
array([[2, 1],
       [3, 4]])
>>> ap.sort(arr, stable=True)
array([[1, 3],
       [2, 4]])
```

::: warning
Unlike `numpy.sort`, the current AsNumPy wrapper forwards `axis` to an integer-only native binding. To sort all elements, explicitly flatten the host array, upload it, and use the default axis:

```python
>>> flat = ap.ndarray.from_numpy(arr.to_numpy().reshape(-1))
>>> ap.sort(flat).to_numpy()
array([1, 2, 3, 4], dtype=int32)
```

This workaround copies data to the host and back to the device.
:::
