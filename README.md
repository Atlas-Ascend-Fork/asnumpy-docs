# AsNumpy Documentation

This is the official documentation site for [AsNumpy](https://gitcode.com/cann/asnumpy), a lightweight Python library for scientific computing on Ascend NPU, fully compatible with NumPy API.
**Online documentation：**[https://asnumpy.gitcode.com/](https://asnumpy.gitcode.com/)

## About AsNumpy

AsNumpy accelerates NumPy workloads on Huawei Ascend 910B NPU through CANN operator bindings. It provides:

- **NumPy-compatible API** — Functions named identically for easy migration
- **Ascend NPU acceleration** — Up to 128× speedup on large arrays
- **Automatic resource management** — RAII-based memory handling
- **Seamless data transfer** — `from_numpy()` and `to_numpy()` for CPU↔NPU exchange

**Source Repository:** [https://gitcode.com/cann/asnumpy](https://gitcode.com/cann/asnumpy)

## Prerequisites

- [Node.js](https://nodejs.org/) 20.0 or higher

## Quick Start

```bash
# Install dependencies from package-lock.json
npm ci

# Start the development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview the production build
npm run docs:preview
```

> [!NOTE]
> `npm ci` is recommended for local development and CI environments to ensure consistent dependency versions based on `package-lock.json`. Use `npm install` only when adding or updating dependencies.
>
> Installing dependencies may report 3 known security advisories from the VitePress/Vite/esbuild dependency chain. These advisories primarily affect development server behavior and do not directly affect local builds or the deployed static documentation site. With the current dependency constraints of the stable VitePress release, they cannot currently be further resolved by `npm audit fix` and will be addressed when compatible stable updates become available.

## Project Structure

```
asnumpy-docs/
├── docs/
│   ├── .vitepress/              # VitePress configuration
│   │   ├── config.ts            # Main config (nav, sidebar, i18n)
│   │   └── theme/               # Custom theme
│   │       ├── index.ts         # Theme entry
│   │       └── custom.css       # Custom styles
│   ├── public/
│   │   └── images/              # Logo and images
│   │       └── asnumpy_logo.png
│   ├── en/                      # English documentation
│   │   ├── index.md             # Home page
│   │   ├── guide/               # User guides
│   │   │   ├── introduction.md
│   │   │   ├── quick-start.md
│   │   │   ├── installation.md
│   │   │   ├── basic-usage.md
│   │   │   ├── architecture.md
│   │   │   ├── benchmarks.md
│   │   │   └── faq.md
│   │   ├── api/                 # API reference
│   │   │   ├── index.md
│   │   │   ├── ndarray.md
│   │   │   ├── array.md
│   │   │   ├── math.md
│   │   │   ├── linalg.md
│   │   │   ├── logic.md
│   │   │   ├── random.md
│   │   │   ├── sorting.md
│   │   │   ├── statistics.md
│   │   │   ├── io.md
│   │   │   ├── cann.md
│   │   │   ├── nn.md
│   │   │   └── utils.md
│   │   └── developer/           # Developer documentation
│   │       └── developer_guide.md
│   ├── zh-CN/                   # Chinese documentation (same structure as en/)
│   │   ├── index.md
│   │   ├── guide/
│   │   ├── api/
│   │   └── developer/
│   └── index.md                 # Root redirect
├── package.json
├── package-lock.json
├── LICENSE
├── README.md
└── README.zh-CN.md
```

## Features

- 🚀 Built with [VitePress](https://vitepress.dev/) for fast performance
- 🌐 Bilingual support (English & Chinese)
- 📱 Responsive design
- 🔍 Local search functionality
- 🌙 Dark mode support

## Documentation Content

| Section | Description |
|---------|-------------|
| **Guide** | Introduction, Quick Start, Installation, Basic Usage, Architecture, Benchmarks, FAQ |
| **API Reference** | ndarray, Array Operations, Math, Linear Algebra, Logic, Random, Sorting, I/O, CANN Interface |
| **Developer** | Developer Guide for contributors |

## Contributing

Found a typo or want to improve the documentation?

1. Fork this repository
2. Make your changes in the `docs/` directory
3. Submit a pull request

For bug reports and feature requests, please use the [main repository issues](https://gitcode.com/cann/asnumpy/issues).

## License

Apache 2.0 License — see [LICENSE](https://gitcode.com/cann/asnumpy/blob/master/LICENSE) for details.

## Links

- [AsNumpy Repository](https://gitcode.com/cann/asnumpy)
- [OpenBOAT Operator Library](https://gitcode.com/HIT1920/OpenBOAT)
- [Huawei Ascend](https://www.hiascend.com/)
