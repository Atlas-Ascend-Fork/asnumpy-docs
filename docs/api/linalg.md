# Linear Algebra

<!-- docsify-toc:start -->
- [Matrix and Vector Products](#matrix-and-vector-products)
  - [asnumpy.dot](#asnumpydot)
  - [asnumpy.einsum](#asnumpyeinsum)
  - [asnumpy.inner](#asnumpyinner)
  - [asnumpy.matmul](#asnumpymatmul)
  - [asnumpy.outer](#asnumpyouter)
  - [asnumpy.vdot](#asnumpyvdot)
  - [asnumpy.linalg.matrix_power](#asnumpylinalgmatrix_power)
- [Decompositions](#decompositions)
  - [asnumpy.linalg.qr](#asnumpylinalgqr)
- [Norms and Other Numbers](#norms-and-other-numbers)
  - [asnumpy.linalg.norm](#asnumpylinalgnorm)
  - [asnumpy.linalg.det](#asnumpylinalgdet)
  - [asnumpy.linalg.slogdet](#asnumpylinalgslogdet)
- [Solving Equations and Inverses](#solving-equations-and-inverses)
  - [asnumpy.linalg.inv](#asnumpylinalginv)
<!-- docsify-toc:end -->

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
- `asnumpy.ndarray`: The dot product of `a` and `b`. If both inputs are scalars or 1-D arrays, a scalar is returned. Otherwise, an array is returned. The result may be allocated on the accelerator device.

**See Also**
- [`numpy.dot`](https://numpy.org/doc/stable/reference/generated/numpy.dot.html)
- [`asnumpy.matmul`](#asnumpymatmul)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)

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

Performs multi-dimensional linear algebraic array operations using the Einstein summation convention.
This allows for a concise representation of many common operations 
like dot products, traces, and tensor contractions.

**Arguments**
- `subscripts` (str): A string specifying the subscripts for summation. It consists of comma-separated subscript labels. If '->' is included, it explicitly defines the output subscripts. Otherwise, an implicit calculation is performed.
- `*operands` (asnumpy.ndarray): The arrays to operate on.

**Returns**
- `asnumpy.ndarray`: The result of the Einstein summation.

**See Also**
- [`numpy.einsum`](https://numpy.org/doc/stable/reference/generated/numpy.einsum.html)
- [`asnumpy.dot`](#asnumpydot)
- [`asnumpy.inner`](#asnumpyinner)
- [`asnumpy.outer`](#asnumpyouter)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)

**Examples**
```python
>>> import asnumpy as ap
>>> a = ap.arange(9).reshape(3, 3)
>>> ap.einsum('ii', a)  # Trace
12
>>> ap.einsum('ii->i', a)  # Diagonal
array([0, 4, 8])
>>> b = ap.arange(3)
>>> ap.einsum('ij,j', a, b)  # Matrix-vector multiplication
array([ 5, 14, 23])
```

### asnumpy.inner

```python
asnumpy.inner(a: ndarray, b: ndarray) -> ndarray
```

Compute the inner product of two arrays.

Calculates the inner product by summing the product of elements 
over the last dimensions of the input arrays `a` and `b`.
For 1-D arrays, this is equivalent to the vector dot product.
For higher dimensions, it computes the sum product over the last axis of both arrays.

**Arguments**
- `a` (asnumpy.ndarray): The first input array.
- `b` (asnumpy.ndarray): The second input array. The last dimension must match the last dimension of `a`.

**Returns**
- `asnumpy.ndarray`: The inner product of the arrays. The shape of the output is `a.shape[:-1] + b.shape[:-1]`.

**See Also**
- [`numpy.inner`](https://numpy.org/doc/stable/reference/generated/numpy.inner.html)
- [`asnumpy.dot`](#asnumpydot)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)

**Examples**
```python
>>> import asnumpy as ap
>>> vec1 = ap.array([2, 3])
>>> vec2 = ap.array([4, 5])
>>> ap.inner(vec1, vec2)
23
>>> a = ap.arange(6).reshape((2, 3))
>>> b = ap.array([1, 2, 3])
>>> ap.inner(a, b)
array([14, 32])
```

### asnumpy.matmul

```python
asnumpy.matmul(x1: ndarray, x2: ndarray) -> ndarray
```

Compute the matrix product of two arrays.

This function implements the matrix product of two arrays.
It supports standard matrix multiplication for 2-D arrays, 
vector-matrix multiplication, and broadcasting for higher-dimensional arrays.
Unlike `dot`, it does not support scalar multiplication.

**Arguments**
- `x1` (asnumpy.ndarray): The first input array. Scalars are not allowed.
- `x2` (asnumpy.ndarray): The second input array. Scalars are not allowed.

**Returns**
- `asnumpy.ndarray`: The matrix product of the inputs. The result is a scalar only if both inputs are 1-D vectors.

**See Also**
- [`numpy.matmul`](https://numpy.org/doc/stable/reference/generated/numpy.matmul.html)
- [`asnumpy.dot`](#asnumpydot)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)
- [`asnumpy.einsum`](#asnumpyeinsum)

**Examples**
```python
>>> import asnumpy as ap
>>> mat1 = ap.array([[1, 2], [3, 4]])
>>> mat2 = ap.array([[5, 6], [7, 8]])
>>> ap.matmul(mat1, mat2)
array([[19, 22],
       [43, 50]])

>>> vec = ap.array([1, 2])
>>> ap.matmul(mat1, vec)
array([ 5, 11])
```

### asnumpy.outer

```python
asnumpy.outer(a: ndarray, b: ndarray) -> ndarray
```

Compute the outer product of two vectors.

Calculates the outer product of two vectors `a` and `b`.
If the inputs are not 1-D, they are flattened before computation.
The result is a matrix where the element at `(i, j)` is the product of `a[i]` and `b[j]`.

**Arguments**
- `a` (asnumpy.ndarray): The first input vector. Flattened if not 1-D.
- `b` (asnumpy.ndarray): The second input vector. Flattened if not 1-D.

**Returns**
- `asnumpy.ndarray`: The outer product matrix. If `a` has size M and `b` has size N, the result has shape (M, N).

**See Also**
- [`numpy.outer`](https://numpy.org/doc/stable/reference/generated/numpy.outer.html)
- [`asnumpy.inner`](#asnumpyinner)
- [`asnumpy.einsum`](#asnumpyeinsum)

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

This function computes the dot product of two vectors.
Unlike `dot`, it flattens the input arrays into 1-D vectors first.
If the first argument `a` is complex, its complex conjugate is used for the calculation.

**Arguments**
- `a` (asnumpy.ndarray): The first input array. Flattened if not 1-D. If complex, the complex conjugate is used.
- `b` (asnumpy.ndarray): The second input array. Flattened if not 1-D.

**Returns**
- `asnumpy.ndarray`: The dot product of the vectors. The result is a scalar.

**See Also**
- [`numpy.vdot`](https://numpy.org/doc/stable/reference/generated/numpy.vdot.html)
- [`asnumpy.dot`](#asnumpydot)

**Examples**
```python
>>> import asnumpy as ap
>>> a = ap.array([1+1j, 2+2j])
>>> b = ap.array([1+2j, 3+4j])
>>> ap.vdot(a, b)
(17+3j)
>>> ap.vdot(b, a)
(17-3j)
```

### asnumpy.linalg.matrix_power

```python
asnumpy.linalg.matrix_power(a: ndarray, n: int) -> ndarray
```

Compute the integer power of a square matrix.

This operation applies repeated matrix multiplication to obtain
an integer power of the input matrix. Special cases such as zero
and negative exponents are handled according to linear algebra
conventions.

**Arguments**
- `a` (asnumpy.ndarray): Input square matrix.
- `n` (int): Integer exponent applied to the matrix.

**Returns**
- `asnumpy.ndarray`: Resulting matrix after applying the specified power operation.

**See Also**
- [`numpy.linalg.matrix_power`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html)

**Notes**
- A zero exponent produces an identity matrix with the same shape as ``a``.
- Negative exponents involve computing the matrix inverse, which may promote the result to a floating-point data type.
- Computation may be executed on an accelerator device depending on asnumpy runtime configuration.

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

Factor the input matrix into an orthonormal matrix `q` and an
upper-triangular matrix `r`. Different factorization modes
control which outputs are returned.

**Arguments**
- `a` (asnumpy.ndarray): Input matrix to be factored.
- `mode` (str, optional): Factorization mode. Options include:
  - 'reduced' (default): returns `q` and `r` with minimal size
  - 'complete': returns full-size `q` and `r`
  - 'r': returns `r` only
  - 'raw': returns raw matrices `h` and `tau` used in computation

**Returns**
- `asnumpy.ndarray or tuple`: Depending on `mode`, returns `r` alone, a tuple `(q, r)`, or raw matrices `(h, tau)`.

**See Also**
- [`numpy.linalg.qr`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.qr.html)

**Notes**
- Raw mode returns a transposed matrix for Fortran compatibility.
- Computation may be performed on an accelerator device depending on asnumpy runtime.

**Examples**
```python
>>> import asnumpy as ap
>>> mtx = ap.array([[1., 2.], [3., 4.]])
>>> q, r = ap.linalg.qr(mtx)
>>> q.shape, r.shape
((2, 2), (2, 2))
```

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

Calculates vector or matrix norms with various orders, including
Frobenius and nuclear norms. The type of norm is determined by
the `ord` and `axis` parameters.

**Arguments**
- `a` (asnumpy.ndarray): Input vector or matrix.
- `ord` (int, float, or str, optional): Order of the norm (e.g., 2, inf, -inf, 'fro', 'nuc'). Default is None.
- `axis` (int or tuple of ints, optional): Axis or axes along which to compute the norm.
- `keepdims` (bool, optional): If True, reduced axes are kept as size-one dimensions.

**Returns**
- `asnumpy.ndarray`: Norm values. Scalar if axis=None, otherwise array with reduced dimensions.

**See Also**
- [`numpy.linalg.norm`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html)

**Notes**
- Vector norms and matrix norms behave differently depending on `axis`.
- Computation may use accelerator devices if configured.

**Examples**
```python
>>> import asnumpy as ap
>>> v = ap.array([3., 4.])
>>> ap.linalg.norm(v)
5.0
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.norm(M, 'fro')
5.477225575051661
```

### asnumpy.linalg.det

```python
asnumpy.linalg.det(a: ndarray) -> ndarray
```

Compute determinant of a square matrix.

Returns a scalar or array containing determinants of input matrices.

**Arguments**
- `a` (asnumpy.ndarray): Square matrix or batch of square matrices.

**Returns**
- `asnumpy.ndarray`: Determinant value(s) for each matrix.

**See Also**
- [`numpy.linalg.det`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html)
- [`asnumpy.linalg.slogdet`](#asnumpylinalgslogdet)

**Notes**
- Use `slogdet` for better numerical stability on very large or small determinants.
- Computation may run on an accelerator device.

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

Provides a numerically stable way to evaluate determinants, especially
for very large or small values.

**Arguments**
- `a` (asnumpy.ndarray): Input square matrix or batch of square matrices.

**Returns**
- `sign` (asnumpy.ndarray): Sign of the determinant.
- `logdet` (asnumpy.ndarray): Natural logarithm of the absolute value of the determinant.

**See Also**
- [`asnumpy.linalg.det`](#asnumpylinalgdet)
- [`numpy.linalg.slogdet`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.slogdet.html)

**Notes**
- If a determinant is zero, `sign` is 0 and `logdet` is -Inf.
- The original determinant can be recovered as `sign * exp(logdet)`.

**Examples**
```python
>>> import asnumpy as ap
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> s, ld = ap.linalg.slogdet(M)
>>> s, ld
(-1.0, 0.6931471805599453)
```

## Solving Equations and Inverses

### asnumpy.linalg.inv

```python
asnumpy.linalg.inv(a: ndarray) -> ndarray
```

Compute the multiplicative inverse of a square matrix.

Returns a matrix that satisfies the property `dot(a, ainv) = eye(n)`.

**Arguments**
- `a` (asnumpy.ndarray): Square matrix or batch of square matrices to invert.

**Returns**
- `asnumpy.ndarray`: Inverse of the input matrix or matrices.

**Raises**
- `LinAlgError`: If the matrix is not square or inversion fails.

**See Also**
- [`numpy.linalg.inv`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html)

**Notes**
- Computation may be performed on an accelerator device.
- Inversion promotes dtype to floating point if needed for stability.

**Examples**
```python
>>> import asnumpy as ap
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.inv(M)
array([[-2. ,  1. ],
       [ 1.5, -0.5]])