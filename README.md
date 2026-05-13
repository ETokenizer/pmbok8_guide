# PMBOK Guide Edition 8 - 项目管理指南 (第 8 版)

> PMBOK 第 8 版 (2025/2026) | 6 Principles & 7 Performance Domains

## 项目简介

PMBOK Wizard Edition 8 是一个功能完整的交互式 Web 应用，帮助项目管理专业人士学习和参考 PMI PMBOK 指南第 8 版中定义的**6 项项目管理原则**、**7 个绩效域**、**40 个流程**和**敏捷/混合方法**。

## 核心功能

| 模块 | 说明 |
|------|------|
| 📘 6 项原则 | 整体视角、聚焦价值、融入质量、负责任领导、协作团队、管家精神 |
| 🌐 7 个绩效域 | 治理、范围、进度、财务、相关方、资源、风险 |
| 🔄 40 个流程 | 完整 ITTO 数据（输入/工具/输出），按 5 焦点领域组织 |
| 🚀 敏捷/混合 | 敏捷宣言(4价值+12原则)、Scrum(3角色/4仪式/3工件)、Kanban(6实践)、混合方法(3模式) |
| 📝 实际案例 | 每项原则和绩效域配备真实案例，含场景/行动/结果 |
| 📚 案例库 | 12 个跨行业完整案例研究，含行业筛选和详情视图 |
| ✅ 自测题库 | 原则 30 题 + 绩效域 7 题，含答题交互/进度追踪/正误反馈 |
| 💬 白话解释 | 每条原则配备"说人话"通俗解释 |
| 🔗 跨引用 | 原则 ↔ 绩效域双向导航 |
| 👑 Premium | 用户账户菜单、License 激活（Supabase 待接入） |

## 文件结构

```
pmbok8_guide/
├── index.html                   # 入口 → 重定向到 src/
├── README.md
├── src/
│   ├── index.html               # 主应用 SPA
│   ├── css/
│   │   ├── variables.css        # CSS 变量
│   │   ├── main.css             # 主布局
│   │   ├── components.css       # 组件样式
│   │   ├── premium.css          # Premium 样式
│   │   └── quiz.css             # 自测样式
│   └── js/
│       ├── app.js               # 主应用逻辑
│       ├── core/
│       │   └── state.js         # 状态管理
│       ├── data/
│       │   ├── principles.js    # 6 项原则数据
│       │   ├── domains.js       # 7 个绩效域数据
│       │   ├── processes.js     # 40 个流程 ITTO 数据
│       │   ├── agile.js         # 敏捷/混合方法数据
│       │   └── trial.js         # 试用/Premium 管理
│       └── ui/
│           └── modals.js        # 弹窗管理
```

## 使用方法

```bash
# 直接打开
open src/index.html

# 或使用本地服务器
npx http-server -p 8080 -o src/index.html
```

## 技术栈

- HTML5 + CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript ES6 Modules
- localStorage 持久化
- 零框架依赖

## PMBOK 第 8 版 vs 第 7 版

| 方面 | 第 7 版 (2021) | 第 8 版 (2025/2026) |
|------|-------------|-------------------|
| 原则数量 | 12 项 | **6 项** (精简整合) |
| 绩效域 | 8 个 | **7 个** (重构) |
| 流程 | 40 个 (保留) | **40 个** (非强制性) |
| 新增主题 | - | AI、ESG、价值流 |

## 版本信息

- **当前版本**: 2.0.0
- **PMBOK 版本**: 第 8 版 (2025/2026)
- **创建日期**: 2026-04-07
- **最后更新**: 2026-05-13
