# 线性代数

[[toc]]

## 矩阵和向量乘积

### asnumpy.dot

```python
asnumpy.dot(a: ndarray, b: ndarray) -> ndarray
```

计算两个数组的点积。

此函数根据输入数组 `a` 和 `b` 的维度计算点积。
- 对于 1-D 数组，计算向量的内积。
- 对于 2-D 数组，执行矩阵乘法。
- 对于 0-D（标量）输入，执行标量乘法。

**参数**
- `a` (asnumpy.ndarray): 第一个输入数组。
- `b` (asnumpy.ndarray): 第二个输入数组。

**返回值**
- `asnumpy.ndarray`: `a` 和 `b` 的点积。

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
```

### asnumpy.matmul

```python
asnumpy.matmul(x1: ndarray, x2: ndarray) -> ndarray
```

计算两个数组的矩阵乘积。

**参数**
- `x1` (asnumpy.ndarray): 第一个输入数组。
- `x2` (asnumpy.ndarray): 第二个输入数组。

**返回值**
- `asnumpy.ndarray`: 输入的矩阵乘积。

**示例**
```python
>>> import asnumpy as ap
>>> mat1 = ap.array([[1, 2], [3, 4]])
>>> mat2 = ap.array([[5, 6], [7, 8]])
>>> ap.matmul(mat1, mat2)
array([[19, 22],
       [43, 50]])
```

### asnumpy.einsum

```python
asnumpy.einsum(subscripts: str, *operands: ndarray) -> ndarray
```

对操作数执行爱因斯坦求和约定。

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.arange(9).reshape(3, 3)
>>> ap.einsum('ii', a)  # 迹
12
```

## 范数和其他数值

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

**参数**
- `a` (asnumpy.ndarray): 输入向量或矩阵。
- `ord` (int, float 或 str, 可选): 范数的阶数。
- `axis` (int 或 int 元组, 可选): 计算范数的轴。
- `keepdims` (bool, 可选): 如果为 True，保留缩减的轴。

**示例**
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

计算方阵的行列式。

**示例**
```python
>>> import asnumpy as ap
>>> mtx = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.det(mtx)
-2.0
```

## 分解

### asnumpy.linalg.qr

```python
asnumpy.linalg.qr(a: ndarray, mode: str = "reduced") -> Union[ndarray, tuple]
```

执行矩阵的 QR 分解。

**参数**
- `a` (asnumpy.ndarray): 要分解的输入矩阵。
- `mode` (str, 可选): 分解模式。

**返回值**
- `asnumpy.ndarray 或元组`: 根据 `mode` 返回 `r` 或 `(q, r)`。

## 求解方程和逆

### asnumpy.linalg.inv

```python
asnumpy.linalg.inv(a: ndarray) -> ndarray
```

计算方阵的乘法逆。

**示例**
```python
>>> import asnumpy as ap
>>> M = ap.array([[1., 2.], [3., 4.]])
>>> ap.linalg.inv(M)
array([[-2. ,  1. ],
       [ 1.5, -0.5]])
```
