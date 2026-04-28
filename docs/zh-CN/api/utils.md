# 工具函数

::: info
当前 API 文档站仅保留了一组代表性API。由于 AsNumpy 前端与文档体系仍在进行较大幅度整改，其余接口文档暂时隐藏，待前端稳定后再逐步补全。当前文档仅供参考。
:::

本模块提供 asnumpy 的工具函数。

## asnumpy.broadcast_shape

```python
asnumpy.broadcast_shape(shape_a: Sequence[int], shape_b: Sequence[int]) -> tuple
```

计算两个输入形状广播后的结果形状。

**参数**
- `shape_a` (Sequence[int]): 第一个输入形状。
- `shape_b` (Sequence[int]): 第二个输入形状。

**返回值**
- `tuple`: 广播后的形状。

**抛出**
- `ValueError`: 如果形状无法一起广播。

**示例**
```python
>>> import asnumpy as anp
>>> anp.broadcast_shape((3, 1), (1, 4))
(3, 4)
>>> anp.broadcast_shape((5, 1, 3), (1, 4, 3))
(5, 4, 3)
```
