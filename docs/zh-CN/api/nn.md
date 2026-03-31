# 神经网络函数

## 激活函数

### asnumpy.softmax

```python
asnumpy.softmax(x: ArrayLike, axis: int = -1, dtype: DTypeLike = None) -> ndarray
```

计算 softmax 函数。

softmax 函数通过计算每个元素的指数除以集合中所有元素指数之和来转换集合中的每个元素。这会产生一个概率分布。

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
>>> x = ap.array([1.0, 2.0, 3.0])
>>> ap.softmax(x)
array([0.09003057, 0.24472847, 0.66524096])
>>> ap.softmax(x).sum()
1.0
```
