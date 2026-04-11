# AsNumpy 文档

这是 [AsNumpy](https://gitcode.com/cann/asnumpy) 的官方文档站点。AsNumpy 是一个轻量级的 Python 科学计算库，专为昇腾 NPU 设计，完全兼容 NumPy API。

## 关于 AsNumpy

AsNumpy 通过 CANN 算子绑定在华为昇腾 910B NPU 上加速 NumPy 工作负载。主要特性：

- **兼容 NumPy 的 API** — 函数名称相同，迁移简单
- **昇腾 NPU 加速** — 大数组最高可达 128 倍加速
- **自动资源管理** — 基于 RAII 的内存管理
- **无缝数据传输** — `from_numpy()` 和 `to_numpy()` 实现 CPU↔NPU 交换

**源代码仓库：** [https://gitcode.com/cann/asnumpy](https://gitcode.com/cann/asnumpy)

## 前置条件

- [Node.js](https://nodejs.org/) 20.0 或更高版本

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览生产版本
npm run docs:preview
```

## 项目结构

```
asnumpy-docs/
├── docs/
│   ├── .vitepress/              # VitePress 配置
│   │   ├── config.ts            # 主配置（导航、侧边栏、国际化）
│   │   └── theme/               # 自定义主题
│   │       ├── index.ts         # 主题入口
│   │       └── custom.css       # 自定义样式
│   ├── public/
│   │   └── images/              # Logo 和图片
│   │       └── asnumpy_logo.png
│   ├── en/                      # 英文文档
│   │   ├── index.md             # 首页
│   │   ├── guide/               # 用户指南
│   │   │   ├── introduction.md  # 简介
│   │   │   ├── quick-start.md   # 快速开始
│   │   │   ├── installation.md  # 安装指南
│   │   │   ├── basic-usage.md   # 基本用法
│   │   │   ├── architecture.md  # 架构设计
│   │   │   ├── benchmarks.md    # 性能测试
│   │   │   └── faq.md           # 常见问题
│   │   ├── api/                 # API 参考
│   │   │   ├── index.md         # API 概览
│   │   │   ├── ndarray.md       # ndarray 对象
│   │   │   ├── array.md         # 数组操作
│   │   │   ├── math.md          # 数学函数
│   │   │   ├── linalg.md        # 线性代数
│   │   │   ├── logic.md         # 逻辑函数
│   │   │   ├── random.md        # 随机抽样
│   │   │   ├── sorting.md       # 排序函数
│   │   │   ├── statistics.md    # 统计函数
│   │   │   ├── io.md            # 输入输出
│   │   │   ├── cann.md          # CANN 接口
│   │   │   ├── nn.md            # 神经网络
│   │   │   └── utils.md         # 工具函数
│   │   └── developer/           # 开发者文档
│   │       └── developer_guide.md
│   ├── zh-CN/                   # 中文文档（结构同 en/）
│   │   ├── index.md
│   │   ├── guide/
│   │   ├── api/
│   │   └── developer/
│   └── index.md                 # 根目录重定向
├── package.json
├── LICENSE
├── README.md
└── README.zh-CN.md
```

## 特性

- 🚀 基于 [VitePress](https://vitepress.dev/) 构建，性能优异
- 🌐 中英文双语支持
- 📱 响应式设计
- 🔍 本地搜索功能
- 🌙 深色模式支持

## 文档内容

| 版块 | 描述 |
|------|------|
| **指南** | 简介、快速开始、安装指南、基本用法、架构设计、性能测试、常见问题 |
| **API 参考** | ndarray、数组操作、数学函数、线性代数、逻辑函数、随机抽样、排序函数、输入输出、CANN 接口 |
| **开发** | 贡献者开发指南 |

## 贡献

发现了错别字或想要改进文档？

1. Fork 本仓库
2. 在 `docs/` 目录中进行修改
3. 提交 Pull Request

如需报告 Bug 或提出功能请求，请使用[主仓库 Issues](https://gitcode.com/cann/asnumpy/issues)。

## 许可证

Apache 2.0 许可证 — 详见 [LICENSE](https://gitcode.com/cann/asnumpy/blob/master/LICENSE)。

## 链接

- [AsNumpy 仓库](https://gitcode.com/cann/asnumpy)
- [OpenBOAT 算子库](https://gitcode.com/HIT1920/OpenBOAT)
- [华为昇腾](https://www.hiascend.com/)
