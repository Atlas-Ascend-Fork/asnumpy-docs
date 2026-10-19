# 统计函数

## 平均值与方差

### asnumpy.mean

```python
asnumpy.mean(a: ArrayLike, axis: Optional[int] = None, keepdims: bool = False, dtype: DTypeLike = None) -> ndarray | float
```

计算数组元素的平均值。

此函数确定数组内数值的集中趋势。未指定轴时，所有元素参与计算得到单个标量结果。指定轴则将计算限制在该特定维度上。

**参数**
- `a` (ArrayLike): 用于计算平均值的输入数据。
- `axis` (int 或 None, 可选): 执行平均计算的单个维度。省略此参数则对所有元素求平均。当前原生轴重载只接受一个整数（可以为负轴），不支持轴元组或列表。需要在 Host 上按多个轴求平均时，请显式调用 `.to_numpy()` 后使用 `numpy.mean`。
- `keepdims` (bool, 可选): 指定 axis 时，在输出形状中保留长度为1的缩减维度。默认为 False。当前实现中，axis=None 时无论 keepdims 取何值都返回标量。
- `dtype` (DTypeLike, 可选): 计算的数值精度。省略时，当前实现使用输入 dtype，整数输入也不例外，不会自动提升为 float64。需要保留小数均值时，请使用浮点输入，或显式指定浮点 dtype（例如 np.float32）。

**返回值**
- `ndarray` 或 NumPy 标量: 未指定 axis 时返回 NumPy 标量（如 `np.float32`）；指定 axis 时返回 `ndarray`。

::: tip
当前测试覆盖了 `axis`（含负 axis）、`keepdims`、`dtype` 参数、空数组输入、NaN 传播以及非法 axis 抛异常等场景。
:::

**参见**
- [`numpy.mean`](https://numpy.org/doc/stable/reference/generated/numpy.mean.html): NumPy 均值计算的等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> data = ap.ndarray.from_numpy(np.array([[5, 8], [2, 9]], dtype=np.float32))
>>> ap.mean(data)
np.float32(6.0)
>>> ap.mean(data, axis=0).to_numpy()
array([3.5, 8.5], dtype=float32)
>>> ap.mean(data, axis=1).to_numpy()
array([6.5, 5.5], dtype=float32)
>>> ap.mean(data, axis=0, keepdims=True).to_numpy()
array([[3.5, 8.5]], dtype=float32)
```
