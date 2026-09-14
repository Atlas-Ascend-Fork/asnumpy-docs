# 常见问题

本页面涵盖安装和使用 AsNumpy 时的常见问题。

## 安装

### 如何检查 CANN 是否正确安装？

运行以下命令：

```bash
cat /usr/local/Ascend/ascend-toolkit/latest/version.cfg
```

如果 CANN 安装正确，这将显示版本信息。

### 遇到编译错误怎么办？

1. **检查 CMake 版本**（必须 >= 3.26）：
   ```bash
   cmake --version
   ```

2. **检查 GCC 版本**（必须 >= 11.2）：
   ```bash
   gcc --version
   ```

3. **验证 CANN 环境变量**：
   ```bash
   echo $ASCEND_TOOLKIT_HOME
   # 应输出：/usr/local/Ascend/ascend-toolkit/latest
   ```

4. **尝试清理重建**：
   ```bash
   pip install -e . --no-build-isolation
   ```

### 硬件要求是什么？

| 要求 | 规格 |
|-------------|---------------|
| **CPU** | AArch64 或 X86_64 |
| **NPU** | Ascend 910B |
| **操作系统** | Linux（推荐 Ubuntu 20.04+） |

## 使用

### AsNumpy 与 NumPy 的兼容性如何？

AsNumpy 设计为与 NumPy API 兼容，但算子覆盖尚不完整。

| 版本 | 覆盖目标 |
|---------|-----------------|
| v0.2.0（当前） | 常用数学、逻辑、排序、数组创建 API |
| v1.0 | 最常用的 100 个 NumPy API |

完整计划请参见 [路线图](introduction#roadmap)。

### 需要手动初始化或终结 NPU 吗？

**不需要。** AsNumpy 自动处理设备初始化：

- **导入时**：当您 `import asnumpy` 时，NPU 设备自动初始化
- **退出时**：程序退出时设备自动释放

只有当您想选择设备 0 以外的特定 NPU 时，才需要调用 `ap.set_device(n)`。

```python
import asnumpy as ap  # 自动初始化

# 您的代码...

# 退出时自动释放
```

### 为什么小数组时 AsNumpy 比 NumPy 慢？

对于小张量（如 500×500），NPU 内核启动开销占主导地位。开销包括：

- 内核编译/加载
- 设备上的内存分配
- 命令队列提交

**解决方案**：从约 1000×1000（`float32`）开始，NPU 加速效果显著。

| 形状 | 加速比 |
|-------|---------|
| (500, 500) | 0.99×（基本持平） |
| (1000, 1000) | 3.25× |
| (3000, 3000) | **35.70×** |

详细数据请参见 [性能测试](benchmarks)。

### 如何在 CPU 和 NPU 之间传输数据？

```python
import numpy as np
import asnumpy as ap

# CPU → NPU
cpu_array = np.array([1, 2, 3], dtype=np.float32)
npu_array = ap.ndarray.from_numpy(cpu_array)

# NPU → CPU
result_cpu = npu_array.to_numpy()
```

### 可以使用多个 NPU 吗？

可以。使用 `ap.set_device(n)` 在设备之间切换：

```python
import asnumpy as ap

# 使用设备 0
ap.set_device(0)
arr0 = ap.ones((100, 100))

# 使用设备 1
ap.set_device(1)
arr1 = ap.ones((100, 100))
```

> **注意：** 要检查可用的 NPU 设备，请使用系统命令：
> ```bash
> npu-smi info
> ```

### 支持哪些数据类型？

AsNumpy 支持以下数据类型：

| 类别 | 类型 |
|----------|-------|
| **浮点数** | `float16`, `float32`, `float64` |
| **整数** | `int8`, `int16`, `int32`, `int64` |
| **无符号整数** | `uint8`, `uint16`, `uint32`, `uint64` |
| **复数** | `complex64`, `complex128` |
| **布尔** | `bool` |

> **注意：** 某些操作可能对特定数据类型有限制。详情请查看 API 文档。

## 故障排除

### 出现 `ModuleNotFoundError: No module named 'asnumpy'`

1. 验证安装：
   ```bash
   pip list | grep asnumpy
   ```

2. 检查 Python 环境：
   ```bash
   which python
   ```

3. 重新安装：
   ```bash
   pip install -e . --no-build-isolation
   ```

### 出现 `RuntimeError: ACL error ...`

1. 验证 NPU 可用：
   ```bash
   npu-smi info
   ```

2. 检查 CANN 安装：
   ```bash
   cat /usr/local/Ascend/ascend-toolkit/latest/version.cfg
   ```

3. 确保环境变量已设置：
   ```bash
   export ASCEND_TOOLKIT_HOME=/usr/local/Ascend/ascend-toolkit/latest
   ```

### 结果与 NumPy 不完全一致

小的数值差异是正常的，原因包括：

- 不同的浮点实现
- 硬件特定的舍入

使用 `np.allclose()` 进行比较：

```python
import numpy as np

npu_result = ap.sum(arr)  # 无 axis 时返回 Python 标量
np_result = np.sum(cpu_arr)

# 允许小容差
assert np.allclose(npu_result, np_result, rtol=1e-5, atol=1e-8)
```

## 贡献

### 如何开发？

详情请参见 [开发指南](../developer/developer_guide)。

### 在哪里报告 Bug？

在 [GitCode](https://gitcode.com/cann/asnumpy/issues) 上创建 Issue。

请包含：
- 系统信息（操作系统、Python 版本、CANN 版本）
- 完整的错误信息
- 最小可复现示例

## 更多问题？

如果您的问题在这里没有找到答案：

1. 查看 [API 参考](../api/index)
2. 搜索 [已有 Issue](https://gitcode.com/cann/asnumpy/issues)
3. 创建新 Issue
