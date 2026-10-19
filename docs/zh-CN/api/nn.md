# 神经网络函数

## 激活函数

### asnumpy.softmax

```python
asnumpy.softmax(x: ArrayLike, axis: int = -1, dtype: DTypeLike = None) -> ndarray
```

计算 softmax 函数。

softmax 函数通过计算每个元素的指数除以集合中所有元素指数之和来转换集合中的每个元素。这会产生一个概率分布。

当前测试覆盖表明已验证支持 `float32` 和 `float64`。空数组在测试中被标记为 `xfail`（NPU 算子暂不支持空数组），不是稳定支持场景。

**参数**
- `x` (ArrayLike): 输入数组。
- `axis` (int, 可选): 计算 softmax 的轴。默认为 -1（最后一个轴）。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `asnumpy.ndarray`: 与 `x` 形状相同的 softmax 输出数组。

**参见**
- [`scipy.special.softmax`](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.softmax.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> x = ap.ndarray.from_numpy(np.array([1.0, 2.0, 3.0], dtype=np.float32))
>>> ap.softmax(x).to_numpy()
array([0.09003057, 0.24472846, 0.66524094], dtype=float32)
>>> ap.sum(ap.softmax(x))
np.float32(1.0)
```
