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
├── src/                    # Python package (src-layout)
│   └── asnumpy/
│       ├── __init__.py     # Main package initialization
│       ├── math.py         # Math module
│       ├── linalg/         # Linear algebra module
│       ├── random/         # Random module
│       └── ...
├── csrc/                   # C++ source files
│   ├── math/               # Math module implementation
│   └── ...
├── include/                # C++ headers
│   └── asnumpy/
│       ├── math/           # Math module headers
│       └── ...
├── bindings/               # Pybind11 bindings
│   └── python/
│       ├── bind_math.cpp   # Math module bindings
│       └── ...
├── examples/               # Example scripts
├── benchmarks/             # Performance benchmarks
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
2. Implement function logic (csrc/)
   ↓
3. Add Python binding (bindings/python/)
   ↓
4. Add Python wrapper layer (src/asnumpy/math.py)
   ↓
5. Export to main namespace (src/asnumpy/__init__.py)
   ↓
6. Write test cases (tests/)
   ↓
7. Build and run tests
```

---

## 3. Branch Management

### 3.1 Overview

Asnumpy uses a simplified branching model based on a single main branch with release branches for stabilization:

```
master ─── PR_A ─── PR_B ─── PR_C ─── PR_D ─── PR_E ─── PR_F
                          │                      │
                   release/v0.2.0          cherry-pick hotfix
                          │                      │
                    tag v0.2.0               tag v0.2.1
                    tag v0.2.1                    │
                                                PR to master
```

### 3.2 Branch Types

| Branch | Purpose | Lifetime |
|--------|---------|----------|
| `master` | Main branch. All feature PRs merge here. | Permanent |
| `feature/<name>` | Develop a new feature or enhancement. | Short-lived |
| `fix/<name>` | Fix a bug. | Short-lived |
| `release/vX.Y.Z` | Stabilize and test a release. | Per release |
| `hotfix/<name>` | Backport a fix from a release branch to master. | Short-lived |

### 3.3 Workflow

#### Feature Development

1. Create a feature branch from `master`:
   ```bash
   git checkout master
   git pull upstream master
   git checkout -b feature/my-feature
   ```
2. Develop, test, and commit.
3. Push and open a Pull Request targeting `master`.
4. Ensure code review and CI pass.
5. Merge the PR.

#### Release Process

1. Cut a release branch from `master`:
   ```bash
   git checkout master
   git checkout -b release/v0.3.0
   ```
2. Run tests and stabilize. Fix any issues directly on the release branch.
3. Tag the release:
   ```bash
   git tag v0.3.0
   ```
4. If additional fixes are needed after tagging, apply them on the release branch and tag a new patch version (e.g., `v0.3.1`).
5. Cherry-pick those fixes back to `master` (see [Hotfix Process](#333-hotfix-process)).
6. Delete the release branch when the release series is no longer maintained:
   ```bash
   git branch -d release/v0.3.0
   ```

#### Hotfix Process

When a bug is fixed on a release branch, the fix must be brought back to `master` so that future releases include it:

1. Fix the bug on the release branch and tag the patch release.
2. Cherry-pick the fix to a new hotfix branch:
   ```bash
   git checkout -b hotfix/backport-fix-xxx master
   git cherry-pick <commit-hash-of-the-fix>
   ```
3. Push the hotfix branch and open a Pull Request targeting `master`.
4. This PR goes through the normal code review and CI pipeline.
5. After merge, delete the hotfix branch:
   ```bash
   git branch -d hotfix/backport-fix-xxx
   ```

> **Why use a separate hotfix branch instead of cherry-picking directly to master?**
> A dedicated branch allows the fix to go through PR review and CI checks, ensuring the same quality standards as any other contribution.

### 3.4 Merge Strategy

**Always use merge commits. Never squash.**

```bash
# When merging PRs on the platform, select "Merge" (not "Squash and merge").
# When merging locally:
git merge --no-ff feature/my-feature
```

**Rationale:** Squash merges create a new commit that discards the original commit history and authorship. This breaks contribution statistics on the repository homepage and makes it harder to trace changes back to their original authors. Merge commits preserve the full history and ensure every contributor is properly credited.

### 3.5 Branch Naming Conventions

| Pattern | Example | Description |
|---------|---------|-------------|
| `feature/<name>` | `feature/add-sinc-function` | New feature or enhancement |
| `fix/<name>` | `fix/incorrect-signbit` | Bug fix |
| `release/vX.Y.Z` | `release/v0.3.0` | Release stabilization |
| `hotfix/<name>` | `hotfix/backport-signbit-fix` | Backported fix from a release branch |

Use lowercase kebab-case for branch names. Keep names concise but descriptive.

### 3.6 CI/CD Pipeline

CI/CD pipelines are triggered by events, not by branch types. Configure the following rules:

| Event | Pipeline | Description |
|-------|----------|-------------|
| PR created/updated targeting `master` | CI | Run tests, linting, and code analysis on every PR |
| Push to `master` (post-merge) | CI | Verify the merged code is healthy |
| Tag created (`vX.Y.Z`) | CD | Build release artifacts, publish packages |

No additional CI configuration is needed for `feature/`, `fix/`, or `hotfix/` branches. As long as the PR targets `master`, CI will run regardless of the source branch name.

### 3.7 Contributor Workflow

#### Team Members (with push access)

Team members create branches directly in the upstream repository:

```
upstream/master ←── PR ─── upstream/fix/xxx
```

```bash
git clone <upstream-url>
git checkout master
git pull upstream master
git checkout -b fix/signbit-error
# Develop, commit, push
git push upstream fix/signbit-error
# Open a PR on the platform: fix/signbit-error → master
```

#### External Contributors (without push access)

External contributors work in their own fork:

```
upstream/master ←── PR ─── fork/fix/xxx
```

```bash
git clone <fork-url>
git checkout master
git pull upstream master
git checkout -b fix/signbit-error
# Develop, commit, push
git push fork fix/signbit-error
# Open a PR on the platform: fork/fix/xxx → upstream/master
```

#### Key Points

- **One PR per change.** Always create a PR directly from the working branch to `master`. There is no need for a two-step PR process (e.g., PR to a fix branch, then PR from fix branch to master).
- **All code changes go through PR.** No direct pushes to `master`.
- **All PRs go through CI and code review.** Regardless of whether the contributor is a team member or an external contributor.

### 3.8 Commit Hygiene and Review Norms

#### Commit Quality

Every commit in a PR should represent a single, meaningful change. Before submitting a PR, contributors are expected to clean up their commit history:

**Bad (fragmented commits that pad the count):**
```
fix typo
fix another typo
update import
add sinc function
add sinc test
```

**Good (clean, meaningful commits):**
```
feat: add sinc function
test: add sinc unit tests
```

#### Cleaning Up Commits Before Submitting a PR

Use interactive rebase to squash trivial commits:

```bash
git rebase -i master
# Mark trivial commits with 's' (squash) or 'f' (fixup)
# Keep only meaningful commits as 'p' (pick)
git push --force  # Update the remote branch after rebase
```

#### Reviewer Responsibilities

- Reviewers should check commit quality in addition to code quality.
- If a PR contains fragmented or trivial commits, the reviewer should request the contributor to clean them up before approving the PR.
- A PR with well-organized commit history makes it easier to understand the change, bisect bugs, and revert individual changes if needed.

#### Relationship Between Platform Settings and Commit Hygiene

| Aspect | Who is responsible | What happens |
|--------|--------------------|--------------|
| Disable platform-level squash | Platform setting | Prevents loss of author attribution |
| Merge commit strategy | Platform setting | Preserves full commit history and contribution stats |
| Commit cleanup (squash trivial commits) | Contributor (local) | Ensures meaningful commit history |
| Enforce commit quality | Reviewer | Ensures PRs have clean, organized commits |

> **Summary:** The platform is configured to always use merge commits and disallow squash to preserve authorship. Contributors are responsible for keeping their own commit history clean and meaningful. Reviewers enforce this standard during code review.

---

## 4. Backend Development (C++)

Backend development primarily involves implementing NPU operator invocation logic at the C++ level. This section uses developing the `sinc` function as an example.

### 4.1 Add Function Declaration

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

### 4.2 Implement Function Body

Implement the function logic in the corresponding source file:

**File location**: `csrc/math/other_special_functions.cpp`

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

### 4.3 Key Implementation Points

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

## 5. Binding Layer (Pybind11)

### 5.1 Add Function Binding

Add function binding in the corresponding binding file:

**File location**: `bindings/python/bind_math.cpp`

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

## 6. Frontend Development (Python)

Frontend development primarily involves exposing C++ functions to the Python layer and ensuring APIs are compatible with NumPy.

### 6.1 Add Python Wrapper Layer

Import C++ functions in the corresponding Python module and add Python wrapper layer:

**File location**: `src/asnumpy/math.py`

First, import functions from the compiled C++ extension:

```python
from ._core.math import (
    sinc as _sinc,
    # ... other functions
)
from .utils import ndarray, _convert_dtype
```

Then, add Python wrapper layer for each function:

```python
def sinc(x: ArrayLike, dtype: DTypeLike = None) -> ndarray:
    return ndarray(_sinc(x, _convert_dtype(dtype)))
