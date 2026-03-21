# Utilities

This module provides utility functions for asnumpy.

## asnumpy.broadcast_shape

```python
asnumpy.broadcast_shape(shape_a: Sequence[int], shape_b: Sequence[int]) -> tuple:
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
