# Installation

This guide covers how to install AsNumpy on your system.

## Requirements

### Hardware Requirements

| Requirement | Specification |
|-------------|---------------|
| **CPU** | AArch64 or X86_64 |
| **NPU** | Ascend 910B |
| **OS** | Linux (Ubuntu 20.04+ recommended) |

### Software Requirements

| Requirement | Version |
|-------------|---------|
| **GCC** | >= 11.2 |
| **CMake** | >= 3.26 |
| **ninja-build** | >= 1.12 (recommended) |
| **Python** | >= 3.10 |
| **CANN** | >= 8.2.RC1.alpha003 |

## Prerequisites

### 1. Install CANN

Ensure CANN is installed on your system. You can verify the installation:

```bash
cat /usr/local/Ascend/ascend-toolkit/latest/version.cfg
```

### 2. Set Environment Variables

Set the CANN environment variable before building:

```bash
export ASCEND_TOOLKIT_HOME=/usr/local/Ascend/ascend-toolkit/latest
```

For convenience, add this to your `~/.bashrc`:

```bash
echo 'export ASCEND_TOOLKIT_HOME=/usr/local/Ascend/ascend-toolkit/latest' >> ~/.bashrc
source ~/.bashrc
```

### 3. Verify Build Tools

```bash
# Check GCC version
gcc --version  # Should be >= 11.2

# Check CMake version
cmake --version  # Should be >= 3.26

# Check Python version
python --version  # Should be >= 3.10
```

## Installation Methods

### Option 1: Using uv (Recommended)

[uv](https://docs.astral.sh/uv/) is a fast Python package manager:

```bash
# Clone the repository
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy

# Install with uv
uv sync
```

### Option 2: Using pip

```bash
# Clone the repository
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy

# Upgrade pip, setuptools, and wheel to their latest versions
pip install --upgrade pip setuptools wheel

# Install the 'build' package, which provides a simple build front-end for Python packages
pip install build

# Build the current Python project (create source distribution and wheel)
python -m build

# Install all generated wheel (.whl) files from the dist/ directory
pip install dist/*.whl
```

### Option 3: Development Mode

For development, install in editable mode:

```bash
# Clone the repository
git clone --recursive https://gitcode.com/cann/asnumpy.git
cd asnumpy

# Install in development mode
pip install -e .
```

This allows code changes to take effect immediately without reinstallation.

## Verify Installation

### Basic Verification

```python
import asnumpy as ap

# Create an array on NPU
arr = ap.ones((1000, 1000), dtype=ap.float32)
print(f"Shape: {arr.shape}")  # Shape: (1000, 1000)
print("✓ AsNumpy installed successfully!")
```

### Complete Verification

```python
import asnumpy as ap
import numpy as np

# Create a numpy array
np_array = np.array([1, 2, 3, 4, 5], dtype=np.float32)

# Convert to AsNumpy array (transfer to NPU)
npu_array = ap.ndarray.from_numpy(np_array)

# Perform operations on NPU (returns a Python scalar when axis is None)
result = ap.sum(npu_array)
print(f"Sum of array: {result}")

# Verify result
assert result == 15.0
print("✓ Installation verified successfully!")
```

## Troubleshooting

### Common Issues

#### Import Error

**Symptom:** `ModuleNotFoundError: No module named 'asnumpy'`

**Solution:**
1. Ensure AsNumpy is installed: `pip list | grep asnumpy`
2. Check you're using the correct Python environment
3. Try reinstalling: `pip install -e . --no-build-isolation`

#### Compilation Error

**Symptom:** Build fails with CMake or GCC errors

**Solution:**
1. Check CMake version: `cmake --version` (need >= 3.26)
2. Check GCC version: `gcc --version` (need >= 11.2)
3. Verify environment variable: `echo $ASCEND_TOOLKIT_HOME`
4. Clean rebuild:
   ```bash
   pip install -e . --no-build-isolation
   ```

#### Runtime Error

**Symptom:** `RuntimeError: ACL error ...`

**Solution:**
1. Verify NPU is available: `npu-smi info`
2. Check CANN installation
3. Ensure you're running on a machine with Ascend 910B NPU

#### Performance Issues

**Symptom:** AsNumpy is slower than NumPy

**Solution:**
1. For small arrays (< 1000×1000), CPU may be faster due to NPU launch overhead
2. Try larger arrays to see NPU acceleration benefits
3. See [Benchmarks](benchmarks) for expected performance

### Getting Help

If you encounter issues not covered here:

1. Check the [FAQ](faq)
2. Search existing [issues](https://gitcode.com/cann/asnumpy/issues)
3. Open a new issue with:
   - Your system information (OS, Python version, CANN version)
   - Complete error message
   - Steps to reproduce