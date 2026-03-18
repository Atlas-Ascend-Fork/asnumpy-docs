# Logic Functions

[[toc]]

## Truth Value Testing

### asnumpy.all

```python
asnumpy.all(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

Test if all elements evaluate to True.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be checked.
- `axis` (int or sequence of ints, optional): The axis or axes along which to perform the logical AND reduction.
- `keepdims` (bool, optional): If True, reduced axes are retained in the result.

**Returns**
- `asnumpy.ndarray`: A boolean array or scalar indicating whether all elements evaluate to True.

**See Also**
- [`numpy.all`](https://numpy.org/doc/stable/reference/generated/numpy.all.html)
- [`asnumpy.any`](#asnumpy-any)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.all(ap.array([True, True, True]))
array(True)
>>> ap.all(ap.array([True, False, True]))
array(False)
```

### asnumpy.any

```python
asnumpy.any(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

Test if any element evaluates to True.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be checked.
- `axis` (int or sequence of ints, optional): The axis or axes along which to perform the logical OR reduction.
- `keepdims` (bool, optional): If True, reduced axes are retained in the result.

**Returns**
- `asnumpy.ndarray`: A boolean array or scalar indicating whether any element evaluates to True.

**See Also**
- [`numpy.any`](https://numpy.org/doc/stable/reference/generated/numpy.any.html)
- [`asnumpy.all`](#asnumpy-all)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.any(ap.array([False, False, True]))
array(True)
>>> ap.any(ap.array([False, False, False]))
array(False)
```

## Logical Operations

### asnumpy.logical_and

```python
asnumpy.logical_and(x1: ndarray, x2: ndarray) -> ndarray
```

Compute the logical AND of two arrays element-wise.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array.
- `x2` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical AND.

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
asnumpy.logical_or(x1: ndarray, x2: ndarray) -> ndarray
```

Compute the logical OR of two arrays element-wise.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array.
- `x2` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical OR.

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
asnumpy.logical_not(x: ndarray) -> ndarray
```

Compute the logical NOT of an array element-wise.

**Arguments**
- `x` (asnumpy.ndarray): The input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical NOT.

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
asnumpy.logical_xor(x1: ndarray, x2: ndarray) -> ndarray
```

Compute logical XOR of two arrays element-wise.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array.
- `x2` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: A boolean array containing the result of the logical XOR.

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
asnumpy.greater(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 > x2) element-wise.

**Arguments**
- `x1` (array_like): First input.
- `x2` (array_like): Second input.
- `dtype` (data-type, optional): Desired data type for the output array.

**Returns**
- `asnumpy.ndarray`: An array containing the result of the element-wise comparison.

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
asnumpy.greater_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 >= x2) element-wise.

**See Also**
- [`numpy.greater_equal`](https://numpy.org/doc/stable/reference/generated/numpy.greater_equal.html)

### asnumpy.less

```python
asnumpy.less(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 < x2) element-wise.

**See Also**
- [`numpy.less`](https://numpy.org/doc/stable/reference/generated/numpy.less.html)

### asnumpy.less_equal

```python
asnumpy.less_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return the truth value of (x1 <= x2) element-wise.

**See Also**
- [`numpy.less_equal`](https://numpy.org/doc/stable/reference/generated/numpy.less_equal.html)

### asnumpy.equal

```python
asnumpy.equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return (x1 == x2) element-wise.

**See Also**
- [`numpy.equal`](https://numpy.org/doc/stable/reference/generated/numpy.equal.html)

### asnumpy.not_equal

```python
asnumpy.not_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

Return (x1 != x2) element-wise.

**See Also**
- [`numpy.not_equal`](https://numpy.org/doc/stable/reference/generated/numpy.not_equal.html)

## Other

### asnumpy.isfinite

```python
asnumpy.isfinite(x: ndarray) -> ndarray
```

Test for finiteness element-wise.

**Arguments**
- `x` (asnumpy.ndarray): The input array to be tested.

**Returns**
- `asnumpy.ndarray`: A boolean array with the same shape as `x`.

**See Also**
- [`numpy.isfinite`](https://numpy.org/doc/stable/reference/generated/numpy.isfinite.html)

### asnumpy.isinf

```python
asnumpy.isinf(x: ndarray) -> ndarray
```

Test for infinity element-wise.

**See Also**
- [`numpy.isinf`](https://numpy.org/doc/stable/reference/generated/numpy.isinf.html)

### asnumpy.isneginf

```python
asnumpy.isneginf(x: ndarray) -> ndarray
```

Test for negative infinity element-wise.

**See Also**
- [`numpy.isneginf`](https://numpy.org/doc/stable/reference/generated/numpy.isneginf.html)

### asnumpy.isposinf

```python
asnumpy.isposinf(x: ndarray) -> ndarray
```

Test for positive infinity element-wise.

**See Also**
- [`numpy.isposinf`](https://numpy.org/doc/stable/reference/generated/numpy.isposinf.html)
