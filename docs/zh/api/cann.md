# CANN 接口

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

设置当前设备。

**参数**
- `device_id` (int): 要设置的设备 ID。

### asnumpy.reset_device

```python
asnumpy.reset_device(device_id: int) -> None
```

重置当前设备。

**参数**
- `device_id` (int): 要重置的设备 ID。

### asnumpy.reset_device_force

```python
asnumpy.reset_device_force(device_id: int) -> None
```

强制重置当前设备。

**参数**
- `device_id` (int): 要重置的设备 ID。

### asnumpy.init

```python
asnumpy.init() -> None
```

初始化 CANN 后端。

### asnumpy.finalize

```python
asnumpy.finalize() -> None
```

终结 CANN 后端。
