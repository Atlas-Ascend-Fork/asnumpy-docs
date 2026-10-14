# Utilities

::: info
This API section currently keeps a curated subset of representative APIs. Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes. This document is for reference only.
:::

This module provides utility functions for asnumpy.

## asnumpy.broadcast_shape

```python
asnumpy.broadcast_shape(shape_a: ndarray, shape_b: ndarray) -> list[int]
```

Compute the broadcasted shape of two AsNumpy arrays.

The current interface accepts arrays, not shape tuples. For a shape-only
calculation on the host, use `numpy.broadcast_shapes(shape_a, shape_b)`.

**Arguments**
- `shape_a` (ndarray): First input array.
- `shape_b` (ndarray): Second input array.

**Returns**
- `list[int]`: The broadcasted dimensions.

**Raises**
- `ValueError`: If the shapes cannot be broadcast together.

**Example**
```python
>>> import asnumpy as anp
>>> import numpy as np
>>> a = anp.ndarray.from_numpy(np.zeros((3, 1), dtype=np.float32))
>>> b = anp.ndarray.from_numpy(np.zeros((1, 4), dtype=np.float32))
>>> anp.broadcast_shape(a, b)
[3, 4]
>>> a = anp.ndarray.from_numpy(np.zeros((5, 1, 3), dtype=np.float32))
>>> b = anp.ndarray.from_numpy(np.zeros((1, 4, 3), dtype=np.float32))
>>> anp.broadcast_shape(a, b)
[5, 4, 3]
```
