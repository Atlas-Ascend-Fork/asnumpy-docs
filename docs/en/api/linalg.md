# Linear Algebra

::: info
This page currently documents a curated subset of representative APIs that have unit-test coverage. Additional APIs in this module are temporarily hidden while the frontend and documentation system are being reworked, and they will be restored after the frontend stabilizes.This document is for reference only.
:::

## Matrix and Vector Products

### asnumpy.dot

```python
asnumpy.dot(a: ArrayLike, b: ArrayLike) -> ndarray
```

Perform a dot product or tensor contraction depending on the input dimensions.

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

::: tip
Current tests cover 1-D, 2-D, non-square matrices, empty-array inputs, and `float32`/`float64` precision cases. Note that empty-array inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.dot`](https://numpy.org/doc/stable/reference/generated/numpy.dot.html)
- [`asnumpy.matmul`](#asnumpy-matmul)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> vec1 = ap.ndarray.from_numpy(np.array([1, 2], dtype=np.int32))
>>> vec2 = ap.ndarray.from_numpy(np.array([3, 4], dtype=np.int32))
>>> ap.dot(vec1, vec2)
11
>>> mat1 = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.int32))
>>> mat2 = ap.ndarray.from_numpy(np.array([[5, 6], [7, 8]], dtype=np.int32))
>>> ap.dot(mat1, mat2)
array([[19, 22],
       [43, 50]])
```

<!--
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
-->

### asnumpy.inner

```python
asnumpy.inner(a: ArrayLike, b: ArrayLike) -> ndarray
```

Calculate the inner product over the last dimension of the inputs.

For 1-D inputs, this function returns the standard vector inner product; for higher-dimensional inputs, it sums over the last axis, matching `numpy.inner` behavior.

**Arguments**
- `a` (ArrayLike): The first input array.
- `b` (ArrayLike): The second input array.

**Returns**
- `ndarray`: The inner product of the arrays.

::: tip
Current tests cover 1-D, 2-D, `float32`/`float64` precision, and empty-array inputs. Note that empty-array inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.inner`](https://numpy.org/doc/stable/reference/generated/numpy.inner.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> vec1 = ap.ndarray.from_numpy(np.array([2, 3], dtype=np.int32))
>>> vec2 = ap.ndarray.from_numpy(np.array([4, 5], dtype=np.int32))
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

::: tip
Current tests cover 2-D, non-square matrices, batch broadcasting, `float32`/`float64` precision, and empty-array inputs. Note that empty-array inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.matmul`](https://numpy.org/doc/stable/reference/generated/numpy.matmul.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> mat1 = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.int32))
>>> mat2 = ap.ndarray.from_numpy(np.array([[5, 6], [7, 8]], dtype=np.int32))
>>> ap.matmul(mat1, mat2)
array([[19, 22],
       [43, 50]])
```

### asnumpy.outer

```python
asnumpy.outer(a: ArrayLike, b: ArrayLike) -> ndarray
```

Generate an outer-product matrix from two inputs.

The inputs are first flattened to one dimension, and the result matrix is then constructed from pairwise products of their values.

**Arguments**
- `a` (ArrayLike): The first input array.
- `b` (ArrayLike): The second input array.

**Returns**
- `ndarray`: The outer product matrix.

::: tip
Current tests cover 1-D inputs, automatic flattening of 2-D inputs, `float32`/`float64` precision, and empty-array inputs. Note that empty-array inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.outer`](https://numpy.org/doc/stable/reference/generated/numpy.outer.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> vec1 = ap.ndarray.from_numpy(np.array([1, 2, 3], dtype=np.int32))
>>> vec2 = ap.ndarray.from_numpy(np.array([4, 5], dtype=np.int32))
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

::: tip
Current tests cover 1-D inputs, automatic flattening of 2-D inputs, `float32`/`float64` precision, and empty-array inputs. Note that empty-array inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.vdot`](https://numpy.org/doc/stable/reference/generated/numpy.vdot.html)

## Decompositions

### asnumpy.linalg.qr

```python
asnumpy.linalg.qr(a: ArrayLike, mode: str = "reduced") -> Union[ndarray, tuple]
```

Decompose a matrix into an orthogonal matrix Q and an upper triangular matrix R.

**Arguments**
- `a` (ArrayLike): Input matrix to be factored.
- `mode` (str, optional): Factorization mode. Current tests cover `"reduced"`, `"complete"`, and `"r"`.

**Returns**
- `ndarray or tuple`: When `mode="r"`, returns `R`; otherwise returns `(Q, R)`.

::: tip
Current tests cover square matrices, rectangular matrices, rank-deficient matrices, batched matrices, `float32`/`float64` precision, and empty-matrix inputs. Note that empty-matrix inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

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

::: tip
Current tests cover vector norms, matrix Frobenius norms, rectangular matrices, `axis`, `keepdims`, batched inputs, `float32`/`float64` precision, and empty-array inputs. Note that empty-array inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.linalg.norm`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> v = ap.ndarray.from_numpy(np.array([3., 4.], dtype=np.float32))
>>> ap.linalg.norm(v)
5.0
```

### asnumpy.linalg.det

```python
asnumpy.linalg.det(a: ArrayLike) -> ndarray
```

Calculate the determinant of a square matrix.

**Arguments**
- `a` (ArrayLike): Square matrix or batch of square matrices.

**Returns**
- `ndarray`: Determinant value(s) for each matrix.

::: tip
Current tests cover 2x2, 3x3, singular matrices, batched matrices, `float32`/`float64` precision, and empty-matrix inputs. Note that empty-matrix inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.linalg.det`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> mtx = ap.ndarray.from_numpy(np.array([[1., 2.], [3., 4.]], dtype=np.float32))
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
- `tuple`: Returns `(sign, logdet)`, where `sign` is the sign of the determinant and `logdet` is the natural logarithm of its absolute value.

::: tip
Current tests cover regular square matrices, singular matrices, batched matrices, `float32`/`float64` precision, and empty-matrix inputs. Note that empty-matrix inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support. For floating-point inputs containing `nan` or `inf`, the current implementation falls back to NumPy.
:::

**See Also**
- [`numpy.linalg.slogdet`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.slogdet.html)

## Solving Equations and Inverses

### asnumpy.linalg.inv

```python
asnumpy.linalg.inv(a: ArrayLike) -> ndarray
```

Find the matrix that yields the identity when multiplied by the original matrix.

**Arguments**
- `a` (ArrayLike): Square matrix to invert.

**Returns**
- `ndarray`: Inverse of the input matrix.

::: tip
Current tests cover 2x2, 3x3, 4x4, batched matrices, `float32`/`float64` precision, and boundary cases including singular matrices, non-square matrices, and empty matrices. Note that singular, non-square, and empty-matrix inputs are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.linalg.inv`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> M = ap.ndarray.from_numpy(np.array([[1., 2.], [3., 4.]], dtype=np.float32))
>>> ap.linalg.inv(M)
array([[-2. ,  1. ],
       [ 1.5, -0.5]])
```

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

::: tip
Current tests cover positive powers, zero power, negative powers, `float32`/`float64` precision, and boundary cases including singular matrices with negative powers and empty matrices. Note that singular matrices with negative powers and empty matrices are marked `xfail` in the test suite, which means they are tracked as known failing cases rather than stable support.
:::

**See Also**
- [`numpy.linalg.matrix_power`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html)

**Examples**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> m = ap.ndarray.from_numpy(np.array([[1, 2], [0, 1]], dtype=np.int32))
>>> ap.linalg.matrix_power(m, 2)
array([[1, 4],
       [0, 1]])
```
