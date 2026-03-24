# 随机抽样函数

本模块提供各种概率分布的随机数生成功能。所有样本在加速器设备上生成。

## 连续分布

### asnumpy.random.uniform

```python
asnumpy.random.uniform(low: float, high: float, size: ShapeLike) -> ndarray
```

在区间 [`low`, `high`) 上创建均匀分布的随机样本。

生成 [`low`, `high`) 区间内的随机数，其中每个值被选中的概率相等。下界包含，上界不包含。

**参数**
- `low` (float): 采样范围的起始点（包含）。
- `high` (float): 采样范围的结束点（不包含）。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充均匀分布样本的数组。

**参见**
- [`numpy.random.uniform`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.uniform.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.uniform(low=1.0, high=5.0, size=4)
array([2.34, 4.12, 1.56, 3.89])  # 随机
```

### asnumpy.random.normal

```python
asnumpy.random.normal(loc: float, scale: float, size: ShapeLike) -> ndarray
```

生成服从高斯分布的随机数。

生成以 `loc` 为中心、由 `scale` 控制分散程度的样本，遵循经典的钟形曲线模式。

**参数**
- `loc` (float): 分布的中心位置（均值）。
- `scale` (float): 分布的宽度（标准差）。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充正态分布样本的数组。

**参见**
- [`numpy.random.normal`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.normal.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.normal(loc=5.0, scale=2.0, size=3)
array([4.21, 6.83, 3.45])  # 随机
```

### asnumpy.random.standard_normal

```python
asnumpy.random.standard_normal(size: ShapeLike) -> ndarray
```

生成服从标准正态分布 N(0, 1) 的随机数。

生成来自以零为中心、方差为 1 的标准正态分布的样本。

**参数**
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充标准正态样本的数组。

**参见**
- [`numpy.random.standard_normal`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.standard_normal.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.standard_normal(size=(2, 3))
array([[ 0.42, -1.15,  0.78],
       [-0.33,  1.02, -0.67]])  # 随机
```

### asnumpy.random.exponential

```python
asnumpy.random.exponential(scale: float, size: ShapeLike) -> ndarray
```

生成服从指数分布的随机数。

生成适合建模独立事件之间时间的样本。`scale` 参数表示平均间隔长度。

**参数**
- `scale` (float): 事件之间的平均间隔。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充指数分布样本的数组。

**参见**
- [`numpy.random.exponential`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.exponential.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.exponential(scale=3.0, size=4)
array([2.15, 0.78, 5.42, 1.33])  # 随机
```

### asnumpy.random.lognormal

```python
asnumpy.random.lognormal(mean: float, sigma: float, size: ShapeLike) -> ndarray
```

创建对数服从正态分布模式的样本。

创建自然对数值服从正态分布的样本。适用于建模不能为负的量。

**参数**
- `mean` (float): 底层正态分布的均值。
- `sigma` (float): 底层正态分布的标准差。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充对数正态分布样本的数组。

**参见**
- [`numpy.random.lognormal`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.lognormal.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.lognormal(mean=0.5, sigma=0.8, size=3)
array([2.14, 0.92, 3.56])  # 随机
```

### asnumpy.random.laplace

```python
asnumpy.random.laplace(loc: float, scale: float, size: ShapeLike) -> ndarray
```

生成服从拉普拉斯（双指数）分布的随机数。

生成来自两条指数尾部在尖峰处相遇的分布的样本。常用于信号处理和稳健统计。

**参数**
- `loc` (float): 分布峰值的位置。
- `scale` (float): 控制指数衰减的分散程度。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充拉普拉斯分布样本的数组。

**参见**
- [`numpy.random.laplace`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.laplace.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.laplace(loc=2.0, scale=1.5, size=3)
array([1.82, 3.45, 0.67])  # 随机
```

### asnumpy.random.logistic

```python
asnumpy.random.logistic(loc: float, scale: float, size: ShapeLike) -> ndarray
```

创建服从逻辑分布曲线的样本。

创建来自类似正态曲线但尾部更重的分布的样本。常用于机器学习中的逻辑回归。

**参数**
- `loc` (float): 分布的中心。
- `scale` (float): 控制分散程度。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充逻辑分布样本的数组。

**参见**
- [`numpy.random.logistic`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.logistic.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.logistic(loc=0.0, scale=2.0, size=3)
array([1.23, -2.45, 0.89])  # 随机
```

### asnumpy.random.gumbel

```python
asnumpy.random.gumbel(loc: float, scale: float, size: ShapeLike) -> ndarray
```

生成服从 Gumbel（极值）分布的随机数。

生成来自极值分布的样本。常用于建模样本集中最大值的分布。

**参数**
- `loc` (float): 分布的众数（最频繁值）。
- `scale` (float): 控制分散程度。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充 Gumbel 分布样本的数组。

**参见**
- [`numpy.random.gumbel`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.gumbel.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.gumbel(loc=1.0, scale=2.0, size=3)
array([2.34, -0.56, 1.89])  # 随机
```

### asnumpy.random.standard_cauchy

```python
asnumpy.random.standard_cauchy(size: ShapeLike) -> ndarray
```

创建服从标准柯西分布的随机样本。

生成来自峰值在零但由于重尾导致均值和方差未定义的分布的样本。

**参数**
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充柯西分布样本的数组。

**参见**
- [`numpy.random.standard_cauchy`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.standard_cauchy.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.standard_cauchy(size=4)
array([ 0.45, -2.31,  0.12,  5.67])  # 随机
```

### asnumpy.random.rayleigh

```python
asnumpy.random.rayleigh(scale: float, size: ShapeLike) -> ndarray
```

生成服从瑞利分布的随机数。

创建来自常用于信号处理和通信理论中建模复数幅度的分布的样本。

**参数**
- `scale` (float): 控制分布形状。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充瑞利分布样本的数组。

**参见**
- [`numpy.random.rayleigh`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.rayleigh.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.rayleigh(scale=1.5, size=(2, 2))
array([[1.23, 2.45],
       [0.89, 1.67]])  # 随机
```

### asnumpy.random.pareto

```python
asnumpy.random.pareto(a: float, size: ShapeLike) -> ndarray
```

创建服从 Pareto II (Lomax) 幂律分布的样本。

生成遵循幂律模式的样本，适用于建模财富分布、城市规模和其他"富者愈富"现象。

**参数**
- `a` (float): 控制尾部重度的形状指数。必须大于零。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充 Pareto 分布样本的数组。

**参见**
- [`numpy.random.pareto`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.pareto.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.pareto(a=2.5, size=4)
array([0.34, 1.23, 0.56, 0.89])  # 随机
```

### asnumpy.random.weibull

```python
asnumpy.random.weibull(a: float, size: ShapeLike) -> ndarray
```

生成服从威布尔分布的随机数。

创建来自广泛应用于可靠性工程和失效分析的多功能分布的样本。

**参数**
- `a` (float): 决定分布形式的形状参数。必须非负。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充威布尔分布样本的数组。

**参见**
- [`numpy.random.weibull`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.weibull.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.weibull(a=1.5, size=4)
array([0.78, 1.23, 0.45, 2.11])  # 随机
```

## 离散分布

### asnumpy.random.binomial

```python
asnumpy.random.binomial(n: int, p: float, size: ShapeLike) -> ndarray
```

创建服从二项分布的随机样本。

生成计算多次独立试验中成功次数的样本，每次试验具有相同的成功概率。

**参数**
- `n` (int): 要执行的总试验次数。必须非负。
- `p` (float): 每次单独试验的成功概率。必须在 [0, 1] 范围内。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充从 0 到 n 的整数计数的数组。

**参见**
- [`numpy.random.binomial`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.binomial.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.binomial(n=20, p=0.4, size=5)
array([7, 9, 6, 8, 5])  # 随机
```

### asnumpy.random.geometric

```python
asnumpy.random.geometric(p: float, size: ShapeLike) -> ndarray
```

生成服从几何分布的随机数。

生成表示首次成功发生的试验次数的样本。

**参数**
- `p` (float): 每次试验的成功概率。必须在 (0, 1] 范围内。
- `size` (ShapeLike, int 或 int 序列): 输出数组的维度。

**返回值**
- `ndarray`: 填充正整数的数组（最小值为 1）。

**参见**
- [`numpy.random.geometric`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.geometric.html): NumPy 等效函数。

**示例**
```python
>>> import asnumpy as ap
>>> ap.random.geometric(p=0.25, size=5)
array([3, 1, 7, 2, 4])  # 随机
```
