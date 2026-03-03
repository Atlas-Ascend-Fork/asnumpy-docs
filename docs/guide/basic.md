# AsNumpy Basics

This section will cover the following topics:

* `asnumpy.ndarray` Basics
* The concept of Current Device
* Array transfer between Host and Device

## asnumpy.ndarray Basics

AsNumpy is a library designed to provide a scientific computing interface on Ascend NPU that is highly compatible with NumPy.
In the following code, `ap` is an abbreviation for `asnumpy`, following the standard convention of abbreviating `numpy` as `np`:

```python
>>> import numpy as np
>>> import asnumpy as ap
```

The `asnumpy.ndarray` class is the core of AsNumpy, it is a replacement class for `numpy.ndarray`.

```python
>>> x_cpu = np.array([1, 2, 3])
>>> x_npu = ap.ndarray.from_numpy(x_cpu)
```

The `x_npu` above is an instance of `asnumpy.ndarray`.
The main difference between `asnumpy.ndarray` and `numpy.ndarray` is that AsNumpy arrays are allocated on the *current device*, which we will discuss later.

Most array operations are also performed in a manner similar to NumPy.
Take the Euclidean norm (i.e., L2 norm) as an example.
NumPy has the `numpy.linalg.norm` function, which can compute it on the CPU.

```python
>>> x_cpu = np.array([1, 2, 3])
>>> l2_cpu = np.linalg.norm(x_cpu)
```

Using AsNumpy, we can perform the same computation on the NPU in a similar way:

```python
>>> x_npu = ap.ndarray.from_numpy(np.array([1, 2, 3]))
>>> l2_npu = ap.linalg.norm(x_npu)
```

AsNumpy implements many functions on `asnumpy.ndarray` objects.
For the subset of supported NumPy APIs, please refer to the API reference.
Knowledge of NumPy will help you leverage most of AsNumpy's functionality.
Therefore, we recommend that you familiarize yourself with the [NumPy documentation](https://numpy.org/doc/stable/index.html).

## Current Device

AsNumpy has a concept of *current device*, which is the default NPU device where array allocation, operations, computations, etc. are performed.
Assume the current device ID is 0.
In this case, the following code will create an array `x_on_npu0` on NPU 0.

```python
>>> x_on_npu0 = ap.ndarray.from_numpy(np.array([1, 2, 3, 4, 5]))
```

To switch to another NPU device, you can use the `asnumpy.set_device` function:

```python
>>> ap.set_device(1)
>>> x_on_npu1 = ap.ndarray.from_numpy(np.array([1, 2, 3, 4, 5]))
>>> ap.set_device(0)
>>> x_on_npu0 = ap.ndarray.from_numpy(np.array([1, 2, 3, 4, 5]))
```

Typically, AsNumpy functions expect arrays to be on the current device.

## Data Transfer

### Moving arrays to device

You can use `asnumpy.ndarray.from_numpy` to move `numpy.ndarray` to the current device:

```python
>>> x_cpu = np.array([1, 2, 3])
>>> x_npu = ap.ndarray.from_numpy(x_cpu)  # Move data to current device
```

### Moving arrays from device to host

You can use `asnumpy.ndarray.to_numpy` to move device arrays to the host:

```python
>>> x_npu = ap.ndarray.from_numpy(np.array([1, 2, 3]))  # Create array on current device
>>> x_cpu = x_npu.to_numpy()  # Move array to host
```

## Memory Management

AsNumpy uses memory pools for memory management.
