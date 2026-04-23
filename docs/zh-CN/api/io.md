# 输入输出操作

## asnumpy.save

```python
asnumpy.save(file: Union[str, npt.IO[bytes]], arr: ArrayLike, allow_pickle: bool = False) -> None
```

使用 NumPy 的二进制文件规范将数组数据持久化到磁盘。

此函数将数组数据从设备（NPU）传输到主机（CPU）并将其写入二进制文件。

**参数**
- `file` (Union[str, npt.IO[bytes]]): 保存数据的文件路径或文件对象。
- `arr` (ArrayLike): 要保存的数组。NPUArray 对象在保存前会自动转换为 numpy 数组。
- `allow_pickle` (bool, 默认 False): 是否允许使用 pickle 保存对象数组。

**参见**
- [`numpy.save`](https://numpy.org/doc/stable/reference/generated/numpy.save.html)
- [`asnumpy.load`](#asnumpy-load): 从文件加载数组。

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> x = np.arange(10)
>>> x = ap.ndarray.from_numpy(x)
>>> ap.save('output.npy', x)
>>> loaded = ap.load('output.npy')
>>> loaded
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

## asnumpy.savez

```python
asnumpy.savez(file: Union[str, npt.IO[bytes]], *args: ArrayLike, **kwargs: ArrayLike) -> None
```

将多个数组存储到单个未压缩的存档文件中。

位置参数使用自动生成的名称保存：arr_0, arr_1, ...
关键字参数使用指定的名称保存。

**参数**
- `file` (Union[str, npt.IO[bytes]]): 保存数据的文件路径或文件对象。
- `*args` (ArrayLike): 使用自动生成键（arr_0, arr_1, ...）保存的数组。
- `**kwargs` (ArrayLike): 使用显式命名键保存的数组。

**参见**
- [`numpy.savez`](https://numpy.org/doc/stable/reference/generated/numpy.savez.html)
- [`asnumpy.save`](#asnumpy-save): 保存单个数组。
- [`asnumpy.savez_compressed`](#asnumpy-savez-compressed): 压缩保存。

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> x = np.arange(5)
>>> x = ap.ndarray.from_numpy(x)
>>> y = ap.ones(5)
>>> ap.savez('data.npz', x, y)  # 保存为 arr_0, arr_1
>>> ap.savez('data.npz', a=x, b=y)  # 保存为 a, b
```

## asnumpy.savez_compressed

```python
asnumpy.savez_compressed(file: Union[str, npt.IO[bytes]], *args: ArrayLike, **kwargs: ArrayLike) -> None
```

将多个数组存储到单个压缩存档文件中。

位置参数使用自动生成的名称保存：arr_0, arr_1, ...
关键字参数使用指定的名称保存。

**参数**
- `file` (Union[str, npt.IO[bytes]]): 保存数据的文件路径或文件对象。
- `*args` (ArrayLike): 使用自动生成键（arr_0, arr_1, ...）保存的数组。
- `**kwargs` (ArrayLike): 使用显式命名键保存的数组。

**参见**
- [`asnumpy.savez`](#asnumpy-savez): 不压缩保存。
- [`numpy.savez_compressed`](https://numpy.org/doc/stable/reference/generated/numpy.savez_compressed.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> x = np.arange(100)
>>> x = ap.ndarray.from_numpy(x)
>>> y = ap.ones(100)
>>> ap.savez_compressed('compressed.npz', a=x, b=y)
```

## asnumpy.load

```python
asnumpy.load(file: Union[str, npt.IO[bytes]], mmap_mode: Union[str, None] = None, allow_pickle: bool = False, **kwargs) -> Union[ndarray, _AsnpNpz]
```

从先前保存的二进制文件读取数组数据。

对于 `.npy` 文件，返回存储在设备上的 ndarray。
对于 `.npz` 文件，返回类似字典的延迟加载容器。

**参数**
- `file` (Union[str, npt.IO[bytes]]): 加载的文件路径。
- `mmap_mode` (Union[str, None], 默认 None): 内存映射模式。如果不为 None，文件在主机端进行内存映射。注意内存映射操作在主机内存上，而非设备内存。
- `allow_pickle` (bool, 默认 False): 是否允许加载 pickle 对象数组。
- `**kwargs`: 传递给 numpy.load 的额外关键字参数。

**返回值**
- `ndarray`: 加载 `.npy` 文件时，返回设备上的数组。
- `_AsnpNpz`: 加载 `.npz` 文件时，返回类似字典的容器，在访问时延迟加载数组到设备。

**参见**
- [`numpy.load`](https://numpy.org/doc/stable/reference/generated/numpy.load.html)
- [`asnumpy.save`](#asnumpy-save): 保存单个数组。

**示例**

从 .npy 文件加载单个数组：
```python
>>> import asnumpy as ap
>>> x = ap.load('output.npy')
>>> type(x)
<class 'asnumpy.ndarray'>
```

从 .npz 文件加载多个数组：
```python
>>> import asnumpy as ap
>>> with ap.load('data.npz') as data:
...     a = data['a']
...     b = data['b']
>>> type(a)
<class 'asnumpy.ndarray'>
```
