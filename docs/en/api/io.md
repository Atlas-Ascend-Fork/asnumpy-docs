# I/O Operations

[[toc]]

## asnumpy.save

```python
asnumpy.save(file, arr, allow_pickle=False)
```

Save a single array to a .npy file.

**Arguments**
- `file` (str or file-like): File path or file object.
- `arr` (NPUArray or numpy.ndarray): Array to save.
- `allow_pickle` (bool, default False): Whether to allow saving object arrays using pickle.

**See Also**
- [`numpy.save`](https://numpy.org/doc/stable/reference/generated/numpy.save.html)

## asnumpy.savez

```python
asnumpy.savez(file, *args, **kwargs)
```

Save multiple arrays into an .npz archive (uncompressed).
Positional args are saved as arr_0, arr_1, ...
Keyword args are saved with their given names.

**Arguments**
- `file` (file or str): File or filename to save.
- `*args`: Arrays with implicit keys.
- `**kwargs`: Arrays with explicit keys.

**See Also**
- [`numpy.savez`](https://numpy.org/doc/stable/reference/generated/numpy.savez.html)

## asnumpy.savez_compressed

```python
asnumpy.savez_compressed(file, *args, **kwargs)
```

Save multiple arrays into a compressed .npz archive.

**Arguments**
- `file` (file or str): File or filename to save.
- `*args`: Arrays with implicit keys.
- `**kwargs`: Arrays with explicit keys.

**See Also**
- [`asnumpy.savez`](#asnumpy-savez)
- [`numpy.savez_compressed`](https://numpy.org/doc/stable/reference/generated/numpy.savez_compressed.html)

## asnumpy.load

```python
asnumpy.load(file, mmap_mode=None, allow_pickle=False, **kwargs)
```

Load array(s) from .npy or .npz file.

**Arguments**
- `file` (str or file-like): File path.
- `mmap_mode` ({None, 'r+', 'r', 'w+', 'c'}, optional): If not None, memory-map the file (host side only).
- `allow_pickle` (bool, default False): Allow loading pickled object arrays.
- `kwargs` (dict): Other keyword args passed to numpy.load.

**Returns**
- NPUArray or _AsnpNpz: If loading a .npy file, returns a NPUArray. If loading a .npz file, returns a lazy-loading container that works like a dictionary.

**See Also**
- [`numpy.load`](https://numpy.org/doc/stable/reference/generated/numpy.load.html)
