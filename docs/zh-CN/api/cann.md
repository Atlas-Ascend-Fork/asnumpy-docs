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
在大多数情况下，您不需要显式调用此函数。当您首次使用 asnumpy 时，它会自动调用。
:::

## asnumpy.finalize

```python
asnumpy.finalize() -> None
```

终止 CANN 后端。

此函数释放 CANN 资源，当您完成使用 asnumpy 时应调用此函数。

::: warning
调用 `finalize()` 后，必须再次调用 `init()` 才能使用任何 asnumpy 函数。
:::
