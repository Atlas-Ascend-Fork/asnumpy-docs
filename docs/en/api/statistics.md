# Statistics Functions

## Averages and Variances

### asnumpy.mean

```python
asnumpy.mean(a: ArrayLike, axis: Optional[int] = None, keepdims: bool = False, dtype: DTypeLike = None) -> ndarray | float
```

Calculate the average value of array elements.

This function determines the central tendency of values within an array. When no axis is specified, all elements contribute to a single scalar result. Specifying an axis restricts the calculation to that particular dimension.

**Arguments**
- `a` (ArrayLike): Input data for averaging.
- `axis` (int or None, optional): The single dimension over which to perform averaging. Omitting this argument averages all elements. The current native axis overload accepts one integer, including a negative axis; tuples and lists of axes are not supported. For a Host multi-axis reduction, explicitly transfer the input with `.to_numpy()` and use `numpy.mean`.
- `keepdims` (bool, optional): When an axis is specified, preserves the reduced dimension with length one in the output shape. Defaults to False. In the current implementation, axis=None returns a scalar regardless of keepdims.
- `dtype` (DTypeLike, optional): Numerical precision for the calculation. When omitted, the current implementation uses the input dtype, including for integer inputs. It does not automatically promote integers to float64. Use floating-point input or specify a floating-point dtype (for example, np.float32) when a fractional mean is required.

**Returns**
- `ndarray` or NumPy scalar: Returns a NumPy scalar (e.g. `np.float32`) when no axis is specified; returns an `ndarray` when an axis is given.

::: tip
Current tests cover `axis` (including negative axes), `keepdims`, the `dtype` parameter, empty-array inputs, NaN propagation, and invalid-axis exceptions.
:::

**See Also**
- [`numpy.mean`](https://numpy.org/doc/stable/reference/generated/numpy.mean.html): NumPy equivalent for mean calculation.

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> data = ap.ndarray.from_numpy(np.array([[5, 8], [2, 9]], dtype=np.float32))
>>> ap.mean(data)
np.float32(6.0)
>>> ap.mean(data, axis=0).to_numpy()
array([3.5, 8.5], dtype=float32)
>>> ap.mean(data, axis=1).to_numpy()
array([6.5, 5.5], dtype=float32)
>>> ap.mean(data, axis=0, keepdims=True).to_numpy()
array([[3.5, 8.5]], dtype=float32)
```
