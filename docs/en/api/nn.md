# Neural Network Functions

::: info
This API section currently keeps a curated subset of representative APIs. Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes. This document is for reference only.
:::

## Activation Functions

### asnumpy.softmax

```python
asnumpy.softmax(x: ArrayLike, axis: int = -1, dtype: DTypeLike = None) -> ndarray
```

Compute the softmax function.

The softmax function transforms each element of a collection by computing the exponential of each element divided by the sum of the exponentials of all the elements in the collection. This results in a probability distribution.

Current test coverage indicates verified support for `float32` and `float64`. Empty arrays are marked as `xfail` in tests (NPU operator does not support empty arrays) and are not a stable supported scenario.

**Arguments**
- `x` (ArrayLike): Input array.
- `axis` (int, optional): Axis along which softmax is computed. The default is -1 (last axis).
- `dtype` (DTypeLike, optional): Desired data-type for the output array.

**Returns**
- `asnumpy.ndarray`: The softmax output array with the same shape as `x`.

**See Also**
- [`scipy.special.softmax`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.softmax.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> x = ap.ndarray.from_numpy(np.array([1.0, 2.0, 3.0], dtype=np.float32))
>>> ap.softmax(x)
array([0.09003057, 0.24472847, 0.66524096])
>>> ap.sum(ap.softmax(x))
1.0
```
