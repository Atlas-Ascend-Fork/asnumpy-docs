# 测试工具

`asnumpy.testing` 模块提供了测试 asnumpy 代码的工具，包括断言函数、参数化测试装饰器和辅助函数。

## 数组断言

### asnumpy.testing.assert_array_equal

```python
asnumpy.testing.assert_array_equal(x, y, err_msg='', verbose=True, strides_check=False)
```

验证两个数组包含相同元素，发现差异时抛出错误。

**参数**
- `x` (array_like): 第一个待比较数组。
- `y` (array_like): 第二个待比较数组。
- `err_msg` (str, 可选): 失败时打印的错误信息。
- `verbose` (bool, 可选): 如果为 True，冲突值将附加到错误信息中。
- `strides_check` (bool, 可选): 如果为 True，同时验证数组步幅是否匹配。默认为 False。

**抛出**
- `AssertionError`: 如果数组不相等。

**参见**
- [`numpy.testing.assert_array_equal`](https://numpy.org/doc/stable/reference/generated/numpy.testing.assert_array_equal.html)

### asnumpy.testing.assert_allclose

```python
asnumpy.testing.assert_allclose(x, y, rtol=1e-7, atol=0, err_msg='', verbose=True, strides_check=False)
```

验证两个数组在指定容差内相等。

**参数**
- `x` (array_like): 第一个待比较数组。
- `y` (array_like): 第二个待比较数组。
- `rtol` (float, 可选): 相对容差。
- `atol` (float, 可选): 绝对容差。
- `err_msg` (str, 可选): 失败时打印的错误信息。
- `verbose` (bool, 可选): 如果为 True，冲突值将附加到错误信息中。
- `strides_check` (bool, 可选): 如果为 True，同时验证数组步幅是否匹配。默认为 False。

**参见**
- [`numpy.testing.assert_allclose`](https://numpy.org/doc/stable/reference/generated/numpy.testing.assert_allclose.html)

### asnumpy.testing.assert_array_list_equal

```python
asnumpy.testing.assert_array_list_equal(x_list, y_list, err_msg='', verbose=True)
```

比较两个数组列表是否相等。

**参数**
- `x_list` (list): 第一个数组列表。
- `y_list` (list): 第二个数组列表。
- `err_msg` (str, 可选): 错误信息前缀。
- `verbose` (bool, 可选): 如果为 True，显示冲突值。

## 异常和警告断言

### asnumpy.testing.assert_raises

```python
asnumpy.testing.assert_raises(exception_class, callable, *args, **kwargs)
```

除非 callable 抛出 exception_class 类异常，否则失败。

**参见**
- [`numpy.testing.assert_raises`](https://numpy.org/doc/stable/reference/generated/numpy.testing.assert_raises.html)

### asnumpy.testing.assert_raises_regex

```python
asnumpy.testing.assert_raises_regex(exception_class, expected_regexp, callable, *args, **kwargs)
```

除非 callable 抛出 exception_class 类异常且消息匹配 expected_regexp，否则失败。

### asnumpy.testing.assert_warns

```python
asnumpy.testing.assert_warns(warning_class, callable, *args, **kwargs)
```

除非 callable 抛出指定警告，否则失败。

### asnumpy.testing.assert_no_warnings

```python
asnumpy.testing.assert_no_warnings(callable, *args, **kwargs)
```

如果 callable 抛出任何警告则失败。

### asnumpy.testing.assert_equal

```python
asnumpy.testing.assert_equal(actual, desired, err_msg='', verbose=True)
```

如果两个对象不相等则抛出 AssertionError。

### asnumpy.testing.assert_string_equal

```python
asnumpy.testing.assert_string_equal(actual, desired)
```

测试两个字符串是否相等。

### asnumpy.testing.assert_warns_message

```python
asnumpy.testing.assert_warns_message(warning_class, message, callable, *args, **kwargs)
```

除非 callable 抛出带有指定消息的指定警告，否则失败。

## 数据类型装饰器

### asnumpy.testing.for_dtypes

```python
asnumpy.testing.for_dtypes(dtypes, name='dtype')
```

在特定数据类型集合上参数化测试函数的装饰器。

**参数**
- `dtypes` (list): 要测试的数据类型列表。
- `name` (str, 可选): 参数名称。默认为 'dtype'。

### asnumpy.testing.for_all_dtypes

```python
asnumpy.testing.for_all_dtypes(name='dtype', no_float16=True, no_bool=False, no_complex=False, no_uint32=True, no_uint64=True, exclude=None)
```

在所有可用数据类型上参数化测试函数的装饰器。默认排除 asnumpy NPU 算子不支持的 float16、uint32 和 uint64。

**参数**
- `name` (str, 可选): 参数名称。默认为 'dtype'。
- `no_float16` (bool, 可选): 是否排除 float16。默认为 True。
- `no_bool` (bool, 可选): 是否排除 bool。默认为 False。
- `no_complex` (bool, 可选): 是否排除复数类型。默认为 False。
- `no_uint32` (bool, 可选): 是否排除 uint32。默认为 True。
- `no_uint64` (bool, 可选): 是否排除 uint64。默认为 True。
- `exclude` (list, 可选): 额外要排除的数据类型。

### asnumpy.testing.for_float_dtypes

```python
asnumpy.testing.for_float_dtypes(name='dtype', no_float16=True, exclude=None)
```

在所有浮点数据类型上参数化测试函数的装饰器。默认排除 asnumpy 不支持的 float16。

**参数**
- `name` (str, 可选): 参数名称。默认为 'dtype'。
- `no_float16` (bool, 可选): 是否排除 float16。默认为 True。
- `exclude` (list, 可选): 额外要排除的数据类型。

### asnumpy.testing.for_int_dtypes

```python
asnumpy.testing.for_int_dtypes(name='dtype', exclude=None)
```

在所有整数数据类型上参数化测试函数的装饰器。

**参数**
- `name` (str, 可选): 参数名称。默认为 'dtype'。
- `exclude` (list, 可选): 测试中要排除的数据类型。

### asnumpy.testing.for_signed_dtypes

```python
asnumpy.testing.for_signed_dtypes(name='dtype')
```

在所有有符号整数数据类型上参数化测试函数的装饰器。

### asnumpy.testing.for_unsigned_dtypes

```python
asnumpy.testing.for_unsigned_dtypes(name='dtype', no_uint32=True, no_uint64=True)
```

在所有无符号整数数据类型上参数化测试函数的装饰器。默认排除 asnumpy NPU 算子不支持的 uint32 和 uint64。

**参数**
- `name` (str, 可选): 参数名称。默认为 'dtype'。
- `no_uint32` (bool, 可选): 是否排除 uint32。默认为 True。
- `no_uint64` (bool, 可选): 是否排除 uint64。默认为 True。

### asnumpy.testing.for_complex_dtypes

```python
asnumpy.testing.for_complex_dtypes(name='dtype', exclude=None)
```

在所有复数数据类型上参数化测试函数的装饰器。

**参数**
- `name` (str, 可选): 参数名称。默认为 'dtype'。
- `exclude` (list, 可选): 测试中要排除的数据类型。

## 顺序装饰器

### asnumpy.testing.for_orders

```python
asnumpy.testing.for_orders(orders, name='order')
```

在数组顺序上参数化测试函数的装饰器。

**参数**
- `orders` (list): 要测试的顺序列表（如 ['C', 'F']）。
- `name` (str, 可选): 参数名称。

### asnumpy.testing.for_cf_orders

```python
asnumpy.testing.for_cf_orders(name='order')
```

在 C 和 F 顺序上参数化测试函数的装饰器。

## NumPy-asnumpy 比较装饰器

### asnumpy.testing.numpy_asnumpy_array_equal

```python
asnumpy.testing.numpy_asnumpy_array_equal(err_msg='', verbose=True, name='xp', type_check=True, accept_error=False, sp_name=None, scipy_name=None, strides_check=False)
```

比较 NumPy 和 AsNumPy 输出是否完全相等的装饰器。

**参数**
- `err_msg` (str, 可选): 错误信息前缀。
- `verbose` (bool, 可选): 是否打印详细输出。默认为 True。
- `name` (str, 可选): 数组模块参数名称。默认为 'xp'。
- `type_check` (bool, 可选): 是否检查类型。默认为 True。
- `accept_error` (bool, 可选): 是否接受匹配的异常。默认为 False。
- `strides_check` (bool, 可选): 是否检查数组步幅。默认为 False。

### asnumpy.testing.numpy_asnumpy_allclose

```python
asnumpy.testing.numpy_asnumpy_allclose(rtol=1e-7, atol=0, err_msg='', verbose=True, name='xp', type_check=True, accept_error=False, sp_name=None, scipy_name=None, strides_check=False)
```

使用基于容差的比较来比较 NumPy 和 AsNumPy 输出的装饰器。

**参数**
- `rtol` (float, 可选): 相对容差。默认为 1e-7。
- `atol` (float, 可选): 绝对容差。默认为 0。
- `err_msg` (str, 可选): 错误信息前缀。
- `verbose` (bool, 可选): 是否打印详细输出。默认为 True。
- `name` (str, 可选): 数组模块参数名称。默认为 'xp'。
- `type_check` (bool, 可选): 是否检查类型。默认为 True。
- `accept_error` (bool, 可选): 是否接受匹配的异常。默认为 False。
- `strides_check` (bool, 可选): 是否检查数组步幅。默认为 False。

## Pytest 集成

### asnumpy.testing.pytest_is_available

```python
asnumpy.testing.pytest_is_available
```

指示 pytest 是否可用的布尔值。

### asnumpy.testing.parameterize

```python
asnumpy.testing.parameterize(*args, **kwargs)
```

参数化测试装饰器（pytest.mark.parametrize 包装器）。

### asnumpy.testing.fixture

```python
asnumpy.testing.fixture(*args, **kwargs)
```

pytest fixture 装饰器。

### asnumpy.testing.skip

```python
asnumpy.testing.skip(reason)
```

跳过测试并给出原因。

### asnumpy.testing.skipif

```python
asnumpy.testing.skipif(condition, reason)
```

如果条件为真则跳过测试。

### asnumpy.testing.xfail

```python
asnumpy.testing.xfail(reason='')
```

将测试标记为预期失败。

## 参数化工具

### asnumpy.testing.product

```python
asnumpy.testing.product(*args, **kwargs)
```

计算输入可迭代对象的笛卡尔积。

### asnumpy.testing.product_dict

```python
asnumpy.testing.product_dict(**kwargs)
```

计算字典值的笛卡尔积。

### asnumpy.testing.parameterize_test_class

```python
asnumpy.testing.parameterize_test_class(**kwargs)
```

参数化类中所有测试方法的装饰器。

## 测试类生成

### asnumpy.testing.make_decorator

```python
asnumpy.testing.make_decorator(func)
```

创建保留被装饰函数签名的装饰器。

### asnumpy.testing.generate_test_classes

```python
asnumpy.testing.generate_test_classes(base_class, names, params)
```

从基类生成具有不同参数的多个测试类。

### asnumpy.testing.TestBundle

```python
asnumpy.testing.TestBundle
```

用于组织测试的测试类捆绑包。

## 辅助函数

### asnumpy.testing.shaped_arange

```python
asnumpy.testing.shaped_arange(shape, dtype=numpy.float64, order='C', xp=None, start=0)
```

创建具有给定形状、填充从 `start` 开始的序列值的数组。

**参数**
- `shape` (int 或 tuple): 输出数组形状。
- `dtype` (数据类型, 可选): 输出数组数据类型。默认为 numpy.float64。
- `order` (str, 可选): 内存布局（'C' 或 'F'）。默认为 'C'。
- `xp` (模块, 可选): 使用的数组模块（numpy 或 asnumpy）。默认为 numpy。
- `start` (int, 可选): 序列的起始值。默认为 0。

### asnumpy.testing.shaped_random

```python
asnumpy.testing.shaped_random(shape, dtype=numpy.float64, scale=1.0, seed=None, xp=None)
```

创建具有给定形状、填充随机值的数组。

**参数**
- `shape` (int 或 tuple): 输出数组形状。
- `dtype` (数据类型, 可选): 输出数组数据类型。默认为 numpy.float64。
- `scale` (float, 可选): 随机值的缩放因子。默认为 1.0。
- `seed` (int, 可选): 可重复性的随机种子。
- `xp` (模块, 可选): 使用的数组模块（numpy 或 asnumpy）。默认为 numpy。

### asnumpy.testing.shaped_reverse_arange

```python
asnumpy.testing.shaped_reverse_arange(shape, dtype=numpy.float64, order='C', xp=None)
```

创建具有给定形状、填充降序序列值的数组。

**参数**
- `shape` (int 或 tuple): 输出数组形状。
- `dtype` (数据类型, 可选): 输出数组数据类型。默认为 numpy.float64。
- `order` (str, 可选): 内存布局（'C' 或 'F'）。默认为 'C'。
- `xp` (模块, 可选): 使用的数组模块（numpy 或 asnumpy）。默认为 numpy。

### asnumpy.testing.suppress_warnings

```python
asnumpy.testing.suppress_warnings(func)
```

抑制测试执行期间所有警告的装饰器。

**参数**
- `func` (callable): 要包装的测试函数。

### asnumpy.testing.with_seed

```python
asnumpy.testing.with_seed(seed)
```

设置固定随机种子以确保测试可重复性的装饰器。

**参数**
- `seed` (int): 随机种子值。

### asnumpy.testing.generate_test_data

```python
asnumpy.testing.generate_test_data(func)
```

根据函数签名自动生成测试数据的装饰器。

## 测试常量

### asnumpy.testing.TEST_SHAPES

用于测试的预定义形状。

### asnumpy.testing.TEST_DTYPES

用于测试的预定义数据类型。

### asnumpy.testing.TEST_ORDERS

用于测试的预定义数组顺序。
