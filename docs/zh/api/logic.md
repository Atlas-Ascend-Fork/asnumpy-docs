# 逻辑函数

<!-- docsify-toc:start -->
- [真值测试](#真值测试)
  - [asnumpy.all](#asnumpyall)
  - [asnumpy.any](#asnumpyany)
- [逻辑运算](#逻辑运算)
  - [asnumpy.logical_and](#asnumpylogical_and)
  - [asnumpy.logical_or](#asnumpylogical_or)
  - [asnumpy.logical_not](#asnumpylogical_not)
  - [asnumpy.logical_xor](#asnumpylogical_xor)
- [比较](#比较)
  - [asnumpy.greater](#asnumpygreater)
  - [asnumpy.greater_equal](#asnumpygreater_equal)
  - [asnumpy.less](#asnumpyless)
  - [asnumpy.less_equal](#asnumpyless_equal)
  - [asnumpy.equal](#asnumpyequal)
  - [asnumpy.not_equal](#asnumpynot_equal)
- [其他](#其他)
  - [asnumpy.isfinite](#asnumpyisfinite)
  - [asnumpy.isinf](#asnumpyisinf)
  - [asnumpy.isneginf](#asnumpyisneginf)
  - [asnumpy.isposinf](#asnumpyisposinf)
<!-- docsify-toc:end -->

## 真值测试

### asnumpy.all

```python
asnumpy.all(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

测试所有元素是否评估为 True。

检查输入数组 `x` 中的所有元素是否评估为 True。
此检查可以在整个数组上执行，也可以沿指定轴执行。

**参数**
- `x` (asnumpy.ndarray): 要检查的输入数组。
- `axis` (int 或 int 序列, 可选): 执行逻辑 AND 归约化的轴或轴。如果为 None，则在所有维度上执行归约化。负值从最后一个轴开始计数。
- `keepdims` (bool, 可选): 如果为 True，则缩减的轴在结果中保留为大小为一的维度。这允许结果正确广播到输入数组。

**返回值**
- `asnumpy.ndarray`: 一个布尔数组或标量，指示所有元素是否评估为 True。如果 `axis` 为 None，则返回标量布尔值。否则返回布尔值数组。

**另请参阅**
- [`numpy.all`](https://numpy.org/doc/stable/reference/generated/numpy.all.html)
- [`asnumpy.any`](#asnumpyany)

**示例**
```python
>>> import asnumpy as ap
>>> ap.all(ap.array([True, True, True]))
array(True)
>>> ap.all(ap.array([True, False, True]))
array(False)
>>> mat = ap.array([[True, False], [True, True]])
>>> ap.all(mat, axis=0)
array([ True, False])
```

### asnumpy.any

```python
asnumpy.any(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

测试是否有任何元素评估为 True。

检查输入数组 `x` 中是否有任何元素评估为 True。
此检查可以在整个数组上执行，也可以沿指定轴执行。

**参数**
- `x` (asnumpy.ndarray): 要检查的输入数组。
- `axis` (int 或 int 序列, 可选): 执行逻辑 OR 归约化的轴或轴。如果为 None，则在所有维度上执行归约化。负值从最后一个轴开始计数。
- `keepdims` (bool, 可选): 如果为 True，则缩减的轴在结果中保留为大小为一的维度。这允许结果正确广播到输入数组。

**返回值**
- `asnumpy.ndarray`: 一个布尔数组或标量，指示是否有任何元素评估为 True。如果 `axis` 为 None，则返回标量布尔值。否则返回布尔值数组。

**另请参阅**
- [`numpy.any`](https://numpy.org/doc/stable/reference/generated/numpy.any.html)
- [`asnumpy.all`](#asnumpyall)

**示例**
```python
>>> import asnumpy as ap
>>> ap.any(ap.array([False, False, True]))
array(True)
>>> ap.any(ap.array([False, False, False]))
array(False)
>>> mat = ap.array([[True, False], [False, False]])
>>> ap.any(mat, axis=1)
array([ True, False])
```

## 逻辑运算

### asnumpy.logical_and

```python
asnumpy.logical_and(x1: ndarray, x2: ndarray) -> ndarray
```

计算两个数组的元素级逻辑与。

对 `x1` 和 `x2` 的元素执行逻辑与操作。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (asnumpy.ndarray): 第一个输入数组。
- `x2` (asnumpy.ndarray): 第二个输入数组。

**返回值**
- `asnumpy.ndarray`: 包含逻辑与操作结果的布尔数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.logical_and`](https://numpy.org/doc/stable/reference/generated/numpy.logical_and.html)
- [`asnumpy.logical_or`](#asnumpylogical_or)
- [`asnumpy.logical_not`](#asnumpylogical_not)
- [`asnumpy.logical_xor`](#asnumpylogical_xor)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_and(True, False)
array(False)
>>> ap.logical_and([True, False], [True, True])
array([ True, False])
```

### asnumpy.logical_or

```python
asnumpy.logical_or(x1: ndarray, x2: ndarray) -> ndarray
```

计算两个数组的元素级逻辑或。

对 `x1` 和 `x2` 的元素执行逻辑或操作。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (asnumpy.ndarray): 第一个输入数组。
- `x2` (asnumpy.ndarray): 第二个输入数组。

**返回值**
- `asnumpy.ndarray`: 包含逻辑或操作结果的布尔数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.logical_or`](https://numpy.org/doc/stable/reference/generated/numpy.logical_or.html)
- [`asnumpy.logical_and`](#asnumpylogical_and)
- [`asnumpy.logical_not`](#asnumpylogical_not)
- [`asnumpy.logical_xor`](#asnumpylogical_xor)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_or(True, False)
array(True)
>>> ap.logical_or([True, False], [False, False])
array([ True, False])
```

### asnumpy.logical_not

```python
asnumpy.logical_not(x: ndarray) -> ndarray
```

计算数组的元素级逻辑非。

对 `x` 的元素执行逻辑非操作。

**参数**
- `x` (asnumpy.ndarray): 输入数组。

**返回值**
- `asnumpy.ndarray`: 包含逻辑非操作结果的布尔数组。形状与 `x` 相同。

**另请参阅**
- [`numpy.logical_not`](https://numpy.org/doc/stable/reference/generated/numpy.logical_not.html)
- [`asnumpy.logical_and`](#asnumpylogical_and)
- [`asnumpy.logical_or`](#asnumpylogical_or)
- [`asnumpy.logical_xor`](#asnumpylogical_xor)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_not(True)
array(False)
>>> ap.logical_not([True, False])
array([False, True])
```

### asnumpy.logical_xor

```python
asnumpy.logical_xor(x1: ndarray, x2: ndarray) -> ndarray
```

计算两个数组的元素级逻辑异或。

对 `x1` 和 `x2` 的元素执行逻辑异或（互斥或）操作。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (asnumpy.ndarray): 第一个输入数组。
- `x2` (asnumpy.ndarray): 第二个输入数组。

**返回值**
- `asnumpy.ndarray`: 包含逻辑异或操作结果的布尔数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.logical_xor`](https://numpy.org/doc/stable/reference/generated/numpy.logical_xor.html)
- [`asnumpy.logical_and`](#asnumpylogical_and)
- [`asnumpy.logical_or`](#asnumpylogical_or)
- [`asnumpy.logical_not`](#asnumpylogical_not)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_xor(True, False)
array(True)
>>> ap.logical_xor([True, True, False, False], [True, False, True, False])
array([False,  True,  True, False])
```

## 比较

### asnumpy.greater

```python
asnumpy.greater(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

返回 (x1 > x2) 的真值。

逐元素比较两个数组，并在 `x1` 大于 `x2` 时返回 True，否则返回 False。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (类数组): 第一个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x2` 形状的对象。
- `x2` (类数组): 第二个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x1` 形状的对象。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。如果未指定，则输出为布尔数组。

**返回值**
- `asnumpy.ndarray`: 包含逐元素比较结果的数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.greater`](https://numpy.org/doc/stable/reference/generated/numpy.greater.html)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**示例**
```python
>>> import asnumpy as ap
>>> ap.greater([4, 2], [2, 2])
array([ True, False])
>>> ap.greater([1, 2], [3, 1])
array([False,  True])
```

### asnumpy.greater_equal

```python
asnumpy.greater_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

返回 (x1 >= x2) 的真值。

逐元素比较两个数组，并在 `x1` 大于或等于 `x2` 时返回 True，否则返回 False。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (类数组): 第一个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x2` 形状的对象。
- `x2` (类数组): 第二个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x1` 形状的对象。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。如果未指定，则输出为布尔数组。

**返回值**
- `asnumpy.ndarray`: 包含逐元素比较结果的数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.greater_equal`](https://numpy.org/doc/stable/reference/generated/numpy.greater_equal.html)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**示例**
```python
>>> import asnumpy as ap
>>> ap.greater_equal([4, 2, 1], [2, 2, 2])
array([ True, True, False])
```

### asnumpy.less

```python
asnumpy.less(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

返回 (x1 < x2) 的真值。

逐元素比较两个数组，并在 `x1` 小于 `x2` 时返回 True，否则返回 False。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (类数组): 第一个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x2` 形状的对象。
- `x2` (类数组): 第二个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x1` 形状的对象。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。如果未指定，则输出为布尔数组。

**返回值**
- `asnumpy.ndarray`: 包含逐元素比较结果的数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.less`](https://numpy.org/doc/stable/reference/generated/numpy.less.html)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less_equal`](#asnumpyless_equal)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**示例**
```python
>>> import asnumpy as ap
>>> ap.less([1, 2], [2, 2])
array([ True, False])
```

### asnumpy.less_equal

```python
asnumpy.less_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

返回 (x1 <= x2) 的真值。

逐元素比较两个数组，并在 `x1` 小于或等于 `x2` 时返回 True，否则返回 False。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (类数组): 第一个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x2` 形状的对象。
- `x2` (类数组): 第二个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x1` 形状的对象。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。如果未指定，则输出为布尔数组。

**返回值**
- `asnumpy.ndarray`: 包含逐元素比较结果的数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.less_equal`](https://numpy.org/doc/stable/reference/generated/numpy.less_equal.html)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.not_equal`](#asnumpynot_equal)

**示例**
```python
>>> import asnumpy as ap
>>> ap.less_equal([4, 2, 1], [2, 2, 2])
array([False,  True, True])
```

### asnumpy.equal

```python
asnumpy.equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

返回 (x1 == x2) 的真值。

逐元素比较两个数组，并在 `x1` 等于 `x2` 时返回 True，否则返回 False。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (类数组): 第一个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x2` 形状的对象。
- `x2` (类数组): 第二个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x1` 形状的对象。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。如果未指定，则输出为布尔数组。

**返回值**
- `asnumpy.ndarray`: 包含逐元素比较结果的数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.equal`](https://numpy.org/doc/stable/reference/generated/numpy.equal.html)
- [`asnumpy.not_equal`](#asnumpynot_equal)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)

**示例**
```python
>>> import asnumpy as ap
>>> ap.equal([1, 2], [1, 3])
array([ True, False])
```

### asnumpy.not_equal

```python
asnumpy.not_equal(x1: Union[ndarray, Any], x2: Union[ndarray, Any], dtype: Optional[np.dtype] = None) -> ndarray
```

返回 (x1 != x2) 的真值。

逐元素比较两个数组，并在 `x1` 不等于 `x2` 时返回 True，否则返回 False。
输入数组必须能够广播到公共形状。

**参数**
- `x1` (类数组): 第一个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x2` 形状的对象。
- `x2` (类数组): 第二个输入。可以是 asnumpy.ndarray、Python 标量或任何可以广播到 `x1` 形状的对象。
- `dtype` (数据类型, 可选): 输出数组的所需数据类型。如果未指定，则输出为布尔数组。

**返回值**
- `asnumpy.ndarray`: 包含逐元素比较结果的数组。形状通过广播 `x1` 和 `x2` 确定。

**另请参阅**
- [`numpy.not_equal`](https://numpy.org/doc/stable/reference/generated/numpy.not_equal.html)
- [`asnumpy.equal`](#asnumpyequal)
- [`asnumpy.greater`](#asnumpygreater)
- [`asnumpy.greater_equal`](#asnumpygreater_equal)
- [`asnumpy.less`](#asnumpyless)
- [`asnumpy.less_equal`](#asnumpyless_equal)

**示例**
```python
>>> import asnumpy as ap
>>> ap.not_equal([1, 2], [1, 3])
array([False, True])
```

## 其他

### asnumpy.isfinite

```python
asnumpy.isfinite(x: ndarray) -> ndarray
```

逐元素测试有限性。

确定输入数组 `x` 的每个元素是否为有限值。
如果元素不是正无穷大、负无穷大或 NaN（不是数字），则认为该元素是有限的。

**参数**
- `x` (asnumpy.ndarray): 要测试的输入数组。

**返回值**
- `asnumpy.ndarray`: 与 `x` 形状相同的布尔数组。元素有限时为 True，否则为 False。

**另请参阅**
- [`numpy.isfinite`](https://numpy.org/doc/stable/reference/generated/numpy.isfinite.html)
- [`asnumpy.isinf`](#asnumpyisinf)
- [`asnumpy.isneginf`](#asnumpyisneginf)
- [`asnumpy.isposinf`](#asnumpyisposinf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isfinite(ap.array([1, np.inf, -np.inf, np.nan]))
array([ True, False, False])
```

### asnumpy.isinf

```python
asnumpy.isinf(x: ndarray) -> ndarray
```

逐元素测试无穷大性。

确定输入数组 `x` 的每个元素是否为正无穷大或负无穷大。

**参数**
- `x` (asnumpy.ndarray): 要测试的输入数组。

**返回值**
- `asnumpy.ndarray`: 与 `x` 形状相同的布尔数组。元素为正无穷大或负无穷大时为 True，否则为 False。

**另请参阅**
- [`numpy.isinf`](https://numpy.org/doc/stable/reference/generated/numpy.isinf.html)
- [`asnumpy.isneginf`](#asnumpyisneginf)
- [`asnumpy.isposinf`](#asnumpyisposinf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)
- [`asnumpy.isfinite`](#asnumpyisfinite)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isinf(ap.array([1, np.inf, -np.inf, np.nan]))
array([False, True, True, False])
```

### asnumpy.isneginf

```python
asnumpy.isneginf(x: ndarray) -> ndarray
```

逐元素测试负无穷大性。

确定输入数组 `x` 的每个元素是否为负无穷大。

**参数**
- `x` (asnumpy.ndarray): 要测试的输入数组。

**返回值**
- `asnumpy.ndarray`: 与 `x` 形状相同的布尔数组。元素为负无穷大时为 True，否则为 False。

**另请参阅**
- [`numpy.isneginf`](https://numpy.org/doc/stable/reference/generated/numpy.isneginf.html)
- [`asnumpy.isinf`](#asnumpyisinf)
- [`asnumpy.isposinf`](#asnumpyisposinf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)
- [`asnumpy.isfinite`](#asnumpyisfinite)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isneginf(ap.array([1, np.inf, -np.inf, np.nan]))
array([False, False, True, False])
```

### asnumpy.isposinf

```python
asnumpy.isposinf(x: ndarray) -> ndarray
```

逐元素测试正无穷大性。

确定输入数组 `x` 的每个元素是否为正无穷大。

**参数**
- `x` (asnumpy.ndarray): 要测试的输入数组。

**返回值**
- `asnumpy.ndarray`: 与 `x` 形状相同的布尔数组。元素为正无穷大时为 True，否则为 False。

**另请参阅**
- [`numpy.isposinf`](https://numpy.org/doc/stable/reference/generated/numpy.isposinf.html)
- [`numpy.isinf`](#asnumpyisinf)
- [`asnumpy.isneginf`](#asnumpyisneginf)
- [`numpy.isnan`](https://numpy.org/doc/stable/reference/generated/numpy.isnan.html)
- [`asnumpy.isfinite`](#asnumpyisfinite)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isposinf(ap.array([1, np.inf, -np.inf, np.nan]))
array([False, True, False, False])