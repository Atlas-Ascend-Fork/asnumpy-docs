# 快速开始

本指南将带你了解 AsNumpy 的基本用法，并展示如何以最小的改动将现有 NumPy 代码迁移到昇腾 NPU 上运行。

## 前置条件

- 已安装 AsNumpy（[安装指南](installation)）
- 昇腾 910B NPU，CANN 8.2.RC1.alpha003+
- Python 3.10+

## NumPy vs AsNumpy

核心理念：**只改 import，其余代码保持不变**。

<table>
<tr>
<th width="50%">NumPy (CPU)</th>
<th width="50%">AsNumpy (NPU)</th>
</tr>
<tr>
<td>

```python
import numpy as np

rows, cols = 20000, 20000
m1 = np.random.normal(0, 1, (rows, cols))
m2 = np.random.normal(0, 1, (rows, cols))

# 在 CPU 上计算
product = np.multiply(m1, m2)
result = np.sum(product)
print(result)
```

</td>
<td>

```python
import numpy as np
import asnumpy as ap

rows, cols = 20000, 20000
m1 = np.random.normal(0, 1, (rows, cols))
m2 = np.random.normal(0, 1, (rows, cols))

# 传输到 NPU
m1_npu = ap.ndarray.from_numpy(m1)
m2_npu = ap.ndarray.from_numpy(m2)

# 在 NPU 上计算
product = ap.multiply(m1_npu, m2_npu)
result = ap.sum(product)
print(result.to_numpy())
```

</td>
</tr>
</table>

## 端到端示例

```python
import numpy as np
import asnumpy as ap

# AsNumpy 在 import 时自动初始化 NPU 设备
# 并在程序退出时自动释放（无需手动 init/finalize）

# 1. 在 CPU 上创建数据（NumPy）
np_a = np.array([1.0, 2.0, 3.0, 4.0], dtype=np.float32)
np_b = np.array([10.0, 20.0, 30.0, 40.0], dtype=np.float32)

# 2. 传输到 NPU
npu_a = ap.ndarray.from_numpy(np_a)
npu_b = ap.ndarray.from_numpy(np_b)

# 3. 在 NPU 上执行运算
npu_sum   = ap.add(npu_a, npu_b)
npu_prod  = ap.multiply(npu_a, npu_b)
npu_total = ap.sum(npu_prod)

# 4. 将结果传回 CPU
print("Sum:   ", npu_sum.to_numpy())    # [11. 22. 33. 44.]
print("Prod:  ", npu_prod.to_numpy())   # [ 10.  40.  90. 160.]
print("Total: ", npu_total.to_numpy())  # 300.0

# 5. 与 NumPy 结果进行验证
assert np.allclose(npu_sum.to_numpy(), np.add(np_a, np_b))
assert np.allclose(npu_prod.to_numpy(), np.multiply(np_a, np_b))
print("验证通过。")
```

## 设备管理

```python
import asnumpy as ap

# 查询可用的NPU设备
print(ap.get_device_count())  # e.g. 8

# 切换到特定的NPU（默认为0）
ap.set_device(1)
```

## 更多示例

可运行的脚本位于 [`examples/`](https://gitcode.com/cann/asnumpy/tree/master/examples) 目录：

| 脚本 | 操作 |
|--------|-----------|
| [`01_add.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/01_add.py) | 逐元素加法 |
| [`02_exp2.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/02_exp2.py) | 指数运算 (2^x) |
| [`03_multiply.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/03_multiply.py) | 逐元素乘法（含性能测试） |
| [`04_all.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/04_all.py) | 逻辑与归约 |
| [`05_divide.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/05_divide.py) | 逐元素除法 |
| [`06_vdot.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/06_vdot.py) | 向量点积 |
| [`07_full.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/07_full.py) | 创建指定值填充的数组 |
| [`08_linspace.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/08_linspace.py) | 创建等差数列 |
| [`09_mean.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/09_mean.py) | 算术平均值 |
| [`10_sort.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/10_sort.py) | 排序 |
