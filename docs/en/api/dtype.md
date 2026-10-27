# Data Types

asnumpy has no data type system of its own: `asnumpy.dtype` **is** `numpy.dtype`, and `asnumpy.float32` **is** `numpy.float32`. Every promotion, casting and inspection decision is delegated to NumPy, so asnumpy cannot drift from NumPy's rules.

What asnumpy does own is the device side — which data types the Ascend ACL kernels can represent. That mapping lives in `csrc/dtypes/dtype_table.cpp`.

## Device-supported types

`asnumpy.ndarray.from_numpy()` and `to_numpy()` can only handle the types below, because each has an ACL representation.

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

A type may have an ACL mapping and still be rejected by a particular kernel: the table says the data can live on the device, not that every operator accepts it. For example, several reduction kernels currently only cover `float16`, `float32` and `int32`.

The following ACL types have a known name but **no** NumPy mapping, so they cannot be used with `from_numpy()` / `to_numpy()`: `bfloat16`, `complex32`, `int4`, `uint1`, `hifloat8`, `float8_e5m2`, `float8_e4m3fn`, `float8_e8m0`, `float6_e3m2`, `float6_e2m3`, `float4_e2m1`, `float4_e1m2`, and `string`.

## Type aliases

The canonical spellings plus the C-derived aliases NumPy exposes are reachable from the package root, for example `ap.float32` or `ap.int64`. Each resolves to NumPy's own object, so `ap.float32 is np.float32`.

| Category | Aliases |
|---|---|
| Floating point | `float16`, `float32`, `float64`, `half`, `single`, `double` |
| Complex | `complex64`, `complex128`, `csingle`, `cdouble` |
| Signed integer | `int8`, `int16`, `int32`, `int64`, `byte`, `short`, `intc`, `int_`, `longlong`, `intp` |
| Unsigned integer | `uint8`, `uint16`, `uint32`, `uint64`, `ubyte`, `ushort`, `uintc`, `uint`, `ulonglong`, `uintp` |
| Boolean | `bool_`, `bool` |

These aliases exist for resolution and validation — they are NumPy types, not device handles.

## asnumpy.dtype

Verbatim re-export of `numpy.dtype` (`ap.dtype is np.dtype`).

```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.dtype is np.dtype
True
>>> ap.dtype(np.float32)
dtype('float32')
```

## asnumpy.finfo

Verbatim re-export of `numpy.finfo` (`ap.finfo is np.finfo`). Describes a floating-point type.

```python
>>> import asnumpy as ap
>>> ap.finfo(ap.float32).bits
32
```

## asnumpy.iinfo

Verbatim re-export of `numpy.iinfo` (`ap.iinfo is np.iinfo`). Describes an integer type.

```python
>>> import asnumpy as ap
>>> ap.iinfo(ap.int8).bits
8
```

## asnumpy.isdtype

Verbatim re-export of `numpy.isdtype` (`ap.isdtype is np.isdtype`). Test whether a dtype belongs to a category such as `"integral"` or `"real floating"`.

```python
>>> import asnumpy as ap
>>> ap.isdtype(ap.int32, "integral")
True
```

## asnumpy.issubdtype

Verbatim re-export of `numpy.issubdtype` (`ap.issubdtype is np.issubdtype`). Test the subtype relation between two types.

```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.issubdtype(ap.int32, np.integer)
True
```

## asnumpy.promote_types

Verbatim re-export of `numpy.promote_types` (`ap.promote_types is np.promote_types`). Return the type that two types promote to.

```python
>>> import asnumpy as ap
>>> ap.promote_types(ap.int32, ap.float32)
dtype('float64')
```

## asnumpy.result_type

```python
asnumpy.result_type(*arrays_and_dtypes) -> dtype
```

Return the type that results from applying NumPy's promotion rules to the arguments.

This mirrors `numpy.result_type`, with one difference: an `asnumpy.ndarray` argument is reduced to its `.dtype` first. Passing the array itself would make NumPy copy the whole tensor from the device to the host just to answer a question about metadata, so `ap.result_type is np.result_type` is `False`.

**Arguments**
- `*arrays_and_dtypes` (asnumpy.ndarray, dtype, or scalar type): The operands to promote.

**Returns**
- `dtype`: The promoted type.

**See Also**
- [`numpy.result_type`](https://numpy.org/doc/stable/reference/generated/numpy.result_type.html)
- [`asnumpy.can_cast`](#asnumpy-can-cast)

**Examples**
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

Return True if a cast between data types is possible under the given rule.

This mirrors `numpy.can_cast`, with the same `asnumpy.ndarray` unwrapping as `result_type` so that no device-to-host transfer is needed.

**Arguments**
- `from_` (asnumpy.ndarray, dtype, or scalar type): Source type.
- `to` (dtype or scalar type): Target type.
- `casting` (str, optional): Casting rule — `"no"`, `"equiv"`, `"safe"` (default), `"same_kind"`, or `"unsafe"`.

**Returns**
- `bool`: Whether the cast is permitted.

**See Also**
- [`numpy.can_cast`](https://numpy.org/doc/stable/reference/generated/numpy.can_cast.html)
- [`asnumpy.result_type`](#asnumpy-result-type)

**Examples**
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
