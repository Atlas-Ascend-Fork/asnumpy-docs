# 工具函数

本模块提供 asnumpy 的工具函数。

## asnumpy.broadcast_shape

```python
asnumpy.broadcast_shape(shape_a: Sequence[int], shape_b: Sequence[int]) -> tuple
```

计算两个输入形状广播后的结果形状。

**参数**
- `shape_a` (Sequence[int]): 第一个输入形状。
- `shape_b` (Sequence[int]): 第二个输入形状。

**返回值**
- `tuple`: 广播后的形状。

**抛出**
- `ValueError`: 如果形状无法一起广播。

**示例**
```python
>>> import asnumpy as anp
>>> anp.broadcast_shape((3, 1), (1, 4))
(3, 4)
>>> anp.broadcast_shape((5, 1, 3), (1, 4, 3))
(5, 4, 3)
```

## asnumpy.enable_logging

```python
asnumpy.enable_logging(level: str = "INFO", log_dir: Union[str, None] = None) -> None
```

启用 asnumpy 的低级别日志输出。

默认情况下，asnumpy 会静默所有日志输出。调用此函数可激活日志，方便检查设备初始化、数组创建、CANN 后端调用等内部操作。

**参数**
- `level` (str, 默认 "INFO"): 日志级别。常用值包括 `"DEBUG"`、`"INFO"`、`"WARNING"`、`"ERROR"`。
- `log_dir` (str 或 None, 可选): 如果指定，日志将保存到该目录下的文件中，同时在控制台输出。如果为 `None`，则仅在标准错误流输出日志。

**示例**
```python
>>> import asnumpy as ap
>>> ap.enable_logging(level="DEBUG")
>>> ap.zeros(3)
# DEBUG 日志将显示在控制台
```

## asnumpy.reset

```python
asnumpy.reset() -> None
```

重置设备并释放 CANN 资源。

此函数已自动注册为 `atexit` 处理器，在 Python 解释器退出时自动调用。通常无需手动调用。

**示例**
```python
>>> import asnumpy as ap
>>> ap.reset()  # 重置设备 0 并终结 CANN
```

## 类型别名

asnumpy 定义了以下在 API 中使用的类型别名：

| 别名 | 定义 | 描述 |
|---|---|---|
| `ScalarLike` | `Union[int, float, complex, bool]` | 大多数函数接受的标量数值类型。 |
| `ArrayLike` | `Union[ndarray, numpy.ndarray, ScalarLike, Sequence[ScalarLike]]` | 作为数组输入接受的类型。包括 NPU 数组、NumPy 数组、标量和 Python 序列。 |
| `DTypeLike` | `Union[numpy.dtype, str, type, None]` | 用于指定数据类型的类型。 |
| `ShapeLike` | `Union[int, Sequence[int]]` | 用于指定数组形状的类型。 |
| `AxisLike` | `Union[int, Sequence[int], None]` | 用于指定轴的类型（用于归约函数）。 |
| `AxisOptional` | `AxisLike` | `AxisLike` 的别名，保留用于向后兼容。 |

这些类型别名在文档的函数签名中使用。例如，文档中标注为 `sin(x: ArrayLike) -> ndarray` 的函数接受上表 `ArrayLike` 定义中列出的任何类型。
