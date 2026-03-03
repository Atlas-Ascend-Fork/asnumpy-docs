# 安装指南

## 使用说明

本仓库目前支持用户以 源代码编译安装 的方式使用，后续将以 whl 包形式提供预编译版本。

## 环境要求

* **硬件平台**：
    * CPU：AArch64或X86_64
    * NPU：昇腾910B
* **系统版本**：
    * 主流Linux系统，Ubuntu 20.04及以上版本
* **软件版本**：
    * 编译工具：GCC >= 11.2、CMake >= 3.22、ninja-build >= 1.12
    * Python环境：Python >= 3.9、具有pip工具
    * CANN：8.2.RC1.alpha003及以上版本


## 安装步骤

目前 AsNumpy 处于开发阶段，建议从源码安装。

1. 克隆仓库：

```bash
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy
```

2. 安装依赖：

```bash
pip install -r requirements.txt
```

3. 安装 AsNumpy：

```bash
python -m build
pip install dist/*.whl
```

## 验证安装

安装完成后，可以通过运行以下命令来验证 AsNumpy 是否正确安装：

```python
import asnumpy as ap
import numpy as np

# 创建一个 numpy 数组
np_array = np.array([1, 2, 3, 4, 5])

# 转换为 AsNumpy 数组
npu_array = ap.ndarray.from_numpy(np_array)

# 执行基本操作
result = ap.sum(npu_array)
print(f"数组求和结果: {result}")

# 转换回 numpy 数组
result_np = result.to_numpy()
print(f"转换为 numpy 数组的结果: {result_np}")
```

如果安装成功，您应该看到以下输出：

```
数组求和结果: 15
转换为 numpy 数组的结果: 15
```

## 故障排除

如果您在安装或使用过程中遇到任何问题：

1. **导入错误**：确保所有依赖项已安装，并且 Python 路径设置正确。
2. **运行时错误**：检查您的硬件是否满足要求（昇腾 910B NPU）。
3. **性能问题**：确保 CANN 工具包已正确安装和配置。

如需更多帮助，请参考 [常见问题](zh/guide/faq.md) 或在 [GitHub](https://gitcode.com/cann/asnumpy) 上提交问题。
