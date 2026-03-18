# 输入输出

[[toc]]

## asnumpy.save

```python
asnumpy.save(file, arr, allow_pickle=False)
```

将单个数组保存到 .npy 文件。

**参数**
- `file` (str 或类文件对象): 文件路径或文件对象。
- `arr` (NPUArray 或 numpy.ndarray): 要保存的数组。
- `allow_pickle` (bool, 默认 False): 是否允许使用 pickle 保存对象数组。

**参见**
- [`numpy.save`](https://numpy.org/doc/stable/reference/generated/numpy.save.html)

## asnumpy.savez

```python
asnumpy.savez(file, *args, **kwargs)
```

将多个数组保存到 .npz 存档（未压缩）。
位置参数保存为 arr_0, arr_1, ...
关键字参数使用给定的名称保存。

**参数**
- `file` (文件或 str): 要保存的文件或文件名。
- `*args`: 具有隐式键的数组。
- `**kwargs`: 具有显式键的数组。

**参见**
- [`numpy.savez`](https://numpy.org/doc/stable/reference/generated/numpy.savez.html)

## asnumpy.savez_compressed

```python
asnumpy.savez_compressed(file, *args, **kwargs)
```

将多个数组保存到压缩的 .npz 存档。

**参见**
- [`asnumpy.savez`](#asnumpy-savez)
- [`numpy.savez_compressed`](https://numpy.org/doc/stable/reference/generated/numpy.savez_compressed.html)

## asnumpy.load

```python
asnumpy.load(file, mmap_mode=None, allow_pickle=False, **kwargs)
```

从 .npy 或 .npz 文件加载数组。

**参数**
- `file` (str 或类文件对象): 文件路径。
- `mmap_mode` ({None, 'r+', 'r', 'w+', 'c'}, 可选): 如果不为 None，内存映射文件（仅主机端）。
- `allow_pickle` (bool, 默认 False): 允许加载 pickle 对象数组。

**返回值**
- NPUArray 或 _AsnpNpz: 如果加载 .npy 文件，返回 NPUArray。如果加载 .npz 文件，返回类似字典的延迟加载容器。

**参见**
- [`numpy.load`](https://numpy.org/doc/stable/reference/generated/numpy.load.html)
