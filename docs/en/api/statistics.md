# Statistics Functions

::: info
This API section currently keeps a curated subset of representative APIs. Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes. This document is for reference only.
:::

## Averages and Variances

### asnumpy.mean

```python
asnumpy.mean(a: ArrayLike, axis: AxisLike = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

Calculate the average value of array elements.

This function determines the central tendency of values within an array. When no axis is specified, all elements contribute to a single scalar result. Specifying an axis restricts the calculation to that particular dimension.

**Arguments**
- `a` (ArrayLike): Input data for averaging.
- `axis` (AxisLike, int or tuple of ints, optional): Dimension(s) over which to perform averaging. Omitting this argument averages all elements.
- `keepdims` (bool, optional): When enabled, preserves reduced dimensions with length one in the output shape. Defaults to False.
- `dtype` (DTypeLike, optional): Numerical precision for the calculation. Integer inputs use float64 by default; float inputs retain their original precision.

**Returns**
- `ndarray` or `float`: The computed average value(s).

**See Also**
- [`numpy.mean`](https://numpy.org/doc/stable/reference/generated/numpy.mean.html): NumPy equivalent for mean calculation.

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> data = ap.ndarray.from_numpy(np.array([[5, 8], [2, 9]], dtype=np.int32))
>>> ap.mean(data)
6.0
>>> ap.mean(data, axis=0)
array([3.5, 8.5])
>>> ap.mean(data, axis=1)
array([6.5, 5.5])
>>> ap.mean(data, keepdims=True)
array([[6.]])
```
