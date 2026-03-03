# Logic Functions

<!-- docsify-toc:start -->
- [Truth Value Testing](#truth-value-testing)
  - [asnumpy.all](#asnumpyall)
  - [asnumpy.any](#asnumpyany)
- [Logical Operations](#logical-operations)
  - [asnumpy.logical_and](#asnumpylogical_and)
  - [asnumpy.logical_or](#asnumpylogical_or)
  - [asnumpy.logical_not](#asnumpylogical_not)
  - [asnumpy.logical_xor](#asnumpylogical_xor)
- [Comparison](#comparison)
  - [asnumpy.greater](#asnumpygreater)
  - [asnumpy.greater_equal](#asnumpygreater_equal)
  - [asnumpy.less](#asnumpyless)
  - [asnumpy.less_equal](#asnumpyless_equal)
  - [asnumpy.equal](#asnumpyequal)
  - [asnumpy.not_equal](#asnumpynot_equal)
- [Other](#other)
  - [asnumpy.isfinite](#asnumpyisfinite)
  - [asnumpy.isinf](#asnumpyisinf)
  - [asnumpy.isneginf](#asnumpyisneginf)
  - [asnumpy.isposinf](#asnumpyisposinf)
<!-- docsify-toc:end -->

## Truth Value Testing

### asnumpy.all

```python
asnumpy.all(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

Test if all elements evaluate to True.

Checks whether all elements in the input array `x` evaluate to True.
This check can be performed over the entire array or along a specified axis.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be checked.
- `axis` (int or sequence of ints, optional): The axis or axes along which to perform the logical AND reduction. If None, reduction is performed over all dimensions. Negative values count from the last axis.
- `keepdims` (bool, optional): If True, reduced axes are retained in the result as dimensions with size one. This allows the result to broadcast correctly against the input array.

**Returns**
- `asnumpy.ndarray`: A boolean array or scalar indicating whether all elements evaluate to True. If `axis` is None, a scalar boolean is returned. Otherwise, an array of booleans is returned.

**See Also**
- [`numpy.all`](https://numpy.org/doc/stable/reference/generated/numpy.all.html)
- [`asnumpy.any`](#asnumpyany)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.all(ap.array([True, True, True]))
array(True)
>>> ap.all(ap.array([True, False, True]))
array(False)
>>> mat = ap.array([[True, False], [True, True]])
>>> ap.all(mat, axis=0)
array([ True, False])
```

### asnumpy.any

```python
asnumpy.any(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

Test if any element evaluates to True.

Checks whether any element in the input array `x` evaluates to True.
This check can be performed over the entire array or along a specified axis.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be checked.
- `axis` (int or sequence of ints, optional): The axis or axes along which to perform the logical OR reduction. If None, reduction is performed over all dimensions. Negative values count from the last axis.
- `keepdims` (bool, optional): If True, reduced axes are retained in the result as dimensions with size one. This allows the result to broadcast correctly against the input array.

**Returns**
- `asnumpy.ndarray`: A boolean array or scalar indicating whether any element evaluates to True. If `axis` is None, a scalar boolean is returned. Otherwise, an array of booleans is returned.

**See Also**
- [`numpy.any`](https://numpy.org/doc/stable/reference/generated/numpy.any.html)
- [`asnumpy.all`](#asnumpyall)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.any(ap.array([False, False, True]))
array(True)
>>> ap.any(ap.array([False, False, False]))
array(False)
>>> mat = ap.array([[True, False], [False, False]])
>>> ap.any(mat, axis=1)
array([ True, False])
```

## Logical Operations

### asnumpy.logical_and

```python
asnumpy.logical_and(x1: ndarray, x2: ndarray) -> ndarray
```

Compute the logical AND of two arrays element-wise.

Performs the logical AND operation on the elements of `x1` and `x2`.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array.
- `x2` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical AND operation. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.logical_and`](https://numpy.org/doc/stable/reference/generated/numpy.logical_and.html)
- [`asnumpy.logical_or`](#asnumpylogical_or)
- [`asnumpy.logical_not`](#asnumpylogical_not)
- [`asnumpy.logical_xor`](#asnumpylogical_xor)

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
asnumpy.logical_or(x1: ndarray, x2: ndarray) -> ndarray
```

Compute the logical OR of two arrays element-wise.

Performs the logical OR operation on the elements of `x1` and `x2`.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array.
- `x2` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical OR operation. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.logical_or`](https://numpy.org/doc/stable/reference/generated/numpy.logical_or.html)
- [`asnumpy.logical_and`](#asnumpylogical_and)
- [`asnumpy.logical_not`](#asnumpylogical_not)
- [`asnumpy.logical_xor`](#asnumpylogical_xor)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.logical_or(True, False)
array(True)
>>> ap.logical_or([True, False], [False, False])
array([ True, False])
```

### asnumpy.logical_not

```python
asnumpy.logical_not(x: ndarray) -> ndarray
```

Compute the logical NOT of an array element-wise.

Performs the logical NOT operation on the elements of `x`.

**Arguments**
- `x` (asnumpy.ndarray): The input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical NOT operation. The shape is the same as `x`.

**See Also**
- [`numpy.logical_not`](https://numpy.org/doc/stable/reference/generated/numpy.logical_not.html)
- [`asnumpy.logical_and`](#asnumpylogical_and)
- [`asnumpy.logical_or`](#asnumpylogical_or)
- [`asnumpy.logical_xor`](#asnumpylogical_xor)

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
asnumpy.logical_xor(x1: ndarray, x2: ndarray) -> ndarray
```

Compute logical XOR of two arrays element-wise.

Performs the logical XOR (exclusive OR) operation on the elements of `x1` and `x2`.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array.
- `x2` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical XOR operation. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.logical_xor`](https://numpy.org/doc/stable/reference/generated/numpy.logical_xor.html)
- [`asnumpy.logical_and`](#asnumpylogical_and)
- [`asnumpy.logical_or`](#asnumpylogical_or)
- [`asnumpy.logical_not`](#asnumpylogical_not)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.logical_xor(True, False)
array(True)
>>> ap.logical_xor([True, True, False, False], [True, False, True, False])
array([False,  True,  True, False])
```

## Comparison

### asnumpy.greater

```python
asnumpy.greater(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 > x2) element-wise.

Compares two arrays element-wise and returns True where `x1` is greater than `x2`, and False otherwise.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (array_like): First input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x2.
- `x2` (array_like): Second input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x1.
- `dtype` (data-type, optional): The desired data type for the output array. If not specified, output is a boolean array.

**Returns**
- `asnumpy.ndarray`: An array containing the result of the element-wise comparison. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.greater`](https://numpy.org/doc/stable/reference/generated/numpy.greater.html)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.greater([4, 2], [2, 2])
array([ True, False])
>>> ap.greater([1, 2], [3, 1])
array([False,  True])
```

### asnumpy.greater_equal

```python
asnumpy.greater_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 >= x2) element-wise.

Compares two arrays element-wise and returns True where `x1` is greater than or equal to `x2`, and False otherwise.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (array_like): First input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x2.
- `x2` (array_like): Second input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x1.
- `dtype` (data-type, optional): The desired data type for the output array. If not specified, output is a boolean array.

**Returns**
- `asnumpy.ndarray`: An array containing the result of the element-wise comparison. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.greater_equal`](https://numpy.org/doc/stable/reference/generated/numpy.greater_equal.html)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.greater_equal([4, 2, 1], [2, 2, 2])
array([ True,  True, False])
```

### asnumpy.less

```python
asnumpy.less(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 < x2) element-wise.

Compares two arrays element-wise and returns True where `x1` is less than `x2`, and False otherwise.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (array_like): First input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x2.
- `x2` (array_like): Second input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x1.
- `dtype` (data-type, optional): The desired data type for the output array. If not specified, output is a boolean array.

**Returns**
- `asnumpy.ndarray`: An array containing the result of the element-wise comparison. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.less`](https://numpy.org/doc/stable/reference/generated/numpy.less.html)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less_equal`](#asnumpyless_equal)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.less([1, 2], [2, 2])
array([ True, False])
```

### asnumpy.less_equal

```python
asnumpy.less_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 <= x2) element-wise.

Compares two arrays element-wise and returns True where `x1` is less than or equal to `x2`, and False otherwise.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (array_like): First input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x2.
- `x2` (array_like): Second input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x1.
- `dtype` (data-type, optional): The desired data type for the output array. If not specified, output is a boolean array.

**Returns**
- `asnumpy.ndarray`: An array containing the result of the element-wise comparison. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.less_equal`](https://numpy.org/doc/stable/reference/generated/numpy.less_equal.html)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.less_equal([4, 2, 1], [2, 2, 2])
array([False,  True, True])
```

### asnumpy.equal

```python
asnumpy.equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return (x1 == x2) element-wise.

Compares two arrays element-wise and returns True where `x1` is equal to `x2`, and False otherwise.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (array_like): First input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x2.
- `x2` (array_like): Second input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x1.
- `dtype` (data-type, optional): The desired data type for the output array. If not specified, output is a boolean array.

**Returns**
- `asnumpy.ndarray`: An array containing the result of the element-wise comparison. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.equal`](https://numpy.org/doc/stable/reference/generated/numpy.equal.html)
- [`asnumpy.not_equal`](#asnumpynot_equal)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.equal([1, 2], [1, 3])
array([ True, False])
```

### asnumpy.not_equal

```python
asnumpy.not_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return (x1 != x2) element-wise.

Compares two arrays element-wise and returns True where `x1` is not equal to `x2`, and False otherwise.
The input arrays must be broadcastable to a common shape.

**Arguments**
- `x1` (array_like): First input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x2.
- `x2` (array_like): Second input. Can be an asnumpy.ndarray, Python scalar, or any object broadcastable to the shape of x1.
- `dtype` (data-type, optional): The desired data type for the output array. If not specified, output is a boolean array.

**Returns**
- `asnumpy.ndarray`: An array containing the result of the element-wise comparison. The shape is determined by broadcasting `x1` and `x2`.

**See Also**
- [`numpy.not_equal`](https://numpy.org/doc/stable/reference/generated/numpy.not_equal.html)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.not_equal([1, 2], [1, 3])
array([False,  True])
```

## Other

### asnumpy.isfinite

```python
asnumpy.isfinite(x: ndarray) -> ndarray
```

Test for finiteness element-wise.

Determines whether each element of the input array `x` is finite.
An element is considered finite if it is not positive infinity, negative infinity, or NaN (Not a Number).

**Arguments**
- `x` (asnumpy.ndarray): The input array to be tested.

**Returns**
- `asnumpy.ndarray`: A boolean array with the same shape as `x`. True where the element is finite, False otherwise.

**See Also**
- [`numpy.isfinite`](https://numpy.org/doc/stable/reference/generated/numpy.isfinite.html)
- [`asnumpy.isinf`](#asnumpyisinf)
- [`asnumpy.isneginf`](#asnumpyisneginf)
- [`asnumpy.isposinf`](#asnumpyisposinf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isfinite(ap.array([1, np.inf, -np.inf, np.nan]))
array([ True, False, False])
```

### asnumpy.isinf

```python
asnumpy.isinf(x: ndarray) -> ndarray
```

Test for infinity element-wise.

Determines whether each element of the input array `x` is positive or negative infinity.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be tested.

**Returns**
- `asnumpy.ndarray`: A boolean array with the same shape as `x`. True where the element is positive or negative infinity, False otherwise.

**See Also**
- [`numpy.isinf`](https://numpy.org/doc/stable/reference/generated/numpy.isinf.html)
- [`asnumpy.isneginf`](#asnumpyisneginf)
- [`asnumpy.isposinf`](#asnumpyisposinf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)
- [`asnumpy.isfinite`](#asnumpyisfinite)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isinf(ap.array([1, np.inf, -np.inf, np.nan]))
array([False, True, True, False])
```

### asnumpy.isneginf

```python
asnumpy.isneginf(x: ndarray) -> ndarray
```

Test for negative infinity element-wise.

Determines whether each element of the input array `x` is negative infinity.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be tested.

**Returns**
- `asnumpy.ndarray`: A boolean array with the same shape as `x`. True where the element is negative infinity, False otherwise.

**See Also**
- [`numpy.isneginf`](https://numpy.org/doc/stable/reference/generated/numpy.isneginf.html)
- [`asnumpy.isinf`](#asnumpyisinf)
- [`asnumpy.isposinf`](#asnumpyisposinf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)
- [`asnumpy.isfinite`](#asnumpyisfinite)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isneginf(ap.array([1, np.inf, -np.inf, np.nan]))
array([False, False, True, False])
```

### asnumpy.isposinf

```python
asnumpy.isposinf(x: ndarray) -> ndarray
```

Test for positive infinity element-wise.

Determines whether each element of the input array `x` is positive infinity.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be tested.

**Returns**
- `asnumpy.ndarray`: A boolean array with the same shape as `x`. True where the element is positive infinity, False otherwise.

**See Also**
- [`numpy.isposinf`](https://numpy.org/doc/stable/reference/generated/numpy.isposinf.html)
- [`asnumpy.isinf`](#asnumpyisinf)
- [`asnumpy.isneginf`](#asnumpyisneginf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)
- [`asnumpy.isfinite`](#asnumpyisfinite)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isposinf(ap.array([1, np.inf, -np.inf, np.nan]))
array([False, True, False, False])