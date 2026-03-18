# 性能测试

本文档包含 AsNumpy（NPU）与 NumPy（CPU）在 `multiply()` 操作上的完整性能对比。

## 测试环境

| 项目 | AsNumpy (NPU) | NumPy (CPU) |
|------|---------------|-------------|
| **处理器** | Ascend 910B NPU | 同一机器上的服务器 CPU（AArch64） |
| **NPU 运行时** | CANN 8.2.RC1.alpha003 | — |
| **Python** | Python 3.9+ | Python 3.9+ |
| **库版本** | AsNumpy 0.2.0 | NumPy 1.26+ |
| **数据类型** | float32 | float32 |
| **操作** | multiply() — 逐元素乘法 | multiply() — 逐元素乘法 |
| **计时器** | time.perf_counter()（高精度） | time.perf_counter()（高精度） |

## 控制变量

- 双方使用**相同的输入数据**：数组由 NumPy 生成，在计时开始前通过 `from_numpy()` 传输到 NPU。
- **数据传输时间不计入**：只对 `multiply()` 计算进行计时。
- 结果为单次运行挂钟时间（无预热，无平均）。

## 测试结果

| 形状 | AsNumpy (NPU) | NumPy (CPU) | 加速比 |
|-------|---------------|-------------|---------|
| (500, 500) | 1.9355 s | 0.1708 s | 0.09× |
| (1000, 1000) | 0.0692 s | 0.7029 s | 10.16× |
| (2000, 2000) | 0.1033 s | 3.8387 s | 37.17× |
| (3000, 3000) | 0.1115 s | 14.3567 s | **128.70×** |

**关键观察：** 对于小张量（500×500），NPU 内核启动开销占主导，CPU 更快。随着张量尺寸增大，NPU 的大规模并行能力开始发挥作用 — 在 3000×3000 时达到 **128.70× 加速比**。

## 复现测试

从项目根目录运行基准测试脚本：

```bash
python examples/03_multiply.py
```

该脚本测试所有四种形状，各 50 次迭代，报告平均和最小时间，并与 NumPy 验证数值正确性（相对误差 < 1e-4）。

基准测试脚本位于 [`examples/03_multiply.py`](https://gitcode.com/cann/asnumpy/blob/master/examples/03_multiply.py)。
