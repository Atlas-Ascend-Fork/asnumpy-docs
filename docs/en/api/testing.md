# Testing Utilities

[[toc]]

The `asnumpy.testing` module provides utilities for testing asnumpy code, including assertion functions, decorators for parameterized testing, and helper functions.

## Array Assertions

### asnumpy.testing.assert_array_equal

```python
asnumpy.testing.assert_array_equal(x, y, err_msg='', verbose=True, strides_check=False)
```

Verifies that two arrays contain identical elements, raising an error when discrepancies are found.

**Arguments**
- `x` (array_like): The first array to compare.
- `y` (array_like): The second array to compare against.
- `err_msg` (str, optional): The error message to be printed in case of failure.
- `verbose` (bool, optional): If True, the conflicting values are appended to the error message.
- `strides_check` (bool, optional): If True, also verifies that array strides match. Default is False.

**Raises**
- `AssertionError`: If the arrays are not equal.

**See Also**
- [`numpy.testing.assert_array_equal`](https://numpy.org/doc/stable/reference/generated/numpy.testing.assert_array_equal.html)

### asnumpy.testing.assert_allclose

```python
asnumpy.testing.assert_allclose(x, y, rtol=1e-7, atol=0, err_msg='', verbose=True, strides_check=False)
```

Verifies that two arrays are equal within specified tolerances.

**Arguments**
- `x` (array_like): The first array to compare.
- `y` (array_like): The second array to compare against.
- `rtol` (float, optional): Relative tolerance.
- `atol` (float, optional): Absolute tolerance.
- `err_msg` (str, optional): The error message to be printed in case of failure.
- `verbose` (bool, optional): If True, the conflicting values are appended to the error message.
- `strides_check` (bool, optional): If True, also verifies that array strides match. Default is False.

**See Also**
- [`numpy.testing.assert_allclose`](https://numpy.org/doc/stable/reference/generated/numpy.testing.assert_allclose.html)

### asnumpy.testing.assert_array_list_equal

```python
asnumpy.testing.assert_array_list_equal(x_list, y_list, err_msg='', verbose=True)
```

Compare two lists of arrays for equality.

**Arguments**
- `x_list` (list): First list of arrays.
- `y_list` (list): Second list of arrays.
- `err_msg` (str, optional): Error message prefix.
- `verbose` (bool, optional): If True, conflicting values are shown.

## Exception and Warning Assertions

### asnumpy.testing.assert_raises

```python
asnumpy.testing.assert_raises(exception_class, callable, *args, **kwargs)
```

Fail unless an exception of class exception_class is thrown by callable.

**See Also**
- [`numpy.testing.assert_raises`](https://numpy.org/doc/stable/reference/generated/numpy.testing.assert_raises.html)

### asnumpy.testing.assert_raises_regex

```python
asnumpy.testing.assert_raises_regex(exception_class, expected_regexp, callable, *args, **kwargs)
```

Fail unless an exception of class exception_class is thrown and message matches expected_regexp.

### asnumpy.testing.assert_warns

```python
asnumpy.testing.assert_warns(warning_class, callable, *args, **kwargs)
```

Fail unless the callable throws the specified warning.

### asnumpy.testing.assert_no_warnings

```python
asnumpy.testing.assert_no_warnings(callable, *args, **kwargs)
```

Fail if any warnings are raised by the callable.

### asnumpy.testing.assert_equal

```python
asnumpy.testing.assert_equal(actual, desired, err_msg='', verbose=True)
```

Raises an AssertionError if two objects are not equal.

### asnumpy.testing.assert_string_equal

```python
asnumpy.testing.assert_string_equal(actual, desired)
```

Test if two strings are equal.

### asnumpy.testing.assert_warns_message

```python
asnumpy.testing.assert_warns_message(warning_class, message, callable, *args, **kwargs)
```

Fail unless the callable throws the specified warning with the specified message.

## Dtype Decorators

### asnumpy.testing.for_dtypes

```python
asnumpy.testing.for_dtypes(dtypes, name='dtype')
```

Decorator that parameterizes a test function over a specific set of dtypes.

**Arguments**
- `dtypes` (list): List of dtypes to test.
- `name` (str, optional): Parameter name. Default is 'dtype'.

### asnumpy.testing.for_all_dtypes

```python
asnumpy.testing.for_all_dtypes(name='dtype', no_float16=True, no_bool=False, no_complex=False, no_uint32=True, no_uint64=True, exclude=None)
```

Decorator that parameterizes a test function over all available dtypes. By default, excludes float16, uint32, and uint64 which are not supported by asnumpy NPU operators.

**Arguments**
- `name` (str, optional): Parameter name. Default is 'dtype'.
- `no_float16` (bool, optional): Whether to exclude float16. Default is True.
- `no_bool` (bool, optional): Whether to exclude bool. Default is False.
- `no_complex` (bool, optional): Whether to exclude complex types. Default is False.
- `no_uint32` (bool, optional): Whether to exclude uint32. Default is True.
- `no_uint64` (bool, optional): Whether to exclude uint64. Default is True.
- `exclude` (list, optional): Additional dtypes to exclude.

### asnumpy.testing.for_float_dtypes

```python
asnumpy.testing.for_float_dtypes(name='dtype', no_float16=True, exclude=None)
```

Decorator that parameterizes a test function over all floating-point dtypes. By default, excludes float16 which is not supported by asnumpy.

**Arguments**
- `name` (str, optional): Parameter name. Default is 'dtype'.
- `no_float16` (bool, optional): Whether to exclude float16. Default is True.
- `exclude` (list, optional): Additional dtypes to exclude.

### asnumpy.testing.for_int_dtypes

```python
asnumpy.testing.for_int_dtypes(name='dtype', exclude=None)
```

Decorator that parameterizes a test function over all integer dtypes.

**Arguments**
- `name` (str, optional): Parameter name. Default is 'dtype'.
- `exclude` (list, optional): Dtypes to exclude from testing.

### asnumpy.testing.for_signed_dtypes

```python
asnumpy.testing.for_signed_dtypes(name='dtype')
```

Decorator that parameterizes a test function over all signed integer dtypes.

### asnumpy.testing.for_unsigned_dtypes

```python
asnumpy.testing.for_unsigned_dtypes(name='dtype', no_uint32=True, no_uint64=True)
```

Decorator that parameterizes a test function over all unsigned integer dtypes. By default, excludes uint32 and uint64 which are not supported by asnumpy NPU operators.

**Arguments**
- `name` (str, optional): Parameter name. Default is 'dtype'.
- `no_uint32` (bool, optional): Whether to exclude uint32. Default is True.
- `no_uint64` (bool, optional): Whether to exclude uint64. Default is True.

### asnumpy.testing.for_complex_dtypes

```python
asnumpy.testing.for_complex_dtypes(name='dtype', exclude=None)
```

Decorator that parameterizes a test function over all complex dtypes.

**Arguments**
- `name` (str, optional): Parameter name. Default is 'dtype'.
- `exclude` (list, optional): Dtypes to exclude from testing.

## Order Decorators

### asnumpy.testing.for_orders

```python
asnumpy.testing.for_orders(orders, name='order')
```

Decorator that parameterizes a test function over array orders.

**Arguments**
- `orders` (list): List of orders to test (e.g., ['C', 'F']).
- `name` (str, optional): Parameter name.

### asnumpy.testing.for_cf_orders

```python
asnumpy.testing.for_cf_orders(name='order')
```

Decorator that parameterizes a test function over C and F orders.

## NumPy-asnumpy Comparison Decorators

### asnumpy.testing.numpy_asnumpy_array_equal

```python
asnumpy.testing.numpy_asnumpy_array_equal(err_msg='', verbose=True, name='xp', type_check=True, accept_error=False, sp_name=None, scipy_name=None, strides_check=False)
```

Decorator that compares NumPy and AsNumPy outputs for exact equality.

**Arguments**
- `err_msg` (str, optional): Error message prefix.
- `verbose` (bool, optional): Whether to print verbose output. Default is True.
- `name` (str, optional): Name of the array module parameter. Default is 'xp'.
- `type_check` (bool, optional): Whether to check types. Default is True.
- `accept_error` (bool, optional): Whether to accept matching exceptions. Default is False.
- `strides_check` (bool, optional): Whether to check array strides. Default is False.

### asnumpy.testing.numpy_asnumpy_allclose

```python
asnumpy.testing.numpy_asnumpy_allclose(rtol=1e-7, atol=0, err_msg='', verbose=True, name='xp', type_check=True, accept_error=False, sp_name=None, scipy_name=None, strides_check=False)
```

Decorator that compares NumPy and AsNumPy outputs using tolerance-based comparison.

**Arguments**
- `rtol` (float, optional): Relative tolerance. Default is 1e-7.
- `atol` (float, optional): Absolute tolerance. Default is 0.
- `err_msg` (str, optional): Error message prefix.
- `verbose` (bool, optional): Whether to print verbose output. Default is True.
- `name` (str, optional): Name of the array module parameter. Default is 'xp'.
- `type_check` (bool, optional): Whether to check types. Default is True.
- `accept_error` (bool, optional): Whether to accept matching exceptions. Default is False.
- `strides_check` (bool, optional): Whether to check array strides. Default is False.

## Pytest Integration

### asnumpy.testing.pytest_is_available

```python
asnumpy.testing.pytest_is_available
```

Boolean indicating whether pytest is available.

### asnumpy.testing.parameterize

```python
asnumpy.testing.parameterize(*args, **kwargs)
```

Decorator for parameterized testing (pytest.mark.parametrize wrapper).

### asnumpy.testing.fixture

```python
asnumpy.testing.fixture(*args, **kwargs)
```

Decorator for pytest fixtures.

### asnumpy.testing.skip

```python
asnumpy.testing.skip(reason)
```

Skip a test with the given reason.

### asnumpy.testing.skipif

```python
asnumpy.testing.skipif(condition, reason)
```

Skip a test if the condition is true.

### asnumpy.testing.xfail

```python
asnumpy.testing.xfail(reason='')
```

Mark a test as expected to fail.

## Parameterization Utilities

### asnumpy.testing.product

```python
asnumpy.testing.product(*args, **kwargs)
```

Compute the cartesian product of input iterables.

### asnumpy.testing.product_dict

```python
asnumpy.testing.product_dict(**kwargs)
```

Compute the cartesian product of dictionary values.

### asnumpy.testing.parameterize_test_class

```python
asnumpy.testing.parameterize_test_class(**kwargs)
```

Decorator to parameterize all test methods in a class.

## Test Class Generation

### asnumpy.testing.make_decorator

```python
asnumpy.testing.make_decorator(func)
```

Create a decorator that preserves the signature of the decorated function.

### asnumpy.testing.generate_test_classes

```python
asnumpy.testing.generate_test_classes(base_class, names, params)
```

Generate multiple test classes from a base class with different parameters.

### asnumpy.testing.TestBundle

```python
asnumpy.testing.TestBundle
```

A bundle of test classes for organized testing.

## Helper Functions

### asnumpy.testing.shaped_arange

```python
asnumpy.testing.shaped_arange(shape, dtype=numpy.float64, order='C', xp=None, start=0)
```

Create an array with the given shape filled with sequential values starting from `start`.

**Arguments**
- `shape` (int or tuple): Output array shape.
- `dtype` (data-type, optional): Output array dtype. Default is numpy.float64.
- `order` (str, optional): Memory layout ('C' or 'F'). Default is 'C'.
- `xp` (module, optional): Array module to use (numpy or asnumpy). Default is numpy.
- `start` (int, optional): Starting value for the sequence. Default is 0.

### asnumpy.testing.shaped_random

```python
asnumpy.testing.shaped_random(shape, dtype=numpy.float64, scale=1.0, seed=None, xp=None)
```

Create an array with the given shape filled with random values.

**Arguments**
- `shape` (int or tuple): Output array shape.
- `dtype` (data-type, optional): Output array dtype. Default is numpy.float64.
- `scale` (float, optional): Scaling factor for random values. Default is 1.0.
- `seed` (int, optional): Random seed for reproducibility.
- `xp` (module, optional): Array module to use (numpy or asnumpy). Default is numpy.

### asnumpy.testing.shaped_reverse_arange

```python
asnumpy.testing.shaped_reverse_arange(shape, dtype=numpy.float64, order='C', xp=None)
```

Create an array with the given shape filled with descending sequential values.

**Arguments**
- `shape` (int or tuple): Output array shape.
- `dtype` (data-type, optional): Output array dtype. Default is numpy.float64.
- `order` (str, optional): Memory layout ('C' or 'F'). Default is 'C'.
- `xp` (module, optional): Array module to use (numpy or asnumpy). Default is numpy.

### asnumpy.testing.suppress_warnings

```python
asnumpy.testing.suppress_warnings(func)
```

Decorator that suppresses all warnings during test execution.

**Arguments**
- `func` (callable): The test function to wrap.

### asnumpy.testing.with_seed

```python
asnumpy.testing.with_seed(seed)
```

Decorator that sets a fixed random seed for test reproducibility.

**Arguments**
- `seed` (int): Random seed value.

### asnumpy.testing.generate_test_data

```python
asnumpy.testing.generate_test_data(func)
```

Decorator that automatically generates test data based on function signature.

## Test Constants

### asnumpy.testing.TEST_SHAPES

Predefined shapes for testing.

### asnumpy.testing.TEST_DTYPES

Predefined dtypes for testing.

### asnumpy.testing.TEST_ORDERS

Predefined array orders for testing.
