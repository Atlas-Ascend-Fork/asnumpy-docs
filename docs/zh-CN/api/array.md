# 数组操作

::: info
当前 API 文档站仅保留了一组代表性API。由于 AsNumpy 前端与文档体系仍在进行较大幅度整改，其余接口文档暂时隐藏，待前端稳定后再逐步补全。当前文档仅供参考。
:::

## asnumpy.zeros

```python
asnumpy.zeros(shape: ShapeLike, dtype: DTypeLike = None) -> ndarray
```

创建一个用零值初始化的数组。

此函数分配一个具有指定形状的新 `asnumpy.ndarray`，并将所有元素填充为零。数组在 asnumpy 使用的当前执行设备上创建。

**参数**
- `shape` (ShapeLike, int 或 int 序列): 指定输出数组的维度。单个整数创建一维数组，序列定义多维形状。
- `dtype` (DTypeLike, 可选): 返回数组的数据类型。如果未提供，则使用默认数值类型。

**返回值**
- `ndarray`: 所有元素都设置为零且形状与给定 `shape` 参数匹配的数组。

**参见**
- [`numpy.zeros`](https://numpy.org/doc/stable/reference/generated/numpy.zeros.html): NumPy 创建零数组的等效函数。

::: tip
返回的数组由 asnumpy 分配，根据运行时配置可能驻留在加速器设备上。
:::

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
asnumpy.zeros_like(other: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

创建一个与输入维度匹配的零初始化数组。

此函数返回一个新的 `asnumpy.ndarray`，其形状与输入对象匹配，所有元素都初始化为零。

**参数**
- `other` (ArrayLike): 提供输出数组形状的参考对象。
- `dtype` (DTypeLike, 可选): 返回数组的数据类型。未显式指定时通常按输入推断；在当前 asnumpy 测试用例中，`*_like` 系列通常显式传入 `dtype` 以确保行为与 NumPy 对齐。

**返回值**
- `ndarray`: 填充零且与 `other` 形状相同的数组。

**参见**
- [`asnumpy.zeros`](#asnumpy-zeros)
- [`numpy.zeros_like`](https://numpy.org/doc/stable/reference/generated/numpy.zeros_like.html)

**示例**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.int32))
>>> ap.zeros_like(x, dtype=x.dtype)
array([[0, 0],
       [0, 0]])
```

## asnumpy.full

```python
asnumpy.full(shape: ShapeLike, value: ScalarLike, dtype: DTypeLike = None) -> ndarray
```

创建一个填充特定值的数组。

返回一个新的 `asnumpy.ndarray`，其中所有元素都设置为 `value`。形状和 dtype 由 `shape` 和 `dtype` 参数控制。

**参数**
- `shape` (ShapeLike, int 或 int 序列): 输出数组的形状。
- `value` (ScalarLike): 填充数组的值。
- `dtype` (DTypeLike, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 填充指定值的数组。

::: tip
当前测试覆盖表明，`full` 已验证支持常见浮点、带符号整数、`uint8` 与 `bool` 类型；`uint16` 与复数类型未在当前实现中支持。
:::

**参见**
- [`numpy.full`](https://numpy.org/doc/stable/reference/generated/numpy.full.html)
- [`asnumpy.full_like`](#asnumpy-full-like): 创建与另一个数组形状匹配的填充数组。
- [`asnumpy.zeros`](#asnumpy-zeros): 创建零数组。
- [`asnumpy.ones`](#asnumpy-ones): 创建 1 数组。

**示例**
```python
>>> import asnumpy as ap
>>> ap.full((2, 2), 7, dtype=ap.int32)
array([[7, 7],
       [7, 7]])
>>> ap.full((2, 3), 3.5, dtype=ap.float32)
array([[3.5, 3.5, 3.5],
       [3.5, 3.5, 3.5]])
```

## asnumpy.full_like

```python
asnumpy.full_like(other: ArrayLike, value: ScalarLike, dtype: DTypeLike = None) -> ndarray
```

创建一个填充标量值的新数组，从提供的数组继承形状。

**参数**
- `other` (ArrayLike): 用于输出形状的数组。
- `value` (ScalarLike): 填充数组的值。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。在当前 asnumpy 测试用例中，`full_like` 通常显式传入该参数。

**返回值**
- `asnumpy.ndarray`: 填充 `value` 且与 `other` 形状匹配的数组。

::: tip
当前测试覆盖表明，`full_like` 已验证支持常见浮点、带符号整数、`uint8` 与 `bool` 类型；`uint16` 未在当前实现中支持。
:::

**参见**
- [`numpy.full_like`](https://numpy.org/doc/stable/reference/generated/numpy.full_like.html)
- [`asnumpy.full`](#asnumpy-full): 从形状创建填充数组。

**示例**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array([1, 2, 3, 4], dtype=np.int32))
>>> ap.full_like(x, 9, dtype=x.dtype)
array([9, 9, 9, 9])
```

## asnumpy.empty

```python
asnumpy.empty(shape: ShapeLike, dtype: DTypeLike = None) -> ndarray
```

分配一个不初始化元素值的新数组。

返回一个具有任意内容的新 `asnumpy.ndarray`。数组形状和 dtype 由参数决定。

**参数**
- `shape` (ShapeLike, int 或 int 序列): 输出数组的形状。
- `dtype` (DTypeLike, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 具有未初始化值的数组，其内容未定义。

**参见**
- [`numpy.empty`](https://numpy.org/doc/stable/reference/generated/numpy.empty.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.empty((2, 2))
array([[... , ...],
       [... , ...]])
```

::: tip
上面的输出仅为示意。`empty` 返回的元素值未定义，不应依赖其具体内容。
:::

## asnumpy.empty_like

```python
asnumpy.empty_like(prototype: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

分配一个与输入维度相同但未初始化的数组。

**参数**
- `prototype` (ArrayLike): 用于输出形状的数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。在当前 asnumpy 测试用例中，`empty_like` 通常显式传入该参数。

**返回值**
- `asnumpy.ndarray`: 具有未初始化值且与 `prototype` 形状相同的数组。

**参见**
- [`numpy.empty_like`](https://numpy.org/doc/stable/reference/generated/numpy.empty_like.html)

**示例**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> a = ap.ndarray.from_numpy(np.array([[1, 2], [3, 4]], dtype=np.int32))
>>> ap.empty_like(a, dtype=a.dtype)
array([[... , ...],
       [... , ...]])
```

::: tip
上面的输出仅为示意。`empty_like` 返回的元素值未定义，不应依赖其具体内容。
:::

## asnumpy.eye

```python
asnumpy.eye(n: int, dtype: DTypeLike = None) -> ndarray
```

生成一个对角线为 1、其他位置为 0 的 2-D 数组。

生成一个对角线元素为 1、其他位置为 0 的方阵。

**参数**
- `n` (int): 矩阵的行数（和列数）。
- `dtype` (DTypeLike, 可选): 矩阵的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 形状为 `(n, n)` 的单位矩阵。

::: tip
当前测试覆盖表明，`eye` 已验证支持 `float32`、常见带符号整数、`uint8` 与 `bool`；`float64` 与 `uint16` 未在当前实现中支持。
:::

**参见**
- [`numpy.eye`](https://numpy.org/doc/stable/reference/generated/numpy.eye.html)
- [`asnumpy.identity`](#asnumpy-identity): 创建单位数组的等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.eye(3, dtype=ap.int32)
array([[1, 0, 0],
       [0, 1, 0],
       [0, 0, 1]])
```

## asnumpy.ones

```python
asnumpy.ones(shape: ShapeLike, dtype: DTypeLike = None) -> ndarray
```

创建一个填充 1 的数组。

**参数**
- `shape` (ShapeLike, int 或 int 序列): 输出数组的形状。
- `dtype` (DTypeLike, 可选): 数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 具有指定形状和 dtype 的 1 数组。

::: tip
当前测试覆盖表明，`ones` 已验证支持 `float32`、`float64`、常见带符号整数、`uint8` 与 `bool`；不支持 `float16`、`uint16/32/64`、`complex`，并非所有 NumPy dtype 都已在当前实现中验证支持。
:::

**参见**
- [`numpy.ones`](https://numpy.org/doc/stable/reference/generated/numpy.ones.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.ones(4, dtype=ap.float32)
array([1., 1., 1., 1.])
```

## asnumpy.ones_like

```python
asnumpy.ones_like(other: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

创建一个与输入维度匹配的 1 填充数组。

**参数**
- `other` (ArrayLike): 用于输出形状的数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。在当前 asnumpy 测试用例中，`ones_like` 通常显式传入该参数。

**返回值**
- `asnumpy.ndarray`: 与 `other` 形状相同（以及可选的 dtype）的 1 数组。

::: tip
当前测试覆盖表明，`ones_like` 已验证支持 `float32`、`float64`、常见带符号整数、`uint8` 与 `bool`；并非所有 NumPy dtype 都已在当前实现中验证支持。
:::

**参见**
- [`numpy.ones_like`](https://numpy.org/doc/stable/reference/generated/numpy.ones_like.html)

**示例**
```python
>>> import numpy as np
>>> import asnumpy as ap
>>> x = ap.ndarray.from_numpy(np.array([[0, 1, 2], [3, 4, 5]], dtype=np.int32))
>>> ap.ones_like(x, dtype=x.dtype)
array([[1, 1, 1],
       [1, 1, 1]])
```

## asnumpy.identity

```python
asnumpy.identity(n: int, dtype: DTypeLike = None) -> ndarray
```

生成给定大小的单位矩阵。

**参数**
- `n` (int): 行数和列数。
- `dtype` (DTypeLike, 可选): 矩阵的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 形状为 `(n, n)` 的单位矩阵。

::: tip
当前测试覆盖表明，`identity` 已验证支持 `float32`、常见带符号整数、`uint8` 与 `bool`；`float64` 与 `uint16` 未在当前实现中支持。
:::

**示例**
```python
>>> import asnumpy as ap
>>> ap.identity(3, dtype=ap.int32)
array([[1, 0, 0],
       [0, 1, 0],
       [0, 0, 1]])
```
<!--
## asnumpy.linspace

```python
asnumpy.linspace(
    start: ScalarLike,
    end: ScalarLike,
    steps: int = 50,
    dtype: DTypeLike = None,
) -> ndarray
```

生成在两个端点之间线性插值的值序列。

**参数**
- `start` (ScalarLike, int 或 float): 序列的起始值。
- `end` (ScalarLike, int 或 float): 序列的结束值。
- `steps` (int, 可选): 要生成的样本数。默认为 50。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: start 和 end 之间均匀间隔样本的数组。

**参见**
- [`numpy.linspace`](https://numpy.org/doc/stable/reference/generated/numpy.linspace.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.linspace(0, 1, 5)
array([0.  , 0.25, 0.5 , 0.75, 1.  ])
```
-->