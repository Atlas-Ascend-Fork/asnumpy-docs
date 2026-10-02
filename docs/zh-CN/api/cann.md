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

此函数初始化 CANN 运行时，不选择设备；设备选择需要独立调用 `set_device(device_id)`。

::: tip
导入 `asnumpy` 时已依次调用 `init()` 和 `set_device(0)`，发生在首次数组操作之前，通常不应再次调用 `init()`。导入后可通过 `set_device(device_id)` 选择另一块可用设备。
:::

## asnumpy.finalize

```python
asnumpy.finalize() -> None
```

终止 CANN 后端。

此函数释放 CANN 资源，当您完成使用 asnumpy 时应调用此函数。

::: warning
显式终止运行时后，开始下一轮使用需要按顺序完成运行时初始化和设备选择：先 `ap.init()`，再 `ap.set_device(device_id)`。仅调用 `init()` 不会重放导入时的设备选择。结束一轮使用前应释放已有数组并完成设备操作，不要重用上一轮的数组。
:::
