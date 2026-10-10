# Logic Functions

::: info
This API section currently keeps a curated subset of representative APIs. Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes. This document is for reference only.
:::

## Truth Value Testing

### asnumpy.all

```python
asnumpy.all(x: ArrayLike, axis: AxisLike = None, keepdims: bool = False) -> ndarray
```

Check whether all elements evaluate to True.

**Arguments**
- `x` (ArrayLike): The input array to be checked.
- `axis` (AxisLike, optional): The axis or axes along which to perform the logical AND reduction.
- `keepdims` (bool, optional): If True, reduced axes are retained in the result.

**Returns**
- `ndarray`: A boolean array or scalar indicating whether all elements evaluate to True.

**See Also**
- [`numpy.all`](https://numpy.org/doc/stable/reference/generated/numpy.all.html)
- [`asnumpy.any`](#asnumpy-any)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> a = ap.ndarray.from_numpy(np.array([True, True, True]))
>>> ap.all(a)
>>> b = ap.ndarray.from_numpy(np.array([True, False, True]))
>>> ap.all(b)
```

### asnumpy.any

```python
asnumpy.any(x: ArrayLike, axis: AxisLike = None, keepdims: bool = False) -> ndarray
```

Check whether any element evaluates to True.

**Arguments**
- `x` (ArrayLike): The input array to be checked.
- `axis` (AxisLike, optional): The axis or axes along which to perform the logical OR reduction.
- `keepdims` (bool, optional): If True, reduced axes are retained in the result.

**Returns**
- `ndarray`: A boolean array or scalar indicating whether any element evaluates to True.

**See Also**
- [`numpy.any`](https://numpy.org/doc/stable/reference/generated/numpy.any.html)
- [`asnumpy.all`](#asnumpy-all)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> a = ap.ndarray.from_numpy(np.array([False, False, True]))
>>> ap.any(a)
>>> b = ap.ndarray.from_numpy(np.array([False, False, False]))
>>> ap.any(b)
```

## Logical Operations

### asnumpy.logical_and

```python
asnumpy.logical_and(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Apply boolean AND logic across corresponding elements of two arrays.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.

**Returns**
- `ndarray`: A boolean array containing the result of the logical AND.

**See Also**
- [`numpy.logical_and`](https://numpy.org/doc/stable/reference/generated/numpy.logical_and.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.logical_and(True, False)
array(False)
>>> ap.logical_and([True, False], [True, True])
array([ True, False])
```

### asnumpy.logical_or

```python
asnumpy.logical_or(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Apply boolean OR logic across corresponding elements of two arrays.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.

**Returns**
- `ndarray`: A boolean array containing the result of the logical OR.

**See Also**
- [`numpy.logical_or`](https://numpy.org/doc/stable/reference/generated/numpy.logical_or.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.logical_or(True, False)
array(True)
```

### asnumpy.logical_not

```python
asnumpy.logical_not(x: ArrayLike) -> ndarray
```

Invert the boolean value of each array element.

**Arguments**
- `x` (ArrayLike): The input array.

**Returns**
- `ndarray`: A boolean array containing the result of the logical NOT.

**See Also**
- [`numpy.logical_not`](https://numpy.org/doc/stable/reference/generated/numpy.logical_not.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.logical_not(True)
array(False)
>>> ap.logical_not([True, False])
array([False,  True])
```

### asnumpy.logical_xor

```python
asnumpy.logical_xor(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Apply exclusive OR logic across corresponding elements of two arrays.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.

**Returns**
- `ndarray`: A boolean array containing the result of the logical XOR.

**See Also**
- [`numpy.logical_xor`](https://numpy.org/doc/stable/reference/generated/numpy.logical_xor.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.logical_xor(True, False)
array(True)
```

## Comparison

### asnumpy.greater

```python
asnumpy.greater(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Determine whether elements of x1 are greater than those of x2.

**Arguments**
- `x1` (ArrayLike): First input.
- `x2` (ArrayLike): Second input.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: An array containing the result of the element-wise comparison.

**See Also**
- [`numpy.greater`](https://numpy.org/doc/stable/reference/generated/numpy.greater.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.greater([4, 2], [2, 2])
array([ True, False])
```

### asnumpy.greater_equal

```python
asnumpy.greater_equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Determine whether elements of x1 are greater than or equal to those of x2.

**Arguments**
- `x1` (ArrayLike): First input.
- `x2` (ArrayLike): Second input.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: An array containing the result of the element-wise comparison.

**See Also**
- [`numpy.greater_equal`](https://numpy.org/doc/stable/reference/generated/numpy.greater_equal.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.greater_equal(ap.ndarray.from_numpy(np.array([4, 2, 1], dtype=np.int32)), ap.ndarray.from_numpy(np.array([2, 2, 2], dtype=np.int32)))
array([ True,  True, False])
```

### asnumpy.less

```python
asnumpy.less(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Determine whether elements of x1 are less than those of x2.

**Arguments**
- `x1` (ArrayLike): First input.
- `x2` (ArrayLike): Second input.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: An array containing the result of the element-wise comparison.

**See Also**
- [`numpy.less`](https://numpy.org/doc/stable/reference/generated/numpy.less.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.less([1, 2, 3], [2, 2, 2])
array([ True, False, False])
```

### asnumpy.less_equal

```python
asnumpy.less_equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Determine whether elements of x1 are less than or equal to those of x2.

**Arguments**
- `x1` (ArrayLike): First input.
- `x2` (ArrayLike): Second input.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: An array containing the result of the element-wise comparison.

**See Also**
- [`numpy.less_equal`](https://numpy.org/doc/stable/reference/generated/numpy.less_equal.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.less_equal(ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.int32)), ap.ndarray.from_numpy(np.array([2, 2, 2], dtype=np.int32)))
array([ True,  True, False])
```

### asnumpy.equal

```python
asnumpy.equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Compare two arrays for equality element by element.

**Arguments**
- `x1` (ArrayLike): First input.
- `x2` (ArrayLike): Second input.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: An array containing the result of the element-wise comparison.

**See Also**
- [`numpy.equal`](https://numpy.org/doc/stable/reference/generated/numpy.equal.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.equal([1, 2, 3], [1, 4, 3])
array([ True, False,  True])
```

### asnumpy.not_equal

```python
asnumpy.not_equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Compare two arrays for inequality element by element.

**Arguments**
- `x1` (ArrayLike): First input.
- `x2` (ArrayLike): Second input.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: An array containing the result of the element-wise comparison.

**See Also**
- [`numpy.not_equal`](https://numpy.org/doc/stable/reference/generated/numpy.not_equal.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.not_equal([1, 2, 3], [1, 4, 3])
array([False,  True, False])
```

## Other

### asnumpy.isfinite

```python
asnumpy.isfinite(x: ArrayLike) -> ndarray
```

Identify which array elements are regular numbers (not infinity or NaN).

**Arguments**
- `x` (ArrayLike): The input array to be tested.

**Returns**
- `ndarray`: A boolean array with the same shape as `x`.

**See Also**
- [`numpy.isfinite`](https://numpy.org/doc/stable/reference/generated/numpy.isfinite.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isfinite([1, np.inf, np.nan])
array([ True, False, False])
```

### asnumpy.isinf

```python
asnumpy.isinf(x: ArrayLike) -> ndarray
```

Detect infinite values (both positive and negative) in the input array.

**Arguments**
- `x` (ArrayLike): The input array to be tested.

**Returns**
- `ndarray`: A boolean array indicating infinite values.

**See Also**
- [`numpy.isinf`](https://numpy.org/doc/stable/reference/generated/numpy.isinf.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isinf(ap.ndarray.from_numpy(np.array([1, np.inf, -np.inf], dtype=np.float32)))
array([False,  True,  True])
```

### asnumpy.isneginf

```python
asnumpy.isneginf(x: ArrayLike) -> ndarray
```

Identify occurrences of negative infinity within the array.

**Arguments**
- `x` (ArrayLike): The input array to be tested.

**Returns**
- `ndarray`: A boolean array indicating negative infinity values.

**See Also**
- [`numpy.isneginf`](https://numpy.org/doc/stable/reference/generated/numpy.isneginf.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isneginf(ap.ndarray.from_numpy(np.array([1, -np.inf, np.inf], dtype=np.float32)))
array([False,  True, False])
```

### asnumpy.isposinf

```python
asnumpy.isposinf(x: ArrayLike) -> ndarray
```

Identify occurrences of positive infinity within the array.

**Arguments**
- `x` (ArrayLike): The input array to be tested.

**Returns**
- `ndarray`: A boolean array indicating positive infinity values.

**See Also**
- [`numpy.isposinf`](https://numpy.org/doc/stable/reference/generated/numpy.isposinf.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isposinf(ap.ndarray.from_numpy(np.array([1, np.inf, -np.inf], dtype=np.float32)))
array([False,  True, False])
```