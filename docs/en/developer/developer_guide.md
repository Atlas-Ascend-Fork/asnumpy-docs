# AsNumpy Developer Guide

## 1. Project Overview

AsNumpy is a numerical computing library based on Huawei Ascend NPU, providing a NumPy-compatible API that offloads computation tasks to the NPU. The project adopts a layered architecture:

- **Backend Layer (C++)**: Implements NPU operators using Ascend CANN API
- **Binding Layer (Pybind11)**: Binds C++ functions to Python interfaces
- **Frontend Layer (Python)**: Provides user-friendly APIs consistent with NumPy interfaces
- **Testing Layer**: Verifies functional correctness using pytest framework and custom testing utilities

### Project Directory Structure

```
asnumpy/
├── asnumpy/                 # Python package
│   ├── __init__.py         # Main package initialization
│   ├── math.py             # Math module
│   ├── linalg/             # Linear algebra module
│   ├── random/             # Random module
│   └── ...
├── include/                # C++ headers
│   └── asnumpy/
│       ├── math/           # Math module headers
│       └── ...
├── src/                    # C++ source files
│   ├── math/               # Math module implementation
│   └── ...
├── python/                 # Pybind11 bindings
│   ├── bind_math.cpp       # Math module bindings
│   └── ...
├── tests/                  # Test files
│   └── asnumpy_tests/      # Test cases
└── ...
```

---

## 2. Development Workflow

Developing new features typically follows these steps:

```
1. Add function declaration (include/)
   ↓
2. Implement function logic (src/)
   ↓
3. Add Python binding (python/)
   ↓
4. Add Python wrapper layer (asnumpy/math.py)
   ↓
5. Export to main namespace (asnumpy/__init__.py)
   ↓
6. Write test cases (tests/)
   ↓
7. Build and run tests
```

---

## 3. Backend Development (C++)

Backend development primarily involves implementing NPU operator invocation logic at the C++ level. This section uses developing the `sinc` function as an example.

### 3.1 Add Function Declaration

Add the function declaration in the corresponding header file. `sinc` belongs to the special functions in the math module, with the declaration located at:

**File location**: `include/asnumpy/math/other_special_functions.hpp`

```cpp
/**
 * @brief Compute the normalized sinc function element-wise on the input array.
 *
 * Uses NPU operator aclnnSinc to compute:
 *     sinc(x) = sin(pi * x) / (pi * x), with sinc(0) = 1.
 *
 * @param x Input array.
 * @param dtype Optional output dtype. If not specified, uses input dtype.
 * @return NPUArray Output array with sinc applied element-wise.
 * @throws std::runtime_error If the ACL operator or memory allocation fails.
 */
NPUArray Sinc(const NPUArray& x, std::optional<py::dtype> dtype = std::nullopt);
```

### 3.2 Implement Function Body

Implement the function logic in the corresponding source file:

**File location**: `src/math/other_special_functions.cpp`

```cpp
NPUArray Sinc(const NPUArray& x, std::optional<py::dtype> dtype) {
    // 1. Determine output data type
    py::dtype py_dtype = x.dtype;
    aclDataType in_dtype = NPUArray::GetACLDataType(py_dtype);
    aclDataType out_dtype = in_dtype;

    py::dtype out_py_dtype = NPUArray::GetPyDtype(out_dtype);
    if (dtype != std::nullopt) {
        out_py_dtype = *dtype;
        out_dtype = NPUArray::GetACLDataType(out_py_dtype);
    }

    // 2. Create output array
    NPUArray out(x.shape, out_py_dtype);

    // 3. Prepare resources for NPU operator execution
    uint64_t workspaceSize = 0;
    aclOpExecutor* executor = nullptr;

    // 4. Get workspace size and executor
    auto error = aclnnSincGetWorkspaceSize(
        x.tensorPtr, out.tensorPtr, &workspaceSize, &executor
    );
    if (error != ACL_SUCCESS) {
        std::string msg = "[other_special_functions.cpp](sinc) aclnnSincGetWorkspaceSize error = "
                          + std::to_string(error);
        const char* detail = aclGetRecentErrMsg();
        if (detail && std::strlen(detail) > 0) msg += " - " + std::string(detail);
        throw std::runtime_error(msg);
    }

    // 5. Allocate workspace memory (if needed)
    void* workspaceAddr = nullptr;
    if (workspaceSize > 0) {
        error = aclrtMalloc(&workspaceAddr, workspaceSize, ACL_MEM_MALLOC_HUGE_FIRST);
        if (error != ACL_SUCCESS) {
            std::string msg = "[other_special_functions.cpp](sinc) aclrtMalloc error = "
                              + std::to_string(error);
            throw std::runtime_error(msg);
        }
    }

    // 6. Execute operator
    error = aclnnSinc(workspaceAddr, workspaceSize, executor, nullptr);
    if (error != ACL_SUCCESS) {
        if (workspaceAddr) aclrtFree(workspaceAddr);
        std::string msg = "[other_special_functions.cpp](sinc) aclnnSinc error = "
                          + std::to_string(error);
        throw std::runtime_error(msg);
    }

    // 7. Synchronize device to ensure computation is complete
    error = aclrtSynchronizeDevice();
    if (error != ACL_SUCCESS) {
        if (workspaceAddr) aclrtFree(workspaceAddr);
        std::string msg = "[other_special_functions.cpp](sinc) aclrtSynchronizeDevice error = "
                          + std::to_string(error);
        throw std::runtime_error(msg);
    }

    // 8. Free workspace memory
    if (workspaceAddr) {
        aclrtFree(workspaceAddr);
    }

    return out;
}
```

