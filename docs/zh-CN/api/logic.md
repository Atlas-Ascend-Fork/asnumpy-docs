# 逻辑函数

## 真值测试

### asnumpy.all

```python
asnumpy.all(x: ArrayLike, axis: AxisLike = None, keepdims: bool = False) -> ndarray
```

测试是否所有元素都为 True。

**参数**
- `x` (ArrayLike): 要检查的输入数组。
- `axis` (AxisLike, 可选): 执行逻辑与归约的轴。
- `keepdims` (bool, 可选): 如果为 True，在结果中保留缩减的轴。

**返回值**
- `ndarray`: 指示所有元素是否都为 True 的布尔数组或标量。

**参见**
- [`numpy.all`](https://numpy.org/doc/stable/reference/generated/numpy.all.html)
- [`asnumpy.any`](#asnumpy-any)

**示例**
```python
>>> import asnumpy as ap
>>> ap.all(ap.array([True, True, True]))
array(True)
>>> ap.all(ap.array([True, False, True]))
array(False)
```

### asnumpy.any

```python
asnumpy.any(x: ArrayLike, axis: AxisLike = None, keepdims: bool = False) -> ndarray
```

测试是否有任何元素为 True。

**参数**
- `x` (ArrayLike): 要检查的输入数组。
- `axis` (AxisLike, 可选): 执行逻辑或归约的轴。
- `keepdims` (bool, 可选): 如果为 True，在结果中保留缩减的轴。

**返回值**
- `ndarray`: 指示是否有任何元素为 True 的布尔数组或标量。

**参见**
- [`numpy.any`](https://numpy.org/doc/stable/reference/generated/numpy.any.html)
- [`asnumpy.all`](#asnumpy-all)

**示例**
```python
>>> import asnumpy as ap
>>> ap.any(ap.array([False, False, True]))
array(True)
>>> ap.any(ap.array([False, False, False]))
array(False)
```

## 逻辑运算

### asnumpy.logical_and

```python
asnumpy.logical_and(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

对两个数组的对应元素应用布尔与逻辑。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。

**返回值**
- `ndarray`: 包含逻辑与结果的布尔数组。

**参见**
- [`numpy.logical_and`](https://numpy.org/doc/stable/reference/generated/numpy.logical_and.html)

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
asnumpy.logical_or(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

对两个数组的对应元素应用布尔或逻辑。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。

**返回值**
- `ndarray`: 包含逻辑或结果的布尔数组。

**参见**
- [`numpy.logical_or`](https://numpy.org/doc/stable/reference/generated/numpy.logical_or.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_or(True, False)
array(True)
```

### asnumpy.logical_not

```python
asnumpy.logical_not(x: ArrayLike) -> ndarray
```

反转每个数组元素的布尔值。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: 包含逻辑非结果的布尔数组。

**参见**
- [`numpy.logical_not`](https://numpy.org/doc/stable/reference/generated/numpy.logical_not.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_not(True)
array(False)
>>> ap.logical_not([True, False])
array([False,  True])
```

### asnumpy.logical_xor

```python
asnumpy.logical_xor(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

对两个数组的对应元素应用异或逻辑。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。

**返回值**
- `ndarray`: 包含逻辑异或结果的布尔数组。

**参见**
- [`numpy.logical_xor`](https://numpy.org/doc/stable/reference/generated/numpy.logical_xor.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_xor(True, False)
array(True)
```

## 比较

### asnumpy.greater

```python
asnumpy.greater(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

判断 x1 的元素是否大于 x2 的元素。

**参数**
- `x1` (ArrayLike): 第一个输入。
- `x2` (ArrayLike): 第二个输入。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含逐元素比较结果的数组。

**参见**
- [`numpy.greater`](https://numpy.org/doc/stable/reference/generated/numpy.greater.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.greater([4, 2], [2, 2])
array([ True, False])
```

### asnumpy.greater_equal

```python
asnumpy.greater_equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

判断 x1 的元素是否大于等于 x2 的元素。

**参数**
- `x1` (ArrayLike): 第一个输入。
- `x2` (ArrayLike): 第二个输入。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含逐元素比较结果的数组。

**参见**
- [`numpy.greater_equal`](https://numpy.org/doc/stable/reference/generated/numpy.greater_equal.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.greater_equal([4, 2, 1], [2, 2, 2])
array([ True,  True, False])
```

### asnumpy.less

```python
asnumpy.less(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

判断 x1 的元素是否小于 x2 的元素。

**参数**
- `x1` (ArrayLike): 第一个输入。
- `x2` (ArrayLike): 第二个输入。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含逐元素比较结果的数组。

**参见**
- [`numpy.less`](https://numpy.org/doc/stable/reference/generated/numpy.less.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.less([1, 2, 3], [2, 2, 2])
array([ True, False, False])
```

### asnumpy.less_equal

```python
asnumpy.less_equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

判断 x1 的元素是否小于等于 x2 的元素。

**参数**
- `x1` (ArrayLike): 第一个输入。
- `x2` (ArrayLike): 第二个输入。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含逐元素比较结果的数组。

**参见**
- [`numpy.less_equal`](https://numpy.org/doc/stable/reference/generated/numpy.less_equal.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.less_equal([1, 2, 3], [2, 2, 2])
array([ True,  True, False])
```

### asnumpy.equal

```python
asnumpy.equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素比较两个数组是否相等。

**参数**
- `x1` (ArrayLike): 第一个输入。
- `x2` (ArrayLike): 第二个输入。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含逐元素比较结果的数组。

**参见**
- [`numpy.equal`](https://numpy.org/doc/stable/reference/generated/numpy.equal.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.equal([1, 2, 3], [1, 4, 3])
array([ True, False,  True])
```

### asnumpy.not_equal

```python
asnumpy.not_equal(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素比较两个数组是否不相等。

**参数**
- `x1` (ArrayLike): 第一个输入。
- `x2` (ArrayLike): 第二个输入。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含逐元素比较结果的数组。

**参见**
- [`numpy.not_equal`](https://numpy.org/doc/stable/reference/generated/numpy.not_equal.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.not_equal([1, 2, 3], [1, 4, 3])
array([False,  True, False])
```

## 其他

### asnumpy.isfinite

```python
asnumpy.isfinite(x: ArrayLike) -> ndarray
```

识别哪些数组元素是常规数值（非无穷大或 NaN）。

**参数**
- `x` (ArrayLike): 要测试的输入数组。

**返回值**
- `ndarray`: 与 `x` 形状相同的布尔数组。

**参见**
- [`numpy.isfinite`](https://numpy.org/doc/stable/reference/generated/numpy.isfinite.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isfinite([1, np.inf, np.nan])
array([ True, False, False])
```

### asnumpy.isinf

```python
asnumpy.isinf(x: ArrayLike) -> ndarray
```

检测输入数组中的无穷大值（正无穷和负无穷）。

**参数**
- `x` (ArrayLike): 要测试的输入数组。

**返回值**
- `ndarray`: 指示无穷大值的布尔数组。

**参见**
- [`numpy.isinf`](https://numpy.org/doc/stable/reference/generated/numpy.isinf.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isinf([1, np.inf, -np.inf])
array([False,  True,  True])
```

### asnumpy.isneginf

```python
asnumpy.isneginf(x: ArrayLike) -> ndarray
```

识别数组中负无穷大的出现。

**参数**
- `x` (ArrayLike): 要测试的输入数组。

**返回值**
- `ndarray`: 指示负无穷大值的布尔数组。

**参见**
- [`numpy.isneginf`](https://numpy.org/doc/stable/reference/generated/numpy.isneginf.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isneginf([1, -np.inf, np.inf])
array([False,  True, False])
```

### asnumpy.isposinf

```python
asnumpy.isposinf(x: ArrayLike) -> ndarray
```

识别数组中正无穷大的出现。

**参数**
- `x` (ArrayLike): 要测试的输入数组。

**返回值**
- `ndarray`: 指示正无穷大值的布尔数组。

**参见**
- [`numpy.isposinf`](https://numpy.org/doc/stable/reference/generated/numpy.isposinf.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.isposinf([1, np.inf, -np.inf])
array([False,  True, False])
```
