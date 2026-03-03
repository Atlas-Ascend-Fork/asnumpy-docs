# Installation Guide

## Usage Instructions

This repository currently supports users to use it by compiling and installing from source code. Pre-compiled versions will be provided in the form of whl packages in the future.

## Environment Requirements

* **Hardware Platform**:
    * CPU: AArch64 or X86_64
    * NPU: Ascend 910B
* **System Version**:
    * Mainstream Linux systems, Ubuntu 20.04 and above
* **Software Version**:
    * Build tools: GCC >= 11.2, CMake >= 3.22, ninja-build >= 1.12
    * Python environment: Python >= 3.9, with pip tool
    * CANN: 8.2.RC1.alpha003 and above


## Installation Steps

Currently, AsNumpy is in the development stage, and it is recommended to install from source code.

1. Clone the repository:

```bash
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Install AsNumpy:

```bash
python -m build
pip install dist/*.whl
```

## Verify Installation

After installation, you can verify that AsNumpy is properly installed by running the following commands:

```python
import asnumpy as ap
import numpy as np

# Create a numpy array
np_array = np.array([1, 2, 3, 4, 5])

# Convert to AsNumpy array
npu_array = ap.ndarray.from_numpy(np_array)

# Perform basic operations
result = ap.sum(npu_array)
print(f"Sum of array: {result}")

# Convert back to numpy
result_np = result.to_numpy()
print(f"Result as numpy array: {result_np}")
```

If the installation is successful, you should see the following output:

```
Sum of array: 15
Result as numpy array: 15
```

## Troubleshooting

If you encounter any issues during installation or usage:

1. **Import Error**: Make sure all dependencies are installed and the Python path is correctly set.
2. **Runtime Error**: Check that your hardware meets the requirements (Ascend 910B NPU).
3. **Performance Issues**: Ensure that the CANN toolkit is properly installed and configured.

For more help, please refer to the [FAQ](en/guide/faq.md) or open an issue on [GitHub](https://gitcode.com/cann/asnumpy).