### 3.3 Key Implementation Points

#### Error Handling

All ACL API calls need to check return values:

```cpp
auto error = aclnnSomeFunction(/* parameters */);
if (error != ACL_SUCCESS) {
    std::string msg = "[filename](function) aclnnSomeFunction error = "
                      + std::to_string(error);
    const char* detail = aclGetRecentErrMsg();
    if (detail && std::strlen(detail) > 0) {
        msg += " - " + std::string(detail);
    }
    throw std::runtime_error(msg);
}
```

#### NPU Operator Execution Flow

A typical NPU operator execution flow includes:

1. **GetWorkspaceSize**: Get required workspace size and executor
2. **Malloc**: Allocate workspace memory (if needed)
3. **Execute**: Execute operator computation
4. **Synchronize**: Synchronize device, wait for computation to complete
5. **Free**: Free workspace memory

---

## 4. Binding Layer (Pybind11)

### 4.1 Add Function Binding

Add function binding in the corresponding binding file:

**File location**: `python/bind_math.cpp`

```cpp
namespace asnumpy {
    void bind_other_special_functions(py::module_& math);
}

void bind_math(py::module_& math) {
    math.doc() = "math module of asnumpy";
    bind_other_special_functions(math);
}

namespace asnumpy {
    void bind_other_special_functions(py::module_& math){
        math.def("sinc", &Sinc, py::arg("x"), py::arg("dtype") = py::none());
    }
}
```

---

## 5. Frontend Development (Python)

Frontend development primarily involves exposing C++ functions to the Python layer and ensuring APIs are compatible with NumPy.

### 5.1 Add Python Wrapper Layer

Import C++ functions in the corresponding Python module and add Python wrapper layer:

**File location**: `asnumpy/math.py`

First, import functions from the compiled C++ extension:

```python
from .lib.asnumpy_core.math import (
    sin as _ap_sin,
    cos as _ap_cos,
    sinc as _ap_sinc,
    # ... other functions
)
from .utils import ndarray, _convert_dtype
```

Then, add Python wrapper layer for each function:

```python
def sinc(x: ndarray, dtype: Optional[np.dtype] = None) -> ndarray:
    return ndarray(_ap_sinc(x, _convert_dtype(dtype)))
```

### 5.2 Export to Main Namespace

Add functions in the main package's `__init__.py`:

**File location**: `asnumpy/__init__.py`

```python
from .math import (
    sin,
    sinc,
    # ... other math functions
)

__all__ = [
    # ... other exports
    "sin",
    "sinc",
]
```

---

## 6. Writing Tests

AsNumpy uses pytest and a custom testing framework to write tests.

### 6.1 Test File Organization

Test files are organized by module in the `tests/asnumpy_tests/` directory:

```
tests/
├── conftest.py                    # pytest configuration
└── asnumpy_tests/
    ├── math_tests/
    │   └── test_miscellaneous.py  # Test cases
    └── ...
```

### 6.2 Writing Test Cases

**File location**: `tests/asnumpy_tests/math_tests/test_miscellaneous.py`

