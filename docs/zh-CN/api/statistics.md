# 统计函数

::: info
当前 API 文档站仅保留了一组代表性API。由于 AsNumpy 前端与文档体系仍在进行较大幅度整改，其余接口文档暂时隐藏，待前端稳定后再逐步补全。当前文档仅供参考。
:::

## 平均值与方差

### asnumpy.mean

```python
asnumpy.mean(a: ArrayLike, axis: AxisLike = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

计算数组元素的平均值。

此函数确定数组内数值的集中趋势。未指定轴时，所有元素参与计算得到单个标量结果。指定轴则将计算限制在该特定维度上。

**参数**
- `a` (ArrayLike): 用于计算平均值的输入数据。
- `axis` (AxisLike, int 或 int 元组, 可选): 执行平均计算的维度。省略此参数则对所有元素求平均。
- `keepdims` (bool, 可选): 启用时，在输出形状中保留长度为1的缩减维度。默认为 False。
- `dtype` (DTypeLike, 可选): 计算的数值精度。整数输入默认使用 float64；浮点输入保持原始精度。

**返回值**
- `ndarray` 或 `float`: 计算得到的平均值。

**参见**
- [`numpy.mean`](https://numpy.org/doc/stable/reference/generated/numpy.mean.html): NumPy 均值计算的等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> data = ap.ndarray.from_numpy(np.array([[5, 8], [2, 9]], dtype=np.int32))
>>> ap.mean(data)
6.0
>>> ap.mean(data, axis=0)
array([3.5, 8.5])
>>> ap.mean(data, axis=1)
array([6.5, 5.5])
>>> ap.mean(data, keepdims=True)
array([[6.]])
```
