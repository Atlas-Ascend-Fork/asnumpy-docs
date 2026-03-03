# Overview

AsNumpy is a library designed to provide a scientific computing interface on Ascend NPU that is highly compatible with NumPy.

## Key Features

* **NumPy Compatibility**: Maintain API consistency with NumPy as much as possible to reduce migration costs.
* **NPU Acceleration**: Leverage the powerful computing power of Ascend NPU to accelerate scientific computing.
* **Rich Functionality**: Cover common modules such as mathematical operations, logic functions, random sampling, etc.

## API Completion Status

AsNumpy has currently implemented APIs for multiple core functional modules, covering common scientific computing functions such as mathematical operations, logic functions, and random sampling. The API implementation of each module is continuously being improved.

### Implemented API Modules

#### Math Module

The math module is one of the core modules of AsNumpy, providing rich mathematical computing functions:

* **Arithmetic Operations**: Basic arithmetic operators
* **Exponents and Logarithms**: Exponential and logarithmic functions
* **Trigonometric Functions**: sin, cos, tan and other trigonometric functions
* **Hyperbolic Functions**: sinh, cosh, tanh and other hyperbolic functions
* **Floating Point Routines**: Floating-point processing functions
* **Rounding**: Various rounding functions
* **Sums, Products, Differences**: Aggregation operations
* **Handling Complex Numbers**: Complex number operations
* **Rational Routines**: Rational number related functions
* **Other Special Functions**: Sinc and other special mathematical functions
* **Miscellaneous**: Clip, Maximum, Minimum, Square and other utility functions

#### Random Module

The random module provides random number generation functions for various probability distributions:

* **Distributions**: Various probability distribution functions

#### Logic Module

The logic module provides functions for array comparison, logical operations, etc.:

* **Logic Functions**: Logical operations and comparison functions

## Development Progress

### Overall Progress

* Currently, AsNumpy has planned approximately **260 interfaces**
* Implemented and merged: **113**
* Pending merge: **10**
* Internal utils: **11**

### Module Progress

* **Math Module**: The main progress of the current project, most common mathematical functions have been implemented, and it is currently the module with the highest completion rate
* **Random Module**: Progress is relatively slow due to complexity, and some distribution functions are still under development
* **Logic Module**: Basic logical operation functions have been implemented
* **Linear Algebra Module**: Being merged gradually after organization

## Notes

* Some APIs may have special restrictions on the `shape` parameter. Please refer to the detailed documentation of each API for details.
* Some API functions are not fully supported yet and will be marked in the documentation.
* API documentation is continuously being updated.
