# basic-project

a basic project model

## 命令说明

- start

以 dist 目录为根路径, 开启 server 服务

- build-test

测试配置打包构建，在/dist 目录生成压缩后的文件

- build-prod

生产配置打包构建，在/dist 目录生成压缩后的文件

- deploy-test

测试配置打包发布

- deploy-prod

生产配置打包发布

## 技术栈

- webpack

  - 构建工具

- vue

  - Web 基础框架

- babel

  - 使用 preset-env 将代码编译为浏览器友好的代码

- stylus

  - css 预处理器

- postcss

  - css 后处理器，主要使用 autoprefixer、cssnano

- ant-design-vue

  - UI 库，直接使用 CDN 方式加载，所以，整个页面无需显示调用 [ant-design-vue](https://vue.ant.design/docs/vue/introduce/)（后续会考虑直接在它的基础上封装主题）

## 代码风格统一建设

使用 VSCode 来进行开发时，需安装以下插件

- Manta's Stylus Supremacy

  - 用于 stylus 格式化
  - 参考地址：https://thisismanta.github.io/stylus-supremacy/#options
  - 本项目配置地址：.vscode/settings.json

- Prettier - Code formatter

  - 用于除了 stylus 之外的格式化
  - 参考地址：https://prettier.io/docs/en/options.html
  - 本项目配置地址：.prettierrc.js

- ESLint

  - 用于代码检测
  - 参考地址：https://eslint.org/docs/rules/
  - 本项目配置地址：.eslintrc.js

- Vetur - 增强 Html 格式化能力

  - Vue 官方插件，提供高亮、语法提示、格式化集成等功能
  - 参考地址：https://vuejs.github.io/vetur/formatting.html#formatters
  - 本项目配置地址（关联 1）：.vscode/settings.json

- language-stylus

  - stylus 支持
