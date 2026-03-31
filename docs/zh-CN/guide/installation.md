# 安装指南

本指南介绍如何在您的系统上安装 AsNumpy。

## 系统要求

### 硬件要求

| 要求 | 规格 |
|-------------|---------------|
| **CPU** | AArch64 或 X86_64 |
| **NPU** | Ascend 910B |
| **操作系统** | Linux（推荐 Ubuntu 20.04+） |

### 软件要求

| 要求 | 版本 |
|-------------|---------|
| **GCC** | >= 11.2 |
| **CMake** | >= 3.26 |
| **ninja-build** | >= 1.12（推荐） |
| **Python** | >= 3.9 |
| **CANN** | >= 8.2.RC1.alpha003 |

## 安装前准备

### 1. 安装 CANN

确保系统已安装 CANN。可以通过以下命令验证安装：

```bash
cat /usr/local/Ascend/ascend-toolkit/latest/version.cfg
```

### 2. 设置环境变量

在构建前设置 CANN 环境变量：

```bash
export ASCEND_TOOLKIT_HOME=/usr/local/Ascend/ascend-toolkit/latest
```

为方便起见，可以添加到 `~/.bashrc`：

```bash
echo 'export ASCEND_TOOLKIT_HOME=/usr/local/Ascend/ascend-toolkit/latest' >> ~/.bashrc
source ~/.bashrc
```

### 3. 验证构建工具

```bash
# 检查 GCC 版本
gcc --version  # 应 >= 11.2

# 检查 CMake 版本
cmake --version  # 应 >= 3.26

# 检查 Python 版本
python --version  # 应 >= 3.9
```

## 安装方式

### 方式一：使用 uv（推荐）

[uv](https://docs.astral.sh/uv/) 是一个快速的 Python 包管理器：

```bash
# 克隆仓库
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy

# 使用 uv 安装
uv sync
```

### 方式二：使用 pip

```bash
# 克隆仓库
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy

# 升级 pip、setuptools 和 wheel 到最新版本
pip install --upgrade pip setuptools wheel

# 安装 build 包，提供 Python 包的简单构建前端
pip install build

# 构建当前 Python 项目（创建源码分发包和 wheel 包）
python -m build

# 安装 dist/ 目录下生成的所有 wheel (.whl) 文件
pip install dist/*.whl
```

### 方式三：开发模式

用于开发时，以可编辑模式安装：

```bash
# 克隆仓库
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy

# 开发模式安装
pip install -e .
```

这允许代码修改立即生效，无需重新安装。

## 验证安装

### 基本验证

```python
import asnumpy as ap

# 在 NPU 上创建数组
arr = ap.ones((1000, 1000), dtype=ap.float32)
print(f"Shape: {arr.shape}")  # Shape: (1000, 1000)
print("✓ AsNumpy 安装成功！")
```

### 完整验证

```python
import asnumpy as ap
import numpy as np

# 创建 NumPy 数组
np_array = np.array([1, 2, 3, 4, 5], dtype=np.float32)

# 转换为 AsNumpy 数组（传输到 NPU）
npu_array = ap.ndarray.from_numpy(np_array)

# 在 NPU 上执行操作
result = ap.sum(npu_array)
print(f"数组求和: {result.to_numpy()}")

# 验证结果
assert result.to_numpy() == 15.0
print("✓ 安装验证成功！")
```

## 故障排除

### 常见问题

#### 导入错误

**症状：** `ModuleNotFoundError: No module named 'asnumpy'`

**解决方案：**
1. 确认 AsNumpy 已安装：`pip list | grep asnumpy`
2. 检查是否使用了正确的 Python 环境
3. 尝试重新安装：`pip install -e . --no-build-isolation`

#### 编译错误

**症状：** 构建失败，出现 CMake 或 GCC 错误

**解决方案：**
1. 检查 CMake 版本：`cmake --version`（需要 >= 3.26）
2. 检查 GCC 版本：`gcc --version`（需要 >= 11.2）
3. 验证环境变量：`echo $ASCEND_TOOLKIT_HOME`
4. 清理并重新构建：
   ```bash
   pip install -e . --no-build-isolation
   ```

#### 运行时错误

**症状：** `RuntimeError: ACL error ...`

**解决方案：**
1. 验证 NPU 可用：`npu-smi info`
2. 检查 CANN 安装
3. 确保在配备 Ascend 910B NPU 的机器上运行

#### 性能问题

**症状：** AsNumpy 比 NumPy 慢

**解决方案：**
1. 对于小数组（< 1000×1000），由于 NPU 启动开销，CPU 可能更快
2. 尝试更大的数组以体验 NPU 加速效果
3. 查看 [性能测试](benchmarks) 了解预期性能

### 获取帮助

如果遇到本文未涵盖的问题：

1. 查看 [常见问题](faq)
2. 搜索已有的 [Issue](https://gitcode.com/cann/asnumpy/issues)
3. 创建新 Issue，包含：
   - 系统信息（操作系统、Python 版本、CANN 版本）
   - 完整的错误信息
   - 复现步骤