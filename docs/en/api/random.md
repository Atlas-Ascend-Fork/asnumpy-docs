# Random Sampling Functions

::: info
This API section currently keeps a curated subset of representative APIs. Additional API documentation is temporarily hidden while the AsNumpy frontend and documentation system are still undergoing major restructuring, and it will be expanded after the frontend stabilizes. This document is for reference only.
:::

This module provides random number generation capabilities for various probability distributions. All samples are generated on the accelerator device.

## Continuous Distributions

### asnumpy.random.uniform

```python
asnumpy.random.uniform(low: float, high: float, size: ShapeLike) -> ndarray
```

Create random samples uniformly distributed over the interval [`low`, `high`).

Produces random numbers where each value within [`low`, `high`) has equal probability of being selected. The lower bound is inclusive while the upper bound is exclusive.

**Arguments**
- `low` (float): Starting point of the sampling range (inclusive).
- `high` (float): Ending point of the sampling range (exclusive).
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with uniformly distributed samples.

**See Also**
- [`numpy.random.uniform`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.uniform.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.uniform(low=1.0, high=5.0, size=4)
array([2.34, 4.12, 1.56, 3.89])  # random
```

### asnumpy.random.normal

```python
asnumpy.random.normal(loc: float, scale: float, size: ShapeLike) -> ndarray
```

Generate random numbers following the Gaussian distribution.

Produces samples centered at `loc` with spread controlled by `scale`, following the classic bell curve pattern.

**Arguments**
- `loc` (float): Center position (mean) of the distribution.
- `scale` (float): Width (standard deviation) of the distribution. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with normally distributed samples.

**See Also**
- [`numpy.random.normal`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.normal.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.normal(loc=5.0, scale=2.0, size=3)
array([4.21, 6.83, 3.45])  # random
```

### asnumpy.random.standard_normal

```python
asnumpy.random.standard_normal(size: ShapeLike) -> ndarray
```

Generate random numbers from the standard normal distribution N(0, 1).

A convenience function that produces samples from the canonical bell curve centered at zero with unit variance.

**Arguments**
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with standard normal samples.

**See Also**
- [`numpy.random.standard_normal`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.standard_normal.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.standard_normal(size=(2, 3))
array([[ 0.42, -1.15,  0.78],
       [-0.33,  1.02, -0.67]])  # random
```
<!--
### asnumpy.random.exponential

```python
asnumpy.random.exponential(scale: float, size: ShapeLike) -> ndarray
```

Produce random numbers following the exponential distribution pattern.

Produces samples suitable for modeling time between independent events. The `scale` parameter represents the average interval length.

**Arguments**
- `scale` (float): Average interval between events. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with exponentially distributed samples.

**See Also**
- [`numpy.random.exponential`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.exponential.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.exponential(scale=3.0, size=4)
array([2.15, 0.78, 5.42, 1.33])  # random
```

### asnumpy.random.lognormal

```python
asnumpy.random.lognormal(mean: float, sigma: float, size: ShapeLike) -> ndarray
```

Create samples where logarithms follow a normal distribution pattern.

Creates samples where the natural logarithm of values follows a normal distribution. Useful for modeling quantities that cannot be negative.

**Arguments**
- `mean` (float): Mean of the underlying normal distribution.
- `sigma` (float): Standard deviation of the underlying normal distribution. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with log-normally distributed samples.

**See Also**
- [`numpy.random.lognormal`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.lognormal.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.lognormal(mean=0.5, sigma=0.8, size=3)
array([2.14, 0.92, 3.56])  # random
```

### asnumpy.random.laplace

```python
asnumpy.random.laplace(loc: float, scale: float, size: ShapeLike) -> ndarray
```

Produce random numbers following the Laplace (double exponential) distribution pattern.

Produces samples from a distribution with two exponential tails meeting at a sharp peak. Often used in signal processing and robust statistics.

**Arguments**
- `loc` (float): Position of the distribution peak.
- `scale` (float): Controls the spread of the exponential decay. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with Laplace distributed samples.

**See Also**
- [`numpy.random.laplace`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.laplace.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.laplace(loc=2.0, scale=1.5, size=3)
array([1.82, 3.45, 0.67])  # random
```

### asnumpy.random.logistic

```python
asnumpy.random.logistic(loc: float, scale: float, size: ShapeLike) -> ndarray
```

Create samples following the logistic distribution curve.

Creates samples from a distribution resembling the normal curve but with heavier tails. Commonly applied in machine learning for logistic regression.

**Arguments**
- `loc` (float): Center of the distribution.
- `scale` (float): Controls the spread. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with logistic distributed samples.

**See Also**
- [`numpy.random.logistic`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.logistic.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.logistic(loc=0.0, scale=2.0, size=3)
array([1.23, -2.45, 0.89])  # random
```

### asnumpy.random.gumbel

```python
asnumpy.random.gumbel(loc: float, scale: float, size: ShapeLike) -> ndarray
```

Produce random numbers following the Gumbel (extreme value) distribution pattern.

Produces samples from an extreme value distribution. Frequently used to model the distribution of maximum values across sample sets.

**Arguments**
- `loc` (float): Mode (most frequent value) of the distribution.
- `scale` (float): Controls the spread. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with Gumbel distributed samples.

**See Also**
- [`numpy.random.gumbel`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.gumbel.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.gumbel(loc=1.0, scale=2.0, size=3)
array([2.34, -0.56, 1.89])  # random
```

### asnumpy.random.standard_cauchy

```python
asnumpy.random.standard_cauchy(size: ShapeLike) -> ndarray
```

Create random samples following the standard Cauchy distribution pattern.

Produces samples from a distribution with a peak at zero but undefined mean and variance due to its heavy tails.

**Arguments**
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with Cauchy distributed samples.

**See Also**
- [`numpy.random.standard_cauchy`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.standard_cauchy.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.standard_cauchy(size=4)
array([ 0.45, -2.31,  0.12,  5.67])  # random
```

### asnumpy.random.rayleigh

```python
asnumpy.random.rayleigh(scale: float, size: ShapeLike) -> ndarray
```

Produce random numbers following the Rayleigh distribution pattern.

Creates samples from a distribution commonly used in signal processing and communications theory to model magnitude of complex numbers.

**Arguments**
- `scale` (float): Controls the distribution shape. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with Rayleigh distributed samples.

**See Also**
- [`numpy.random.rayleigh`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.rayleigh.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.rayleigh(scale=1.5, size=(2, 2))
array([[1.23, 2.45],
       [0.89, 1.67]])  # random
```

### asnumpy.random.pareto

```python
asnumpy.random.pareto(a: float, size: ShapeLike) -> ndarray
```

Create samples following the Pareto II (Lomax) power-law distribution pattern.

Produces samples following a power-law pattern, useful for modeling wealth distribution, city sizes, and other "rich-get-richer" phenomena.

**Arguments**
- `a` (float): Shape exponent controlling the tail heaviness. Must be greater than zero.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with Pareto distributed samples.

**See Also**
- [`numpy.random.pareto`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.pareto.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.pareto(a=2.5, size=4)
array([0.34, 1.23, 0.56, 0.89])  # random
```

### asnumpy.random.weibull

```python
asnumpy.random.weibull(a: float, size: ShapeLike) -> ndarray
```

Produce random numbers following the Weibull distribution pattern.

Creates samples from a versatile distribution widely applied in reliability engineering and failure analysis.

**Arguments**
- `a` (float): Shape parameter determining the distribution form. Must be non-negative.
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with Weibull distributed samples.

**See Also**
- [`numpy.random.weibull`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.weibull.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.weibull(a=1.5, size=4)
array([0.78, 1.23, 0.45, 2.11])  # random
```

## Discrete Distributions

### asnumpy.random.binomial

```python
asnumpy.random.binomial(n: int, p: float, size: ShapeLike) -> ndarray
```

Create random samples following the binomial distribution pattern.

Produces samples counting successes across multiple independent trials, each with identical success probability.

**Arguments**
- `n` (int): Total number of trials to perform. Must be non-negative.
- `p` (float): Success probability for each individual trial. Must be in [0, 1].
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with integer counts from 0 to n.

**See Also**
- [`numpy.random.binomial`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.binomial.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.binomial(n=20, p=0.4, size=5)
array([7, 9, 6, 8, 5])  # random
```

### asnumpy.random.geometric

```python
asnumpy.random.geometric(p: float, size: ShapeLike) -> ndarray
```

Produce random numbers following the geometric distribution pattern.

Produces samples representing the trial number at which the first success occurs.

**Arguments**
- `p` (float): Success probability for each trial. Must be in (0, 1].
- `size` (ShapeLike, int or sequence of ints): Dimensions of the output array.

**Returns**
- `ndarray`: Array populated with positive integers (minimum value is 1).

**See Also**
- [`numpy.random.geometric`](https://numpy.org/doc/stable/reference/random/generated/numpy.random.geometric.html): NumPy equivalent.

**Examples**
```python
>>> import asnumpy as ap
>>> ap.random.geometric(p=0.25, size=5)
array([3, 1, 7, 2, 4])  # random
```
-->