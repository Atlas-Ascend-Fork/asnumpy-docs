# Asnumpy 开发指南

## 一、项目概述

Asnumpy 是一个基于华为昇腾 NPU 的数值计算库，提供与 NumPy 兼容的 API，将计算任务转移到 NPU 上执行。项目采用分层架构：

- **后端层 (C++)**: 使用昇腾 CANN API 实现 NPU 算子
- **绑定层 (Pybind11)**: 将 C++ 函数绑定到 Python 接口
- **前端层 (Python)**: 提供用户友好的 API，与 NumPy 接口保持一致
- **测试层**: 使用 pytest 框架和自定义测试工具验证功能正确性

### 项目目录结构

```
asnumpy/
├── src/                    # Python 包（src-layout）
│   └── asnumpy/
│       ├── __init__.py     # 主包初始化
│       ├── math.py         # 数学模块
│       ├── linalg/         # 线性代数模块
│       ├── random/         # 随机数模块
│       └── ...
├── csrc/                   # C++ 源文件
│   ├── math/               # 数学模块实现
│   └── ...
├── include/                # C++ 头文件
│   └── asnumpy/
│       ├── math/           # 数学模块头文件
│       └── ...
├── bindings/               # Pybind11 绑定
│   └── python/
│       ├── bind_math.cpp   # 数学模块绑定
│       └── ...
├── examples/               # 示例脚本
├── benchmarks/             # 性能基准测试
├── tests/                  # 测试文件
│   └── asnumpy_tests/      # 测试用例
└── ...
```

---

## 二、开发流程

开发新功能通常遵循以下步骤：

```
1. 添加函数声明 (include/)
   ↓
2. 实现函数逻辑 (csrc/)
   ↓
3. 添加 Python 绑定 (bindings/python/)
   ↓
4. 添加 Python 包装层 (src/asnumpy/math.py)
   ↓
5. 导出到主命名空间 (src/asnumpy/__init__.py)
   ↓
6. 编写测试用例 (tests/)
   ↓
7. 编译并运行测试
```

---

## 三、分支管理

### 3.1 概述

Asnumpy 采用简化的分支模型，基于单一主干分支，配合发布分支进行版本稳定：

```
master ─── PR_A ─── PR_B ─── PR_C ─── PR_D ─── PR_E ─── PR_F
                          │                      │
                   release/v0.2.0          cherry-pick hotfix
                          │                      │
                    tag v0.2.0               tag v0.2.1
                    tag v0.2.1                    │
                                                PR to master
```

### 3.2 分支类型

| 分支 | 用途 | 生命周期 |
|------|------|----------|
| `master` | 主干分支，所有功能 PR 合并至此 | 长期 |
| `feature/<name>` | 开发新功能或增强 | 短期 |
| `fix/<name>` | 修复缺陷 | 短期 |
| `release/vX.Y.Z` | 稳定版本并测试 | 随版本 |
| `hotfix/<name>` | 将发布分支的修复回溯到主干 | 短期 |

### 3.3 工作流

#### 功能开发

1. 从 `master` 创建功能分支：
   ```bash
   git checkout master
   git pull upstream master
   git checkout -b feature/my-feature
   ```
2. 开发、测试并提交。
3. 推送并创建以 `master` 为目标的 Pull Request。
4. 确保代码审查和 CI 通过。
5. 合并 PR。

#### 发布流程

1. 从 `master` 切出发布分支：
   ```bash
   git checkout master
   git checkout -b release/v0.3.0
   ```
2. 运行测试并稳定版本。直接在发布分支上修复问题。
3. 打标签发布：
   ```bash
   git tag v0.3.0
   ```
