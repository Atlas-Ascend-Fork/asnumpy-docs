# 数组创建

<!-- docsify-toc:start -->
- [asnumpy.zeros](#asnumpyzeros)
- [asnumpy.zeros_like](#asnumpyzeros_like)
- [asnumpy.full](#asnumpyfull)
- [asnumpy.full_like](#asnumpyfull_like)
- [asnumpy.empty](#asnumpyempty)
- [asnumpy.empty_like](#asnumpyempty_like)
- [asnumpy.eye](#asnumpyeye)
- [asnumpy.ones](#asnumpyones)
- [asnumpy.ones_like](#asnumpyones_like)
- [asnumpy.identity](#asnumpyidentity)
- [asnumpy.linspace](#asnumpylinspace)
<!-- docsify-toc:end -->

### asnumpy.zeros

```python
asnumpy.zeros(shape: Union[int, Sequence[int]], dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个用零值初始化的数组。

此函数分配一个新的 :class:`asnumpy.ndarray`，具有指定的形状，
并将所有元素填充为零。该数组在 asnumpy 使用的当前执行设备上创建。

**参数**
- `shape` (int 或 int 序列): 指定输出数组的维度。单个整数创建一维数组，
  而序列定义多维形状。
- `dtype` (数据类型, 可选): 返回数组的数据类型。如果未提供，则使用默认数值类型。

**返回值**
- `ndarray`: 一个元素全部设置为零且形状与给定 ``shape`` 参数匹配的数组。

**另请参阅**
- [`numpy.zeros`](https://numpy.org/doc/stable/reference/generated/numpy.zeros.html): 用于创建零数组的 NumPy 等效函数。

**注意事项**
- 返回的数组由 asnumpy 分配，可能位于加速器设备上，具体取决于运行时配置。

**示例**
```python
>>> import asnumpy as ap
>>> ap.zeros(3)
array([0., 0., 0.])
>>> ap.zeros((2, 2), dtype=int)
array([[0, 0],
       [0, 0]])
```

### asnumpy.zeros_like

```python
asnumpy.zeros_like(other: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个与现有数组形状相同的零数组。

此函数返回一个新的 :class:`asnumpy.ndarray`，其形状与输入对象的形状匹配。
返回数组的所有元素都初始化为零。默认情况下，数据类型从输入推断，
除非明确覆盖。

**参数**
- `other` (类数组): 提供输出数组形状的参考对象。
- `dtype` (数据类型, 可选): 返回数组的数据类型。如果指定，它会覆盖从 ``other`` 推断的数据类型。

**返回值**
- `ndarray`: 一个填充为零且形状与 ``other`` 相同的数组。

**另请参阅**
- [`asnumpy.zeros`](#asnumpyzeros)
- [`numpy.zeros_like`](https://numpy.org/doc/stable/reference/generated/numpy.zeros_like.html)

**注意事项**
- 返回的数组由 asnumpy 分配，可能放置在加速器设备上，具体取决于当前运行时配置。

**示例**
```python
>>> import asnumpy as ap
>>> x = ap.arange(4).reshape(2, 2)
>>> ap.zeros_like(x)
array([[0, 0],
       [0, 0]])
```

### asnumpy.full

```python
asnumpy.full(shape: Union[int, Sequence[int]], value: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个填充特定值的数组。

返回一个新的 asnumpy.ndarray，其中所有元素都设置为 `value`。
形状和数据类型由 `shape` 和 `dtype` 参数控制。

**参数**
- `shape` (int 或 int 序列): 输出数组的形状。
- `value` (标量): 用于填充数组的值。
- `dtype` (数据类型, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 填充了指定值的数组。

**另请参阅**
- [`numpy.full`](https://numpy.org/doc/stable/reference/generated/numpy.full.html)
- [`asnumpy.full_like`](#asnumpyfull_like): 创建一个填充值匹配另一个数组的数组。
- [`asnumpy.zeros`](#asnumpyzeros): 创建一个零数组。
- [`asnumpy.ones`](#asnumpyones): 创建一个一数组。
- [`asnumpy.empty`](#asnumpyempty): 创建一个未初始化的数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.full((2, 2), 7)
array([[7, 7],
       [7, 7]])
>>> ap.full((2, 3), 3.5)
array([[3.5, 3.5, 3.5],
       [3.5, 3.5, 3.5]])
```

### asnumpy.full_like

```python
asnumpy.full_like(other: Any, value: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个填充特定值的数组，匹配另一个数组的形状。

**参数**
- `other` (类数组): 用于输出形状的数组。
- `value` (标量): 用于填充数组的值。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 填充了 `value` 且形状与 `other` 匹配的数组。

**另请参阅**
- [`numpy.full_like`](https://numpy.org/doc/stable/reference/generated/numpy.full_like.html)
- [`asnumpy.full`](#asnumpyfull): 从形状创建完整数组。
- [`asnumpy.zeros_like`](#asnumpyzeros_like): 创建一个匹配另一个数组的零数组。
- [`asnumpy.ones_like`](#asnumpyones_like): 创建一个匹配另一个数组的一数组。
- [`asnumpy.empty_like`](#asnumpyempty_like): 创建一个匹配另一个数组的未初始化数组。

**示例**
```python
>>> import asnumpy as ap
>>> x = ap.arange(4)
>>> ap.full_like(x, 9)
array([9, 9, 9, 9])
```

### asnumpy.empty

```python
asnumpy.empty(shape: Union[int, Sequence[int]], dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个未初始化的数组。

返回一个新的 asnumpy.ndarray，内容任意。
数组的形状和数据类型由参数确定。

**参数**
- `shape` (int 或 int 序列): 输出数组的形状。
- `dtype` (数据类型, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 具有未初始化值的数组（可能包含随机内存数据）。

**另请参阅**
- [`numpy.empty`](https://numpy.org/doc/stable/reference/generated/numpy.empty.html)
- [`asnumpy.empty_like`](#asnumpyempty_like): 创建一个匹配另一个数组的未初始化数组。
- [`asnumpy.zeros`](#asnumpyzeros): 创建一个零数组。
- [`asnumpy.ones`](#asnumpyones): 创建一个一数组。
- [`asnumpy.full`](#asnumpyfull): 创建一个具有指定值的完整数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.empty((2, 2))
array([[... , ...],
       [... , ...]])  # 值任意
```

### asnumpy.empty_like

```python
asnumpy.empty_like(prototype: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个匹配另一个数组形状的未初始化数组。

**参数**
- `prototype` (类数组): 用于输出形状的数组。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 具有未初始化值且形状与 `prototype` 相同的数组。

**另请参阅**
- [`numpy.empty_like`](https://numpy.org/doc/stable/reference/generated/numpy.empty_like.html)
- [`asnumpy.zeros_like`](#asnumpyzeros_like): 创建一个匹配另一个数组的零数组。
- [`asnumpy.ones_like`](#asnumpyones_like): 创建一个匹配另一个数组的一数组。
- [`asnumpy.full_like`](#asnumpyfull_like): 创建一个具有指定值的完整数组。
- [`asnumpy.empty`](#asnumpyempty): 从形状创建未初始化数组。

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.array([[1, 2], [3, 4]])
>>> ap.empty_like(a)
array([[... , ...],
       [... , ...]])  # 值任意
```

### asnumpy.eye

```python
asnumpy.eye(n: int, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个二维单位矩阵。

返回一个方形的 asnumpy.ndarray，主对角线上为一，
其他位置为零。

**参数**
- `n` (int): 矩阵的行数（和列数）。
- `dtype` (数据类型, 可选): 矩阵的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 形状为 (n, n) 的单位矩阵。

**另请参阅**
- [`numpy.eye`](https://numpy.org/doc/stable/reference/generated/numpy.eye.html)
- [`asnumpy.identity`](#asnumpyidentity): 用于创建单位数组的等效函数。
- [`diag`](https://numpy.org/doc/stable/reference/generated/numpy.diag.html): 提取或创建对角数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.eye(3)
array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])
```

### asnumpy.ones

```python
asnumpy.ones(shape: Union[int, Sequence[int]], dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个填充一的数组。

**参数**
- `shape` (int 或 int 序列): 输出数组的形状。
- `dtype` (数据类型, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 具有指定形状和数据类型的一数组。

**另请参阅**
- [`numpy.ones`](https://numpy.org/doc/stable/reference/generated/numpy.ones.html)
- [`asnumpy.ones_like`](#asnumpyones_like): 创建一个匹配另一个数组的一数组。
- [`asnumpy.zeros`](#asnumpyzeros): 创建一个零数组。
- [`asnumpy.full`](#asnumpyfull): 创建一个具有指定值的完整数组。
- [`asnumpy.empty`](#asnumpyempty): 创建一个未初始化的数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.ones(4)
array([1., 1., 1., 1.])
```

### asnumpy.ones_like

```python
asnumpy.ones_like(other: Any, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个匹配另一个数组形状的一数组。

**参数**
- `other` (类数组): 用于输出的数组形状。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 具有与 `other` 相同形状（和可选数据类型）的一数组。

**另请参阅**
- [`numpy.ones_like`](https://numpy.org/doc/stable/reference/generated/numpy.ones_like.html)
- [`asnumpy.zeros_like`](#asnumpyzeros_like): 创建一个匹配另一个数组的零数组。
- [`asnumpy.full_like`](#asnumpyfull_like): 创建一个具有指定值的完整数组。
- [`asnumpy.empty_like`](#asnumpyempty_like): 创建一个未初始化的数组。
- [`asnumpy.ones`](#asnumpyones): 从形状创建一数组。

**示例**
```python
>>> import asnumpy as ap
>>> x = ap.arange(6).reshape((2, 3))
>>> ap.ones_like(x)
array([[1, 1, 1],
       [1, 1, 1]])
```

### asnumpy.identity

```python
asnumpy.identity(n: int, dtype: Optional[np.dtype] = None) -> ndarray
```

创建一个方形单位矩阵。

**参数**
- `n` (int): 行数和列数。
- `dtype` (数据类型, 可选): 矩阵的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 形状为 (n, n) 的单位矩阵。

**示例**
```python
>>> import asnumpy as ap
>>> ap.identity(3)
array([[1., 0., 0.],
       [0., 1., 0.],
       [0., 0., 1.]])
```

### asnumpy.linspace

```python
asnumpy.linspace(
    start: Union[int, float],
    end: Union[int, float],
    steps: int = 50,
    dtype: Optional[np.dtype] = None,
) -> ndarray
```

在一个区间内生成均匀间隔的样本。

**参数**
- `start` (int 或 float): 序列的起始值。
- `end` (int 或 float): 序列的结束值。
- `steps` (int, 可选): 要生成的样本数。默认为 50。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 在 start 和 end 之间均匀间隔的样本数组。

**另请参阅**
- [`numpy.linspace`](https://numpy.org/doc/stable/reference/generated/numpy.linspace.html)
- [`arange`](https://numpy.org/doc/stable/reference/generated/numpy.arange.html): 生成具有固定步长的值。

**示例**
```python
>>> import asnumpy as ap
>>> ap.linspace(0, 1, 5)
array([0.  , 0.25, 0.5 , 0.75, 1.  ])