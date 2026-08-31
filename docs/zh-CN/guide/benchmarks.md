# 性能测试

> 复现：[`examples/09_mean.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/09_mean.py)

本文档包含 AsNumpy（NPU）与 NumPy（CPU）在 `mean()` 操作上的完整性能对比。

## 测试环境

<table>
<tr>
<th width="20%">项目</th>
<th width="40%">AsNumpy (NPU)</th>
<th width="40%">NumPy (CPU)</th>
</tr>
<tr>
<td><b>处理器</b></td>
<td>Ascend 910B NPU</td>
<td>同一机器上的服务器 CPU（AArch64）</td>
</tr>
<tr>
<td><b>NPU 运行时</b></td>
<td>CANN 8.2.RC1.alpha003</td>
<td>—</td>
</tr>
<tr>
<td><b>Python</b></td>
<td colspan="2" align="center">Python 3.9+</td>
</tr>
<tr>
<td><b>库版本</b></td>
<td>AsNumpy 0.2.0</td>
<td>NumPy 1.26+</td>
</tr>
<tr>
<td><b>数据类型</b></td>
<td colspan="2" align="center">float32</td>
</tr>
<tr>
<td><b>操作</b></td>
<td colspan="2" align="center">mean() — 对所有元素求算术平均值（axis=None）</td>
</tr>
<tr>
<td><b>计时器</b></td>
<td colspan="2" align="center">time.perf_counter()（高精度）</td>
</tr>
</table>

## 控制变量

- 双方使用**相同的输入数据**：数组由 NumPy 生成，在计时开始前通过 `from_numpy()` 传输到 NPU。
- **数据传输时间不计入**：只对 `mean()` 计算进行计时。
- **预热**：计时前执行 40 次预热迭代，以稳定 NPU 运行时。
- **测试迭代**：每种形状执行 400 次迭代。
- **统计方法**：对所有测量时间排序，排除最慢的 10%（受系统调度抖动影响），然后取剩余数据中的最小值作为代表时间（代表硬件峰值性能）。

## 测试结果

| 形状 | 数据量 | AsNumpy (ms) | NumPy (ms) | 加速比 |
|-------|--------|--------------|------------|--------|
| (500, 500) | 250,000 | 0.1446 | 0.1429 | 0.99× |
| (1000, 1000) | 1,000,000 | 0.1510 | 0.4904 | 3.25× |
| (2000, 2000) | 4,000,000 | 0.1636 | 1.9372 | 11.84× |
| (3000, 3000) | 9,000,000 | 0.1857 | 6.6303 | **35.70×** |

**关键观察：** 对于小张量（500×500，25 万个元素），NPU 启动开销与 CPU 计算时间相当，因此两者性能基本持平。随着张量尺寸增大，NPU 的大规模并行能力开始发挥作用——在 3000×3000（900 万个元素）时达到 **35.70× 加速比**。在所有测试形状下，NPU 执行时间几乎保持不变，展现出出色的可扩展性。

## 复现测试

从项目根目录运行基准测试脚本：

```bash
python examples/09_mean.py
```

该脚本使用 40 次预热迭代和 400 次测试迭代来测试全部四种形状，采用统计裁剪策略（排除最慢的 10%，取剩余数据中的最小值），并与 NumPy 对比验证数值正确性（`relative diff < 1e-4`）。