4. 如果打标签后需要额外修复，在发布分支上应用修复并打新的补丁版本标签（例如 `v0.3.1`）。
5. 将这些修复 cherry-pick 回 `master`（参见 [热修复流程](#333-热修复流程)）。
6. 当该发布系列不再维护时，删除发布分支：
   ```bash
   git branch -d release/v0.3.0
   ```

#### 热修复流程

当发布分支上的缺陷被修复后，必须将该修复带回到 `master`，以便未来版本包含此修复：

1. 在发布分支上修复缺陷并打补丁发布标签。
2. 将修复 cherry-pick 到新的热修复分支：
   ```bash
   git checkout -b hotfix/backport-fix-xxx master
   git cherry-pick <修复的提交哈希>
   ```
3. 推送热修复分支并创建以 `master` 为目标的 Pull Request。
4. 该 PR 经过正常的代码审查和 CI 流程。
5. 合并后删除热修复分支：
   ```bash
   git branch -d hotfix/backport-fix-xxx
   ```

> **为什么要使用单独的热修复分支，而不是直接 cherry-pick 到 master？**
> 专用分支允许修复经过 PR 审查和 CI 检查，确保与其他任何贡献保持相同的质量标准。

### 3.4 合并策略

**始终使用合并提交，不要 squash。**

```bash
# 在平台上合并 PR 时，选择 "Merge"（不要选择 "Squash and merge"）。
# 本地合并时：
git merge --no-ff feature/my-feature
```

**原因：** Squash 合并会创建一个新提交，丢弃原始提交历史和作者信息。这会破坏仓库主页上的贡献统计数据，并使追溯原始作者变得更加困难。合并提交保留完整历史，并确保每位贡献者都得到正确署名。

### 3.5 分支命名规范

| 模式 | 示例 | 说明 |
|------|------|------|
| `feature/<name>` | `feature/add-sinc-function` | 新功能或增强 |
| `fix/<name>` | `fix/incorrect-signbit` | 缺陷修复 |
| `release/vX.Y.Z` | `release/v0.3.0` | 发布稳定化 |
| `hotfix/<name>` | `hotfix/backport-signbit-fix` | 从发布分支回溯的修复 |

分支名称使用小写 kebab-case。保持名称简洁但具有描述性。

### 3.6 CI/CD 流水线

CI/CD 流水线由事件触发，而非分支类型。配置以下规则：

| 事件 | 流水线 | 说明 |
|------|--------|------|
| 创建/更新以 `master` 为目标的 PR | CI | 在每个 PR 上运行测试、代码分析和代码检查 |
| 推送到 `master`（合并后） | CI | 验证合并后的代码是否健康 |
| 创建标签 (`vX.Y.Z`) | CD | 构建发布产物、发布包 |

`feature/`、`fix/` 或 `hotfix/` 分支不需要额外的 CI 配置。只要 PR 以 `master` 为目标，无论源分支名称如何，CI 都会运行。

### 3.7 贡献者工作流

#### 团队成员（有推送权限）

团队成员直接在上游仓库创建分支：

```
upstream/master ←── PR ─── upstream/fix/xxx
```

```bash
git clone <upstream-url>
git checkout master
git pull upstream master
git checkout -b fix/signbit-error
# 开发、提交、推送
git push upstream fix/signbit-error
# 在平台上创建 PR：fix/signbit-error → master
```

#### 外部贡献者（无推送权限）

外部贡献者在自己的 fork 中工作：

```
upstream/master ←── PR ─── fork/fix/xxx
```

```bash
git clone <fork-url>
git checkout master
git pull upstream master
git checkout -b fix/signbit-error
# 开发、提交、推送
git push fork fix/signbit-error
# 在平台上创建 PR：fork/fix/xxx → upstream/master
```

#### 关键要点

- **一个变更一个 PR。** 始终直接从工作分支创建 PR 到 `master`。不需要两步 PR 流程（例如，先 PR 到修复分支，再从修复分支 PR 到 master）。
- **所有代码变更都经过 PR。** 禁止直接推送到 `master`。
- **所有 PR 都经过 CI 和代码审查。** 无论贡献者是团队成员还是外部贡献者。

### 3.8 提交规范与审查准则

#### 提交质量

PR 中的每个提交都应代表一个单一的、有意义的变更。提交 PR 前，贡献者需要清理提交历史：

**不好（碎片化的提交，凑数量）：**
```
fix typo
fix another typo
update import
add sinc function
add sinc test
```

**好（干净、有意义的提交）：**
```
feat: add sinc function
test: add sinc unit tests
```

#### 提交 PR 前清理提交

使用交互式 rebase 来 squash 琐碎的提交：

```bash
git rebase -i master
# 将琐碎提交标记为 's' (squash) 或 'f' (fixup)
# 仅将有意义的提交保留为 'p' (pick)
git push --force  # rebase 后更新远程分支
```

#### 审查者职责

- 审查者除了检查代码质量外，还应检查提交质量。
- 如果 PR 包含碎片化或琐碎的提交，审查者应要求贡献者在批准 PR 前清理它们。
- 提交历史组织良好的 PR 更容易理解变更、二分法定位缺陷，以及在需要时回滚个别变更。

#### 平台设置与提交规范的关系

| 方面 | 责任人 | 作用 |
|------|--------|------|
| 禁用平台级 squash | 平台设置 | 防止丢失作者署名 |
| 合并提交策略 | 平台设置 | 保留完整提交历史和贡献统计 |
| 提交清理（squash 琐碎提交） | 贡献者（本地） | 确保有意义的提交历史 |
| 执行提交质量 | 审查者 | 确保 PR 具有干净、有条理的提交 |

> **总结：** 平台配置为始终使用合并提交并禁止 squash，以保留作者署名。贡献者负责保持自己的提交历史干净且有意义。审查者在代码审查期间执行此标准。

---

## 四、后端开发 (C++)

后端开发主要涉及在 C++ 层面实现 NPU 算子调用逻辑。本节以开发 `sinc` 函数为例。

### 4.1 添加函数声明

在对应的头文件中添加函数声明。`sinc` 属于数学模块的特殊函数，声明位于：

**文件位置**: `include/asnumpy/math/other_special_functions.hpp`

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

### 4.2 实现函数主体

在对应的源文件中实现函数逻辑：

**文件位置**: `csrc/math/other_special_functions.cpp`

```cpp
NPUArray Sinc(const NPUArray& x, std::optional<py::dtype> dtype) {
    // 1. 确定输出数据类型
    py::dtype py_dtype = x.dtype;
    aclDataType in_dtype = NPUArray::GetACLDataType(py_dtype);
    aclDataType out_dtype = in_dtype;
    
    py::dtype out_py_dtype = NPUArray::GetPyDtype(out_dtype);
    if (dtype != std::nullopt) {
        out_py_dtype = *dtype;
        out_dtype = NPUArray::GetACLDataType(out_py_dtype);
    }
    
    // 2. 创建输出数组
    NPUArray out(x.shape, out_py_dtype);

    // 3. 准备 NPU 算子执行所需资源
    uint64_t workspaceSize = 0;
    aclOpExecutor* executor = nullptr;

    // 4. 获取 workspace 大小和执行器
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

    // 5. 分配 workspace 内存（如果需要）
    void* workspaceAddr = nullptr;
    if (workspaceSize > 0) {
        error = aclrtMalloc(&workspaceAddr, workspaceSize, ACL_MEM_MALLOC_HUGE_FIRST);
        if (error != ACL_SUCCESS) {
            std::string msg = "[other_special_functions.cpp](sinc) aclrtMalloc error = "
                              + std::to_string(error);
            throw std::runtime_error(msg);
        }
    }

    // 6. 执行算子
    error = aclnnSinc(workspaceAddr, workspaceSize, executor, nullptr);
    if (error != ACL_SUCCESS) {
        if (workspaceAddr) aclrtFree(workspaceAddr);
        std::string msg = "[other_special_functions.cpp](sinc) aclnnSinc error = "
                          + std::to_string(error);
        throw std::runtime_error(msg);
    }

    // 7. 同步设备，确保计算完成
    error = aclrtSynchronizeDevice();
    if (error != ACL_SUCCESS) {
        if (workspaceAddr) aclrtFree(workspaceAddr);
        std::string msg = "[other_special_functions.cpp](sinc) aclrtSynchronizeDevice error = "
                          + std::to_string(error);
        throw std::runtime_error(msg);
    }

    // 8. 释放 workspace 内存
    if (workspaceAddr) {
        aclrtFree(workspaceAddr);
    }

    return out;
}
```

### 4.3 关键实现要点

#### 错误处理

所有 ACL API 调用都需要检查返回值：

```cpp
auto error = aclnnSomeFunction(/* 参数 */);
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

#### NPU 算子执行流程

典型的 NPU 算子执行流程包括：

1. **GetWorkspaceSize**: 获取所需 workspace 大小和执行器
2. **Malloc**: 分配 workspace 内存（如果需要）
3. **Execute**: 执行算子计算
4. **Synchronize**: 同步设备，等待计算完成
5. **Free**: 释放 workspace 内存

---

## 五、绑定层 (Pybind11)

### 5.1 添加函数绑定

在对应的绑定文件中添加函数绑定：

**文件位置**: `bindings/python/bind_math.cpp`

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

## 六、前端开发 (Python)

前端开发主要涉及将 C++ 函数暴露到 Python 层，并确保 API 与 NumPy 兼容。

### 6.1 添加 Python 包装层

在对应的 Python 模块中导入 C++ 函数，并添加 Python 包装层：

**文件位置**: `src/asnumpy/math.py`

首先，从编译好的 C++ 扩展导入函数：

```python
from ._core.math import (
    sinc as _sinc,
    # ... 其他函数
)
from .utils import ndarray, _convert_dtype
```

然后，为每个函数添加 Python 包装层：

```python
def sinc(x: ArrayLike, dtype: DTypeLike = None) -> ndarray:
    return ndarray(_sinc(x, _convert_dtype(dtype)))
```

### 6.2 导出到主命名空间

在主包的 `__init__.py` 中添加函数：

**文件位置**: `src/asnumpy/__init__.py`

```python
from .math import (
    sin,
    sinc,
    # ... 其他数学函数
)

__all__ = [
    # ... 其他导出
    "sin",
    "sinc",
]
```

---

## 七、测试编写

asnumpy 使用 pytest 和自定义测试框架编写测试。

### 7.1 测试文件组织

测试文件按模块组织，位于 `tests/asnumpy_tests/` 目录：

```
tests/
├── conftest.py                    # pytest 配置
└── asnumpy_tests/
    ├── math_tests/
    │   └── test_other_special_functions.py  # 测试用例
    └── ...
```

### 7.2 编写测试用例

**文件位置**: `tests/asnumpy_tests/math_tests/test_other_special_functions.py`

```python
import numpy
import pytest
from asnumpy import testing

def _create_array(xp, data, dtype):
    """辅助函数：创建数组"""
    np_arr = numpy.array(data, dtype=dtype)
    if xp is numpy:
        return np_arr
    return xp.ndarray.from_numpy(np_arr)


@testing.for_dtypes([numpy.float64])
@testing.numpy_asnumpy_allclose(atol=1e-5, rtol=1e-5)
def test_sinc_basic(xp, dtype):
    """测试 sinc 基础功能（已知支持的浮点类型）"""
    data = [-3.0, -1.5, 0.5, 2.0, 3.5]
    a = _create_array(xp, data, dtype)
    return xp.sinc(a)


@testing.for_dtypes([numpy.float64])
@testing.numpy_asnumpy_allclose()
def test_sinc_zero(xp, dtype):
    """测试 sinc(0) = 1"""
    data = [0.0]
    a = _create_array(xp, data, dtype)
    return xp.sinc(a)
```

### 7.3 装饰器说明

asnumpy 提供了丰富的测试装饰器，用于参数化测试和结果比较。

#### 数据类型装饰器

- `for_dtypes(dtypes)` - 指定数据类型列表
- `for_all_dtypes()` - 所有数据类型（默认排除不支持的 float16、uint32、uint64）
- `for_float_dtypes()` - 浮点类型（float32、float64）
- `for_int_dtypes()` - 整数类型（int8-64、uint8-32）
- `for_signed_dtypes()` - 有符号整数（int8-64）
- `for_unsigned_dtypes()` - 无符号整数（uint8-16）
- `for_complex_dtypes()` - 复数类型（complex64、complex128）

```python
@testing.for_float_dtypes(no_float16=True)
def test_func(xp, dtype):
    a = xp.array([1.0, 2.0, 3.0], dtype=dtype)
    return xp.sinc(a)
```

#### 内存顺序装饰器

- `for_orders(orders)` - 指定内存顺序列表
- `for_cf_orders()` - C 和 F 顺序

```python
@testing.for_orders(['C', 'F'])
def test_func(xp, order):
    return xp.zeros((3, 3), order=order)
```

#### NumPy-Asnumpy 比较装饰器

- `numpy_asnumpy_array_equal()` - 比较数组是否完全相等
- `numpy_asnumpy_allclose(rtol=1e-7, atol=0)` - 比较浮点数组是否接近（设置相对/绝对容差）

```python
@testing.numpy_asnumpy_allclose(rtol=1e-5, atol=1e-8)
def test_func(xp, dtype):
    a = xp.array([1.0, 2.0, 3.0], dtype=dtype)
    return xp.sinc(a)
```

#### pytest 集成装饰器

- `parameterize(*params)` - 参数化测试
- `fixture` - pytest fixture
- `skip` - 跳过测试
- `skipif(condition)` - 条件跳过
- `xfail` - 预期失败

```python
@testing.parameterize('n', [1, 2, 4])
def test_func(n):
    assert n > 0
```

---

## 八、编译与运行

### 8.1 编译项目

在开发模式下安装和编译项目：

```bash
pip install -e .
```

### 8.2 运行测试

#### 运行所有测试

```bash
pytest tests/
```

#### 运行特定模块测试

```bash
# 数学模块测试
pytest tests/asnumpy_tests/math_tests/
```

#### 运行单个测试

```bash
# 运行特定测试文件
pytest tests/asnumpy_tests/math_tests/test_other_special_functions.py

# 运行特定测试函数
pytest tests/asnumpy_tests/math_tests/test_other_special_functions.py::test_sinc_basic
```

## 附录：常用命令速查

```bash
# 安装项目
pip install -e .

# 运行所有测试
pytest tests/

# 运行特定测试
pytest tests/asnumpy_tests/math_tests/test_other_special_functions.py

# 详细输出
pytest -v

# 显示打印输出
pytest -s

# 清理并重新安装
pip uninstall asnumpy -y && pip install -e .
```

## 参考资源

- [昇腾 CANN 文档](https://www.hiascend.com/document)
- [NumPy 文档](https://numpy.org/doc/stable/)
- [Pybind11 文档](https://pybind11.readthedocs.io/)
- [pytest 文档](https://docs.pytest.org/)