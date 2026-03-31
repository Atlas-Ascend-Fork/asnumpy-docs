# Neural Network Functions

## Activation Functions

### asnumpy.softmax

```python
asnumpy.softmax(x: ArrayLike, axis: int = -1, dtype: DTypeLike = None) -> ndarray
```

Compute the softmax function.

The softmax function transforms each element of a collection by computing the exponential of each element divided by the sum of the exponentials of all the elements in the collection. This results in a probability distribution.

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
>>> x = ap.array([1.0, 2.0, 3.0])
>>> ap.softmax(x)
array([0.09003057, 0.24472847, 0.66524096])
>>> ap.softmax(x).sum()
1.0
```
