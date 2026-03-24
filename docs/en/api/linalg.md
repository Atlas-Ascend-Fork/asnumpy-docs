# Linear Algebra

## Matrix and Vector Products

### asnumpy.dot

```python
asnumpy.dot(a: ArrayLike, b: ArrayLike) -> ndarray
```

Perform element-wise multiplication and summation between two arrays based on their dimensionality.

This function processes inputs `a` and `b` according to their dimensions.
- For 1-D arrays, it computes the inner product of vectors.
- For 2-D arrays, it performs matrix multiplication.
- For 0-D (scalar) inputs, it performs scalar multiplication.
- For N-D arrays, it generally computes a sum product over the last axis of `a` and the second-to-last axis of `b`.

**Arguments**
- `a` (ArrayLike): The first input array.
- `b` (ArrayLike): The second input array.

**Returns**
- `ndarray`: The dot product of `a` and `b`.

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
asnumpy.einsum(subscripts: str, *operands: ArrayLike) -> ndarray
```

Execute tensor operations using subscript notation to specify contraction patterns.

**Arguments**
- `subscripts` (str): A string specifying the subscripts for summation.
- `*operands` (ArrayLike): The arrays to operate on.

**Returns**
- `ndarray`: The result of the Einstein summation.

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
asnumpy.inner(a: ArrayLike, b: ArrayLike) -> ndarray
```

Multiply corresponding elements and sum the results for scalar or array inputs.

**Arguments**
- `a` (ArrayLike): The first input array.
- `b` (ArrayLike): The second input array.

**Returns**
- `ndarray`: The inner product of the arrays.

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
asnumpy.matmul(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Perform matrix multiplication following standard linear algebra broadcasting rules.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.

**Returns**
- `ndarray`: The matrix product of the inputs.

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
asnumpy.outer(a: ArrayLike, b: ArrayLike) -> ndarray
```

Generate a matrix from two vectors where each element is the product of corresponding input values.

**Arguments**
- `a` (ArrayLike): The first input vector.
- `b` (ArrayLike): The second input vector.

**Returns**
- `ndarray`: The outer product matrix.

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
asnumpy.vdot(a: ArrayLike, b: ArrayLike) -> ndarray
```

Flatten inputs, apply complex conjugation to the first argument, then compute their scalar product.

**Arguments**
- `a` (ArrayLike): The first input array.
- `b` (ArrayLike): The second input array.

**Returns**
- `ndarray`: The dot product of the vectors.

**See Also**
- [`numpy.vdot`](https://numpy.org/doc/stable/reference/generated/numpy.vdot.html)

### asnumpy.linalg.matrix_power

```python
asnumpy.linalg.matrix_power(a: ArrayLike, n: int) -> ndarray
```

Raise a matrix to a specified integer exponent through repeated multiplication.

**Arguments**
- `a` (ArrayLike): Input square matrix.
- `n` (int): Integer exponent applied to the matrix.

**Returns**
- `ndarray`: Resulting matrix after applying the specified power operation.

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
asnumpy.linalg.qr(a: ArrayLike, mode: str = "reduced") -> Union[ndarray, tuple]
```

Decompose a matrix into an orthogonal matrix Q and an upper triangular matrix R.

**Arguments**
- `a` (ArrayLike): Input matrix to be factored.
- `mode` (str, optional): Factorization mode.

**Returns**
- `ndarray or tuple`: Depending on `mode`, returns `r` alone or a tuple `(q, r)`.

**See Also**
- [`numpy.linalg.qr`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.qr.html)

## Norms and Other Numbers

### asnumpy.linalg.norm

```python
asnumpy.linalg.norm(
    a: ArrayLike,
    ord: Optional[Union[str, int, float]] = None,
    axis: AxisLike = None,
    keepdims: bool = False,
) -> ndarray
```

Measure the magnitude or size of a vector or matrix according to a specified order.

**Arguments**
- `a` (ArrayLike): Input vector or matrix.
- `ord` (int, float, or str, optional): Order of the norm.
- `axis` (AxisLike, optional): Axis or axes along which to compute.
- `keepdims` (bool, optional): If True, reduced axes are kept.

**Returns**
- `ndarray`: Norm values.

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
asnumpy.linalg.det(a: ArrayLike) -> ndarray
```

Calculate the scalar value representing the volume scaling factor of a linear transformation.

**Arguments**
- `a` (ArrayLike): Square matrix or batch of square matrices.

**Returns**
- `ndarray`: Determinant value(s) for each matrix.

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
asnumpy.linalg.slogdet(a: ArrayLike) -> tuple
```

Return both the sign and natural logarithm of a matrix's determinant for numerical stability.

**Arguments**
- `a` (ArrayLike): Input square matrix.

**Returns**
- `sign` (ndarray): Sign of the determinant.
- `logdet` (ndarray): Natural logarithm of the absolute value.

**See Also**
- [`numpy.linalg.slogdet`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.slogdet.html)

## Solving Equations and Inverses

### asnumpy.linalg.inv

```python
asnumpy.linalg.inv(a: ArrayLike) -> ndarray
```

Find the matrix that produces the identity when multiplied with the original matrix.

**Arguments**
- `a` (ArrayLike): Square matrix to invert.

**Returns**
- `ndarray`: Inverse of the input matrix.

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
