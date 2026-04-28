# Array Manipulation

::: info
This API section currently keeps a curated subset of representative APIs that have been validated against unit tests. Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes.This document is for reference only.
:::

## asnumpy.zeros

```python
asnumpy.zeros(shape: ShapeLike, dtype: DTypeLike = None) -> ndarray
```

Create an array initialized with zero values.

This function allocates a new `asnumpy.ndarray` with the specified
shape and fills all elements with zeros. The array is created on the
current execution device used by asnumpy.

**Arguments**
- `shape` (ShapeLike, int or sequence of ints): Specifies the dimensions of the output array. A single integer creates a one-dimensional array, while a sequence defines a multi-dimensional shape.
- `dtype` (DTypeLike, optional): Data type of the returned array. If not provided, the default numeric type is used.

**Returns**
- `ndarray`: An array whose elements are all set to zero and whose shape matches the given `shape` argument.

**See Also**
- [`numpy.zeros`](https://numpy.org/doc/stable/reference/generated/numpy.zeros.html): NumPy equivalent for creating an array of zeros.

::: tip
The returned array is allocated by asnumpy and may reside on an accelerator device depending on the runtime configuration.
:::

**Examples**
```python
>>> import asnumpy as ap
>>> ap.zeros(3)
array([0., 0., 0.])
>>> ap.zeros((2, 2), dtype=int)
array([[0, 0],
       [0, 0]])
```

## asnumpy.zeros_like

```python
asnumpy.zeros_like(other: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Return a zero-initialized array with dimensions matching the input.

This function returns a new `asnumpy.ndarray` whose shape matches the input object and whose elements are initialized to zero.

**Arguments**
- `other` (ArrayLike): Reference object that provides the shape of the output array.
- `dtype` (DTypeLike, optional): Data type of the returned array. When not explicitly provided, it is usually inferred from the input; in current AsNumpy test cases, the `*_like` family is typically called with an explicit `dtype` to keep behavior aligned with NumPy.

**Returns**
- `ndarray`: An array filled with zeros and having the same shape as `other`.

**See Also**
- [`asnumpy.zeros`](#asnumpy-zeros)
- [`numpy.zeros_like`](https://numpy.org/doc/stable/reference/generated/numpy.zeros_like.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.int32))
>>> ap.zeros_like(x, dtype=x.dtype)
array([[0, 0],
       [0, 0]])
```

## asnumpy.full

```python
asnumpy.full(shape: ShapeLike, value: ScalarLike, dtype: DTypeLike = None) -> ndarray
```

Create an array filled with a specific value.

Returns a new `asnumpy.ndarray` where all elements are set to `value`. Shape and dtype are controlled by the `shape` and `dtype` parameters.

**Arguments**
- `shape` (ShapeLike, int or sequence of ints): Shape of the output array.
- `value` (ScalarLike): Value to fill the array with.
- `dtype` (DTypeLike, optional): Desired data type of the array.

**Returns**
- `asnumpy.ndarray`: Array filled with the specified value.

::: tip
Current test coverage shows that `full` is validated for common floating-point types, signed integers, `uint8`, and `bool`; `uint16` and complex types are not supported by the current implementation.
:::

**See Also**
- [`numpy.full`](https://numpy.org/doc/stable/reference/generated/numpy.full.html)
- [`asnumpy.full_like`](#asnumpy-full-like): Create an array filled with value matching another array.
- [`asnumpy.zeros`](#asnumpy-zeros): Create an array of zeros.
- [`asnumpy.ones`](#asnumpy-ones): Create an array of ones.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.full((2, 2), 7, dtype=ap.int32)
array([[7, 7],
       [7, 7]])
>>> ap.full((2, 3), 3.5, dtype=ap.float32)
array([[3.5, 3.5, 3.5],
       [3.5, 3.5, 3.5]])
```

## asnumpy.full_like

```python
asnumpy.full_like(other: ArrayLike, value: ScalarLike, dtype: DTypeLike = None) -> ndarray
```

Return a new array populated with a scalar value, inheriting shape from the provided array.

**Arguments**
- `other` (ArrayLike): Array whose shape is used for the output.
- `value` (ScalarLike): Value to fill the array.
- `dtype` (DTypeLike, optional): Desired data type of the output array. In current AsNumpy test cases, `full_like` is typically called with this argument explicitly.

**Returns**
- `asnumpy.ndarray`: Array filled with `value` matching the shape of `other`.

::: tip
Current test coverage shows that `full_like` is validated for common floating-point types, signed integers, `uint8`, and `bool`; `uint16` is not supported by the current implementation.
:::

**See Also**
- [`numpy.full_like`](https://numpy.org/doc/stable/reference/generated/numpy.full_like.html)
- [`asnumpy.full`](#asnumpy-full): Create a full array from shape.

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array([1, 2, 3, 4], dtype=np.int32))
>>> ap.full_like(x, 9, dtype=x.dtype)
array([9, 9, 9, 9])
```

## asnumpy.empty

```python
asnumpy.empty(shape: ShapeLike, dtype: DTypeLike = None) -> ndarray
```

Allocate a new array without initializing element values.

Returns a new asnumpy.ndarray with arbitrary content.
The array shape and dtype are determined by the parameters.

**Arguments**
- `shape` (ShapeLike, int or sequence of ints): Shape of the output array.
- `dtype` (DTypeLike, optional): Desired data type of the array.

**Returns**
- `asnumpy.ndarray`: Array with uninitialized values (may contain random memory data).

**See Also**
- [`numpy.empty`](https://numpy.org/doc/stable/reference/generated/numpy.empty.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.empty((2, 2))
array([[... , ...],
       [... , ...]])
```

::: tip
The output above is illustrative only. Values returned by `empty` are undefined and should not be relied on.
:::

## asnumpy.empty_like

```python
asnumpy.empty_like(prototype: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Allocate an uninitialized array with dimensions copied from the input.

**Arguments**
- `prototype` (ArrayLike): Array whose shape is used for the output.
- `dtype` (DTypeLike, optional): Desired data type of the output array. In current AsNumpy test cases, `empty_like` is typically called with this argument explicitly.

**Returns**
- `asnumpy.ndarray`: Array with uninitialized values and same shape as `prototype`.

**See Also**
- [`numpy.empty_like`](https://numpy.org/doc/stable/reference/generated/numpy.empty_like.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> a = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.int32))
>>> ap.empty_like(a, dtype=a.dtype)
array([[... , ...],
       [... , ...]])
```

::: tip
The output above is illustrative only. Values returned by `empty_like` are undefined and should not be relied on.
:::

## asnumpy.eye

```python
asnumpy.eye(n: int, dtype: DTypeLike = None) -> ndarray
```

Generate a 2-D array with ones on the diagonal and zeros elsewhere.

Produces a square matrix where diagonal elements are set to 1
and all other positions contain 0.

**Arguments**
- `n` (int): Number of rows (and columns) of the matrix.
- `dtype` (DTypeLike, optional): Desired data type of the matrix.

**Returns**
- `asnumpy.ndarray`: Identity matrix of shape (n, n).

::: tip
Current test coverage shows that `eye` is validated for `float32`, common signed integers, `uint8`, and `bool`; `float64` and `uint16` are not supported by the current implementation.
:::

**See Also**
- [`numpy.eye`](https://numpy.org/doc/stable/reference/generated/numpy.eye.html)
- [`asnumpy.identity`](#asnumpy-identity): Equivalent function to create identity array.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.eye(3, dtype=ap.int32)
array([[1, 0, 0],
       [0, 1, 0],
       [0, 0, 1]])
```

## asnumpy.ones

```python
asnumpy.ones(shape: ShapeLike, dtype: DTypeLike = None) -> ndarray
```

Create an array filled with ones.

**Arguments**
- `shape` (ShapeLike, int or sequence of ints): Shape of the output array.
- `dtype` (DTypeLike, optional): Desired data type of the array.

**Returns**
- `asnumpy.ndarray`: Array of ones with specified shape and dtype.

::: tip
Current test coverage shows that `ones` is validated for `float32`, `float64`, common signed integers, `uint8`, and `bool`; `float16`, `uint16/32/64`, and complex types are not supported, and not every NumPy dtype is currently validated.
:::

**See Also**
- [`numpy.ones`](https://numpy.org/doc/stable/reference/generated/numpy.ones.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.ones(4, dtype=ap.float32)
array([1., 1., 1., 1.])
```

## asnumpy.ones_like

```python
asnumpy.ones_like(other: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Return a ones-filled array with dimensions matching the input.

**Arguments**
- `other` (ArrayLike): Array whose shape is used for output.
- `dtype` (DTypeLike, optional): Desired data type of the output array. In current AsNumpy test cases, `ones_like` is typically called with this argument explicitly.

**Returns**
- `asnumpy.ndarray`: Array of ones with same shape (and optionally dtype) as `other`.

::: tip
Current test coverage shows that `ones_like` is validated for `float32`, `float64`, common signed integers, `uint8`, and `bool`; not every NumPy dtype is currently validated.
:::

**See Also**
- [`numpy.ones_like`](https://numpy.org/doc/stable/reference/generated/numpy.ones_like.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array([[0, 1, 2], [3, 4, 5]], dtype=np.int32))
>>> ap.ones_like(x, dtype=x.dtype)
array([[1, 1, 1],
       [1, 1, 1]])
```

## asnumpy.identity

```python
asnumpy.identity(n: int, dtype: DTypeLike = None) -> ndarray
```

Generate the identity matrix of given size.

**Arguments**
- `n` (int): Number of rows and columns.
- `dtype` (DTypeLike, optional): Desired data type of the matrix.

**Returns**
- `asnumpy.ndarray`: Identity matrix of shape (n, n).

::: tip
Current test coverage shows that `identity` is validated for `float32`, common signed integers, `uint8`, and `bool`; `float64` and `uint16` are not supported by the current implementation.
:::

**Examples**
```python
>>> import asnumpy as ap
>>> ap.identity(3, dtype=ap.int32)
array([[1, 0, 0],
       [0, 1, 0],
       [0, 0, 1]])
```

<!--
## asnumpy.linspace

```python
asnumpy.linspace(
    start: ScalarLike,
    end: ScalarLike,
    steps: int = 50,
    dtype: DTypeLike = None,
) -> ndarray
```

Produce a sequence of values linearly interpolated between two endpoints.

**Arguments**
- `start` (ScalarLike, int or float): Starting value of the sequence.
- `end` (ScalarLike, int or float): End value of the sequence.
- `steps` (int, optional): Number of samples to generate. Default is 50.
- `dtype` (DTypeLike, optional): Desired data type of the output array.

**Returns**
- `asnumpy.ndarray`: Array of evenly spaced samples between start and end.

**See Also**
- [`numpy.linspace`](https://numpy.org/doc/stable/reference/generated/numpy.linspace.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.linspace(0, 1, 5)
array([0.  , 0.25, 0.5 , 0.75, 1.  ])
```
-->
