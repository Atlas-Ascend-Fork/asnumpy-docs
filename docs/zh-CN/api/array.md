# 数组操作

[[toc]]

## asnumpy.zeros

```python
asnumpy.zeros(shape: Union[int, Sequence[int]], dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个用零值初始化的数组。

此函数分配一个具有指定形状的新 `asnumpy.ndarray`，并将所有元素填充为零。数组在 asnumpy 使用的当前执行设备上创建。

**参数**
- `shape` (int 或 int 序列): 指定输出数组的维度。单个整数创建一维数组，序列定义多维形状。
- `dtype` (数据类型, 可选): 返回数组的数据类型。如果未提供，则使用默认数值类型。

**返回值**
- `ndarray`: 所有元素都设置为零且形状与给定 `shape` 参数匹配的数组。

**参见**
- [`numpy.zeros`](https://numpy.org/doc/stable/reference/generated/numpy.zeros.html): 用于创建零数组的 NumPy 等效函数。

**示例**
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
asnumpy.zeros_like(other: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个与现有数组形状相同的零数组。

**参数**
- `other` (类数组): 提供输出数组形状的参考对象。
- `dtype` (数据类型, 可选): 返回数组的数据类型。

**返回值**
- `ndarray`: 填充零且与 `other` 形状相同的数组。

**示例**
```python
>>> import asnumpy as ap
>>> x = ap.arange(4).reshape(2, 2)
>>> ap.zeros_like(x)
array([[0, 0],
       [0, 0]])
```

## asnumpy.full

```python
asnumpy.full(shape: Union[int, Sequence[int]], value: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个填充特定值的数组。

**参数**
- `shape` (int 或 int 序列): 输出数组的形状。
- `value` (标量): 填充数组的值。
- `dtype` (数据类型, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 填充指定值的数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.full((2, 2), 7)
array([[7, 7],
       [7, 7]])
```

## asnumpy.ones

```python
asnumpy.ones(shape: Union[int, Sequence[int]], dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个填充 1 的数组。

**参数**
- `shape` (int 或 int 序列): 输出数组的形状。
- `dtype` (数据类型, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 具有指定形状和 dtype 的 1 数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.ones(4)
array([1., 1., 1., 1.])
```

## asnumpy.ones_like

```python
asnumpy.ones_like(other: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个与另一个数组形状相同的 1 数组。

**示例**
```python
>>> import asnumpy as ap
>>> x = ap.arange(6).reshape((2, 3))
>>> ap.ones_like(x)
array([[1, 1, 1],
       [1, 1, 1]])
```

## asnumpy.empty

```python
asnumpy.empty(shape: Union[int, Sequence[int]], dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个未初始化的数组。

**返回值**
- `asnumpy.ndarray`: 具有未初始化值的数组（可能包含随机内存数据）。

## asnumpy.eye

```python
asnumpy.eye(n: int, dtype: Optional[np.dtype] = None) -> ndarray
```

创建 2-D 单位矩阵。

**参数**
- `n` (int): 矩阵的行数（和列数）。

**返回值**
- `asnumpy.ndarray`: 形状为 (n, n) 的单位矩阵。

**示例**
```python
>>> import asnumpy as ap
>>> ap.eye(3)
array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])
```

## asnumpy.identity

```python
asnumpy.identity(n: int, dtype: Optional[np.dtype] = None) -> ndarray
```

创建方形单位矩阵。

**示例**
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
    start: Union[int, float],
    end: Union[int, float],
    steps: int = 50,
    dtype: Optional[np.dtype] = None,
) -> ndarray
```

在区间上生成均匀间隔的样本。

**参数**
- `start` (int 或 float): 序列的起始值。
- `end` (int 或 float): 序列的结束值。
- `steps` (int, 可选): 要生成的样本数。默认为 50。

**返回值**
- `asnumpy.ndarray`: start 和 end 之间均匀间隔样本的数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.linspace(0, 1, 5)
array([0.  , 0.25, 0.5 , 0.75, 1.  ])
```
