# I/O Operations

::: info
The current API documentation site only retains a representative set of APIs. Since the AsNumpy frontend and documentation system are still undergoing significant restructuring, the remaining interface documentation is temporarily hidden and will be gradually restored after the frontend stabilizes.This document is for reference only.
:::

## asnumpy.save

```python
asnumpy.save(file, arr, allow_pickle=False)
```

Persist array data to disk using NumPy's binary file specification.

This function transfers the array data from the device (NPU) to the host (CPU) and writes it to a binary file.

**Arguments**
- `file` (str or file-like): File path or file object to save the data.
- `arr` (NPUArray or numpy.ndarray): Array to save. NPUArray objects are automatically converted to numpy arrays before saving.
- `allow_pickle` (bool, default False): Whether to allow saving object arrays using pickle.

**See Also**
- [`numpy.save`](https://numpy.org/doc/stable/reference/generated/numpy.save.html)
- [`asnumpy.load`](#asnumpy-load): Load arrays from files.

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.arange(10)
>>> ap.save('output.npy', x)
```

## asnumpy.savez

```python
asnumpy.savez(file, *args, **kwargs)
```

Store multiple arrays in a single uncompressed archive file.

Positional arguments are saved with auto-generated names: arr_0, arr_1, ...
Keyword arguments are saved with their specified names.

**Arguments**
- `file` (str or file-like): File path or file object to save the data.
- `*args` (array): Arrays to save with auto-generated keys (arr_0, arr_1, ...).
- `**kwargs` (array): Arrays to save with explicitly named keys.

**See Also**
- [`numpy.savez`](https://numpy.org/doc/stable/reference/generated/numpy.savez.html)
- [`asnumpy.save`](#asnumpy-save): Save a single array.
- [`asnumpy.savez_compressed`](#asnumpy-savez-compressed): Save with compression.

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.arange(5)
>>> y = ap.ones(5, dtype=ap.float32)
>>> ap.savez('data.npz', x, y)  # saved as arr_0, arr_1
>>> ap.savez('data.npz', a=x, b=y)  # saved as a, b
```

## asnumpy.savez_compressed

```python
asnumpy.savez_compressed(file, *args, **kwargs)
```

Store multiple arrays in a single compressed archive file.

Positional arguments are saved with auto-generated names: arr_0, arr_1, ...
Keyword arguments are saved with their specified names.

**Arguments**
- `file` (str or file-like): File path or file object to save the data.
- `*args` (array): Arrays to save with auto-generated keys (arr_0, arr_1, ...).
- `**kwargs` (array): Arrays to save with explicitly named keys.

**See Also**
- [`asnumpy.savez`](#asnumpy-savez): Save without compression.
- [`numpy.savez_compressed`](https://numpy.org/doc/stable/reference/generated/numpy.savez_compressed.html)

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.arange(100)
>>> y = ap.ones(100, dtype=ap.float32)
>>> ap.savez_compressed('compressed.npz', a=x, b=y)
```

<!--
## asnumpy.load

```python
asnumpy.load(file, mmap_mode=None, allow_pickle=False, **kwargs)
```

Read array data from previously saved binary files.

For `.npy` files, returns an NPUArray stored on the device.
For `.npz` files, returns a lazy-loading container that works like a dictionary.

**Arguments**
- `file` (str or file-like): File path to load from.
- `mmap_mode` ({None, 'r+', 'r', 'w+', 'c'}, optional): Memory mapping mode. If not None, the file is memory-mapped on the host side. Note that memory mapping operates on host memory, not device memory.
- `allow_pickle` (bool, default False): Whether to allow loading pickled object arrays.
- `**kwargs`: Additional keyword arguments passed to numpy.load.

**Returns**
- `NPUArray`: When loading a `.npy` file, returns an array on the device.
- `_AsnpNpz`: When loading a `.npz` file, returns a dictionary-like container that lazily loads arrays to the device on access.

**See Also**
- [`numpy.load`](https://numpy.org/doc/stable/reference/generated/numpy.load.html)
- [`asnumpy.save`](#asnumpy-save): Save a single array.

**Examples**

Load a single array from .npy file:
```python
>>> import asnumpy as ap
>>> x = ap.load('output.npy')
>>> type(x)
<class 'asnumpy.ndarray'>
```

Load multiple arrays from .npz file:
```python
>>> import asnumpy as ap
>>> with ap.load('data.npz') as data:
...     a = data['a']
...     b = data['b']
>>> type(a)
<class 'asnumpy.ndarray'>
```
-->
