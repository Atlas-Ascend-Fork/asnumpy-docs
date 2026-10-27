# 数据类型

asnumpy 没有自建的数据类型系统：`asnumpy.dtype` **就是** `numpy.dtype`，`asnumpy.float32` **就是** `numpy.float32`。类型提升、类型转换与类型检查的判定全部委托给 NumPy，因此 asnumpy 不会与 NumPy 的规则产生偏差。

asnumpy 自己负责的是设备侧：Ascend ACL 算子能够表示哪些数据类型。该映射位于 `csrc/dtypes/dtype_table.cpp`。

## 设备端支持的类型

`asnumpy.ndarray.from_numpy()` 与 `to_numpy()` 只能处理下表中的类型，因为它们具有 ACL 表示。

| NumPy dtype | ACL type | Bytes |
|---|---|---|
| `bool` | `ACL_BOOL` | 1 |
| `int8` | `ACL_INT8` | 1 |
| `int16` | `ACL_INT16` | 2 |
| `int32` | `ACL_INT32` | 4 |
| `int64` | `ACL_INT64` | 8 |
| `uint8` | `ACL_UINT8` | 1 |
| `uint16` | `ACL_UINT16` | 2 |
| `uint32` | `ACL_UINT32` | 4 |
| `uint64` | `ACL_UINT64` | 8 |
| `float16` | `ACL_FLOAT16` | 2 |
| `float32` | `ACL_FLOAT` | 4 |
| `float64` | `ACL_DOUBLE` | 8 |
| `complex64` | `ACL_COMPLEX64` | 8 |
| `complex128` | `ACL_COMPLEX128` | 16 |

某种类型即使有 ACL 映射，也可能被具体算子拒绝：该表说明数据可以存放在设备端，并不保证每个算子都接受它。例如部分归约算子目前只覆盖 `float16`、`float32` 与 `int32`。

以下 ACL 类型有名称但**没有** NumPy 映射，因此不能用于 `from_numpy()` / `to_numpy()`：`bfloat16`、`complex32`、`int4`、`uint1`、`hifloat8`、`float8_e5m2`、`float8_e4m3fn`、`float8_e8m0`、`float6_e3m2`、`float6_e2m3`、`float4_e2m1`、`float4_e1m2` 以及 `string`。

## 类型别名

NumPy 的规范拼写以及其暴露的 C 风格别名都可以直接从包顶层访问，例如 `ap.float32` 或 `ap.int64`。每个别名都指向 NumPy 自身的对象，因此 `ap.float32 is np.float32`。

| 类别 | 别名 |
|---|---|
| 浮点 | `float16`, `float32`, `float64`, `half`, `single`, `double` |
| 复数 | `complex64`, `complex128`, `csingle`, `cdouble` |
| 有符号整数 | `int8`, `int16`, `int32`, `int64`, `byte`, `short`, `intc`, `int_`, `longlong`, `intp` |
| 无符号整数 | `uint8`, `uint16`, `uint32`, `uint64`, `ubyte`, `ushort`, `uintc`, `uint`, `ulonglong`, `uintp` |
| 布尔 | `bool_`, `bool` |

这些别名用于类型解析与校验——它们是 NumPy 的类型，而不是设备句柄。

## asnumpy.dtype

`numpy.dtype` 的原样重导出（`ap.dtype is np.dtype`）。

```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.dtype is np.dtype
True
>>> ap.dtype(np.float32)
dtype('float32')
```

## asnumpy.finfo

`numpy.finfo` 的原样重导出（`ap.finfo is np.finfo`），用于描述浮点类型。

```python
>>> import asnumpy as ap
>>> ap.finfo(ap.float32).bits
32
```

## asnumpy.iinfo

`numpy.iinfo` 的原样重导出（`ap.iinfo is np.iinfo`），用于描述整数类型。

```python
>>> import asnumpy as ap
>>> ap.iinfo(ap.int8).bits
8
```

## asnumpy.isdtype

`numpy.isdtype` 的原样重导出（`ap.isdtype is np.isdtype`），判断某个 dtype 是否属于 `"integral"`、`"real floating"` 等类别。

```python
>>> import asnumpy as ap
>>> ap.isdtype(ap.int32, "integral")
True
```

## asnumpy.issubdtype

`numpy.issubdtype` 的原样重导出（`ap.issubdtype is np.issubdtype`），判断两个类型之间的子类型关系。

```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.issubdtype(ap.int32, np.integer)
True
```

## asnumpy.promote_types

`numpy.promote_types` 的原样重导出（`ap.promote_types is np.promote_types`），返回两个类型提升后的结果类型。

```python
>>> import asnumpy as ap
>>> ap.promote_types(ap.int32, ap.float32)
dtype('float64')
```

## asnumpy.result_type

```python
asnumpy.result_type(*arrays_and_dtypes) -> dtype
```

按照 NumPy 的类型提升规则，返回各参数提升后的结果类型。

该接口与 `numpy.result_type` 行为一致，唯一差别是：若参数为 `asnumpy.ndarray`，会先取其 `.dtype`。若把数组本身交给 NumPy，就会为了回答一个元数据问题而把整个张量从设备端复制到主机端，因此 `ap.result_type is np.result_type` 为 `False`。

**参数**
- `*arrays_and_dtypes` (asnumpy.ndarray、dtype 或标量类型): 参与提升的操作数。

**返回值**
- `dtype`: 提升后的类型。

**参见**
- [`numpy.result_type`](https://numpy.org/doc/stable/reference/generated/numpy.result_type.html)
- [`asnumpy.can_cast`](#asnumpy-can-cast)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.result_type(ap.int32, ap.float32)
dtype('float64')
>>> a = ap.ndarray.from_numpy(np.array([1, 2], dtype=np.int32))
>>> ap.result_type(a, ap.float32)
dtype('float64')
```

## asnumpy.can_cast

```python
asnumpy.can_cast(from_, to, casting="safe") -> bool
```

在给定转换规则下判断某种类型转换是否可行，可行则返回 True。

该接口与 `numpy.can_cast` 行为一致，并且与 `result_type` 一样会先取 `asnumpy.ndarray` 的 `.dtype`，从而避免设备到主机的数据复制。

**参数**
- `from_` (asnumpy.ndarray、dtype 或标量类型): 源类型。
- `to` (dtype 或标量类型): 目标类型。
- `casting` (str, 可选): 转换规则，取值为 `"no"`、`"equiv"`、`"safe"`（默认）、`"same_kind"` 或 `"unsafe"`。

**返回值**
- `bool`: 是否允许该转换。

**参见**
- [`numpy.can_cast`](https://numpy.org/doc/stable/reference/generated/numpy.can_cast.html)
- [`asnumpy.result_type`](#asnumpy-result-type)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.can_cast(ap.int32, ap.int64)
True
>>> ap.can_cast(ap.int64, ap.int32)
False
>>> a = ap.ndarray.from_numpy(np.array([1, 2], dtype=np.int32))
>>> ap.can_cast(a, ap.int64)
True
```
