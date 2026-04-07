# Mathematical Functions

This module provides mathematical functions including trigonometric, hyperbolic, exponential, logarithmic, and other mathematical operations.

## Trigonometric Functions

### asnumpy.sin

```python
asnumpy.sin(x: ArrayLike) -> ndarray
```

Calculate the sine of each element.

This function computes the sine for every element in the input array `x`. Input values are assumed to be in radians.

**Arguments**
- `x` (ArrayLike): Input array containing angles in radians.

**Returns**
- `ndarray`: The sine of each element in `x`.

**See Also**
- [`numpy.sin`](https://numpy.org/doc/stable/reference/generated/numpy.sin.html)
- [`asnumpy.cos`](#asnumpy-cos)
- [`asnumpy.tan`](#asnumpy-tan)

**Examples**
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

Calculate the cosine of each element.

This function computes the cosine for every element in the input array `x`. Input values are assumed to be in radians.

**Arguments**
- `x` (ArrayLike): Input array containing angles in radians.

**Returns**
- `ndarray`: The cosine of each element in `x`.

**See Also**
- [`numpy.cos`](https://numpy.org/doc/stable/reference/generated/numpy.cos.html)
- [`asnumpy.sin`](#asnumpy-sin)
- [`asnumpy.tan`](#asnumpy-tan)

**Examples**
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

Calculate the tangent of each element.

This function computes the tangent for every element in the input array `x`. Input values are assumed to be in radians.

**Arguments**
- `x` (ArrayLike): Input array containing angles in radians.

**Returns**
- `ndarray`: The tangent of each element in `x`.

**See Also**
- [`numpy.tan`](https://numpy.org/doc/stable/reference/generated/numpy.tan.html)
- [`asnumpy.sin`](#asnumpy-sin)
- [`asnumpy.cos`](#asnumpy-cos)

**Examples**
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

Calculate the inverse sine of each element.

This function computes the inverse sine (arcsine) for every element in `x`. The domain is defined on [-1, 1]. The returned values are in radians, ranging from -pi/2 to pi/2.

**Arguments**
- `x` (ArrayLike): Input array. Elements must be within [-1, 1].

**Returns**
- `ndarray`: The inverse sine of each element in `x`.

**See Also**
- [`numpy.arcsin`](https://numpy.org/doc/stable/reference/generated/numpy.arcsin.html)
- [`asnumpy.sin`](#asnumpy-sin)
- [`asnumpy.arccos`](#asnumpy-arccos)
- [`asnumpy.arctan`](#asnumpy-arctan)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.arcsin(ap.array([0, 0.5, 1]))
array([0.        , 0.52359878, 1.57079633])
```

### asnumpy.arccos

```python
asnumpy.arccos(x: ArrayLike) -> ndarray
```

Calculate the inverse cosine of each element.

This function computes the inverse cosine (arccosine) for every element in `x`. The domain is defined on [-1, 1]. The returned values are in radians, ranging from 0 to pi.

**Arguments**
- `x` (ArrayLike): Input array. Elements must be within [-1, 1].

**Returns**
- `ndarray`: The inverse cosine of each element in `x`.

**See Also**
- [`numpy.arccos`](https://numpy.org/doc/stable/reference/generated/numpy.arccos.html)
- [`asnumpy.cos`](#asnumpy-cos)
- [`asnumpy.arcsin`](#asnumpy-arcsin)
- [`asnumpy.arctan`](#asnumpy-arctan)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.arccos(ap.array([1, 0.5, 0]))
array([0.        , 1.04719755, 1.57079633])
```

### asnumpy.arctan

```python
asnumpy.arctan(x: ArrayLike) -> ndarray
```

Calculate the inverse tangent of each element.

This function computes the inverse tangent (arctangent) for every element in `x`. The returned values are in radians, ranging from -pi/2 to pi/2.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: The inverse tangent of each element in `x`.

**See Also**
- [`numpy.arctan`](https://numpy.org/doc/stable/reference/generated/numpy.arctan.html)
- [`asnumpy.tan`](#asnumpy-tan)
- [`asnumpy.arcsin`](#asnumpy-arcsin)
- [`asnumpy.arccos`](#asnumpy-arccos)
- [`asnumpy.arctan2`](#asnumpy-arctan2)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.arctan(ap.array([0, 1]))
array([0.        , 0.78539816])
```

### asnumpy.arctan2

```python
asnumpy.arctan2(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Calculate the element-wise inverse tangent of the quotient `x1/x2`, adjusting for the quadrant.

This function computes the inverse tangent of `x1/x2`, using the signs of both arguments to determine the correct quadrant of the result. The returned values are in radians, ranging from -pi to pi.

**Arguments**
- `x1` (ArrayLike): Y-coordinates.
- `x2` (ArrayLike): X-coordinates.

**Returns**
- `ndarray`: Angles in radians.

**See Also**
- [`numpy.arctan2`](https://numpy.org/doc/stable/reference/generated/numpy.arctan2.html)
- [`asnumpy.arctan`](#asnumpy-arctan)
- [`asnumpy.tan`](#asnumpy-tan)

**Examples**
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

Calculate the hypotenuse given two sides of a right triangle.

This function computes the hypotenuse for the legs `x1` and `x2`. It is mathematically equivalent to `sqrt(x1**2 + x2**2)`.

**Arguments**
- `x1` (ArrayLike): First leg.
- `x2` (ArrayLike): Second leg.

**Returns**
- `ndarray`: The hypotenuse.

**See Also**
- [`numpy.hypot`](https://numpy.org/doc/stable/reference/generated/numpy.hypot.html)
- [`asnumpy.sqrt`](#asnumpy-sqrt)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.hypot(3*ap.ones(2), 4*ap.ones(2))
array([5., 5.])
```

### asnumpy.radians

```python
asnumpy.radians(x: ArrayLike) -> ndarray
```

Convert angles from degrees to radians.

This function converts each element in the input array `x` from degrees to radians. The operation is performed element-wise.

**Arguments**
- `x` (ArrayLike): Input array in degrees.

**Returns**
- `ndarray`: Output array in radians.

**See Also**
- [`numpy.radians`](https://numpy.org/doc/stable/reference/generated/numpy.radians.html)
- [`asnumpy.degrees`](#asnumpy-degrees)
- [`asnumpy.deg2rad`](#asnumpy-deg2rad)
- [`asnumpy.rad2deg`](#asnumpy-rad2deg)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.radians(ap.array([0, 90, 180]))
array([0.        , 1.57079633, 3.14159265])
```

### asnumpy.deg2rad

```python
asnumpy.deg2rad(x: ArrayLike) -> ndarray
```

Convert angles from degrees to radians.

This function converts input angles from degrees to radians element-wise. It is an alias for `radians`.

**Arguments**
- `x` (ArrayLike): Input array in degrees.

**Returns**
- `ndarray`: Output array in radians.

**See Also**
- [`numpy.deg2rad`](https://numpy.org/doc/stable/reference/generated/numpy.deg2rad.html)
- [`asnumpy.radians`](#asnumpy-radians)
- [`asnumpy.degrees`](#asnumpy-degrees)
- [`asnumpy.rad2deg`](#asnumpy-rad2deg)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.deg2rad(ap.array([0, 90, 180]))
array([0.        , 1.57079633, 3.14159265])
```

### asnumpy.degrees

```python
asnumpy.degrees(x: ArrayLike) -> ndarray
```

Convert angles from radians to degrees.

This function converts each element in the input array `x` from radians to degrees. The operation is performed element-wise.

**Arguments**
- `x` (ArrayLike): Input array in radians.

**Returns**
- `ndarray`: Output array in degrees.

**See Also**
- [`numpy.degrees`](https://numpy.org/doc/stable/reference/generated/numpy.degrees.html)
- [`asnumpy.radians`](#asnumpy-radians)
- [`asnumpy.rad2deg`](#asnumpy-rad2deg)
- [`asnumpy.deg2rad`](#asnumpy-deg2rad)

**Examples**
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

Convert angles from radians to degrees.

This function converts each element in the input array `x` from radians to degrees. It is an alias for `degrees`.

**Arguments**
- `x` (ArrayLike): Input array in radians.

**Returns**
- `ndarray`: Output array in degrees.

**See Also**
- [`numpy.rad2deg`](https://numpy.org/doc/stable/reference/generated/numpy.rad2deg.html)
- [`asnumpy.degrees`](#asnumpy-degrees)
- [`asnumpy.radians`](#asnumpy-radians)
- [`asnumpy.deg2rad`](#asnumpy-deg2rad)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.rad2deg(ap.array([0, np.pi/2, np.pi]))
array([  0.,  90., 180.])
```

## Hyperbolic Functions

### asnumpy.sinh

```python
asnumpy.sinh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the hyperbolic sine of each element.

This function computes the hyperbolic sine for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array containing the hyperbolic sine of each element in `x`.

**See Also**
- [`numpy.sinh`](https://numpy.org/doc/stable/reference/generated/numpy.sinh.html)
- [`asnumpy.cosh`](#asnumpy-cosh)
- [`asnumpy.tanh`](#asnumpy-tanh)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.sinh(ap.array([0., 1.]))
array([0.        , 1.17520119])
```

### asnumpy.cosh

```python
asnumpy.cosh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the hyperbolic cosine of each element.

This function computes the hyperbolic cosine for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array containing the hyperbolic cosine of each element in `x`.

**See Also**
- [`numpy.cosh`](https://numpy.org/doc/stable/reference/generated/numpy.cosh.html)
- [`asnumpy.sinh`](#asnumpy-sinh)
- [`asnumpy.tanh`](#asnumpy-tanh)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.cosh(ap.array([0., 1.]))
array([1.        , 1.54308063])
```

### asnumpy.tanh

```python
asnumpy.tanh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the hyperbolic tangent of each element.

This function computes the hyperbolic tangent for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array containing the hyperbolic tangent of each element in `x`.

**See Also**
- [`numpy.tanh`](https://numpy.org/doc/stable/reference/generated/numpy.tanh.html)
- [`asnumpy.sinh`](#asnumpy-sinh)
- [`asnumpy.cosh`](#asnumpy-cosh)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.tanh(ap.array([0., 1.]))
array([0.        , 0.76159416])
```

### asnumpy.arcsinh

```python
asnumpy.arcsinh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the inverse hyperbolic sine of each element.

This function computes the inverse hyperbolic sine for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array containing the inverse hyperbolic sine of each element in `x`.

**See Also**
- [`numpy.arcsinh`](https://numpy.org/doc/stable/reference/generated/numpy.arcsinh.html)
- [`asnumpy.sinh`](#asnumpy-sinh)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.arcsinh(ap.array([0., 1.17520119]))
array([0., 1.])
```

### asnumpy.arccosh

```python
asnumpy.arccosh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the inverse hyperbolic cosine of each element.

This function computes the inverse hyperbolic cosine for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array containing the inverse hyperbolic cosine of each element in `x`.

**See Also**
- [`numpy.arccosh`](https://numpy.org/doc/stable/reference/generated/numpy.arccosh.html)
- [`asnumpy.cosh`](#asnumpy-cosh)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.arccosh(ap.array([1., 1.54308063]))
array([0., 1.])
```

### asnumpy.arctanh

```python
asnumpy.arctanh(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the inverse hyperbolic tangent of each element.

This function computes the inverse hyperbolic tangent for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array containing the inverse hyperbolic tangent of each element in `x`.

**See Also**
- [`numpy.arctanh`](https://numpy.org/doc/stable/reference/generated/numpy.arctanh.html)
- [`asnumpy.tanh`](#asnumpy-tanh)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.arctanh(ap.array([0., 0.76159416]))
array([0., 1.])
```

## Arithmetic Operations

### asnumpy.add

```python
asnumpy.add(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the sum of two inputs element-wise.

This function adds `x1` and `x2` element by element.

**Arguments**
- `x1` (ArrayLike): First input array or scalar.
- `x2` (ArrayLike): Second input array or scalar.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The sum of `x1` and `x2`.

**See Also**
- [`numpy.add`](https://numpy.org/doc/stable/reference/generated/numpy.add.html)
- [`asnumpy.subtract`](#asnumpy-subtract)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.add(ap.array([10, 20]), ap.array([5, 5]))
array([15, 25])
```

### asnumpy.subtract

```python
asnumpy.subtract(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the difference between two inputs element-wise.

This function subtracts `x2` from `x1` element by element.

**Arguments**
- `x1` (ArrayLike): The array to subtract from.
- `x2` (ArrayLike): The array to subtract.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The difference `x1 - x2`.

**See Also**
- [`numpy.subtract`](https://numpy.org/doc/stable/reference/generated/numpy.subtract.html)
- [`asnumpy.add`](#asnumpy-add)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.subtract(ap.array([10, 5]), ap.array([2, 2]))
array([8, 3])
```

### asnumpy.multiply

```python
asnumpy.multiply(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the product of two inputs element-wise.

This function multiplies `x1` and `x2` element by element.

**Arguments**
- `x1` (ArrayLike): First input array or scalar.
- `x2` (ArrayLike): Second input array or scalar.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The product of `x1` and `x2`.

**See Also**
- [`numpy.multiply`](https://numpy.org/doc/stable/reference/generated/numpy.multiply.html)
- [`asnumpy.divide`](#asnumpy-divide)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.multiply(ap.array([2.0, 4.0]), ap.array([3.0, 0.5]))
array([6., 2.])
```

### asnumpy.divide

```python
asnumpy.divide(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the division of two inputs element-wise.

This function divides `x1` by `x2` element by element, performing true division.

**Arguments**
- `x1` (ArrayLike): The dividend.
- `x2` (ArrayLike): The divisor.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The quotient of `x1` divided by `x2`.

**See Also**
- [`numpy.divide`](https://numpy.org/doc/stable/reference/generated/numpy.divide.html)
- [`asnumpy.multiply`](#asnumpy-multiply)
- [`asnumpy.floor_divide`](#asnumpy-floor-divide)
- [`asnumpy.true_divide`](#asnumpy-true-divide)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.divide(ap.array([6, 12]), ap.array([3, 4]))
array([2., 3.])
```

### asnumpy.true_divide

```python
asnumpy.true_divide(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the true division of two inputs element-wise.

This function divides `x1` by `x2` element by element. It is an alias for `divide`.

**Arguments**
- `x1` (ArrayLike): The dividend.
- `x2` (ArrayLike): The divisor.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The quotient of `x1` divided by `x2`.

**See Also**
- [`numpy.true_divide`](https://numpy.org/doc/stable/reference/generated/numpy.true_divide.html)
- [`asnumpy.divide`](#asnumpy-divide)
- [`asnumpy.floor_divide`](#asnumpy-floor-divide)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.true_divide(ap.array([6, 12]), ap.array([3, 4]))
array([2., 3.])
```

### asnumpy.floor_divide

```python
asnumpy.floor_divide(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the floor division of two inputs element-wise.

This function divides `x1` by `x2` and rounds the quotient down to the nearest integer. It corresponds to the `//` operator.

**Arguments**
- `x1` (ArrayLike): The dividend.
- `x2` (ArrayLike): The divisor.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The result of floor division.

**See Also**
- [`numpy.floor_divide`](https://numpy.org/doc/stable/reference/generated/numpy.floor_divide.html)
- [`asnumpy.divide`](#asnumpy-divide)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.true_divide`](#asnumpy-true-divide)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.floor_divide(ap.array([10, 10]), ap.array([3, 4]))
array([3, 2])
```

### asnumpy.power

```python
asnumpy.power(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the power of bases raised to exponents.

This function raises elements of `x1` to the power of elements of `x2`.

**Arguments**
- `x1` (ArrayLike): The bases.
- `x2` (ArrayLike): The exponents.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The result of `x1 ** x2`.

**See Also**
- [`numpy.power`](https://numpy.org/doc/stable/reference/generated/numpy.power.html)
- [`asnumpy.float_power`](#asnumpy-float-power)
- [`asnumpy.square`](#asnumpy-square)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.power(ap.array([2, 5]), ap.array([3, 2]))
array([ 8, 25])
```

### asnumpy.float_power

```python
asnumpy.float_power(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the power of bases raised to exponents, promoting to float.

This function raises elements of `x1` to the power of elements of `x2`. It ensures at least float64 precision for the calculation.

**Arguments**
- `x1` (ArrayLike): The bases.
- `x2` (ArrayLike): The exponents.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The result of `x1 ** x2`.

**See Also**
- [`numpy.float_power`](https://numpy.org/doc/stable/reference/generated/numpy.float_power.html)
- [`asnumpy.power`](#asnumpy-power)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.float_power(ap.array([2, 5]), ap.array([3, 2]))
array([ 8., 25.])
```

### asnumpy.negative

```python
asnumpy.negative(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the numerical negative element-wise.

This function negates each element in the input array, returning `-x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The negative of the input array.

**See Also**
- [`numpy.negative`](https://numpy.org/doc/stable/reference/generated/numpy.negative.html)
- [`asnumpy.positive`](#asnumpy-positive)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.negative(ap.array([10, -10]))
array([-10,  10])
```

### asnumpy.positive

```python
asnumpy.positive(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Apply the unary positive operator element-wise.

This function returns `+x` for each element. It effectively returns a copy of the array.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The input array with the positive unary operator applied.

**See Also**
- [`numpy.positive`](https://numpy.org/doc/stable/reference/generated/numpy.positive.html)
- [`asnumpy.negative`](#asnumpy-negative)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.positive(ap.array([-5, 5]))
array([-5,  5])
```

### asnumpy.reciprocal

```python
asnumpy.reciprocal(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the reciprocal of each element.

This function computes the multiplicative inverse, `1 / x`, for every element in the input array.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The reciprocal of each element in `x`.

**See Also**
- [`numpy.reciprocal`](https://numpy.org/doc/stable/reference/generated/numpy.reciprocal.html)
- [`asnumpy.divide`](#asnumpy-divide)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.reciprocal(ap.array([1., 2., 4.]))
array([1.  , 0.5 , 0.25])
```

### asnumpy.mod

```python
asnumpy.mod(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the remainder of division element-wise.

This function computes the remainder of `x1` divided by `x2`. It behaves like the Python `%` operator, where the result takes the sign of the divisor `x2`.

**Arguments**
- `x1` (ArrayLike): The dividend.
- `x2` (ArrayLike): The divisor.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The remainder of the division.

**See Also**
- [`numpy.mod`](https://numpy.org/doc/stable/reference/generated/numpy.mod.html)
- [`asnumpy.remainder`](#asnumpy-remainder)
- [`asnumpy.fmod`](#asnumpy-fmod)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.mod(ap.array([-4, -4, 4, 4]), ap.array([3, -3, 3, -3]))
array([ 2, -1,  1, -2])
```

### asnumpy.remainder

```python
asnumpy.remainder(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the remainder of division element-wise.

This function computes the remainder of `x1` divided by `x2`. It is an alias for `mod`, and the result takes the sign of the divisor `x2`.

**Arguments**
- `x1` (ArrayLike): The dividend.
- `x2` (ArrayLike): The divisor.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The remainder of the division.

**See Also**
- [`numpy.remainder`](https://numpy.org/doc/stable/reference/generated/numpy.remainder.html)
- [`asnumpy.mod`](#asnumpy-mod)
- [`asnumpy.fmod`](#asnumpy-fmod)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.remainder(ap.array([5, -5]), ap.array([3, 3]))
array([2, 1])
```

### asnumpy.fmod

```python
asnumpy.fmod(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the floating-point remainder of division.

This function computes the remainder of `x1` divided by `x2`. The result carries the sign of the dividend `x1`, consistent with the C `fmod` function.

**Arguments**
- `x1` (ArrayLike): The dividend.
- `x2` (ArrayLike): The divisor.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `ndarray`: The remainder of the division.

**See Also**
- [`numpy.fmod`](https://numpy.org/doc/stable/reference/generated/numpy.fmod.html)
- [`asnumpy.mod`](#asnumpy-mod)
- [`asnumpy.remainder`](#asnumpy-remainder)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.fmod(ap.array([-4, -4, 4, 4]), ap.array([3, -3, 3, -3]))
array([-1, -1,  1,  1])
```

### asnumpy.modf

```python
asnumpy.modf(x: ArrayLike) -> tuple
```

Separate the fractional and integral parts of elements.

This function splits each element of `x` into its fractional and integral components. Both returned parts have the same sign as the input.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `tuple of ndarray`: A tuple containing the fractional parts of `x` and the integral parts of `x`.

**See Also**
- [`numpy.modf`](https://numpy.org/doc/stable/reference/generated/numpy.modf.html)
- [`asnumpy.divmod`](#asnumpy-divmod)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.modf(ap.array([1.5, -2.5]))
(array([ 0.5, -0.5]), array([ 1., -2.]))
```

### asnumpy.divmod

```python
asnumpy.divmod(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> tuple
```

Calculate both the quotient and the remainder.

This function performs floor division and modulus simultaneously. It returns the pair `(x1 // x2, x1 % x2)`.

**Arguments**
- `x1` (ArrayLike): The dividend.
- `x2` (ArrayLike): The divisor.
- `dtype` (DTypeLike, optional): Desired data type for the output array.

**Returns**
- `tuple of ndarray`: A tuple containing the element-wise floor quotient and the element-wise remainder.

**See Also**
- [`numpy.divmod`](https://numpy.org/doc/stable/reference/generated/numpy.divmod.html)
- [`asnumpy.floor_divide`](#asnumpy-floor-divide)
- [`asnumpy.remainder`](#asnumpy-remainder)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.divmod(ap.array([10, 11]), ap.array([3, 3]))
(array([3, 3]), array([1, 2]))
```

## Exponents and Logarithms

### asnumpy.exp

```python
asnumpy.exp(x: ArrayLike) -> ndarray
```

Calculate the exponential of each element.

This function computes `e` raised to the power of each element in `x`, where `e` is the base of the natural logarithm.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: Element-wise exponential of `x`.

**See Also**
- [`numpy.exp`](https://numpy.org/doc/stable/reference/generated/numpy.exp.html)
- [`asnumpy.expm1`](#asnumpy-expm1)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.exp(ap.array([1., 2.]))
array([2.71828183, 7.3890561 ])
```

### asnumpy.exp2

```python
asnumpy.exp2(x: ArrayLike) -> ndarray
```

Calculate 2 raised to the power of each element.

This function computes the base-2 exponential for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: Element-wise 2 to the power `x`.

**See Also**
- [`numpy.exp2`](https://numpy.org/doc/stable/reference/generated/numpy.exp2.html)
- [`asnumpy.power`](#asnumpy-power)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.exp2(ap.array([3]))
array([8.])
```

### asnumpy.expm1

```python
asnumpy.expm1(x: ArrayLike) -> ndarray
```

Calculate `exp(x) - 1` for each element.

This function computes the exponential of each element minus one. It is designed to be more accurate than `exp(x) - 1` for values of `x` close to zero.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: Element-wise exponential minus one.

**See Also**
- [`numpy.expm1`](https://numpy.org/doc/stable/reference/generated/numpy.expm1.html)
- [`asnumpy.exp`](#asnumpy-exp)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.expm1(ap.array([1e-10]))
array([1.0000000e-10])
```

### asnumpy.log

```python
asnumpy.log(x: ArrayLike) -> ndarray
```

Calculate the natural logarithm of each element.

This function computes the logarithm to the base `e` for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: The natural logarithm of `x`, element-wise.

**See Also**
- [`numpy.log`](https://numpy.org/doc/stable/reference/generated/numpy.log.html)
- [`asnumpy.log10`](#asnumpy-log10)
- [`asnumpy.log2`](#asnumpy-log2)
- [`asnumpy.log1p`](#asnumpy-log1p)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.log(ap.array([ap.e]))
array([1.])
```

### asnumpy.log2

```python
asnumpy.log2(x: ArrayLike) -> ndarray
```

Calculate the base-2 logarithm of each element.

This function computes the binary logarithm (base 2) for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: Base-2 logarithm of `x`.

**See Also**
- [`numpy.log2`](https://numpy.org/doc/stable/reference/generated/numpy.log2.html)
- [`asnumpy.log`](#asnumpy-log)
- [`asnumpy.log10`](#asnumpy-log10)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.log2(ap.array([8.]))
array([3.])
```

### asnumpy.log10

```python
asnumpy.log10(x: ArrayLike) -> ndarray
```

Calculate the base-10 logarithm of each element.

This function computes the common logarithm (base 10) for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: The base 10 logarithm of `x`, element-wise.

**See Also**
- [`numpy.log10`](https://numpy.org/doc/stable/reference/generated/numpy.log10.html)
- [`asnumpy.log`](#asnumpy-log)
- [`asnumpy.log2`](#asnumpy-log2)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.log10(ap.array([100.]))
array([2.])
```

### asnumpy.log1p

```python
asnumpy.log1p(x: ArrayLike) -> ndarray
```

Calculate the natural logarithm of `1 + x` for each element.

This function computes `log(1 + x)` element-wise. It is designed to provide better precision than `log(1 + x)` when `x` is close to zero.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: Natural logarithm of `1 + x`, element-wise.

**See Also**
- [`numpy.log1p`](https://numpy.org/doc/stable/reference/generated/numpy.log1p.html)
- [`asnumpy.log`](#asnumpy-log)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.log1p(ap.array([1e-99]))
array([1.e-99])
```

### asnumpy.logaddexp

```python
asnumpy.logaddexp(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Calculate the logarithm of the sum of exponentials of the inputs.

This function computes `log(exp(x1) + exp(x2))`. It is numerically stable and useful for operations involving probabilities in log-space.

**Arguments**
- `x1` (ArrayLike): Input array.
- `x2` (ArrayLike): Input array.

**Returns**
- `ndarray`: Logarithm of `exp(x1) + exp(x2)`.

**See Also**
- [`numpy.logaddexp`](https://numpy.org/doc/stable/reference/generated/numpy.logaddexp.html)
- [`asnumpy.logaddexp2`](#asnumpy-logaddexp2)

**Examples**
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

Calculate the base-2 logarithm of the sum of base-2 exponentials of the inputs.

This function computes `log2(2**x1 + 2**x2)`. It is a base-2 analog of `logaddexp`.

**Arguments**
- `x1` (ArrayLike): Input array.
- `x2` (ArrayLike): Input array.

**Returns**
- `ndarray`: Base-2 logarithm of `2**x1 + 2**x2`.

**See Also**
- [`numpy.logaddexp2`](https://numpy.org/doc/stable/reference/generated/numpy.logaddexp2.html)
- [`asnumpy.logaddexp`](#asnumpy-logaddexp)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.logaddexp2(ap.array([1]), ap.array([1]))
array([2.])
```

## Miscellaneous Functions

### asnumpy.absolute

```python
asnumpy.absolute(x: ArrayLike) -> ndarray
```

Calculate the absolute value of each element.

This function computes the absolute value for every element in the input array `x`. If the input is complex, the magnitude is returned.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: An array containing the absolute value of each element in `x`.

**See Also**
- [`numpy.absolute`](https://numpy.org/doc/stable/reference/generated/numpy.absolute.html)
- [`asnumpy.fabs`](#asnumpy-fabs)

**Examples**
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

Calculate the absolute value for real-valued elements.

This function computes the absolute value of each element in `x`. It is designed for real numbers and does not handle complex conjugation.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: An array containing the absolute values of `x`.

**See Also**
- [`numpy.fabs`](https://numpy.org/doc/stable/reference/generated/numpy.fabs.html)
- [`asnumpy.absolute`](#asnumpy-absolute)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.fabs(ap.array([-2.5, 2.5]))
array([2.5, 2.5])
```

### asnumpy.sign

```python
asnumpy.sign(x: ArrayLike) -> ndarray
```

Determine the sign of each element.

This function returns an element-wise indication of the sign of a number: -1 for negative, 0 for zero, and 1 for positive.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: The sign of each element in `x`.

**See Also**
- [`numpy.sign`](https://numpy.org/doc/stable/reference/generated/numpy.sign.html)

**Examples**
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

Compute the Heaviside step function.

This function calculates the Heaviside step function for each element in `x1`. The value is 0 for negative inputs, 1 for positive inputs, and `x2` when the input is zero.

**Arguments**
- `x1` (ArrayLike): Input array.
- `x2` (ArrayLike): Value to use when `x1` is 0.

**Returns**
- `ndarray`: The result of the Heaviside step function.

**See Also**
- [`numpy.heaviside`](https://numpy.org/doc/stable/reference/generated/numpy.heaviside.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.heaviside(ap.array([-2.0, 0, 1.0]), 0.5)
array([0. , 0.5, 1. ])
```

### asnumpy.sqrt

```python
asnumpy.sqrt(x: ArrayLike) -> ndarray
```

Calculate the non-negative square root of each element.

This function computes the square root for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): The values whose square-roots are required.

**Returns**
- `ndarray`: An array of the same shape as `x`, containing the positive square-root of each element.

**See Also**
- [`numpy.sqrt`](https://numpy.org/doc/stable/reference/generated/numpy.sqrt.html)
- [`asnumpy.square`](#asnumpy-square)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.sqrt(ap.array([1, 4, 16]))
array([1., 2., 4.])
```

### asnumpy.square

```python
asnumpy.square(x: ArrayLike) -> ndarray
```

Calculate the square of each element.

This function computes the square of the input `x` element-wise.

**Arguments**
- `x` (ArrayLike): Input data.

**Returns**
- `ndarray`: Element-wise `x*x`, of the same shape and dtype as `x`.

**See Also**
- [`numpy.square`](https://numpy.org/doc/stable/reference/generated/numpy.square.html)
- [`asnumpy.sqrt`](#asnumpy-sqrt)
- [`asnumpy.power`](#asnumpy-power)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.square(ap.array([2, 3, 4]))
array([ 4,  9, 16])
```

### asnumpy.clip

```python
asnumpy.clip(a: ArrayLike, a_min: Union[ArrayLike, float], a_max: Union[ArrayLike, float]) -> ndarray
```

Constrain array values to a given range.

This function limits the values in `a` to be within the interval [`a_min`, `a_max`]. Any value less than `a_min` is set to `a_min`, and any value greater than `a_max` is set to `a_max`.

**Arguments**
- `a` (ArrayLike): Array containing elements to clip.
- `a_min` (ArrayLike or float): Minimum value.
- `a_max` (ArrayLike or float): Maximum value.

**Returns**
- `ndarray`: An array with the elements of `a` clipped to the specified range.

**See Also**
- [`numpy.clip`](https://numpy.org/doc/stable/reference/generated/numpy.clip.html)

**Examples**
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

Replace NaN and infinity with finite values.

This function replaces NaN with zero (or a specified value) and infinity with large finite numbers (or specified values).

**Arguments**
- `x` (ArrayLike): Input data.
- `nan` (float, optional): Value to be used to fill NaN values. Default is 0.0.
- `posinf` (float, optional): Value to be used to fill positive infinity values. Default is a very large number.
- `neginf` (float, optional): Value to be used to fill negative infinity values. Default is a very small (negative) number.

**Returns**
- `ndarray`: Array with the same shape as `x` and the same dtype, with replacements applied.

**See Also**
- [`numpy.nan_to_num`](https://numpy.org/doc/stable/reference/generated/numpy.nan_to_num.html)

**Examples**
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

Calculate the Rectified Linear Unit (ReLU) activation.

This function applies the ReLU operation element-wise, returning `x` if positive and 0 otherwise.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array with the same shape as `x`, with negative values replaced by 0.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.relu(ap.array([-2, 0, 2]))
array([0, 0, 2])
```

### asnumpy.gelu

```python
asnumpy.gelu(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the Gaussian Error Linear Unit (GELU) activation.

This function applies the GELU operation, which weights inputs by their probability under a Gaussian distribution.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The result of the GELU function applied to `x`.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.gelu(ap.array([-1.0, 0.0, 1.0]))
array([-0.15865525,  0.        ,  0.84134475])
```

### asnumpy.sinc

```python
asnumpy.sinc(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the normalized sinc function of each element.

This function computes the normalized sinc function, `sin(pi * x) / (pi * x)`, for every element in the input array `x`.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The normalized sinc function evaluated at `x`.

**See Also**
- [`numpy.sinc`](https://numpy.org/doc/stable/reference/generated/numpy.sinc.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.sinc(ap.array([0., 0.5]))
array([1.        , 0.63661977])
```

## Rounding

### asnumpy.around

```python
asnumpy.around(x: ArrayLike, decimals: int = 0, dtype: DTypeLike = None) -> ndarray
```

Round elements to a specified number of decimal places.

This function rounds each element in `x` to the given number of decimals.

**Arguments**
- `x` (ArrayLike): Input data.
- `decimals` (int, optional): Number of decimal places to round to (default: 0). If decimals is negative, it specifies the number of positions to the left of the decimal point.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array of the same type as `x`, containing the rounded values.

**See Also**
- [`numpy.around`](https://numpy.org/doc/stable/reference/generated/numpy.around.html)
- [`asnumpy.round_`](#asnumpy-round-)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.floor`](#asnumpy-floor)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.around(ap.array([0.55, 1.55]), decimals=1)
array([0.6, 1.6])
```

### asnumpy.round_

```python
asnumpy.round_(x: ArrayLike, decimals: int = 0, dtype: DTypeLike = None) -> ndarray
```

Round elements to a specified number of decimal places.

This function rounds each element in `x` to the given number of decimals. It is an alias for `around`.

**Arguments**
- `x` (ArrayLike): Input data.
- `decimals` (int, optional): Number of decimal places to round to (default: 0). If decimals is negative, it specifies the number of positions to the left of the decimal point.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: An array of the same type as `x`, containing the rounded values.

**See Also**
- [`numpy.round_`](https://numpy.org/doc/stable/reference/generated/numpy.round_.html)
- [`asnumpy.around`](#asnumpy-around)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.floor`](#asnumpy-floor)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.round_(ap.array([0.55, 1.55]), decimals=1)
array([0.6, 1.6])
```

### asnumpy.rint

```python
asnumpy.rint(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Round elements to the nearest integer.

This function rounds each element in the input array `x` to the closest integer value.

**Arguments**
- `x` (ArrayLike): Input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: Output array with the same shape and type as `x`.

**See Also**
- [`numpy.rint`](https://numpy.org/doc/stable/reference/generated/numpy.rint.html)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.trunc`](#asnumpy-trunc)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.rint(ap.array([-1.2, 1.2]))
array([-1.,  1.])
```

### asnumpy.fix

```python
asnumpy.fix(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Round elements towards zero.

This function rounds each floating-point element to the nearest integer closer to zero.

**Arguments**
- `x` (ArrayLike): An array of floats to be rounded.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The array of rounded numbers.

**See Also**
- [`numpy.fix`](https://numpy.org/doc/stable/reference/generated/numpy.fix.html)
- [`asnumpy.trunc`](#asnumpy-trunc)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.ceil`](#asnumpy-ceil)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.fix(ap.array([2.9, -2.9]))
array([ 2., -2.])
```

### asnumpy.floor

```python
asnumpy.floor(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the floor of each element.

This function returns the largest integer less than or equal to each element in `x`.

**Arguments**
- `x` (ArrayLike): Input data.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The floor of each element in `x`.

**See Also**
- [`numpy.floor`](https://numpy.org/doc/stable/reference/generated/numpy.floor.html)
- [`asnumpy.ceil`](#asnumpy-ceil)
- [`asnumpy.trunc`](#asnumpy-trunc)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.floor(ap.array([-1.5, 1.5]))
array([-2.,  1.])
```

### asnumpy.ceil

```python
asnumpy.ceil(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the ceiling of each element.

This function returns the smallest integer greater than or equal to each element in `x`.

**Arguments**
- `x` (ArrayLike): Input data.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The ceiling of each element in `x`.

**See Also**
- [`numpy.ceil`](https://numpy.org/doc/stable/reference/generated/numpy.ceil.html)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.trunc`](#asnumpy-trunc)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.ceil(ap.array([-1.5, 1.5]))
array([-1.,  2.])
```

### asnumpy.trunc

```python
asnumpy.trunc(x: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Truncate elements to their integer part.

This function returns the integer portion of each element in `x`, effectively discarding the fractional part.

**Arguments**
- `x` (ArrayLike): Input data.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The truncated value of each element in `x`.

**See Also**
- [`numpy.trunc`](https://numpy.org/doc/stable/reference/generated/numpy.trunc.html)
- [`asnumpy.floor`](#asnumpy-floor)
- [`asnumpy.ceil`](#asnumpy-ceil)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.trunc(ap.array([-1.5, 1.5]))
array([-1.,  1.])
```

## Sums, Products, Differences

### asnumpy.prod

```python
asnumpy.prod(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

Calculate the product of elements.

This function multiplies elements in the input array `a`. If an `axis` is provided, the multiplication is performed along that axis.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, the product of the flattened array is returned.
- `keepdims` (bool, optional): If True, the axes which are reduced are left in the result as dimensions with size one.
- `dtype` (DTypeLike, optional): The type of the returned array and of the accumulator in which the elements are multiplied.

**Returns**
- `ndarray or scalar`: The product of the elements.

**See Also**
- [`numpy.prod`](https://numpy.org/doc/stable/reference/generated/numpy.prod.html)
- [`asnumpy.sum`](#asnumpy-sum)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.prod(ap.array([1., 2.]))
2.0
```

### asnumpy.sum

```python
asnumpy.sum(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

Calculate the sum of elements.

This function adds up elements in the input array `a`. If an `axis` is provided, the summation is performed along that axis.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, the sum of the flattened array is returned.
- `keepdims` (bool, optional): If True, the axes which are reduced are left in the result as dimensions with size one.
- `dtype` (DTypeLike, optional): The type of the returned array and of the accumulator in which the elements are summed.

**Returns**
- `ndarray or scalar`: The sum of the elements.

**See Also**
- [`numpy.sum`](https://numpy.org/doc/stable/reference/generated/numpy.sum.html)
- [`asnumpy.prod`](#asnumpy-prod)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.sum(ap.array([0.5, 1.5]))
2.0
```

### asnumpy.nanprod

```python
asnumpy.nanprod(a: ArrayLike, axis: AxisOptional = None, keepdims: bool = False, dtype: DTypeLike = None) -> Union[ndarray, float]
```

Calculate the product of elements, replacing NaNs with one.

This function multiplies elements in the input array `a`, treating any NaN values as 1. This ensures that NaNs do not propagate into the result.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, the product of the flattened array is returned.
- `keepdims` (bool, optional): If True, the axes which are reduced are left in the result as dimensions with size one.
- `dtype` (DTypeLike, optional): The type of the returned array and of the accumulator.

**Returns**
- `ndarray or scalar`: The product of the elements, with NaNs treated as 1.

**See Also**
- [`numpy.nanprod`](https://numpy.org/doc/stable/reference/generated/numpy.nanprod.html)
- [`asnumpy.prod`](#asnumpy-prod)

**Examples**
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

Calculate the sum of elements, replacing NaNs with zero.

This function adds up elements in the input array `a`, treating any NaN values as 0. This ensures that NaNs do not propagate into the result.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, the sum of the flattened array is returned.
- `keepdims` (bool, optional): If True, the axes which are reduced are left in the result as dimensions with size one.
- `dtype` (DTypeLike, optional): The type of the returned array and of the accumulator.

**Returns**
- `ndarray or scalar`: The sum of the elements, with NaNs treated as 0.

**See Also**
- [`numpy.nansum`](https://numpy.org/doc/stable/reference/generated/numpy.nansum.html)
- [`asnumpy.sum`](#asnumpy-sum)

**Examples**
```python
>>> import asnumpy as ap
>>> import numpy as np
>>> ap.nansum(ap.array([1, np.nan]))
1.0
```

### asnumpy.cumprod

```python
asnumpy.cumprod(a: ArrayLike, axis: AxisOptional = None, dtype: DTypeLike = None) -> ndarray
```

Calculate the cumulative product of elements.

This function computes the running product of elements along the specified axis.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int, optional): Axis along which the cumulative product is computed. By default, the input is flattened.
- `dtype` (DTypeLike, optional): Type of the returned array and of the accumulator.

**Returns**
- `ndarray`: A new array containing the cumulative product.

**See Also**
- [`numpy.cumprod`](https://numpy.org/doc/stable/reference/generated/numpy.cumprod.html)
- [`asnumpy.prod`](#asnumpy-prod)
- [`asnumpy.cumsum`](#asnumpy-cumsum)

**Examples**
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

Calculate the cumulative sum of elements.

This function computes the running total of elements along the specified axis.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int, optional): Axis along which the cumulative sum is computed. By default, the input is flattened.
- `dtype` (DTypeLike, optional): Type of the returned array and of the accumulator.

**Returns**
- `ndarray`: A new array containing the cumulative sum.

**See Also**
- [`numpy.cumsum`](https://numpy.org/doc/stable/reference/generated/numpy.cumsum.html)
- [`asnumpy.sum`](#asnumpy-sum)
- [`asnumpy.cumprod`](#asnumpy-cumprod)

**Examples**
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

Calculate the cumulative product of elements, treating NaNs as one.

This function computes the running product of elements along the specified axis. Any NaN values encountered are treated as 1.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int, optional): Axis along which the cumulative product is computed. By default, the input is flattened.
- `dtype` (DTypeLike, optional): Type of the returned array and of the accumulator.

**Returns**
- `ndarray`: A new array containing the cumulative product.

**See Also**
- [`numpy.nancumprod`](https://numpy.org/doc/stable/reference/generated/numpy.nancumprod.html)
- [`asnumpy.cumprod`](#asnumpy-cumprod)
- [`asnumpy.nanprod`](#asnumpy-nanprod)

**Examples**
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

Calculate the cumulative sum of elements, treating NaNs as zero.

This function computes the running total of elements along the specified axis. Any NaN values encountered are treated as 0.

**Arguments**
- `a` (ArrayLike): Input array.
- `axis` (int, optional): Axis along which the cumulative sum is computed. By default, the input is flattened.
- `dtype` (DTypeLike, optional): Type of the returned array and of the accumulator.

**Returns**
- `ndarray`: A new array containing the cumulative sum.

**See Also**
- [`numpy.nancumsum`](https://numpy.org/doc/stable/reference/generated/numpy.nancumsum.html)
- [`asnumpy.cumsum`](#asnumpy-cumsum)
- [`asnumpy.nansum`](#asnumpy-nansum)

**Examples**
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

Calculate the cross product of two vectors.

This function computes the vector cross product of `a` and `b`. It operates on vectors defined by the last axis (or a specified axis), supporting dimensions of 2 or 3.

**Arguments**
- `a` (ArrayLike): Components of the first vector(s).
- `b` (ArrayLike): Components of the second vector(s).
- `axis` (int, optional): Axis that defines the vector(s). By default, the last axis.

**Returns**
- `ndarray`: Vector cross product(s).

**See Also**
- [`numpy.cross`](https://numpy.org/doc/stable/reference/generated/numpy.cross.html)

**Examples**
```python
>>> import asnumpy as ap
>>> x = ap.array([1, 2, 3])
>>> y = ap.array([4, 5, 6])
>>> ap.cross(x, y)
array([-3,  6, -3])
```

## Extrema Finding

### asnumpy.maximum

```python
asnumpy.maximum(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the element-wise maximum of the inputs.

This function compares `x1` and `x2` and returns the larger value for each element.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The maximum of `x1` and `x2`, element-wise.

**See Also**
- [`numpy.maximum`](https://numpy.org/doc/stable/reference/generated/numpy.maximum.html)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.fmax`](#asnumpy-fmax)
- [`asnumpy.amax`](#asnumpy-amax)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.maximum(ap.array([2, 3]), ap.array([1, 5]))
array([2, 5])
```

### asnumpy.minimum

```python
asnumpy.minimum(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the element-wise minimum of the inputs.

This function compares `x1` and `x2` and returns the smaller value for each element.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The minimum of `x1` and `x2`, element-wise.

**See Also**
- [`numpy.minimum`](https://numpy.org/doc/stable/reference/generated/numpy.minimum.html)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.fmin`](#asnumpy-fmin)
- [`asnumpy.amin`](#asnumpy-amin)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.minimum(ap.array([2, 3]), ap.array([1, 5]))
array([1, 3])
```

### asnumpy.fmax

```python
asnumpy.fmax(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the element-wise maximum of the inputs, ignoring NaNs.

This function compares `x1` and `x2` and returns the larger value. If a NaN is encountered, the other value is returned.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The maximum of `x1` and `x2`, element-wise.

**See Also**
- [`numpy.fmax`](https://numpy.org/doc/stable/reference/generated/numpy.fmax.html)
- [`asnumpy.fmin`](#asnumpy-fmin)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.amax`](#asnumpy-amax)

**Examples**
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

Calculate the element-wise minimum of the inputs, ignoring NaNs.

This function compares `x1` and `x2` and returns the smaller value. If a NaN is encountered, the other value is returned.

**Arguments**
- `x1` (ArrayLike): The first input array.
- `x2` (ArrayLike): The second input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The minimum of `x1` and `x2`, element-wise.

**See Also**
- [`numpy.fmin`](https://numpy.org/doc/stable/reference/generated/numpy.fmin.html)
- [`asnumpy.fmax`](#asnumpy-fmax)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.amin`](#asnumpy-amin)

**Examples**
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

Calculate the maximum value of the array.

This function finds the largest value in the array `a`. If an `axis` is provided, the maximum is computed along that axis.

**Arguments**
- `a` (ArrayLike): Input data.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, flattened input is used.
- `keepdims` (bool, optional): If this is set to True, the axes which are reduced are left in the result as dimensions with size one.

**Returns**
- `ndarray or scalar`: Maximum of `a`.

**See Also**
- [`numpy.max`](https://numpy.org/doc/stable/reference/generated/numpy.max.html)
- [`asnumpy.min`](#asnumpy-min)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.amax`](#asnumpy-amax)

**Examples**
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

Calculate the maximum value of the array.

This function finds the largest value in the array `a`. It is an alias for `max`.

**Arguments**
- `a` (ArrayLike): Input data.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, flattened input is used.
- `keepdims` (bool, optional): If this is set to True, the axes which are reduced are left in the result as dimensions with size one.

**Returns**
- `ndarray or scalar`: Maximum of `a`.

**See Also**
- [`numpy.amax`](https://numpy.org/doc/stable/reference/generated/numpy.amax.html)
- [`asnumpy.amin`](#asnumpy-amin)
- [`asnumpy.maximum`](#asnumpy-maximum)
- [`asnumpy.max`](#asnumpy-max)

**Examples**
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

Calculate the maximum value of the array, ignoring NaNs.

This function finds the largest value in the array `a`, skipping any NaN values. If an `axis` is provided, the maximum is computed along that axis.

**Arguments**
- `a` (ArrayLike): Input data.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, flattened input is used.
- `keepdims` (bool, optional): If this is set to True, the axes which are reduced are left in the result as dimensions with size one.

**Returns**
- `ndarray or scalar`: Maximum of `a`.

**See Also**
- [`numpy.nanmax`](https://numpy.org/doc/stable/reference/generated/numpy.nanmax.html)
- [`asnumpy.max`](#asnumpy-max)
- [`asnumpy.amax`](#asnumpy-amax)

**Examples**
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

Calculate the minimum value of the array.

This function finds the smallest value in the array `a`. If an `axis` is provided, the minimum is computed along that axis.

**Arguments**
- `a` (ArrayLike): Input data.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, flattened input is used.
- `keepdims` (bool, optional): If this is set to True, the axes which are reduced are left in the result as dimensions with size one.

**Returns**
- `ndarray or scalar`: Minimum of `a`.

**See Also**
- [`numpy.min`](https://numpy.org/doc/stable/reference/generated/numpy.min.html)
- [`asnumpy.max`](#asnumpy-max)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.amin`](#asnumpy-amin)

**Examples**
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

Calculate the minimum value of the array.

This function finds the smallest value in the array `a`. It is an alias for `min`.

**Arguments**
- `a` (ArrayLike): Input data.
- `axis` (int or sequence of ints, optional): Axis or axes along which to operate. By default, flattened input is used.
- `keepdims` (bool, optional): If this is set to True, the axes which are reduced are left in the result as dimensions with size one.

**Returns**
- `ndarray or scalar`: Minimum of `a`.

**See Also**
- [`numpy.amin`](https://numpy.org/doc/stable/reference/generated/numpy.amin.html)
- [`asnumpy.amax`](#asnumpy-amax)
- [`asnumpy.minimum`](#asnumpy-minimum)
- [`asnumpy.min`](#asnumpy-min)

**Examples**
```python
>>> import asnumpy as ap
>>> a = ap.array([1, 2, 3])
>>> ap.amin(a)
1
```

## Floating Point Routines

### asnumpy.signbit

```python
asnumpy.signbit(x: ArrayLike) -> ndarray
```

Check if the sign bit is set for each element.

This function returns True where the sign bit is set (indicating a negative number) and False otherwise.

**Arguments**
- `x` (ArrayLike): The input array.

**Returns**
- `ndarray`: Boolean array with the same shape as `x`.

**See Also**
- [`numpy.signbit`](https://numpy.org/doc/stable/reference/generated/numpy.signbit.html)
- [`asnumpy.sign`](#asnumpy-sign)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.signbit(ap.array([-2.5, 3.5]))
array([ True, False])
```

### asnumpy.copysign

```python
asnumpy.copysign(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Change the sign of `x1` to that of `x2` element-wise.

This function returns a value with the magnitude of `x1` and the sign of `x2`.

**Arguments**
- `x1` (ArrayLike): Values to change the sign of.
- `x2` (ArrayLike): The sign of `x2` is copied to `x1`.

**Returns**
- `ndarray`: The values of `x1` with the sign of `x2`.

**See Also**
- [`numpy.copysign`](https://numpy.org/doc/stable/reference/generated/numpy.copysign.html)
- [`asnumpy.sign`](#asnumpy-sign)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.copysign(ap.array([1.5]), ap.array([-1]))
array([-1.5])
```

### asnumpy.ldexp

```python
asnumpy.ldexp(x1: ArrayLike, x2: ArrayLike) -> ndarray
```

Calculate `x1 * (2**x2)` element-wise.

This function computes the product of `x1` and 2 raised to the power of `x2`.

**Arguments**
- `x1` (ArrayLike): Array of multipliers.
- `x2` (ArrayLike): Array of exponents.

**Returns**
- `ndarray`: The result of `x1 * 2**x2`.

**See Also**
- [`numpy.ldexp`](https://numpy.org/doc/stable/reference/generated/numpy.ldexp.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.ldexp(ap.array([3]), ap.array([2]))
array([12.])
```

## Handling Complex Numbers

### asnumpy.real

```python
asnumpy.real(x: ArrayLike) -> ndarray
```

Return the real part of the complex argument.

This function extracts the real component of the elements in `x`.

**Arguments**
- `x` (ArrayLike): Input array.

**Returns**
- `ndarray`: The real part of the complex argument.

**See Also**
- [`numpy.real`](https://numpy.org/doc/stable/reference/generated/numpy.real.html)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.real(ap.array([1+5j]))
array([1.])
```

## Rational Routines

### asnumpy.gcd

```python
asnumpy.gcd(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the greatest common divisor of the inputs.

This function computes the greatest common divisor (GCD) of the absolute values of `x1` and `x2` element-wise.

**Arguments**
- `x1` (ArrayLike): First input array.
- `x2` (ArrayLike): Second input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The greatest common divisor of the absolute values of the inputs.

**See Also**
- [`numpy.gcd`](https://numpy.org/doc/stable/reference/generated/numpy.gcd.html)
- [`asnumpy.lcm`](#asnumpy-lcm)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.gcd(ap.array([10]), ap.array([25]))
array([5])
```

### asnumpy.lcm

```python
asnumpy.lcm(x1: ArrayLike, x2: ArrayLike, dtype: DTypeLike = None) -> ndarray
```

Calculate the least common multiple of the inputs.

This function computes the least common multiple (LCM) of the absolute values of `x1` and `x2` element-wise.

**Arguments**
- `x1` (ArrayLike): First input array.
- `x2` (ArrayLike): Second input array.
- `dtype` (DTypeLike, optional): The desired data type for the output array.

**Returns**
- `ndarray`: The least common multiple of the absolute values of the inputs.

**See Also**
- [`numpy.lcm`](https://numpy.org/doc/stable/reference/generated/numpy.lcm.html)
- [`asnumpy.gcd`](#asnumpy-gcd)

**Examples**
```python
>>> import asnumpy as ap
>>> ap.lcm(ap.array([4]), ap.array([6]))
array([12])
```
