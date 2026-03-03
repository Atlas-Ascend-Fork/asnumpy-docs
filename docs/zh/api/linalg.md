# 线性代数

<!-- docsify-toc:start -->
- [矩阵和向量积](#矩阵和向量积)
  - [asnumpy.dot](#asnumpydot)
  - [asnumpy.einsum](#asnumpyeinsum)
  - [asnumpy.inner](#asnumpyinner)
  - [asnumpy.matmul](#asnumpymatmul)
  - [asnumpy.outer](#asnumpyouter)
  - [asnumpy.vdot](#asnumpyvdot)
  - [asnumpy.linalg.matrix_power](#asnumpylinalgmatrix_power)
- [分解](#分解)
  - [asnumpy.linalg.qr](#asnumpylinalgqr)
- [范数和其他数字](#范数和其他数字)
  - [asnumpy.linalg.norm](#asnumpylinalgnorm)
  - [asnumpy.linalg.det](#asnumpylinalgdet)
  - [asnumpy.linalg.slogdet](#asnumpylinalgslogdet)
- [解方程和逆矩阵](#解方程和逆矩阵)
  - [asnumpy.linalg.inv](#asnumpylinalginv)
<!-- docsify-toc:end -->

## 矩阵和向量积

### asnumpy.dot

```python
asnumpy.dot(a: ndarray, b: ndarray) -> ndarray
```

计算两个数组的点积。

此函数根据输入数组 `a` 和 `b` 的维度计算点积。
- 对于一维数组，它计算向量的内积。
- 对于二维数组，它执行矩阵乘法。
- 对于零维（标量）输入，它执行标量乘法。
- 对于 N 维数组，它通常在 `a` 的最后一个轴和 `b` 的倒数第二个轴上计算求和积。

**参数**
- `a` (asnumpy.ndarray): 第一个输入数组。
- `b` (asnumpy.ndarray): 第二个输入数组。

**返回值**
- `asnumpy.ndarray`: `a` 和 `b` 的点积。如果两个输入都是标量或一维数组，则返回标量。否则返回数组。结果可能在加速器设备上分配。

**另请参阅**
- [`numpy.dot`](https://numpy.org/doc/stable/reference/generated/numpy.dot.html)
- [`asnumpy.matmul`](#asnumpymatmul)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)

**示例**
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

在操作数上计算爱因斯坦求和约定。

使用爱因斯坦求和约定执行多维线性代数数组操作。
这允许简洁地表示许多常见操作，如点积、迹和张量收缩。

**参数**
- `subscripts` (str): 指定求和下标的字符串。它由逗号分隔的下标标签组成。如果包含 '->'，它明确定义输出下标。否则执行隐式计算。
- `*operands` (asnumpy.ndarray): 要操作的数组。

**返回值**
- `asnumpy.ndarray`: 爱因斯坦求和的结果。

**另请参阅**
- [`numpy.einsum`](https://numpy.org/doc/stable/reference/generated/numpy.einsum.html)
- [`asnumpy.dot`](#asnumpydot)
- [`asnumpy.inner`](#asnumpyinner)
- [`asnumpy.outer`](#asnumpyouter)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.arange(9).reshape(3, 3)
>>> ap.einsum('ii', a)  # 迹
12
>>> ap.einsum('ii->i', a)  # 对角线
array([0, 4, 8])
>>> b = ap.arange(3)
>>> ap.einsum('ij,j', a, b)  # 矩阵向量乘法
array([ 5, 14, 23])
```

### asnumpy.inner

```python
asnumpy.inner(a: ndarray, b: ndarray) -> ndarray
```

计算两个数组的内积。

通过将输入数组 `a` 和 `b` 的最后一个维度上的元素乘积求和来计算内积。
对于一维数组，这等效于向量点积。
对于更高维度，它在两个数组的最后一个轴上计算求和积。

**参数**
- `a` (asnumpy.ndarray): 第一个输入数组。
- `b` (asnumpy.ndarray): 第二个输入数组。最后一个维度必须与 `a` 的最后一个维度匹配。

**返回值**
- `asnumpy.ndarray`: 数组的内积。输出的形状是 `a.shape[:-1] + b.shape[:-1]`。

**另请参阅**
- [`numpy.inner`](https://numpy.org/doc/stable/reference/generated/numpy.inner.html)
- [`asnumpy.dot`](#asnumpydot)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)

**示例**
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

计算两个数组的矩阵积。

此函数实现两个数组的矩阵积。
它支持二维数组的标准矩阵乘法、向量矩阵乘法以及高维数组的广播。
与 `dot` 不同，它不支持标量乘法。

**参数**
- `x1` (asnumpy.ndarray): 第一个输入数组。不允许标量。
- `x2` (asnumpy.ndarray): 第二个输入数组。不允许标量。

**返回值**
- `asnumpy.ndarray`: 输入的矩阵积。只有当两个输入都是一维向量时，结果才是标量。

**另请参阅**
- [`numpy.matmul`](https://numpy.org/doc/stable/reference/generated/numpy.matmul.html)
- [`asnumpy.dot`](#asnumpydot)
- [`numpy.tensordot`](https://numpy.org/doc/stable/reference/generated/numpy.tensordot.html)
- [`asnumpy.einsum`](#asnumpyeinsum)

**示例**
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

计算两个向量的外积。

计算两个向量 `a` 和 `b` 的外积。
如果输入不是一维的，它们在计算前会被展平。
结果是一个矩阵，其中 `(i, j)` 处的元素是 `a[i]` 和 `b[j]` 的乘积。

**参数**
- `a` (asnumpy.ndarray): 第一个输入向量。如果不是一维的，则展平。
- `b` (asnumpy.ndarray): 第二个输入向量。如果不是一维的，则展平。

**返回值**
- `asnumpy.ndarray`: 外积矩阵。如果 `a` 的大小为 M 且 `b` 的大小为 N，则结果的形状为 (M, N)。

**另请参阅**
- [`numpy.outer`](https://numpy.org/doc/stable/reference/generated/numpy.outer.html)
- [`asnumpy.inner`](#asnumpyinner)
- [`asnumpy.einsum`](#asnumpyeinsum)

**示例**
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

计算两个向量的点积，对第一个向量进行共轭。

此函数计算两个向量的点积。
与 `dot` 不同，它首先将输入数组展平为一维向量。
如果第一个参数 `a` 是复数，则使用其复共轭进行计算。

**参数**
- `a` (asnumpy.ndarray): 第一个输入数组。如果不是一维的，则展平。如果是复数，则使用复共轭。
- `b` (asnumpy.ndarray): 第二个输入数组。如果不是一维的，则展平。

**返回值**
- `asnumpy.ndarray`: 向量的点积。结果是一个标量。

**另请参阅**
- [`numpy.vdot`](https://numpy.org/doc/stable/reference/generated/numpy.vdot.html)
- [`asnumpy.dot`](#asnumpydot)

**示例**
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

计算方阵的整数幂。

此操作应用重复的矩阵乘法来获得输入矩阵的整数幂。
根据线性代数约定处理零和负指数等特殊情况。

**参数**
- `a` (asnumpy.ndarray): 输入方阵。
- `n` (int): 应用于矩阵的整数指数。

**返回值**
- `asnumpy.ndarray`: 应用指定幂运算后的结果矩阵。

**另请参阅**
- [`numpy.linalg.matrix_power`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html)

**注意事项**
- 零指数产生一个与 ``a`` 形状相同的单位矩阵。
- 负指数涉及计算矩阵逆，这可能会将结果提升为浮点数据类型。
- 计算可能在加速器设备上执行，具体取决于 asnumpy 运行时配置。

**示例**
```python
>>> import asnumpy as ap
>>> m = ap.array([[1, 2], [0, 1]])
>>> ap.linalg.matrix_power(m, 2)
array([[1, 4],
       [0, 1]])
```

## 分解

### asnumpy.linalg.qr

```python
asnumpy.linalg.qr(a: ndarray, mode: str = "reduced") -> Union[ndarray, tuple]
```

执行矩阵的 QR 分解。

将输入矩阵分解为正交矩阵 `q` 和上三角矩阵 `r`。
不同的分解模式控制返回哪些输出。

**参数**
- `a` (asnumpy.ndarray): 要分解的输入矩阵。
- `mode` (str, 可选): 分解模式。选项包括：
  - 'reduced'（默认）：返回最小大小的 `q` 和 `r`
  - 'complete'：返回完整大小的 `q` 和 `r`
  - 'r'：仅返回 `r`
  - 'raw'：返回计算中使用的原始矩阵 `h` 和 `tau`

**返回值**
- `asnumpy.ndarray 或 tuple`：取决于 `mode`，返回单独的 `r`、元组 `(q, r)` 或原始矩阵 `(h, tau)`。

**另请参阅**
- [`numpy.linalg.qr`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.qr.html)

**注意事项**
- 原始模式返回转置矩阵以实现 Fortran 兼容性。
- 计算可能在加速器设备上执行，具体取决于 asnumpy 运行时。

**示例**
```python
>>> import asnumpy as ap
>>> mtx = ap.array([[1., 2.], [3., 4.]])
>>> q, r = ap.linalg.qr(mtx)
>>> q.shape, r.shape
((2, 2), (2, 2))
```

## 范数和其他数字

### asnumpy.linalg.norm

```python
asnumpy.linalg.norm(
    a: ndarray,
    ord: Optional[Union[str, int, float]] = None,
    axis: Optional[Union[int, Sequence[int]]] = None,
    keepdims: bool = False,
) -> ndarray
```

计算向量或矩阵的范数。

计算具有各种阶数的向量或矩阵范数，包括 Frobenius 和核范数。
范数的类型由 `ord` 和 `axis` 参数确定。

**参数**
- `a` (asnumpy.ndarray): 输入向量或矩阵。
- `ord` (int、float 或 str, 可选): 范数的阶数（例如，2、inf、-inf、'fro'、'nuc'）。默认为 None。
- `axis` (int 或 int 元组, 可选): 计算范数的轴或轴。
- `keepdims` (bool, 可选): 如果为 True，则缩减的轴保持为大小为一的维度。

**返回值**
- `asnumpy.ndarray`: 范数值。如果 axis=None，则为标量，否则为具有缩减维度的数组。

**另请参阅**
- [`numpy.linalg.norm`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html)

**注意事项**
- 向量范数和矩阵范数的行为根据 `axis` 而有所不同。
- 如果配置了，计算可能使用加速器设备。

**示例**
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

计算方阵的行列式。

返回包含输入矩阵行列式的标量或数组。

**参数**
- `a` (asnumpy.ndarray): 方阵或方阵批次。

**返回值**
- `asnumpy.ndarray`: 每个矩阵的行列式值。

**另请参阅**
- [`numpy.linalg.det`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html)
- [`asnumpy.linalg.slogdet`](#asnumpylinalgslogdet)

**注意事项**
- 对于非常大或非常小的行列式，使用 `slogdet` 以获得更好的数值稳定性。
- 计算可能在加速器设备上运行。

**示例**
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

计算行列式的符号和对数。

提供一种数值稳定的方法来评估行列式，特别是对于非常大或非常小的值。

**参数**
- `a` (asnumpy.ndarray): 输入方阵或方阵批次。

**返回值**
- `sign` (asnumpy.ndarray): 行列式的符号。
- `logdet` (asnumpy.ndarray): 行列式绝对值的自然对数。

**另请参阅**
- [`asnumpy.linalg.det`](#asnumpylinalgdet)
- [`numpy.linalg.slogdet`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.slogdet.html)

**注意事项**
- 如果行列式为零，则 `sign` 为 0 且 `logdet` 为 -Inf。
- 原始行列式可以恢复为 `sign * exp(logdet)`。

**示例**
```python
>>> import asnumpy as ap
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> s, ld = ap.linalg.slogdet(M)
>>> s, ld
(-1.0, 0.6931471805599453)
```

## 解方程和逆矩阵

### asnumpy.linalg.inv

```python
asnumpy.linalg.inv(a: ndarray) -> ndarray
```

计算方阵的乘法逆。

返回一个满足 `dot(a, ainv) = eye(n)` 属性的矩阵。

**参数**
- `a` (asnumpy.ndarray): 要反转的方阵或方阵批次。

**返回值**
- `asnumpy.ndarray`: 输入矩阵或矩阵的逆。

**异常**
- `LinAlgError`: 如果矩阵不是方阵或反转失败。

**另请参阅**
- [`numpy.linalg.inv`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html)

**注意事项**
- 计算可能在加速器设备上执行。
- 如果需要稳定性，反转会将 dtype 提升为浮点数。

**示例**
```python
>>> import asnumpy as ap
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.inv(M)
array([[-2. ,  1. ],
       [ 1.5, -0.5]])