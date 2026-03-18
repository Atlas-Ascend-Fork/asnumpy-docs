# Linear Algebra

[[toc]]

## Matrix and Vector Products

### asnumpy.dot

```python
asnumpy.dot(a: ndarray, b: ndarray) -> ndarray
```

Calculate the dot product of two arrays.

This function computes the dot product based on the dimensionality of the input arrays `a` and `b`.
- For 1-D arrays, it computes the inner product of vectors.
- For 2-D arrays, it performs matrix multiplication.
- For 0-D (scalar) inputs, it performs scalar multiplication.
- For N-D arrays, it generally computes a sum product over the last axis of `a` and the second-to-last axis of `b`.

**Arguments**
- `a` (asnumpy.ndarray): The first input array.
- `b` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: The dot product of `a` and `b`.

**See Also**
- [`numpy.dot`](https://numpy.org/doc/stable/reference/generated/numpy.dot.html)
- [`asnumpy.matmul`](#asnumpy-matmul)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.dot(5, 6)
30
>>> vec1 = ap.array([1, 2])
>>> vec2 = ap.array([3, 4])
>>> ap.dot(vec1, vec2)
11
>>> mat1 = ap.array([[1, 2], [3, 4]])
>>> mat2 = ap.array([[5, 6], [7, 8]])
>>> ap.dot(mat1, mat2)
array([[19, 22],
       [43, 50]])
```

### asnumpy.einsum

```python
asnumpy.einsum(subscripts: str, *operands: ndarray) -> ndarray
```

Evaluate the Einstein summation convention on the operands.

**Arguments**
- `subscripts` (str): A string specifying the subscripts for summation.
- `*operands` (asnumpy.ndarray): The arrays to operate on.

**Returns**
- `asnumpy.ndarray`: The result of the Einstein summation.

**See Also**
- [`numpy.einsum`](https://numpy.org/doc/stable/reference/generated/numpy.einsum.html)

**Examples**
```python
>>> import asnumpy as ap
>>> a = ap.arange(9).reshape(3, 3)
>>> ap.einsum('ii', a)  # Trace
12
>>> ap.einsum('ii->i', a)  # Diagonal
array([0, 4, 8])
```

### asnumpy.inner

```python
asnumpy.inner(a: ndarray, b: ndarray) -> ndarray
```

Compute the inner product of two arrays.

**Arguments**
- `a` (asnumpy.ndarray): The first input array.
- `b` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: The inner product of the arrays.

**See Also**
- [`numpy.inner`](https://numpy.org/doc/stable/reference/generated/numpy.inner.html)

**Examples**
```python
>>> import asnumpy as ap
>>> vec1 = ap.array([2, 3])
>>> vec2 = ap.array([4, 5])
>>> ap.inner(vec1, vec2)
23
```

### asnumpy.matmul

```python
asnumpy.matmul(x1: ndarray, x2: ndarray) -> ndarray
```

Compute the matrix product of two arrays.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array.
- `x2` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: The matrix product of the inputs.

**See Also**
- [`numpy.matmul`](https://numpy.org/doc/stable/reference/generated/numpy.matmul.html)

**Examples**
```python
>>> import asnumpy as ap
>>> mat1 = ap.array([[1, 2], [3, 4]])
>>> mat2 = ap.array([[5, 6], [7, 8]])
>>> ap.matmul(mat1, mat2)
array([[19, 22],
       [43, 50]])
```

### asnumpy.outer

```python
asnumpy.outer(a: ndarray, b: ndarray) -> ndarray
```

Compute the outer product of two vectors.

**Arguments**
- `a` (asnumpy.ndarray): The first input vector.
- `b` (asnumpy.ndarray): The second input vector.

**Returns**
- `asnumpy.ndarray`: The outer product matrix.

**See Also**
- [`numpy.outer`](https://numpy.org/doc/stable/reference/generated/numpy.outer.html)

**Examples**
```python
>>> import asnumpy as ap
>>> vec1 = ap.array([1, 2, 3])
>>> vec2 = ap.array([4, 5])
>>> ap.outer(vec1, vec2)
array([[ 4,  5],
       [ 8, 10],
       [12, 15]])
```

### asnumpy.vdot

```python
asnumpy.vdot(a: ndarray, b: ndarray) -> ndarray
```

Compute the dot product of two vectors, conjugating the first.

**Arguments**
- `a` (asnumpy.ndarray): The first input array.
- `b` (asnumpy.ndarray): The second input array.

**Returns**
- `asnumpy.ndarray`: The dot product of the vectors.

**See Also**
- [`numpy.vdot`](https://numpy.org/doc/stable/reference/generated/numpy.vdot.html)

### asnumpy.linalg.matrix_power

```python
asnumpy.linalg.matrix_power(a: ndarray, n: int) -> ndarray
```

Compute the integer power of a square matrix.

**Arguments**
- `a` (asnumpy.ndarray): Input square matrix.
- `n` (int): Integer exponent applied to the matrix.

**Returns**
- `asnumpy.ndarray`: Resulting matrix after applying the specified power operation.

**See Also**
- [`numpy.linalg.matrix_power`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html)

**Examples**
```python
>>> import asnumpy as ap
>>> m = ap.array([[1, 2], [0, 1]])
>>> ap.linalg.matrix_power(m, 2)
array([[1, 4],
       [0, 1]])
```

## Decompositions

### asnumpy.linalg.qr

```python
asnumpy.linalg.qr(a: ndarray, mode: str = "reduced") -> Union[ndarray, tuple]
```

Perform QR factorization of a matrix.

**Arguments**
- `a` (asnumpy.ndarray): Input matrix to be factored.
- `mode` (str, optional): Factorization mode.

**Returns**
- `asnumpy.ndarray or tuple`: Depending on `mode`, returns `r` alone or a tuple `(q, r)`.

**See Also**
- [`numpy.linalg.qr`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.qr.html)

## Norms and Other Numbers

### asnumpy.linalg.norm

```python
asnumpy.linalg.norm(
    a: ndarray,
    ord: Optional[Union[str, int, float]] = None,
    axis: Optional[Union[int, Sequence[int]]] = None,
    keepdims: bool = False,
) -> ndarray
```

Compute norm of a vector or matrix.

**Arguments**
- `a` (asnumpy.ndarray): Input vector or matrix.
- `ord` (int, float, or str, optional): Order of the norm.
- `axis` (int or tuple of ints, optional): Axis or axes along which to compute.
- `keepdims` (bool, optional): If True, reduced axes are kept.

**Returns**
- `asnumpy.ndarray`: Norm values.

**See Also**
- [`numpy.linalg.norm`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html)

**Examples**
```python
>>> import asnumpy as ap
>>> v = ap.array([3., 4.])
>>> ap.linalg.norm(v)
5.0
```

### asnumpy.linalg.det

```python
asnumpy.linalg.det(a: ndarray) -> ndarray
```

Compute determinant of a square matrix.

**Arguments**
- `a` (asnumpy.ndarray): Square matrix or batch of square matrices.

**Returns**
- `asnumpy.ndarray`: Determinant value(s) for each matrix.

**See Also**
- [`numpy.linalg.det`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html)

**Examples**
```python
>>> import asnumpy as ap
>>> mtx = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.det(mtx)
-2.0
```

### asnumpy.linalg.slogdet

```python
asnumpy.linalg.slogdet(a: ndarray) -> tuple
```

Compute the sign and logarithm of determinant.

**Arguments**
- `a` (asnumpy.ndarray): Input square matrix.

**Returns**
- `sign` (asnumpy.ndarray): Sign of the determinant.
- `logdet` (asnumpy.ndarray): Natural logarithm of the absolute value.

**See Also**
- [`numpy.linalg.slogdet`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.slogdet.html)

## Solving Equations and Inverses

### asnumpy.linalg.inv

```python
asnumpy.linalg.inv(a: ndarray) -> ndarray
```

Compute the multiplicative inverse of a square matrix.

**Arguments**
- `a` (asnumpy.ndarray): Square matrix to invert.

**Returns**
- `asnumpy.ndarray`: Inverse of the input matrix.

**See Also**
- [`numpy.linalg.inv`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html)

**Examples**
```python
>>> import asnumpy as ap
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.inv(M)
array([[-2. ,  1. ],
       [ 1.5, -0.5]])
```
