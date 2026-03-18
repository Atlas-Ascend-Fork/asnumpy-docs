# 逻辑函数

[[toc]]

## 真值测试

### asnumpy.all

```python
asnumpy.all(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

测试是否所有元素都为 True。

**参数**
- `x` (asnumpy.ndarray): 要检查的输入数组。
- `axis` (int 或 int 序列, 可选): 执行逻辑与归约的轴。
- `keepdims` (bool, 可选): 如果为 True，在结果中保留缩减的轴。

**返回值**
- `asnumpy.ndarray`: 指示所有元素是否都为 True 的布尔数组或标量。

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
asnumpy.any(x: ndarray, axis: Optional[Union[int, Sequence[int]]] = None, keepdims: bool = False) -> ndarray
```

测试是否有任何元素为 True。

**示例**
```python
>>> import asnumpy as ap
>>> ap.any(ap.array([False, False, True]))
array(True)
```

## 逻辑运算

### asnumpy.logical_and

```python
asnumpy.logical_and(x1: ndarray, x2: ndarray) -> ndarray
```

逐元素计算两个数组的逻辑与。

**示例**
```python
>>> import asnumpy as ap
>>> ap.logical_and([True, False], [True, True])
array([ True, False])
```

### asnumpy.logical_or

```python
asnumpy.logical_or(x1: ndarray, x2: ndarray) -> ndarray
```

逐元素计算两个数组的逻辑或。

### asnumpy.logical_not

```python
asnumpy.logical_not(x: ndarray) -> ndarray
```

逐元素计算数组的逻辑非。

### asnumpy.logical_xor

```python
asnumpy.logical_xor(x1: ndarray, x2: ndarray) -> ndarray
```

逐元素计算两个数组的逻辑异或。

## 比较

### asnumpy.greater

```python
asnumpy.greater(x1: Union[ndarray, Any], x2: Union[ndarray, Any]) -> ndarray
```

逐元素返回 (x1 > x2) 的真值。

**示例**
```python
>>> import asnumpy as ap
>>> ap.greater([4, 2], [2, 2])
array([ True, False])
```

### asnumpy.greater_equal

```python
asnumpy.greater_equal(x1, x2) -> ndarray
```

逐元素返回 (x1 >= x2) 的真值。

### asnumpy.less

```python
asnumpy.less(x1, x2) -> ndarray
```

逐元素返回 (x1 < x2) 的真值。

### asnumpy.less_equal

```python
asnumpy.less_equal(x1, x2) -> ndarray
```

逐元素返回 (x1 <= x2) 的真值。

### asnumpy.equal

```python
asnumpy.equal(x1, x2) -> ndarray
```

逐元素返回 (x1 == x2)。

### asnumpy.not_equal

```python
asnumpy.not_equal(x1, x2) -> ndarray
```

逐元素返回 (x1 != x2)。

## 其他

### asnumpy.isfinite

```python
asnumpy.isfinite(x: ndarray) -> ndarray
```

逐元素测试是否为有限值。

### asnumpy.isinf

```python
asnumpy.isinf(x: ndarray) -> ndarray
```

逐元素测试是否为无穷大。

### asnumpy.isneginf

```python
asnumpy.isneginf(x: ndarray) -> ndarray
```

逐元素测试是否为负无穷大。

### asnumpy.isposinf

```python
asnumpy.isposinf(x: ndarray) -> ndarray
```

逐元素测试是否为正无穷大。
