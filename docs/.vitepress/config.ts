import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

const githubRepo = 'cann/asnumpy'
const docsRepo = 'cann/asnumpy-docs'
const siteTitle = 'AsNumpy'
const siteDescription = 'High-performance NumPy-compatible library accelerated by Ascend NPU'

// English sidebar configuration
const enSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Introduction', link: '/en/guide/introduction' },
      { text: 'Quick Start', link: '/en/guide/quick-start' },
      { text: 'Installation', link: '/en/guide/installation' },
      { text: 'Basic Usage', link: '/en/guide/basic-usage' },
      { text: 'Architecture', link: '/en/guide/architecture' },
      { text: 'Benchmarks', link: '/en/guide/benchmarks' },
      { text: 'FAQ', link: '/en/guide/faq' },
    ],
  },
  {
    text: 'Developer',
    items: [
      { text: 'Developer Guide', link: '/en/developer/developer_guide' },
    ],
  },
  {
    text: 'API Reference',
    items: [
      { text: 'Overview', link: '/en/api/' },
      { text: 'ndarray', link: '/en/api/ndarray' },
      { text: 'Array Manipulation', link: '/en/api/array' },
      { text: 'Mathematical Functions', link: '/en/api/math' },
      { text: 'Linear Algebra', link: '/en/api/linalg' },
      { text: 'Statistics', link: '/en/api/statistics' },
      { text: 'Logic Functions', link: '/en/api/logic' },
      { text: 'Random Sampling', link: '/en/api/random' },
      { text: 'Sorting Functions', link: '/en/api/sorting' },
      { text: 'Neural Network', link: '/en/api/nn' },
      { text: 'I/O Operations', link: '/en/api/io' },
      { text: 'CANN Interfaces', link: '/en/api/cann' },
      { text: 'Utilities', link: '/en/api/utils' },
    ],
  },
]

// Chinese sidebar configuration
const zhSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '入门指南',
    items: [
      { text: '简介', link: '/zh-CN/guide/introduction' },
      { text: '快速开始', link: '/zh-CN/guide/quick-start' },
      { text: '安装指南', link: '/zh-CN/guide/installation' },
      { text: '基本用法', link: '/zh-CN/guide/basic-usage' },
      { text: '架构设计', link: '/zh-CN/guide/architecture' },
      { text: '性能测试', link: '/zh-CN/guide/benchmarks' },
      { text: '常见问题', link: '/zh-CN/guide/faq' },
    ],
  },
  {
    text: '开发',
    items: [
      { text: '开发指南', link: '/zh-CN/developer/developer_guide' },
    ],
  },
  {
    text: 'API 参考',
    items: [
      { text: '总览', link: '/zh-CN/api/' },
      { text: 'ndarray', link: '/zh-CN/api/ndarray' },
      { text: '数组操作', link: '/zh-CN/api/array' },
      { text: '数学函数', link: '/zh-CN/api/math' },
      { text: '线性代数', link: '/zh-CN/api/linalg' },
      { text: '统计函数', link: '/zh-CN/api/statistics' },
      { text: '逻辑函数', link: '/zh-CN/api/logic' },
      { text: '随机抽样', link: '/zh-CN/api/random' },
      { text: '排序函数', link: '/zh-CN/api/sorting' },
      { text: '神经网络', link: '/zh-CN/api/nn' },
      { text: '输入输出', link: '/zh-CN/api/io' },
      { text: 'CANN 接口', link: '/zh-CN/api/cann' },
      { text: '工具函数', link: '/zh-CN/api/utils' },
    ],
  },
]

export default defineConfig({
  title: siteTitle,
  description: siteDescription,
  lang: 'en-US',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/images/asnumpy_logo.png' }],
    ['meta', { name: 'theme-color', content: '#667eea' }],
  ],

  themeConfig: {
    logo: '/images/asnumpy_logo.png',
    siteTitle: 'AsNumpy',

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: `https://gitcode.com/${docsRepo}/edit/master/docs/:path`,
      text: 'Edit this page on GitCode',
    },

    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Getting Started', link: '/en/guide/introduction' },
      { text: 'API Reference', link: '/en/api/' },
      { text: 'GitCode', link: `https://gitcode.com/${githubRepo}` },
    ],

    sidebar: {
      '/en/': enSidebar,
    },

    footer: {
      message: 'Based on <a href="https://numpy.org" target="_blank">NumPy</a> · Powered by <a href="https://www.hiascend.com" target="_blank">Ascend</a>',
      copyright: 'Copyright © 2026-PRESENT AsNumpy. All Rights Reserved.<br>'+
                 'Developed by the AISS Team and ISE Team of Harbin Institute of Technology in collaboration with the Huawei CANN Team.',
    },

    outline: {
      level: [2, 4],
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        editLink: {
          pattern: `https://gitcode.com/${docsRepo}/edit/master/docs/:path`,
          text: '在 GitCode 上编辑此页',
        },
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '入门指南', link: '/zh-CN/guide/introduction' },
          { text: 'API 参考', link: '/zh-CN/api/' },
          { text: 'GitCode', link: `https://gitcode.com/${githubRepo}` },
        ],
        sidebar: {
          '/zh-CN/': zhSidebar,
        },
        footer: {
          message: '基于 <a href="https://numpy.org" target="_blank">NumPy</a> · 由 <a href="https://www.hiascend.com" target="_blank">昇腾</a> 驱动 ',
          copyright: 'Copyright © 2026-PRESENT AsNumpy. All Rights Reserved.<br>'+
                     '本项目由哈尔滨工业大学 AISS 团队、哈尔滨工业大学 ISE 团队联合华为 CANN 团队共同开发',
        },
        outline: {
          level: [2, 4],
          label: '页面导航',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'short',
          },
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
      },
    },
  },
})
