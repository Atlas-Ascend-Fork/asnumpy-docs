# 工具函数

本模块提供 asnumpy 的工具函数。

## asnumpy.broadcast_shape

```python
asnumpy.broadcast_shape(shape_a: ndarray, shape_b: ndarray) -> list[int]
```

计算两个 AsNumpy 数组广播后的结果形状。

当前接口接收数组，不能直接传入形状元组。若只需在 Host 上计算形状，
可使用 `numpy.broadcast_shapes(shape_a, shape_b)`。

**参数**
- `shape_a` (ndarray): 第一个输入数组。
- `shape_b` (ndarray): 第二个输入数组。

**返回值**
- `list[int]`: 广播后的各维大小。

**抛出**
- `ValueError`: 如果形状无法一起广播。

**示例**
```python
>>> import asnumpy as anp
>>> import numpy as np
>>> a = anp.ndarray.from_numpy(np.zeros((3, 1), dtype=np.float32))
>>> b = anp.ndarray.from_numpy(np.zeros((1, 4), dtype=np.float32))
>>> anp.broadcast_shape(a, b)
[3, 4]
>>> a = anp.ndarray.from_numpy(np.zeros((5, 1, 3), dtype=np.float32))
>>> b = anp.ndarray.from_numpy(np.zeros((1, 4, 3), dtype=np.float32))
>>> anp.broadcast_shape(a, b)
[5, 4, 3]
```
