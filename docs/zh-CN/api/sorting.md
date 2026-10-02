# 排序函数

::: info
当前 API 文档站仅保留了一组代表性API。由于 AsNumpy 前端与文档体系仍在进行较大幅度整改，其余接口文档暂时隐藏，待前端稳定后再逐步补全。当前文档仅供参考。
:::

本模块提供数组元素的排序和排序相关函数。

## asnumpy.sort

```python
asnumpy.sort(a: ArrayLike, axis: int = -1, stable: bool = False) -> ndarray
```

将数组元素按升序排列。

此函数生成一个新数组，其元素沿指定轴从小到大排列。如果未指定轴，则默认使用最后一个轴。设置 `stable` 标志为 True 时，可确保相等元素的相对顺序被保留。

当前测试覆盖表明已验证支持 `int8`、`int16`、`int32`、`int64`、`uint8`、`float32`。`bool` 类型在测试中被标记为 `xfail`（CANN sort 算子不支持 bool），不是稳定支持场景。含 `NaN` 输入和空数组亦为 `xfail`。

**参数**
- `a` (ArrayLike): 要重新排列元素的输入数组。
- `axis` (int, 可选): 排序操作的维度。默认为最后一个维度 (-1)。当前原生绑定要求整数轴；`axis=None` 不会展平输入，尚不支持。
- `stable` (bool, 可选): 是否执行保持相等元素顺序的稳定排序。默认为 False。

**返回值**
- `ndarray`: 沿指定轴排序元素的新数组。形状与输入匹配。

**参见**
- [`numpy.sort`](https://numpy.org/doc/stable/reference/generated/numpy.sort.html): NumPy 数组排序等效函数。

::: warning
AsNumPy 目前未实现 NumPy 的 `kind` 或 `order` 参数。使用 `stable` 布尔值控制排序稳定性。
:::

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> arr = ap.ndarray.from_numpy(np.array([[3, 1], [2, 4]], dtype=np.int32))
>>> ap.sort(arr)
array([[1, 3],
       [2, 4]])
>>> ap.sort(arr, axis=0)
array([[2, 1],
       [3, 4]])
>>> ap.sort(arr, stable=True)
array([[1, 3],
       [2, 4]])
```

::: warning
当前 AsNumPy 包装器将 `axis` 直接传给只接收整数轴的原生绑定，与 `numpy.sort` 的 `axis=None` 行为不同。若需对全部元素排序，可先在 Host 显式展平，再上传并使用默认轴：

```python
>>> flat = ap.ndarray.from_numpy(arr.to_numpy().reshape(-1))
>>> ap.sort(flat).to_numpy()
array([1, 2, 3, 4], dtype=int32)
```

该替代方式会将数据复制到 Host，再复制回设备。
:::
