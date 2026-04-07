# 数学函数

本模块提供数学函数，包括三角函数、双曲函数、指数函数、对数函数以及其他数学运算。

## 三角函数

### asnumpy.sin

```python
asnumpy.sin(x: ArrayLike) -> ndarray
```

计算每个元素的正弦值。

此函数计算输入数组 `x` 中每个元素的正弦值。输入值假设以弧度为单位。

**参数**
- `x` (ArrayLike): 包含弧度角度的输入数组。

**返回值**
- `ndarray`: `x` 中每个元素的正弦值。

**另请参阅**
- [`numpy.sin`](https://numpy.org/doc/stable/reference/generated/numpy.sin.html)
- [`asnumpy.cos`](#asnumpy-cos)
- [`asnumpy.tan`](#asnumpy-tan)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.sin(ap.array([0, np.pi/6, np.pi/2]))
array([0. , 0.5, 1. ])
```

### asnumpy.cos

```python
asnumpy.cos(x: ArrayLike) -> ndarray
```

计算每个元素的余弦值。

此函数计算输入数组 `x` 中每个元素的余弦值。输入值假设以弧度为单位。

**参数**
- `x` (ArrayLike): 包含弧度角度的输入数组。

**返回值**
- `ndarray`: `x` 中每个元素的余弦值。

**另请参阅**
- [`numpy.cos`](https://numpy.org/doc/stable/reference/generated/numpy.cos.html)
- [`asnumpy.sin`](#asnumpy-sin)
- [`asnumpy.tan`](#asnumpy-tan)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.cos(ap.array([0, np.pi]))
array([ 1., -1.])
```

### asnumpy.tan

```python
asnumpy.tan(x: ArrayLike) -> ndarray
```

计算每个元素的正切值。

此函数计算输入数组 `x` 中每个元素的正切值。输入值假设以弧度为单位。

**参数**
- `x` (ArrayLike): 包含弧度角度的输入数组。

**返回值**
- `ndarray`: `x` 中每个元素的正切值。

**另请参阅**
- [`numpy.tan`](https://numpy.org/doc/stable/reference/generated/numpy.tan.html)
- [`asnumpy.sin`](#asnumpy-sin)
- [`asnumpy.cos`](#asnumpy-cos)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.tan(ap.array([-np.pi/4, 0, np.pi/4]))
array([-1.,  0.,  1.])
```

### asnumpy.arcsin

```python
asnumpy.arcsin(x: ArrayLike) -> ndarray
```

计算每个元素的反正弦值。

此函数计算 `x` 中每个元素的反正弦值（arcsine）。定义域为 [-1, 1]。返回值以弧度为单位，范围为 -pi/2 到 pi/2。

**参数**
- `x` (ArrayLike): 输入数组。元素必须在 [-1, 1] 范围内。

**返回值**
- `ndarray`: `x` 中每个元素的反正弦值。

**另请参阅**
- [`numpy.arcsin`](https://numpy.org/doc/stable/reference/generated/numpy.arcsin.html)
- [`asnumpy.sin`](#asnumpy-sin)
- [`asnumpy.arccos`](#asnumpy-arccos)
- [`asnumpy.arctan`](#asnumpy-arctan)

**示例**
```python
>>> import asnumpy as ap
>>> ap.arcsin(ap.array([0, 0.5, 1]))
array([0.        , 0.52359878, 1.57079633])
```

### asnumpy.arccos

```python
asnumpy.arccos(x: ArrayLike) -> ndarray
```

计算每个元素的反余弦值。

此函数计算 `x` 中每个元素的反余弦值（arccosine）。定义域为 [-1, 1]。返回值以弧度为单位，范围为 0 到 pi。

**参数**
- `x` (ArrayLike): 输入数组。元素必须在 [-1, 1] 范围内。

**返回值**
- `ndarray`: `x` 中每个元素的反余弦值。

**另请参阅**
- [`numpy.arccos`](https://numpy.org/doc/stable/reference/generated/numpy.arccos.html)
- [`asnumpy.cos`](#asnumpy-cos)
- [`asnumpy.arcsin`](#asnumpy-arcsin)
- [`asnumpy.arctan`](#asnumpy-arctan)

**示例**
```python
>>> import asnumpy as ap
>>> ap.arccos(ap.array([1, 0.5, 0]))
array([0.        , 1.04719755, 1.57079633])
```

### asnumpy.arctan

```python
asnumpy.arctan(x: ArrayLike) -> ndarray
```

计算每个元素的反正切值。

此函数计算 `x` 中每个元素的反正切值（arctangent）。返回值以弧度为单位，范围为 -pi/2 到 pi/2。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `x` 中每个元素的反正切值。

**另请参阅**
- [`numpy.arctan`](https://numpy.org/doc/stable/reference/generated/numpy.arctan.html)
- [`asnumpy.tan`](#asnumpy-tan)
- [`asnumpy.arcsin`](#asnumpy-arcsin)
- [`asnumpy.arccos`](#asnumpy-arccos)
- [`asnumpy.arctan2`](#asnumpy-arctan2)

**示例**
```python
>>> import asnumpy as ap
>>> ap.arctan(ap.array([0, 1]))
array([0.        , 0.78539816])
```

### asnumpy.arctan2

```python
asnumpy.arctan2(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

计算商 `x1/x2` 的逐元素反正切值，并根据象限调整。

此函数计算 `x1/x2` 的反正切值，使用两个参数的符号来确定结果的正确象限。返回值以弧度为单位，范围为 -pi 到 pi。

**参数**
- `x1` (ArrayLike): Y 坐标。
- `x2` (ArrayLike): X 坐标。

**返回值**
- `ndarray`: 弧度角度。

**另请参阅**
- [`numpy.arctan2`](https://numpy.org/doc/stable/reference/generated/numpy.arctan2.html)
- [`asnumpy.arctan`](#asnumpy-arctan)
- [`asnumpy.tan`](#asnumpy-tan)

**示例**
```python
>>> import asnumpy as ap
>>> y = ap.array([0, 1])
>>> x = ap.array([-1, 1])
>>> ap.arctan2(y, x)
array([3.14159265, 0.78539816])
```

### asnumpy.hypot

```python
asnumpy.hypot(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

给定直角三角形的两条直角边，计算斜边长度。

此函数计算直角边 `x1` 和 `x2` 的斜边长度。数学上等价于 `sqrt(x1**2 + x2**2)`。

**参数**
- `x1` (ArrayLike): 第一条直角边。
- `x2` (ArrayLike): 第二条直角边。

**返回值**
- `ndarray`: 斜边长度。

**另请参阅**
- [`numpy.hypot`](https://numpy.org/doc/stable/reference/generated/numpy.hypot.html)
- [`asnumpy.sqrt`](#asnumpy-sqrt)

**示例**
```python
>>> import asnumpy as ap
>>> ap.hypot(3*ap.ones(2), 4*ap.ones(2))
array([5., 5.])
```

### asnumpy.radians

```python
asnumpy.radians(x: ArrayLike) -> ndarray
```

将角度从度转换为弧度。

此函数将输入数组 `x` 中的每个元素从度转换为弧度。操作按元素进行。

**参数**
- `x` (ArrayLike): 以度为单位的输入数组。

**返回值**
- `ndarray`: 以弧度为单位的输出数组。

**另请参阅**
- [`numpy.radians`](https://numpy.org/doc/stable/reference/generated/numpy.radians.html)
- [`asnumpy.degrees`](#asnumpy-degrees)
- [`asnumpy.deg2rad`](#asnumpy-deg2rad)
- [`asnumpy.rad2deg`](#asnumpy-rad2deg)

**示例**
```python
>>> import asnumpy as ap
>>> ap.radians(ap.array([0, 90, 180]))
array([0.        , 1.57079633, 3.14159265])
```

### asnumpy.deg2rad

```python
asnumpy.deg2rad(x: ArrayLike) -> ndarray
```

将角度从度转换为弧度。

此函数将输入角度逐元素从度转换为弧度。它是 `radians` 的别名。

**参数**
- `x` (ArrayLike): 以度为单位的输入数组。

**返回值**
- `ndarray`: 以弧度为单位的输出数组。

**另请参阅**
- [`numpy.deg2rad`](https://numpy.org/doc/stable/reference/generated/numpy.deg2rad.html)
- [`asnumpy.radians`](#asnumpy-radians)
- [`asnumpy.degrees`](#asnumpy-degrees)
- [`asnumpy.rad2deg`](#asnumpy-rad2deg)

**示例**
```python
>>> import asnumpy as ap
>>> ap.deg2rad(ap.array([0, 90, 180]))
array([0.        , 1.57079633, 3.14159265])
```

### asnumpy.degrees

```python
asnumpy.degrees(x: ArrayLike) -> ndarray
```

将角度从弧度转换为度。

此函数将输入数组 `x` 中的每个元素从弧度转换为度。操作按元素进行。

**参数**
- `x` (ArrayLike): 以弧度为单位的输入数组。

**返回值**
- `ndarray`: 以度为单位的输出数组。

**另请参阅**
- [`numpy.degrees`](https://numpy.org/doc/stable/reference/generated/numpy.degrees.html)
- [`asnumpy.radians`](#asnumpy-radians)
- [`asnumpy.rad2deg`](#asnumpy-rad2deg)
- [`asnumpy.deg2rad`](#asnumpy-deg2rad)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.degrees(ap.array([0, np.pi/2, np.pi]))
array([  0.,  90., 180.])
```

### asnumpy.rad2deg

```python
asnumpy.rad2deg(x: ArrayLike) -> ndarray
```

将角度从弧度转换为度。

此函数将输入数组 `x` 中的每个元素从弧度转换为度。它是 `degrees` 的别名。

**参数**
- `x` (ArrayLike): 以弧度为单位的输入数组。

**返回值**
- `ndarray`: 以度为单位的输出数组。

**另请参阅**
- [`numpy.rad2deg`](https://numpy.org/doc/stable/reference/generated/numpy.rad2deg.html)
- [`asnumpy.degrees`](#asnumpy-degrees)
- [`asnumpy.radians`](#asnumpy-radians)
- [`asnumpy.deg2rad`](#asnumpy-deg2rad)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.rad2deg(ap.array([0, np.pi/2, np.pi]))
array([  0.,  90., 180.])
```

## 双曲函数

### asnumpy.sinh

```python
asnumpy.sinh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的双曲正弦值。

此函数计算输入数组 `x` 中每个元素的双曲正弦值。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含 `x` 中每个元素的双曲正弦值的数组。

**另请参阅**
- [`numpy.sinh`](https://numpy.org/doc/stable/reference/generated/numpy.sinh.html)
- [`asnumpy.cosh`](#asnumpy-cosh)
- [`asnumpy.tanh`](#asnumpy-tanh)

**示例**
```python
>>> import asnumpy as ap
>>> ap.sinh(ap.array([0., 1.]))
array([0.        , 1.17520119])
```

### asnumpy.cosh

```python
asnumpy.cosh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的双曲余弦值。

此函数计算输入数组 `x` 中每个元素的双曲余弦值。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含 `x` 中每个元素的双曲余弦值的数组。

**另请参阅**
- [`numpy.cosh`](https://numpy.org/doc/stable/reference/generated/numpy.cosh.html)
- [`asnumpy.sinh`](#asnumpy-sinh)
- [`asnumpy.tanh`](#asnumpy-tanh)

**示例**
```python
>>> import asnumpy as ap
>>> ap.cosh(ap.array([0., 1.]))
array([1.        , 1.54308063])
```

### asnumpy.tanh

```python
asnumpy.tanh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的双曲正切值。

此函数计算输入数组 `x` 中每个元素的双曲正切值。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含 `x` 中每个元素的双曲正切值的数组。

**另请参阅**
- [`numpy.tanh`](https://numpy.org/doc/stable/reference/generated/numpy.tanh.html)
- [`asnumpy.sinh`](#asnumpy-sinh)
- [`asnumpy.cosh`](#asnumpy-cosh)

**示例**
```python
>>> import asnumpy as ap
>>> ap.tanh(ap.array([0., 1.]))
array([0.        , 0.76159416])
```

### asnumpy.arcsinh

```python
asnumpy.arcsinh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的反双曲正弦值。

此函数计算输入数组 `x` 中每个元素的反双曲正弦值。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含 `x` 中每个元素的反双曲正弦值的数组。

**另请参阅**
- [`numpy.arcsinh`](https://numpy.org/doc/stable/reference/generated/numpy.arcsinh.html)
- [`asnumpy.sinh`](#asnumpy-sinh)

**示例**
```python
>>> import asnumpy as ap
>>> ap.arcsinh(ap.array([0., 1.17520119]))
array([0., 1.])
```

### asnumpy.arccosh

```python
asnumpy.arccosh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的反双曲余弦值。

此函数计算输入数组 `x` 中每个元素的反双曲余弦值。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含 `x` 中每个元素的反双曲余弦值的数组。

**另请参阅**
- [`numpy.arccosh`](https://numpy.org/doc/stable/reference/generated/numpy.arccosh.html)
- [`asnumpy.cosh`](#asnumpy-cosh)

**示例**
```python
>>> import asnumpy as ap
>>> ap.arccosh(ap.array([1., 1.54308063]))
array([0., 1.])
```

### asnumpy.arctanh

```python
asnumpy.arctanh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的反双曲正切值。

此函数计算输入数组 `x` 中每个元素的反双曲正切值。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 包含 `x` 中每个元素的反双曲正切值的数组。

**另请参阅**
- [`numpy.arctanh`](https://numpy.org/doc/stable/reference/generated/numpy.arctanh.html)
- [`asnumpy.tanh`](#asnumpy-tanh)

**示例**
```python
>>> import asnumpy as ap
>>> ap.arctanh(ap.array([0., 0.76159416]))
array([0., 1.])
```

## 算术运算

### asnumpy.add

```python
asnumpy.add(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算两个输入的和。

此函数将 `x1` 和 `x2` 逐元素相加。

**参数**
- `x1` (ArrayLike): 第一个输入数组或标量。
- `x2` (ArrayLike): 第二个输入数组或标量。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 和 `x2` 的和。

**另请参阅**
- [`numpy.add`](https://numpy.org/doc/stable/reference/generated/numpy.add.html)
- [`asnumpy.subtract`](#asnumpy-subtract)

**示例**
```python
>>> import asnumpy as ap
>>> ap.add(ap.array([10, 20]), ap.array([5, 5]))
array([15, 25])
```

### asnumpy.subtract

```python
asnumpy.subtract(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算两个输入的差。

此函数将 `x2` 从 `x1` 中逐元素减去。

**参数**
- `x1` (ArrayLike): 被减数组。
- `x2` (ArrayLike): 减数数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 差值 `x1 - x2`。

**另请参阅**
- [`numpy.subtract`](https://numpy.org/doc/stable/reference/generated/numpy.subtract.html)
- [`asnumpy.add`](#asnumpy-add)

**示例**
```python
>>> import asnumpy as ap
>>> ap.subtract(ap.array([10, 5]), ap.array([2, 2]))
array([8, 3])
```

### asnumpy.multiply

```python
asnumpy.multiply(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算两个输入的积。

此函数将 `x1` 和 `x2` 逐元素相乘。

**参数**
- `x1` (ArrayLike): 第一个输入数组或标量。
- `x2` (ArrayLike): 第二个输入数组或标量。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 和 `x2` 的积。

**另请参阅**
- [`numpy.multiply`](https://numpy.org/doc/stable/reference/generated/numpy.multiply.html)
- [`asnumpy.divide`](#asnumpy-divide)

**示例**
```python
>>> import asnumpy as ap
>>> ap.multiply(ap.array([2.0, 4.0]), ap.array([3.0, 0.5]))
array([6., 2.])
```

### asnumpy.divide

```python
asnumpy.divide(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算两个输入的除法。

此函数将 `x1` 除以 `x2`，执行真除法。

**参数**
- `x1` (ArrayLike): 被除数。
- `x2` (ArrayLike): 除数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 除以 `x2` 的商。

**另请参阅**
- [`numpy.divide`](https://numpy.org/doc/stable/reference/generated/numpy.divide.html)
- [`asnumpy.multiply`](#asnumpy-multiply)
- [`asnumpy.floor_divide`](#asnumpy-floor-divide)
- [`asnumpy.true_divide`](#asnumpy-true-divide)

**示例**
```python
>>> import asnumpy as ap
>>> ap.divide(ap.array([6, 12]), ap.array([3, 4]))
array([2., 3.])
```

### asnumpy.true_divide

```python
asnumpy.true_divide(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算两个输入的真除法。

此函数将 `x1` 除以 `x2`。它是 `divide` 的别名。

**参数**
- `x1` (ArrayLike): 被除数。
- `x2` (ArrayLike): 除数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 除以 `x2` 的商。

**另请参阅**
- [`numpy.true_divide`](https://numpy.org/doc/stable/reference/generated/numpy.true_divide.html)
- [`asnumpy.divide`](#asnumpy-divide)
- [`asnumpy.floor_divide`](#asnumpy-floor-divide)

**示例**
```python
>>> import asnumpy as ap
>>> ap.true_divide(ap.array([6, 12]), ap.array([3, 4]))
array([2., 3.])
```

### asnumpy.floor_divide

```python
asnumpy.floor_divide(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算两个输入的整除。

此函数将 `x1` 除以 `x2` 并将商向下取整到最接近的整数。对应于 `//` 运算符。

**参数**
- `x1` (ArrayLike): 被除数。
- `x2` (ArrayLike): 除数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 整除的结果。

**另请参阅**
- [`numpy.floor_divide`](https://numpy.org/doc/stable/reference/generated/numpy.floor_divide.html)
- [`asnumpy.divide`](#asnumpy-divide)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.true_divide`](#asnumpy-true-divide)

**示例**
```python
>>> import asnumpy as ap
>>> ap.floor_divide(ap.array([10, 10]), ap.array([3, 4]))
array([3, 2])
```

### asnumpy.power

```python
asnumpy.power(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算底数的指数幂。

此函数将 `x1` 的元素提升到 `x2` 元素的幂。

**参数**
- `x1` (ArrayLike): 底数。
- `x2` (ArrayLike): 指数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1 ** x2` 的结果。

**另请参阅**
- [`numpy.power`](https://numpy.org/doc/stable/reference/generated/numpy.power.html)
- [`asnumpy.float_power`](#asnumpy-float-power)
- [`asnumpy.square`](#asnumpy-square)

**示例**
```python
>>> import asnumpy as ap
>>> ap.power(ap.array([2, 5]), ap.array([3, 2]))
array([ 8, 25])
```

### asnumpy.float_power

```python
asnumpy.float_power(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算底数的指数幂，提升为浮点数。

此函数将 `x1` 的元素提升到 `x2` 元素的幂。它确保计算时至少具有 float64 精度。

**参数**
- `x1` (ArrayLike): 底数。
- `x2` (ArrayLike): 指数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1 ** x2` 的结果。

**另请参阅**
- [`numpy.float_power`](https://numpy.org/doc/stable/reference/generated/numpy.float_power.html)
- [`asnumpy.power`](#asnumpy-power)

**示例**
```python
>>> import asnumpy as ap
>>> ap.float_power(ap.array([2, 5]), ap.array([3, 2]))
array([ 8., 25.])
```

### asnumpy.negative

```python
asnumpy.negative(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算数值负值。

此函数对输入数组中的每个元素取负，返回 `-x`。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 输入数组的负值。

**另请参阅**
- [`numpy.negative`](https://numpy.org/doc/stable/reference/generated/numpy.negative.html)
- [`asnumpy.positive`](#asnumpy-positive)

**示例**
```python
>>> import asnumpy as ap
>>> ap.negative(ap.array([10, -10]))
array([-10,  10])
```

### asnumpy.positive

```python
asnumpy.positive(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素应用一元正运算符。

此函数对每个元素返回 `+x`。实际上返回数组的副本。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 应用了正一元运算符的输入数组。

**另请参阅**
- [`numpy.positive`](https://numpy.org/doc/stable/reference/generated/numpy.positive.html)
- [`asnumpy.negative`](#asnumpy-negative)

**示例**
```python
>>> import asnumpy as ap
>>> ap.positive(ap.array([-5, 5]))
array([-5,  5])
```

### asnumpy.reciprocal

```python
asnumpy.reciprocal(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的倒数。

此函数计算输入数组中每个元素的乘法逆元 `1 / x`。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x` 中每个元素的倒数。

**另请参阅**
- [`numpy.reciprocal`](https://numpy.org/doc/stable/reference/generated/numpy.reciprocal.html)
- [`asnumpy.divide`](#asnumpy-divide)

**示例**
```python
>>> import asnumpy as ap
>>> ap.reciprocal(ap.array([1., 2., 4.]))
array([1.  , 0.5 , 0.25])
```

### asnumpy.mod

```python
asnumpy.mod(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算除法的余数。

此函数计算 `x1` 除以 `x2` 的余数。它的行为类似于 Python 的 `%` 运算符，结果取除数 `x2` 的符号。

**参数**
- `x1` (ArrayLike): 被除数。
- `x2` (ArrayLike): 除数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 除法的余数。

**另请参阅**
- [`numpy.mod`](https://numpy.org/doc/stable/reference/generated/numpy.mod.html)
- [`asnumpy.remainder`](#asnumpy-remainder)
- [`asnumpy.fmod`](#asnumpy-fmod)

**示例**
```python
>>> import asnumpy as ap
>>> ap.mod(ap.array([-4, -4, 4, 4]), ap.array([3, -3, 3, -3]))
array([ 2, -1,  1, -2])
```

### asnumpy.remainder

```python
asnumpy.remainder(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算除法的余数。

此函数计算 `x1` 除以 `x2` 的余数。它是 `mod` 的别名，结果取除数 `x2` 的符号。

**参数**
- `x1` (ArrayLike): 被除数。
- `x2` (ArrayLike): 除数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 除法的余数。

**另请参阅**
- [`numpy.remainder`](https://numpy.org/doc/stable/reference/generated/numpy.remainder.html)
- [`asnumpy.mod`](#asnumpy-mod)
- [`asnumpy.fmod`](#asnumpy-fmod)

**示例**
```python
>>> import asnumpy as ap
>>> ap.remainder(ap.array([5, -5]), ap.array([3, 3]))
array([2, 1])
```

### asnumpy.fmod

```python
asnumpy.fmod(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算浮点除法的余数。

此函数计算 `x1` 除以 `x2` 的余数。结果带有被除数 `x1` 的符号，与 C 语言的 `fmod` 函数一致。

**参数**
- `x1` (ArrayLike): 被除数。
- `x2` (ArrayLike): 除数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 除法的余数。

**另请参阅**
- [`numpy.fmod`](https://numpy.org/doc/stable/reference/generated/numpy.fmod.html)
- [`asnumpy.mod`](#asnumpy-mod)
- [`asnumpy.remainder`](#asnumpy-remainder)

**示例**
```python
>>> import asnumpy as ap
>>> ap.fmod(ap.array([-4, -4, 4, 4]), ap.array([3, -3, 3, -3]))
array([-1, -1,  1,  1])
```

### asnumpy.modf

```python
asnumpy.modf(x: ArrayLike) -> tuple
```

分离元素的小数和整数部分。

此函数将 `x` 的每个元素拆分为其小数和整数部分。返回的两部分都与输入具有相同的符号。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray 元组`: 包含 `x` 的小数部分和 `x` 的整数部分的元组。

**另请参阅**
- [`numpy.modf`](https://numpy.org/doc/stable/reference/generated/numpy.modf.html)
- [`asnumpy.divmod`](#asnumpy-divmod)

**示例**
```python
>>> import asnumpy as ap
>>> ap.modf(ap.array([1.5, -2.5]))
(array([ 0.5, -0.5]), array([ 1., -2.]))
```

### asnumpy.divmod

```python
asnumpy.divmod(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> tuple
```

同时计算商和余数。

此函数同时执行整除和取模运算。它返回 `(x1 // x2, x1 % x2)` 对。

**参数**
- `x1` (ArrayLike): 被除数。
- `x2` (ArrayLike): 除数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray 元组`: 包含逐元素整除商和逐元素余数的元组。

**另请参阅**
- [`numpy.divmod`](https://numpy.org/doc/stable/reference/generated/numpy.divmod.html)
- [`asnumpy.floor_divide`](#asnumpy-floor-divide)
- [`asnumpy.remainder`](#asnumpy-remainder)

**示例**
```python
>>> import asnumpy as ap
>>> ap.divmod(ap.array([10, 11]), ap.array([3, 3]))
(array([3, 3]), array([1, 2]))
```

## 指数和对数

### asnumpy.exp

```python
asnumpy.exp(x: ArrayLike) -> ndarray
```

计算每个元素的指数值。

此函数计算 `e` 的 `x` 中每个元素的幂，其中 `e` 是自然对数的底。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `x` 的逐元素指数值。

**另请参阅**
- [`numpy.exp`](https://numpy.org/doc/stable/reference/generated/numpy.exp.html)
- [`asnumpy.expm1`](#asnumpy-expm1)

**示例**
```python
>>> import asnumpy as ap
>>> ap.exp(ap.array([1., 2.]))
array([2.71828183, 7.3890561 ])
```

### asnumpy.exp2

```python
asnumpy.exp2(x: ArrayLike) -> ndarray
```

计算 2 的每个元素的幂。

此函数计算输入数组 `x` 中每个元素的以 2 为底的指数值。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: 逐元素的 2 的 `x` 次幂。

**另请参阅**
- [`numpy.exp2`](https://numpy.org/doc/stable/reference/generated/numpy.exp2.html)
- [`asnumpy.power`](#asnumpy-power)

**示例**
```python
>>> import asnumpy as ap
>>> ap.exp2(ap.array([3]))
array([8.])
```

### asnumpy.expm1

```python
asnumpy.expm1(x: ArrayLike) -> ndarray
```

计算每个元素的 `exp(x) - 1`。

此函数计算每个元素的指数值减一。对于接近零的 `x` 值，它比 `exp(x) - 1` 更精确。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: 逐元素的指数值减一。

**另请参阅**
- [`numpy.expm1`](https://numpy.org/doc/stable/reference/generated/numpy.expm1.html)
- [`asnumpy.exp`](#asnumpy-exp)

**示例**
```python
>>> import asnumpy as ap
>>> ap.expm1(ap.array([1e-10]))
array([1.0000000e-10])
```

### asnumpy.log

```python
asnumpy.log(x: ArrayLike) -> ndarray
```

计算每个元素的自然对数。

此函数计算输入数组 `x` 中每个元素的以 `e` 为底的对数。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `x` 的自然对数，逐元素。

**另请参阅**
- [`numpy.log`](https://numpy.org/doc/stable/reference/generated/numpy.log.html)
- [`asnumpy.log10`](#asnumpy-log10)
- [`asnumpy.log2`](#asnumpy-log2)
- [`asnumpy.log1p`](#asnumpy-log1p)

**示例**
```python
>>> import asnumpy as ap
>>> ap.log(ap.array([ap.e]))
array([1.])
```

### asnumpy.log2

```python
asnumpy.log2(x: ArrayLike) -> ndarray
```

计算每个元素的以 2 为底的对数。

此函数计算输入数组 `x` 中每个元素的二进制对数（以 2 为底）。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `x` 的以 2 为底的对数。

**另请参阅**
- [`numpy.log2`](https://numpy.org/doc/stable/reference/generated/numpy.log2.html)
- [`asnumpy.log`](#asnumpy-log)
- [`asnumpy.log10`](#asnumpy-log10)

**示例**
```python
>>> import asnumpy as ap
>>> ap.log2(ap.array([8.]))
array([3.])
```

### asnumpy.log10

```python
asnumpy.log10(x: ArrayLike) -> ndarray
```

计算每个元素的以 10 为底的对数。

此函数计算输入数组 `x` 中每个元素的常用对数（以 10 为底）。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `x` 的以 10 为底的对数，逐元素。

**另请参阅**
- [`numpy.log10`](https://numpy.org/doc/stable/reference/generated/numpy.log10.html)
- [`asnumpy.log`](#asnumpy-log)
- [`asnumpy.log2`](#asnumpy-log2)

**示例**
```python
>>> import asnumpy as ap
>>> ap.log10(ap.array([100.]))
array([2.])
```

### asnumpy.log1p

```python
asnumpy.log1p(x: ArrayLike) -> ndarray
```

计算每个元素的 `1 + x` 的自然对数。

此函数逐元素计算 `log(1 + x)`。当 `x` 接近零时，它比 `log(1 + x)` 提供更好的精度。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `1 + x` 的自然对数，逐元素。

**另请参阅**
- [`numpy.log1p`](https://numpy.org/doc/stable/reference/generated/numpy.log1p.html)
- [`asnumpy.log`](#asnumpy-log)

**示例**
```python
>>> import asnumpy as ap
>>> ap.log1p(ap.array([1e-99]))
array([1.e-99])
```

### asnumpy.logaddexp

```python
asnumpy.logaddexp(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

计算输入的指数和的对数。

此函数计算 `log(exp(x1) + exp(x2))`。它在数值上稳定，对于涉及对数空间概率的操作非常有用。

**参数**
- `x1` (ArrayLike): 输入数组。
- `x2` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `exp(x1) + exp(x2)` 的对数。

**另请参阅**
- [`numpy.logaddexp`](https://numpy.org/doc/stable/reference/generated/numpy.logaddexp.html)
- [`asnumpy.logaddexp2`](#asnumpy-logaddexp2)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.logaddexp(ap.array([0]), ap.array([0]))
array([0.69314718])
```

### asnumpy.logaddexp2

```python
asnumpy.logaddexp2(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

计算输入的以 2 为底的指数和的以 2 为底的对数。

此函数计算 `log2(2**x1 + 2**x2)`。它是 `logaddexp` 的以 2 为底的类似函数。

**参数**
- `x1` (ArrayLike): 输入数组。
- `x2` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `2**x1 + 2**x2` 的以 2 为底的对数。

**另请参阅**
- [`numpy.logaddexp2`](https://numpy.org/doc/stable/reference/generated/numpy.logaddexp2.html)
- [`asnumpy.logaddexp`](#asnumpy-logaddexp)

**示例**
```python
>>> import asnumpy as ap
>>> ap.logaddexp2(ap.array([1]), ap.array([1]))
array([2.])
```

## 杂项函数

### asnumpy.absolute

```python
asnumpy.absolute(x: ArrayLike) -> ndarray
```

计算每个元素的绝对值。

此函数计算输入数组 `x` 中每个元素的绝对值。如果输入是复数，则返回模。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: 包含 `x` 中每个元素绝对值的数组。

**另请参阅**
- [`numpy.absolute`](https://numpy.org/doc/stable/reference/generated/numpy.absolute.html)
- [`asnumpy.fabs`](#asnumpy-fabs)

**示例**
```python
>>> import asnumpy as ap
>>> ap.absolute(ap.array([-2.5, 2.5]))
array([2.5, 2.5])
>>> ap.absolute(ap.array([3+4j]))
array([5.])
```

### asnumpy.fabs

```python
asnumpy.fabs(x: ArrayLike) -> ndarray
```

计算实值元素的绝对值。

此函数计算 `x` 中每个元素的绝对值。它专为实数设计，不处理复共轭。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: 包含 `x` 绝对值的数组。

**另请参阅**
- [`numpy.fabs`](https://numpy.org/doc/stable/reference/generated/numpy.fabs.html)
- [`asnumpy.absolute`](#asnumpy-absolute)

**示例**
```python
>>> import asnumpy as ap
>>> ap.fabs(ap.array([-2.5, 2.5]))
array([2.5, 2.5])
```

### asnumpy.sign

```python
asnumpy.sign(x: ArrayLike) -> ndarray
```

确定每个元素的符号。

此函数返回数字符号的逐元素指示：负数返回 -1，零返回 0，正数返回 1。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: `x` 中每个元素的符号。

**另请参阅**
- [`numpy.sign`](https://numpy.org/doc/stable/reference/generated/numpy.sign.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.sign(ap.array([-3., 2.]))
array([-1.,  1.])
>>> ap.sign(0)
0
```

### asnumpy.heaviside

```python
asnumpy.heaviside(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

计算 Heaviside 阶跃函数。

此函数计算 `x1` 中每个元素的 Heaviside 阶跃函数。负输入返回 0，正输入返回 1，输入为零时返回 `x2`。

**参数**
- `x1` (ArrayLike): 输入数组。
- `x2` (ArrayLike): 当 `x1` 为 0 时使用的值。

**返回值**
- `ndarray`: Heaviside 阶跃函数的结果。

**另请参阅**
- [`numpy.heaviside`](https://numpy.org/doc/stable/reference/generated/numpy.heaviside.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.heaviside(ap.array([-2.0, 0, 1.0]), 0.5)
array([0. , 0.5, 1. ])
```

### asnumpy.sqrt

```python
asnumpy.sqrt(x: ArrayLike) -> ndarray
```

计算每个元素的非负平方根。

此函数计算输入数组 `x` 中每个元素的平方根。

**参数**
- `x` (ArrayLike): 需要计算平方根的值。

**返回值**
- `ndarray`: 与 `x` 形状相同的数组，包含每个元素的正平方根。

**另请参阅**
- [`numpy.sqrt`](https://numpy.org/doc/stable/reference/generated/numpy.sqrt.html)
- [`asnumpy.square`](#asnumpy-square)

**示例**
```python
>>> import asnumpy as ap
>>> ap.sqrt(ap.array([1, 4, 16]))
array([1., 2., 4.])
```

### asnumpy.square

```python
asnumpy.square(x: ArrayLike) -> ndarray
```

计算每个元素的平方。

此函数逐元素计算输入 `x` 的平方。

**参数**
- `x` (ArrayLike): 输入数据。

**返回值**
- `ndarray`: 逐元素的 `x*x`，与 `x` 形状和数据类型相同。

**另请参阅**
- [`numpy.square`](https://numpy.org/doc/stable/reference/generated/numpy.square.html)
- [`asnumpy.sqrt`](#asnumpy-sqrt)
- [`asnumpy.power`](#asnumpy-power)

**示例**
```python
>>> import asnumpy as ap
>>> ap.square(ap.array([2, 3, 4]))
array([ 4,  9, 16])
```

### asnumpy.clip

```python
asnumpy.clip(a: ArrayLike, a_min: Union[ArrayLike, float], a_max: Union[ArrayLike, float]) -> ndarray
```

将数组值限制在给定范围内。

此函数将 `a` 中的值限制在区间 [`a_min`, `a_max`] 内。任何小于 `a_min` 的值设置为 `a_min`，任何大于 `a_max` 的值设置为 `a_max`。

**参数**
- `a` (ArrayLike): 包含要裁剪元素的数组。
- `a_min` (ArrayLike 或 float): 最小值。
- `a_max` (ArrayLike 或 float): 最大值。

**返回值**
- `ndarray`: `a` 中元素被裁剪到指定范围的数组。

**另请参阅**
- [`numpy.clip`](https://numpy.org/doc/stable/reference/generated/numpy.clip.html)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.arange(5)
>>> ap.clip(a, 1, 3)
array([1, 1, 2, 3, 3])
```

### asnumpy.nan_to_num

```python
asnumpy.nan_to_num(x: ArrayLike, nan: float = 0.0, posinf: Optional[float] = None, neginf: Optional[float] = None) -> ndarray
```

将 NaN 和无穷大替换为有限值。

此函数将 NaN 替换为零（或指定值），将无穷大替换为大有限数（或指定值）。

**参数**
- `x` (ArrayLike): 输入数据。
- `nan` (float, 可选): 用于填充 NaN 值的值。默认为 0.0。
- `posinf` (float, 可选): 用于填充正无穷大值的值。默认为非常大的数。
- `neginf` (float, 可选): 用于填充负无穷大值的值。默认为非常小的（负）数。

**返回值**
- `ndarray`: 与 `x` 形状和数据类型相同的数组，已应用替换。

**另请参阅**
- [`numpy.nan_to_num`](https://numpy.org/doc/stable/reference/generated/numpy.nan_to_num.html)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.nan_to_num(ap.array([np.inf, -np.inf, np.nan]))
array([ 1.79769313e+308, -1.79769313e+308,  0.00000000e+000])
```

### asnumpy.relu

```python
asnumpy.relu(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算修正线性单元（ReLU）激活。

此函数逐元素应用 ReLU 操作，如果为正则返回 `x`，否则返回 0。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 与 `x` 形状相同的数组，负值被替换为 0。

**示例**
```python
>>> import asnumpy as ap
>>> ap.relu(ap.array([-2, 0, 2]))
array([0, 0, 2])
```

### asnumpy.gelu

```python
asnumpy.gelu(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算高斯误差线性单元（GELU）激活。

此函数应用 GELU 操作，根据高斯分布下的概率对输入进行加权。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 对 `x` 应用 GELU 函数的结果。

**示例**
```python
>>> import asnumpy as ap
>>> ap.gelu(ap.array([-1.0, 0.0, 1.0]))
array([-0.15865525,  0.        ,  0.84134475])
```

### asnumpy.sinc

```python
asnumpy.sinc(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的归一化 sinc 函数。

此函数计算输入数组 `x` 中每个元素的归一化 sinc 函数 `sin(pi * x) / (pi * x)`。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 在 `x` 处评估的归一化 sinc 函数。

**另请参阅**
- [`numpy.sinc`](https://numpy.org/doc/stable/reference/generated/numpy.sinc.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.sinc(ap.array([0., 0.5]))
array([1.        , 0.63661977])
```

## 舍入

### asnumpy.around

```python
asnumpy.around(x: ArrayLike, decimals: int = 0, dtype: DTypeLike = None) -> ndarray
```

将元素舍入到指定的小数位数。

此函数将 `x` 中的每个元素舍入到给定的小数位数。

**参数**
- `x` (ArrayLike): 输入数据。
- `decimals` (int, 可选): 要舍入到的小数位数（默认：0）。如果 decimals 为负数，它指定小数点左边的位数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 与 `x` 类型相同的数组，包含舍入后的值。

**另请参阅**
- [`numpy.around`](https://numpy.org/doc/stable/reference/generated/numpy.around.html)
- [`asnumpy.round_`](#asnumpy-round-)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.floor`](#asnumpy-floor)

**示例**
```python
>>> import asnumpy as ap
>>> ap.around(ap.array([0.55, 1.55]), decimals=1)
array([0.6, 1.6])
```

### asnumpy.round_

```python
asnumpy.round_(x: ArrayLike, decimals: int = 0, dtype: DTypeLike = None) -> ndarray
```

将元素舍入到指定的小数位数。

此函数将 `x` 中的每个元素舍入到给定的小数位数。它是 `around` 的别名。

**参数**
- `x` (ArrayLike): 输入数据。
- `decimals` (int, 可选): 要舍入到的小数位数（默认：0）。如果 decimals 为负数，它指定小数点左边的位数。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 与 `x` 类型相同的数组，包含舍入后的值。

**另请参阅**
- [`numpy.round_`](https://numpy.org/doc/stable/reference/generated/numpy.round_.html)
- [`asnumpy.around`](#asnumpy-around)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.floor`](#asnumpy-floor)

**示例**
```python
>>> import asnumpy as ap
>>> ap.round_(ap.array([0.55, 1.55]), decimals=1)
array([0.6, 1.6])
```

### asnumpy.rint

```python
asnumpy.rint(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

将元素舍入到最接近的整数。

此函数将输入数组 `x` 中的每个元素舍入到最接近的整数值。

**参数**
- `x` (ArrayLike): 输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 与 `x` 形状和类型相同的输出数组。

**另请参阅**
- [`numpy.rint`](https://numpy.org/doc/stable/reference/generated/numpy.rint.html)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.trunc`](#asnumpy-trunc)

**示例**
```python
>>> import asnumpy as ap
>>> ap.rint(ap.array([-1.2, 1.2]))
array([-1.,  1.])
```

### asnumpy.fix

```python
asnumpy.fix(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

将元素向零舍入。

此函数将每个浮点元素舍入到最接近零的整数。

**参数**
- `x` (ArrayLike): 要舍入的浮点数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 舍入后的数字数组。

**另请参阅**
- [`numpy.fix`](https://numpy.org/doc/stable/reference/generated/numpy.fix.html)
- [`asnumpy.trunc`](#asnumpy-trunc)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.ceil`](#asnumpy-ceil)

**示例**
```python
>>> import asnumpy as ap
>>> ap.fix(ap.array([2.9, -2.9]))
array([ 2., -2.])
```

### asnumpy.floor

```python
asnumpy.floor(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的下取整。

此函数返回小于或等于 `x` 中每个元素的最大整数。

**参数**
- `x` (ArrayLike): 输入数据。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x` 中每个元素的下取整。

**另请参阅**
- [`numpy.floor`](https://numpy.org/doc/stable/reference/generated/numpy.floor.html)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.trunc`](#asnumpy-trunc)

**示例**
```python
>>> import asnumpy as ap
>>> ap.floor(ap.array([-1.5, 1.5]))
array([-2.,  1.])
```

### asnumpy.ceil

```python
asnumpy.ceil(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算每个元素的上取整。

此函数返回大于或等于 `x` 中每个元素的最小整数。

**参数**
- `x` (ArrayLike): 输入数据。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x` 中每个元素的上取整。

**另请参阅**
- [`numpy.ceil`](https://numpy.org/doc/stable/reference/generated/numpy.ceil.html)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.trunc`](#asnumpy-trunc)

**示例**
```python
>>> import asnumpy as ap
>>> ap.ceil(ap.array([-1.5, 1.5]))
array([-1.,  2.])
```

### asnumpy.trunc

```python
asnumpy.trunc(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

将元素截断为整数部分。

此函数返回 `x` 中每个元素的整数部分，有效地丢弃小数部分。

**参数**
- `x` (ArrayLike): 输入数据。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x` 中每个元素的截断值。

**另请参阅**
- [`numpy.trunc`](https://numpy.org/doc/stable/reference/generated/numpy.trunc.html)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.ceil`](#asnumpy-ceil)

**示例**
```python
>>> import asnumpy as ap
>>> ap.trunc(ap.array([-1.5, 1.5]))
array([-1.,  1.])
```

## 求和、乘积、差分

### asnumpy.prod

```python
asnumpy.prod(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

逐元素计算乘积。

此函数将输入数组 `a` 中的元素相乘。 如果提供了 `axis`，沿该轴进行乘法运算。

**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认返回展平数组的乘积。
- `keepdims` (bool, 可选): 如果为 True，则缩减的轴在结果中保留为大小为一的维度。
- `dtype` (DTypeLike, 可选): 返回数组的类型以及元素相乘的累加器的类型。

**返回值**
- `ndarray 或 标量`: 乘积。

**另请参阅**
- [`numpy.prod`](https://numpy.org/doc/stable/reference/generated/numpy.prod.html)
- [`asnumpy.sum`](#asnumpy-sum)
- [`asnumpy.nanprod`](#asnumpy-nanprod)

**示例**
```python
>>> import asnumpy as ap
>>> ap.prod(ap.array([1., 2.]))
2.0
```

### asnumpy.sum

```python
asnumpy.sum(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

逐元素计算求和。

此函数将输入数组 `a` 中的元素相加。如果提供了 `axis` 则沿该轴进行求和运算。

**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认返回展平数组的和。如果 `keepdims` 为 True， 则缩减的轴在结果中保留为大小为一的维度。
- `dtype` (DTypeLike, 可选): 返回数组和累加器的数据类型。

**返回值**
- `ndarray 或 标量`: 和。

**另请参阅**
- [`numpy.sum`](https://numpy.org/doc/stable/reference/generated/numpy.sum.html)
- [`asnumpy.nanprod`](#asnumpy-nanprod)
- [`asnumpy.nansum`](#asnumpy-nansum)
- [`asnumpy.cumprod`](#asnumpy-cumprod)
- [`asnumpy.cumsum`](#asnumpy-cumsum)

**示例**
```python
>>> import asnumpy as ap
>>> ap.sum(ap.array([0.5, 1.5]))
2.0
```

### asnumpy.nanprod

```python
asnumpy.nanprod(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

逐元素计算乘积，将 NaN 值视为 1。

此函数将输入数组 `a` 中的元素相乘，如果提供了 `axis` 则沿该轴进行乘法运算， 任何 NaN 值都不会阻止结果传播。

**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认返回展平数组的乘积。。 如果 `keepdims` 为 True, 则缩减的轴在结果中保留为大小为一的维度。
- `dtype` (DTypeLike, 可选): 返回数组和累加器的数据类型。

**返回值**
- `ndarray 或 标量`: 乘积，将 NaN 觪为 1。

**另请参阅**
- [`numpy.nanprod`](https://numpy.org/doc/stable/reference/generated/numpy.nanprod.html)
- [`asnumpy.nansum`](#asnumpy-nansum)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.nanprod(ap.array([1, np.nan]))
1.0
```

### asnumpy.nansum

```python
asnumpy.nansum(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

逐元素计算求和，将 NaN 值视为 0 进行求和运算。

此函数将输入数组 `a` 中的元素相加，如果提供了 `axis` 则沿该轴进行求和运算。 任何 NaN 假都会阻止结果传播。

**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认返回展平数组的和。如果 `keepdims` 为 True, 则缩减的轴在结果中保留为大小为一的维度。
- `dtype` (DTypeLike, 可选): 返回数组和累加器的数据类型。

**返回值**
- `ndarray or 标量`: 和（将 NaN 视为 0）。

**另请参阅**
- [`numpy.nansum`](https://numpy.org/doc/stable/reference/generated/numpy.nansum.html)
- [`asnumpy.cumprod`](#asnumpy-cumprod)
- [`asnumpy.cumsum`](#asnumpy-cumsum)
- [`asnumpy.nancumprod`](#asnumpy-nancumprod)
- [`asnumpy.nancumsum`](#asnumpy-nancumsum)

**示例**
```python
>>> import asnumpy as ap
>>> ap.nansum(ap.array([1, np.nan]))
1.0
```

### asnumpy.cumprod

```python
asnumpy.cumprod(a: ArrayLike, axis: AxisOptional = None, dtype: DTypeLike = None) -> ndarray
```

计算元素的累积乘积。

此函数计算沿指定轴的元素的运行乘积。

**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int, 可选): 计算累积乘积的轴。默认输入被展平。
- `dtype` (DTypeLike, 可选): 返回数组和累加器的数据类型。

**返回值**
- `ndarray`: 包含累积乘积的新数组。

**另请参阅**
- [`numpy.cumprod`](https://numpy.org/doc/stable/reference/generated/numpy.cumprod.html)
- [`asnumpy.prod`](#asnumpy-prod)
- [`asnumpy.cumsum`](#asnumpy-cumsum)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.array([1, 2, 3])
>>> ap.cumprod(a)
array([1, 2, 6])
```

### asnumpy.cumsum

```python
asnumpy.cumsum(a: ArrayLike, axis: AxisOptional = None, dtype: DTypeLike = None) -> ndarray
```

计算元素的累积和。

此函数计算沿指定轴的元素的运行总和。

**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int, 可选): 计算累积和的轴。默认输入被展平。
- `dtype` (DTypeLike, 可选): 返回数组和累加器的数据类型。

**返回值**
- `ndarray`: 包含累积和的新数组。

**另请参阅**
- [`numpy.cumsum`](https://numpy.org/doc/stable/reference/generated/numpy.cumsum.html)
- [`asnumpy.sum`](#asnumpy-sum)
- [`asnumpy.prod`](#asnumpy-prod)
- [`asnumpy.cumprod`](#asnumpy-cumprod)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.array([1, 2, 3])
>>> ap.cumsum(a)
array([1, 3, 6])
```

### asnumpy.nancumprod

```python
asnumpy.nancumprod(a: ArrayLike, axis: AxisOptional = None, dtype: DTypeLike = None) -> ndarray
```

计算元素的累积乘积，将 NaN 视为 1。

此函数计算沿指定轴的元素的运行乘积，任何 NaN 值都会被视为 1 进行计算。

**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int, 可选): 计算累积乘积的轴。默认输入被展平。
- `dtype` (DTypeLike, 可选): 返回数组和累加器的数据类型。

**返回值**
- `ndarray`: 包含累积乘积的新数组。

**另请参阅**
- [`numpy.nancumprod`](https://numpy.org/doc/stable/reference/generated/numpy.nancumprod.html)
- [`asnumpy.nanprod`](#asnumpy-nanprod)
- [`asnumpy.cumprod`](#asnumpy-cumprod)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.nancumprod(ap.array([1, np.nan]))
array([1., 1.])
```

### asnumpy.nancumsum

```python
asnumpy.nancumsum(a: ArrayLike, axis: AxisOptional = None, dtype: DTypeLike = None) -> ndarray
```

计算元素的累积和，将 NaN 视为 0 进行求和运算。

此函数计算沿指定轴的元素的运行总和，任何 NaN 值都会被视为 0 进行计算时**参数**
- `a` (ArrayLike): 输入数组。
- `axis` (int, 可选): 计算累积和的轴。默认输入被展平。
- `dtype` (DTypeLike, 可选): 返回数组和累加器的数据类型。

**返回值**
- `ndarray`: 包含累积和的新数组。

**另请参阅**
- [`numpy.nancumsum`](https://numpy.org/doc/stable/reference/generated/numpy.nancumsum.html)
- [`asnumpy.nansum`](#asnumpy-nansum)
- [`asnumpy.cumsum`](#asnumpy-cumsum)
- [`asnumpy.nanprod`](#asnumpy-nanprod)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.nancumsum(ap.array([1, np.nan]))
array([1., 1.])
```

### asnumpy.cross

```python
asnumpy.cross(a: ArrayLike, b: ArrayLike, axis: AxisOptional = None) -> ndarray
```

计算两个向量的叉积。

此函数计算 `a` 和 `b` 的向量叉积。它在由最后一个轴（或指定轴)定义的向量上操作，支持 2 或 3 维。

**参数**
- `a` (ArrayLike): 第一个向量的分量。
- `b` (ArrayLike): 第二个向量的分量。
- `axis` (int, 可选): 定义向量的轴。默认为最后一个轴。

**返回值**
- `ndarray`: 向量叉积。

**另请参阅**
- [`numpy.cross`](https://numpy.org/doc/stable/reference/generated/numpy.cross.html)

**示例**
```python
>>> import asnumpy as ap
>>> x = ap.array([1, 2, 3])
>>> y = ap.array([4, 5, 6])
>>> ap.cross(x, y)
array([-3,  6, -3])
```

## 极值查找

### asnumpy.maximum

```python
asnumpy.maximum(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算输入的最大值。

此函数比较 `x1` 和 `x2`，并返回每个元素的较大值。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 和 `x2` 的逐元素最大值。

**另请参阅**
- [`numpy.maximum`](https://numpy.org/doc/stable/reference/generated/numpy.maximum.html)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.fmax`](#asnumpy-fmax)
- [`asnumpy.amax`](#asnumpy-amax)

**示例**
```python
>>> import asnumpy as ap
>>> ap.maximum(ap.array([2, 3]), ap.array([1, 5]))
array([2, 5])
```

### asnumpy.minimum

```python
asnumpy.minimum(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算输入的最小值。

此函数比较 `x1` 和 `x2`，并返回每个元素的较小值。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 和 `x2` 的逐元素最小值。

**另请参阅**
- [`numpy.minimum`](https://numpy.org/doc/stable/reference/generated/numpy.minimum.html)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.fmin`](#asnumpy-fmin)
- [`asnumpy.amin`](#asnumpy-amin)

**示例**
```python
>>> import asnumpy as ap
>>> ap.minimum(ap.array([2, 3]), ap.array([1, 5]))
array([1, 3])
```

### asnumpy.fmax

```python
asnumpy.fmax(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算输入的最大值，忽略 NaN。

此函数比较 `x1` 和 `x2`，并返回较大值。如果遇到 NaN，则返回另一个值。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 和 `x2` 的逐元素最大值。

**另请参阅**
- [`numpy.fmax`](https://numpy.org/doc/stable/reference/generated/numpy.fmax.html)
- [`asnumpy.fmin`](#asnumpy-fmin)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.amax`](#asnumpy-amax)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.fmax(ap.array([np.nan, 2]), ap.array([1, np.nan]))
array([1., 2.])
```

### asnumpy.fmin

```python
asnumpy.fmin(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

逐元素计算输入的最小值，忽略 NaN。

此函数比较 `x1` 和 `x2`，并返回较小值。如果遇到 NaN，则返回另一个值。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: `x1` 和 `x2` 的逐元素最小值。

**另请参阅**
- [`numpy.fmin`](https://numpy.org/doc/stable/reference/generated/numpy.fmin.html)
- [`asnumpy.fmax`](#asnumpy-fmax)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.amin`](#asnumpy-amin)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.fmin(ap.array([np.nan, 2]), ap.array([1, np.nan]))
array([1., 2.])
```

### asnumpy.max

```python
asnumpy.max(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False) -> Union[ndarray, float]
```

计算数组的最大值。

此函数查找数组 `a` 中的最大值。如果提供了 `axis`，则沿该轴计算最大值。

**参数**
- `a` (ArrayLike): 输入数据。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认使用展平的输入。
- `keepdims` (bool, 可选): 如果设置为 True，则缩减的轴在结果中保留为大小为一的维度。

**返回值**
- `ndarray 或 标量`: `a` 的最大值。

**另请参阅**
- [`numpy.max`](https://numpy.org/doc/stable/reference/generated/numpy.max.html)
- [`asnumpy.min`](#asnumpy-min)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.amax`](#asnumpy-amax)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.array([1, 2, 3])
>>> ap.max(a)
3
```

### asnumpy.amax

```python
asnumpy.amax(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False) -> Union[ndarray, float]
```

计算数组的最大值。

此函数查找数组 `a` 中的最大值。它是 `max` 的别名。

**参数**
- `a` (ArrayLike): 输入数据。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认使用展平的输入。
- `keepdims` (bool, 可选): 如果设置为 True，则缩减的轴在结果中保留为大小为一的维度。

**返回值**
- `ndarray 或 标量`: `a` 的最大值。

**另请参阅**
- [`numpy.amax`](https://numpy.org/doc/stable/reference/generated/numpy.amax.html)
- [`asnumpy.amin`](#asnumpy-amin)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.max`](#asnumpy-max)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.array([1, 2, 3])
>>> ap.amax(a)
3
```

### asnumpy.nanmax

```python
asnumpy.nanmax(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False) -> Union[ndarray, float]
```

计算数组的最大值，忽略 NaN。

此函数查找数组 `a` 中的最大值，跳过任何 NaN 值。如果提供了 `axis`，则沿该轴计算最大值。

**参数**
- `a` (ArrayLike): 输入数据。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认使用展平的输入。
- `keepdims` (bool, 可选): 如果设置为 True，则缩减的轴在结果中保留为大小为一的维度。

**返回值**
- `ndarray 或 标量`: `a` 的最大值。

**另请参阅**
- [`numpy.nanmax`](https://numpy.org/doc/stable/reference/generated/numpy.nanmax.html)
- [`asnumpy.max`](#asnumpy-max)
- [`asnumpy.amax`](#asnumpy-amax)

**示例**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> a = ap.array([1, np.nan])
>>> ap.nanmax(a)
1.0
```

### asnumpy.min

```python
asnumpy.min(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False) -> Union[ndarray, float]
```

计算数组的最小值。

此函数查找数组 `a` 中的最小值。如果提供了 `axis`，则沿该轴计算最小值。

**参数**
- `a` (ArrayLike): 输入数据。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认使用展平的输入。
- `keepdims` (bool, 可选): 如果设置为 True，则缩减的轴在结果中保留为大小为一的维度。

**返回值**
- `ndarray 或 标量`: `a` 的最小值。

**另请参阅**
- [`numpy.min`](https://numpy.org/doc/stable/reference/generated/numpy.min.html)
- [`asnumpy.max`](#asnumpy-max)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.amin`](#asnumpy-amin)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.array([1, 2, 3])
>>> ap.min(a)
1
```

### asnumpy.amin

```python
asnumpy.amin(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False) -> Union[ndarray, float]
```

计算数组的最小值。

此函数查找数组 `a` 中的最小值。它是 `min` 的别名。

**参数**
- `a` (ArrayLike): 输入数据。
- `axis` (int 或 int 序列, 可选): 操作的轴。默认使用展平的输入。
- `keepdims` (bool, 可选): 如果设置为 True，则缩减的轴在结果中保留为大小为一的维度。

**返回值**
- `ndarray 或 标量`: `a` 的最小值。

**另请参阅**
- [`numpy.amin`](https://numpy.org/doc/stable/reference/generated/numpy.amin.html)
- [`asnumpy.amax`](#asnumpy-amax)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.min`](#asnumpy-min)

**示例**
```python
>>> import asnumpy as ap
>>> a = ap.array([1, 2, 3])
>>> ap.amin(a)
1
```

## 浮点数例程

### asnumpy.signbit

```python
asnumpy.signbit(x: ArrayLike) -> ndarray
```

检查每个元素的符号位是否设置。

此函数在符号位设置时（表示负数）返回 True，否则返回 False。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: 与 `x` 形状相同的布尔数组。

**另请参阅**
- [`numpy.signbit`](https://numpy.org/doc/stable/reference/generated/numpy.signbit.html)
- [`asnumpy.sign`](#asnumpy-sign)

**示例**
```python
>>> import asnumpy as ap
>>> ap.signbit(ap.array([-2.5, 3.5]))
array([ True, False])
```

### asnumpy.copysign

```python
asnumpy.copysign(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

逐元素将 `x1` 的符号更改为 `x2` 的符号。

此函数返回具有 `x1` 大小和 `x2` 符号的值。

**参数**
- `x1` (ArrayLike): 要更改符号的值。
- `x2` (ArrayLike): `x2` 的符号被复制到 `x1`。

**返回值**
- `ndarray`: 具有 `x2` 符号的 `x1` 值。

**另请参阅**
- [`numpy.copysign`](https://numpy.org/doc/stable/reference/generated/numpy.copysign.html)
- [`asnumpy.sign`](#asnumpy-sign)

**示例**
```python
>>> import asnumpy as ap
>>> ap.copysign(ap.array([1.5]), ap.array([-1]))
array([-1.5])
```

### asnumpy.ldexp

```python
asnumpy.ldexp(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

逐元素计算 `x1 * (2**x2)`。

此函数计算 `x1` 与 2 的 `x2` 次幂的乘积。

**参数**
- `x1` (ArrayLike): 乘数数组。
- `x2` (ArrayLike): 指数数组。

**返回值**
- `ndarray`: `x1 * 2**x2` 的结果。

**另请参阅**
- [`numpy.ldexp`](https://numpy.org/doc/stable/reference/generated/numpy.ldexp.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.ldexp(ap.array([3]), ap.array([2]))
array([12.])
```

## 复数处理

### asnumpy.real

```python
asnumpy.real(x: ArrayLike) -> ndarray
```

返回复数参数的实部。

此函数提取 `x` 中元素的实部。

**参数**
- `x` (ArrayLike): 输入数组。

**返回值**
- `ndarray`: 复数参数的实部。

**另请参阅**
- [`numpy.real`](https://numpy.org/doc/stable/reference/generated/numpy.real.html)

**示例**
```python
>>> import asnumpy as ap
>>> ap.real(ap.array([1+5j]))
array([1.])
```

## 有理数例程

### asnumpy.gcd

```python
asnumpy.gcd(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算输入的最大公约数。

此函数逐元素计算 `x1` 和 `x2` 绝对值的最大公约数（GCD）。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 输入绝对值的最大公约数。

**另请参阅**
- [`numpy.gcd`](https://numpy.org/doc/stable/reference/generated/numpy.gcd.html)
- [`asnumpy.lcm`](#asnumpy-lcm)

**示例**
```python
>>> import asnumpy as ap
>>> ap.gcd(ap.array([10]), ap.array([25]))
array([5])
```

### asnumpy.lcm

```python
asnumpy.lcm(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

计算输入的最小公倍数。

此函数逐元素计算 `x1` 和 `x2` 绝对值的最小公倍数（LCM）。

**参数**
- `x1` (ArrayLike): 第一个输入数组。
- `x2` (ArrayLike): 第二个输入数组。
- `dtype` (DTypeLike, 可选): 输出数组的所需数据类型。

**返回值**
- `ndarray`: 输入绝对值的最小公倍数。

**另请参阅**
- [`numpy.lcm`](https://numpy.org/doc/stable/reference/generated/numpy.lcm.html)
- [`asnumpy.gcd`](#asnumpy-gcd)

**示例**
```python
>>> import asnumpy as ap
>>> ap.lcm(ap.array([4]), ap.array([6]))
array([12])
```
