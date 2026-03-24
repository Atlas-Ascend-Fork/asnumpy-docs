# CANN Interfaces

This module provides interfaces to the CANN (Compute Architecture for Neural Networks) backend.

## asnumpy.set_device

```python
asnumpy.set_device(device_id: int) -> None
```

Set the current device.

**Arguments**
- `device_id` (int): ID of the device to set.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.set_device(0)  # Use NPU device 0
>>> ap.set_device(1)  # Switch to NPU device 1
```

## asnumpy.reset_device

```python
asnumpy.reset_device(device_id: int) -> None
```

Reset the current device.

**Arguments**
- `device_id` (int): ID of the device to reset.

## asnumpy.reset_device_force

```python
asnumpy.reset_device_force(device_id: int) -> None
```

Force reset the current device.

**Arguments**
- `device_id` (int): ID of the device to reset.

::: warning
Force reset may interrupt ongoing operations on the device.
:::

## asnumpy.init

```python
asnumpy.init() -> None
```

Initialize the CANN backend.

This function initializes the CANN runtime and prepares the NPU for computation.

::: tip
In most cases, you don't need to call this function explicitly. It will be called automatically when you first use asnumpy.
:::

## asnumpy.finalize

```python
asnumpy.finalize() -> None
```

Finalize the CANN backend.

This function releases CANN resources and should be called when you're done using asnumpy.

::: warning
After calling `finalize()`, you must call `init()` again before using any asnumpy functions.
:::
