# CANN Interfaces

<!-- docsify-toc:start -->
- [asnumpy.set_device](#asnumpyset_device)
- [asnumpy.reset_device](#asnumpyreset_device)
- [asnumpy.reset_device_force](#asnumpyreset_device_force)
- [asnumpy.init](#asnumpyinit)
- [asnumpy.finalize](#asnumpyfinalize)
<!-- docsify-toc:end -->

### asnumpy.set_device

```python
asnumpy.set_device(device_id: int) -> None
```

Set the current device.

**Arguments**
- `device_id` (int): ID of the device to set.

### asnumpy.reset_device

```python
asnumpy.reset_device(device_id: int) -> None
```

Reset the current device.

**Arguments**
- `device_id` (int): ID of the device to reset.

### asnumpy.reset_device_force

```python
asnumpy.reset_device_force(device_id: int) -> None
```

Force reset the current device.

**Arguments**
- `device_id` (int): ID of the device to reset.

### asnumpy.init

```python
asnumpy.init() -> None
```

Initialize the CANN backend.

### asnumpy.finalize

```python
asnumpy.finalize() -> None
```

Finalize the CANN backend.
