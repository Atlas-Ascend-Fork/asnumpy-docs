# 线性代数

## 矩阵和向量乘积

### asnumpy.dot

```python
asnumpy.dot(a: ArrayLike, b: ArrayLike) -> ndarray
```

根据两个数组的维度执行逐元素乘法和求和。

此函数根据输入 `a` 和 `b` 的维度进行处理。
- 对于 1-D 数组，计算向量的内积。
- 对于 2-D 数组，执行矩阵乘法。
- 对于 0-D（标量）输入，执行标量乘法。
- 对于 N-D 数组，通常在 `a` 的最后一个轴和 `b` 的倒数第二个轴上计算求和乘积。

**参数**
- `a` (ArrayLike): 第一个输入数组。
- `b` (ArrayLike): 第二个输入数组。

**返回值**
- `ndarray`: `a` 和 `b` 的点积。

**参见**
- [`numpy.dot`](https://numpy.org/doc/stable/reference/generated/numpy.dot.html)
- [`asnumpy.matmul`](#asnumpy-matmul)

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
asnumpy.einsum(subscripts: str, *operands: ArrayLike) -> ndarray
```

使用下标表示法执行张量操作以指定收缩模式。

**参数**
- `subscripts` (str): 指定求和下标的字符串。
- `*operands` (ArrayLike): 要操作的数组。

**返回值**
- `ndarray`: 爱因斯坦求和的结果。

**参见**
- [`numpy.einsum`](https://numpy.org/doc/stable/reference/generated/numpy.einsum.html)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.arange(9).reshape(3, 3)
>>> ap.einsum('ii', a)  # 迹
12
>>> ap.einsum('ii->i', a)  # 对角线
array([0, 4, 8])
```

### asnumpy.inner

```python
asnumpy.inner(a: ArrayLike, b: ArrayLike) -> ndarray
```

将对应元素相乘并对标量或数组输入求和。

**参数**
- `a` (ArrayLike): 第一个输入数组。
- `b` (ArrayLike): 第二个输入数组。

**返回值**
- `ndarray`: 数组的内积。

**参见**
- [`numpy.inner`](https://numpy.org/doc/stable/reference/generated/numpy.inner.html)

**示例**
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

按照标准线性代数广播规则执行矩阵乘法。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。

**返回值**
- `ndarray`: 输入的矩阵乘积。

**参见**
- [`numpy.matmul`](https://numpy.org/doc/stable/reference/generated/numpy.matmul.html)

**示例**
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

从两个向量生成矩阵，其中每个元素是对应输入值的乘积。

**参数**
- `a` (ArrayLike): 第一个输入向量。
- `b` (ArrayLike): 第二个输入向量。

**返回值**
- `ndarray`: 外积矩阵。

**参见**
- [`numpy.outer`](https://numpy.org/doc/stable/reference/generated/numpy.outer.html)

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
asnumpy.vdot(a: ArrayLike, b: ArrayLike) -> ndarray
```

展平输入，对第一个参数应用复共轭，然后计算它们的标量积。

**参数**
- `a` (ArrayLike): 第一个输入数组。
- `b` (ArrayLike): 第二个输入数组。

**返回值**
- `ndarray`: 向量的点积。

**参见**
- [`numpy.vdot`](https://numpy.org/doc/stable/reference/generated/numpy.vdot.html)

### asnumpy.linalg.matrix_power

```python
asnumpy.linalg.matrix_power(a: ArrayLike, n: int) -> ndarray
```

通过重复乘法将矩阵提升到指定的整数幂。

**参数**
- `a` (ArrayLike): 输入方阵。
- `n` (int): 应用于矩阵的整数指数。

**返回值**
- `ndarray`: 应用指定幂运算后的结果矩阵。

**参见**
- [`numpy.linalg.matrix_power`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.matrix_power.html)

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
asnumpy.linalg.qr(a: ArrayLike, mode: str = "reduced") -> Union[ndarray, tuple]
```

将矩阵分解为正交矩阵 Q 和上三角矩阵 R。

**参数**
- `a` (ArrayLike): 要分解的输入矩阵。
- `mode` (str, 可选): 分解模式。

**返回值**
- `ndarray 或 tuple`: 根据 `mode`，返回单独的 `r` 或元组 `(q, r)`。

**参见**
- [`numpy.linalg.qr`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.qr.html)

## 范数和其他数值

### asnumpy.linalg.norm

```python
asnumpy.linalg.norm(
    a: ArrayLike,
    ord: Optional[Union[str, int, float]] = None,
    axis: AxisLike = None,
    keepdims: bool = False,
) -> ndarray
```

根据指定阶数测量向量或矩阵的大小或尺寸。

**参数**
- `a` (ArrayLike): 输入向量或矩阵。
- `ord` (int, float 或 str, 可选): 范数的阶数。
- `axis` (AxisLike, 可选): 计算的轴。
- `keepdims` (bool, 可选): 如果为 True，保留缩减的轴。

**返回值**
- `ndarray`: 范数值。

**参见**
- [`numpy.linalg.norm`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html)

**示例**
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

计算表示线性变换体积缩放因子的标量值。

**参数**
- `a` (ArrayLike): 方阵或方阵批次。

**返回值**
- `ndarray`: 每个矩阵的行列式值。

**参见**
- [`numpy.linalg.det`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.det.html)

**示例**
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

返回矩阵行列式的符号和自然对数以实现数值稳定性。

**参数**
- `a` (ArrayLike): 输入方阵。

**返回值**
- `sign` (ndarray): 行列式的符号。
- `logdet` (ndarray): 绝对值的自然对数。

**参见**
- [`numpy.linalg.slogdet`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.slogdet.html)

## 求解方程和逆

### asnumpy.linalg.inv

```python
asnumpy.linalg.inv(a: ArrayLike) -> ndarray
```

找到与原矩阵相乘产生单位矩阵的矩阵。

**参数**
- `a` (ArrayLike): 要求逆的方阵。

**返回值**
- `ndarray`: 输入矩阵的逆。

**参见**
- [`numpy.linalg.inv`](https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html)

**示例**
```python
>>> import asnumpy as ap
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.inv(M)
array([[-2. ,  1. ],
       [ 1.5, -0.5]])
```
