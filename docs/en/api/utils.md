# Utilities

This module provides utility functions for asnumpy.

## asnumpy.broadcast_shape

```python
asnumpy.broadcast_shape(shape_a: Sequence[int], shape_b: Sequence[int]) -> tuple
```

Compute the broadcasted shape resulting from two input shapes.

**Arguments**
- `shape_a` (Sequence[int]): First input shape.
- `shape_b` (Sequence[int]): Second input shape.

**Returns**
- `tuple`: The broadcasted shape.

**Raises**
- `ValueError`: If the shapes cannot be broadcast together.

**Example**
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

Enable low-level logging for asnumpy.

By default, asnumpy silences all log output. This function activates logging so you can inspect internal operations such as device initialization, array creation, and CANN backend calls.

**Arguments**
- `level` (str, default "INFO"): Logging level. Common values are `"DEBUG"`, `"INFO"`, `"WARNING"`, `"ERROR"`.
- `log_dir` (str or None, optional): If specified, logs will be saved to a file in this directory alongside console output. If `None`, logs are only printed to stderr.

**Example**
```python
>>> import asnumpy as ap
>>> ap.enable_logging(level="DEBUG")
>>> ap.zeros(3)
# DEBUG logs will appear in the console
```

## asnumpy.reset

```python
asnumpy.reset() -> None
```

Reset the device and release CANN resources.

This function is automatically registered as an `atexit` handler, so it is called when the Python interpreter exits. You typically do not need to call it manually.

**Example**
```python
>>> import asnumpy as ap
>>> ap.reset()  # reset device 0 and finalize CANN
```

## Type Aliases

asnumpy defines the following type aliases used throughout the API:

| Alias | Definition | Description |
|---|---|---|
| `ScalarLike` | `Union[int, float, complex, bool]` | Scalar numeric types accepted by most functions. |
| `ArrayLike` | `Union[ndarray, numpy.ndarray, ScalarLike, Sequence[ScalarLike]]` | Types accepted as array inputs. Includes NPU arrays, NumPy arrays, scalars, and Python sequences. |
| `DTypeLike` | `Union[numpy.dtype, str, type, None]` | Types accepted for specifying data types. |
| `ShapeLike` | `Union[int, Sequence[int]]` | Types accepted for specifying array shapes. |
| `AxisLike` | `Union[int, Sequence[int], None]` | Types accepted for specifying axes (used in reduction functions). |
| `AxisOptional` | `AxisLike` | Alias for `AxisLike`, kept for backward compatibility. |

These type aliases are used in function signatures throughout the documentation. For example, a function documented as `sin(x: ArrayLike) -> ndarray` accepts any type listed in the `ArrayLike` definition above.
