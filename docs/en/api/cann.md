# CANN Interfaces

::: info
This API section currently keeps a curated subset of representative APIs.Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes.This document is for reference only.
:::

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

This function initializes the CANN runtime. It does not select a device; device selection is a separate `set_device(device_id)` call.

::: tip
Importing `asnumpy` already calls `init()` followed by `set_device(0)`. Initialization happens during import, before the first array operation; normally you do not call `init()` again. After import, use `set_device(device_id)` to select another available device.
:::

## asnumpy.finalize

```python
asnumpy.finalize() -> None
```

Finalize the CANN backend.

This function releases CANN resources and should be called when you're done using asnumpy.

::: warning
After explicitly finalizing the runtime, a subsequent session needs both runtime initialization and device selection, in that order: `ap.init()` then `ap.set_device(device_id)`. Calling `init()` alone does not repeat the package's import-time device selection. Release existing arrays and finish device operations before ending a session; do not reuse arrays from the previous session.
:::
