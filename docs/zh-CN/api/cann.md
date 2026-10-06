# CANN 接口

::: info
当前 API 文档站仅保留了一组代表性API。由于 AsNumpy 前端与文档体系仍在进行较大幅度整改，其余接口文档暂时隐藏，待前端稳定后再逐步补全。当前文档仅供参考。
:::

本模块提供 CANN（神经网络异构计算架构）后端的接口。

## asnumpy.set_device

```python
asnumpy.set_device(device_id: int) -> None
```

设置当前设备。

**参数**
- `device_id` (int): 要设置的设备 ID。

**示例**
```python
>>> import asnumpy as ap
>>> ap.set_device(0)  # 使用 NPU 设备 0
>>> ap.set_device(1)  # 切换到 NPU 设备 1
```

## asnumpy.reset_device

```python
asnumpy.reset_device(device_id: int) -> None
```

重置当前设备。

**参数**
- `device_id` (int): 要重置的设备 ID。

## asnumpy.reset_device_force

```python
asnumpy.reset_device_force(device_id: int) -> None
```

强制重置当前设备。

**参数**
- `device_id` (int): 要重置的设备 ID。

::: warning
强制重置可能会中断设备上正在进行的操作。
:::

## asnumpy.init

```python
asnumpy.init() -> None
```

初始化 CANN 后端。

此函数初始化 CANN 运行时并为 NPU 计算做准备。

::: tip
该调用发生在 `import asnumpy` 阶段：模块在导入时会自动执行 `init()` 与 `set_device(0)` 两步，因此在大多数情况下您不需要显式调用本函数。注意 `init()` 本身只转发底层 `aclInit`，并不会选择设备；设备选择由 `set_device` 独立完成。
:::

## asnumpy.finalize

```python
asnumpy.finalize() -> None
```

终止 CANN 后端。

此函数释放 CANN 资源，当您完成使用 asnumpy 时应调用此函数。

::: warning
调用 `finalize()` 后若要继续使用 asnumpy，需要先调用 `init()` 重新初始化，再调用 `set_device(0)` 选择设备（选择设备是独立于 `init()` 的一步）。重新初始化前请先释放上一轮的数组并结束相关操作，避免复用已释放的资源。
:::