```

### 6.2 Export to Main Namespace

Add functions in the main package's `__init__.py`:

**File location**: `src/asnumpy/__init__.py`

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

## 7. Writing Tests

AsNumpy uses pytest and a custom testing framework to write tests.

### 7.1 Test File Organization

Test files are organized by module in the `tests/asnumpy_tests/` directory:

```
tests/
├── conftest.py                    # pytest configuration
└── asnumpy_tests/
    ├── math_tests/
    │   └── test_other_special_functions.py  # Test cases
    └── ...
```

### 7.2 Writing Test Cases

**File location**: `tests/asnumpy_tests/math_tests/test_other_special_functions.py`

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


@testing.for_dtypes([numpy.float64])
@testing.numpy_asnumpy_allclose(atol=1e-5, rtol=1e-5)
def test_sinc_basic(xp, dtype):
    """Test sinc basic functionality (known supported float types)"""
    data = [-3.0, -1.5, 0.5, 2.0, 3.5]
    a = _create_array(xp, data, dtype)
    return xp.sinc(a)


@testing.for_dtypes([numpy.float64])
@testing.numpy_asnumpy_allclose()
def test_sinc_zero(xp, dtype):
    """Test sinc(0) = 1"""
    data = [0.0]
    a = _create_array(xp, data, dtype)
    return xp.sinc(a)
```

### 7.3 Decorator Reference

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

## 8. Build and Run

### 8.1 Build Project

Install and build the project in development mode:

```bash
pip install -e .
```

### 8.2 Run Tests

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
pytest tests/asnumpy_tests/math_tests/test_other_special_functions.py

# Run specific test function
pytest tests/asnumpy_tests/math_tests/test_other_special_functions.py::test_sinc_basic
```

## Appendix: Common Commands Reference

```bash
# Install project
pip install -e .

# Run all tests
pytest tests/

# Run specific test
pytest tests/asnumpy_tests/math_tests/test_other_special_functions.py

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