```python
import numpy
import pytest
from asnumpy import testing

def _create_array(xp, data, dtype):
    """Helper function: create array"""
    np_arr = numpy.array(data, dtype=dtype)
    if xp is numpy:
        return np_arr
    return xp.ndarray.from_numpy(np_arr)


@testing.for_float_dtypes(no_float16=True)
@testing.numpy_asnumpy_allclose(rtol=1e-4, atol=1e-5)
def test_sinc_basic(xp, dtype):
    """Basic random test"""
    numpy.random.seed(42)
    np_a = numpy.random.uniform(low=-5.0, high=5.0, size=(10, 10)).astype(dtype)
    a = _create_array(xp, np_a, dtype)
    return xp.sinc(a)


@testing.for_float_dtypes(no_float16=True)
@testing.numpy_asnumpy_allclose(rtol=1e-5, atol=1e-8)
def test_sinc_at_zero(xp, dtype):
    """Test sinc behavior at x=0"""
    data = [0.0, -0.0]
    a = _create_array(xp, data, dtype)
    return xp.sinc(a)
```

### 6.3 Decorator Reference

AsNumpy provides rich test decorators for parameterized testing and result comparison.

#### Data Type Decorators

- `for_dtypes(dtypes)` - Specify a list of data types
- `for_all_dtypes()` - All data types (excludes unsupported float16, uint32, uint64 by default)
- `for_float_dtypes()` - Floating-point types (float32, float64)
- `for_int_dtypes()` - Integer types (int8-64, uint8-32)
- `for_signed_dtypes()` - Signed integers (int8-64)
- `for_unsigned_dtypes()` - Unsigned integers (uint8-16)
- `for_complex_dtypes()` - Complex types (complex64, complex128)

```python
@testing.for_float_dtypes(no_float16=True)
def test_func(xp, dtype):
    a = xp.array([1.0, 2.0, 3.0], dtype=dtype)
    return xp.sinc(a)
```

#### Memory Order Decorators

- `for_orders(orders)` - Specify a list of memory orders
- `for_cf_orders()` - C and F orders

```python
@testing.for_orders(['C', 'F'])
def test_func(xp, order):
    return xp.zeros((3, 3), order=order)
```

#### NumPy-AsNumpy Comparison Decorators

- `numpy_asnumpy_array_equal()` - Compare arrays for exact equality
- `numpy_asnumpy_allclose(rtol=1e-7, atol=0)` - Compare floating-point arrays for closeness (set relative/absolute tolerance)

```python
@testing.numpy_asnumpy_allclose(rtol=1e-5, atol=1e-8)
def test_func(xp, dtype):
    a = xp.array([1.0, 2.0, 3.0], dtype=dtype)
    return xp.sinc(a)
```

#### pytest Integration Decorators

- `parameterize(*params)` - Parameterized testing
- `fixture` - pytest fixture
- `skip` - Skip test
- `skipif(condition)` - Conditional skip
- `xfail` - Expected failure

```python
@testing.parameterize('n', [1, 2, 4])
def test_func(n):
    assert n > 0
```

---

## 7. Build and Run

### 7.1 Build Project

Install and build the project in development mode:

```bash
pip install -e .
```

### 7.2 Run Tests

#### Run All Tests

```bash
pytest tests/
```

#### Run Specific Module Tests

```bash
# Math module tests
pytest tests/asnumpy_tests/math_tests/
```

#### Run Single Test

```bash
# Run specific test file
pytest tests/asnumpy_tests/math_tests/test_miscellaneous.py

# Run specific test function
pytest tests/asnumpy_tests/math_tests/test_miscellaneous.py::test_sinc_basic
```

## Appendix: Common Commands Reference

```bash
# Install project
pip install -e .

# Run all tests
pytest tests/

# Run specific test
pytest tests/asnumpy_tests/math_tests/test_miscellaneous.py

# Verbose output
pytest -v

# Show print output
pytest -s

# Clean and reinstall
pip uninstall asnumpy -y && pip install -e .
```

## Reference Resources

- [Ascend CANN Documentation](https://www.hiascend.com/document)
- [NumPy Documentation](https://numpy.org/doc/stable/)
- [Pybind11 Documentation](https://pybind11.readthedocs.io/)
- [pytest Documentation](https://docs.pytest.org/)