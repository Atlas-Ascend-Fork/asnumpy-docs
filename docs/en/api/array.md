# Array Manipulation

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

This function returns a new `asnumpy.ndarray` whose shape matches
that of the input object. All elements of the returned array are
initialized to zero. By default, the data type is inferred from the
input unless explicitly overridden.

**Arguments**
- `other` (ArrayLike): Reference object that provides the shape of the output array.
- `dtype` (DTypeLike, optional): Data type of the returned array. If specified, it overrides the data type inferred from `other`.

**Returns**
- `ndarray`: An array filled with zeros and having the same shape as `other`.

**See Also**
- [`asnumpy.zeros`](#asnumpy-zeros)
- [`numpy.zeros_like`](https://numpy.org/doc/stable/reference/generated/numpy.zeros_like.html)

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.arange(4).reshape(2, 2)
>>> ap.zeros_like(x)
array([[0, 0],
       [0, 0]])
```

## asnumpy.full

```python
asnumpy.full(shape: ShapeLike, value: ScalarLike, dtype: DTypeLike = None) -> ndarray
```

Create an array filled with a specific value.

Returns a new asnumpy.ndarray where all elements are set to `value`.
Shape and dtype are controlled by the `shape` and `dtype` parameters.

**Arguments**
- `shape` (ShapeLike, int or sequence of ints): Shape of the output array.
- `value` (ScalarLike): Value to fill the array with.
- `dtype` (DTypeLike, optional): Desired data type of the array.

**Returns**
- `asnumpy.ndarray`: Array filled with the specified value.

**See Also**
- [`numpy.full`](https://numpy.org/doc/stable/reference/generated/numpy.full.html)
- [`asnumpy.full_like`](#asnumpy-full-like): Create an array filled with value matching another array.
- [`asnumpy.zeros`](#asnumpy-zeros): Create an array of zeros.
- [`asnumpy.ones`](#asnumpy-ones): Create an array of ones.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.full((2, 2), 7)
array([[7, 7],
       [7, 7]])
>>> ap.full((2, 3), 3.5)
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
- `dtype` (DTypeLike, optional): Desired data type of the output array.

**Returns**
- `asnumpy.ndarray`: Array filled with `value` matching the shape of `other`.

**See Also**
- [`numpy.full_like`](https://numpy.org/doc/stable/reference/generated/numpy.full_like.html)
- [`asnumpy.full`](#asnumpy-full): Create a full array from shape.

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.arange(4)
>>> ap.full_like(x, 9)
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
       [... , ...]])  # values arbitrary
```

## asnumpy.empty_like

```python
asnumpy.empty_like(prototype: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Allocate an uninitialized array with dimensions copied from the input.

**Arguments**
- `prototype` (ArrayLike): Array whose shape is used for the output.
- `dtype` (DTypeLike, optional): Desired data type of the output array.

**Returns**
- `asnumpy.ndarray`: Array with uninitialized values and same shape as `prototype`.

**See Also**
- [`numpy.empty_like`](https://numpy.org/doc/stable/reference/generated/numpy.empty_like.html)

**Examples**
```python
>>> import asnumpy as ap
>>> a = ap.array([[1, 2], [3, 4]])
>>> ap.empty_like(a)
array([[... , ...],
       [... , ...]])  # values arbitrary
```

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

**See Also**
- [`numpy.eye`](https://numpy.org/doc/stable/reference/generated/numpy.eye.html)
- [`asnumpy.identity`](#asnumpy-identity): Equivalent function to create identity array.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.eye(3)
array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])
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

**See Also**
- [`numpy.ones`](https://numpy.org/doc/stable/reference/generated/numpy.ones.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.ones(4)
array([1., 1., 1., 1.])
```

## asnumpy.ones_like

```python
asnumpy.ones_like(other: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Return a ones-filled array with dimensions matching the input.

**Arguments**
- `other` (ArrayLike): Array whose shape is used for output.
- `dtype` (DTypeLike, optional): Desired data type of the output array.

**Returns**
- `asnumpy.ndarray`: Array of ones with same shape (and optionally dtype) as `other`.

**See Also**
- [`numpy.ones_like`](https://numpy.org/doc/stable/reference/generated/numpy.ones_like.html)

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.arange(6).reshape((2, 3))
>>> ap.ones_like(x)
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

**Examples**
```python
>>> import asnumpy as ap
>>> ap.identity(3)
array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])
```

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
