# Logic Functions

Host values and NumPy arrays are not transferred to the NPU automatically.
Convert array operands with `ap.ndarray.from_numpy()` first.

## Truth Value Testing

### asnumpy.all

```python
asnumpy.all(x: ArrayLike, axis: AxisLike = None, keepdims: bool = False) -> ndarray
```

Check whether all elements evaluate to True.

**Arguments**
- `x` (ArrayLike): The input array to be checked.
- `axis` (AxisLike, optional): The axis or axes along which to perform the logical AND reduction.
- `keepdims` (bool, optional): Retains reduced axes when `axis` is explicitly provided. In the current implementation, `axis=None` uses the global reduction overload, which ignores `keepdims` and returns a 0-D ndarray.

**Returns**
- `ndarray`: A boolean array indicating whether all elements evaluate to True; the global reduction (`axis=None`) returns a 0-D array.

**See Also**
- [`numpy.all`](https://numpy.org/doc/stable/reference/generated/numpy.all.html)
- [`asnumpy.any`](#asnumpy-any)

To retain every axis during a full reduction, pass the explicit non-negative axis sequence, for example `ap.all(a, axis=list(range(a.ndim)), keepdims=True)`. This selects the axis reduction overload; `ap.all(a, keepdims=True)` does not retain the axes in the current version.

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> a = ap.ndarray.from_numpy(np.array([True, True, True]))
>>> ap.all(a).to_numpy()
array(True)
>>> b = ap.ndarray.from_numpy(np.array([True, False, True]))
>>> ap.all(b).to_numpy()
array(False)
```

### asnumpy.any

```python
asnumpy.any(x: ArrayLike, axis: AxisLike = None, keepdims: bool = False) -> ndarray
```

Check whether any element evaluates to True.

**Arguments**
- `x` (ArrayLike): The input array to be checked.
- `axis` (AxisLike, optional): The axis or axes along which to perform the logical OR reduction.
- `keepdims` (bool, optional): Retains reduced axes when `axis` is explicitly provided. In the current implementation, `axis=None` uses the global reduction overload, which ignores `keepdims` and returns a 0-D ndarray.

**Returns**
- `ndarray`: A boolean array indicating whether any element evaluates to True; the global reduction (`axis=None`) returns a 0-D array.

**See Also**
- [`numpy.any`](https://numpy.org/doc/stable/reference/generated/numpy.any.html)
- [`asnumpy.all`](#asnumpy-all)

To retain every axis during a full reduction, pass the explicit non-negative axis sequence, for example `ap.any(a, axis=list(range(a.ndim)), keepdims=True)`. This selects the axis reduction overload; `ap.any(a, keepdims=True)` does not retain the axes in the current version.

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> a = ap.ndarray.from_numpy(np.array([False, False, True]))
>>> ap.any(a).to_numpy()
array(True)
>>> b = ap.ndarray.from_numpy(np.array([False, False, False]))
>>> ap.any(b).to_numpy()
array(False)
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x1 = ap.ndarray.from_numpy(np.array(True, dtype=np.bool_))
>>> x2 = ap.ndarray.from_numpy(np.array(False, dtype=np.bool_))
>>> ap.logical_and(x1, x2).to_numpy()
array(False)
>>> x1 = ap.ndarray.from_numpy(np.array([True, False], dtype=np.bool_))
>>> x2 = ap.ndarray.from_numpy(np.array([True, True], dtype=np.bool_))
>>> ap.logical_and(x1, x2).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x1 = ap.ndarray.from_numpy(np.array(True, dtype=np.bool_))
>>> x2 = ap.ndarray.from_numpy(np.array(False, dtype=np.bool_))
>>> ap.logical_or(x1, x2).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array(True, dtype=np.bool_))
>>> ap.logical_not(x).to_numpy()
array(False)
>>> x = ap.ndarray.from_numpy(np.array([True, False], dtype=np.bool_))
>>> ap.logical_not(x).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x1 = ap.ndarray.from_numpy(np.array(True, dtype=np.bool_))
>>> x2 = ap.ndarray.from_numpy(np.array(False, dtype=np.bool_))
>>> ap.logical_xor(x1, x2).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x1 = ap.ndarray.from_numpy(np.array([4, 2], dtype=np.int32))
>>> x2 = ap.ndarray.from_numpy(np.array([2, 2], dtype=np.int32))
>>> ap.greater(x1, x2).to_numpy()
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
>>> ap.greater_equal(ap.ndarray.from_numpy(np.array([4, 2, 1], dtype=np.int32)), ap.ndarray.from_numpy(np.array([2, 2, 2], dtype=np.int32))).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x1 = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.int32))
>>> x2 = ap.ndarray.from_numpy(np.array([2, 2, 2], dtype=np.int32))
>>> ap.less(x1, x2).to_numpy()
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
>>> ap.less_equal(ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.int32)), ap.ndarray.from_numpy(np.array([2, 2, 2], dtype=np.int32))).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x1 = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.int32))
>>> x2 = ap.ndarray.from_numpy(np.array([1, 4, 3], dtype=np.int32))
>>> ap.equal(x1, x2).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x1 = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.int32))
>>> x2 = ap.ndarray.from_numpy(np.array([1, 4, 3], dtype=np.int32))
>>> ap.not_equal(x1, x2).to_numpy()
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
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array([1, np.inf, np.nan], dtype=np.float32))
>>> ap.isfinite(x).to_numpy()
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
>>> ap.isinf(ap.ndarray.from_numpy(np.array([1, np.inf, -np.inf], dtype=np.float32))).to_numpy()
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
>>> ap.isneginf(ap.ndarray.from_numpy(np.array([1, -np.inf, np.inf], dtype=np.float32))).to_numpy()
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
>>> ap.isposinf(ap.ndarray.from_numpy(np.array([1, np.inf, -np.inf], dtype=np.float32))).to_numpy()
array([False,  True, False])
```