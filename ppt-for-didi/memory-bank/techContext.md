# 技术上下文

## Slidev 配置

- **版本**：Slidev v51.6.0
- **主题**：@slidev/theme-seriph（默认主题，后续可能根据需要调整）
- **CSS引擎**：UnoCSS

## UnoCSS 设置

计划使用UnoCSS进行样式定制，支持亮色和暗色模式：

```typescript
// 将在uno.config.ts中配置
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class', // 使用class切换暗色模式
    }),
  ],
  // 自定义主题色
  theme: {
    colors: {
      primary: '#1E3A8A',
      secondary: '#7C3AED',
      accent: '#06B6D4',
    }
  }
})
```

## 插件与扩展

- **Mermaid**：用于创建流程图和示意图
- **代码高亮**：使用Prism或Shiki进行代码语法高亮
- **图标**：使用Iconify集成各种图标库

## 构建与部署

- **开发服务器**：`npm run dev`
- **构建静态网站**：`npm run build`
- **预览构建结果**：`npm run preview`
- **导出为PDF**：`npm run export`

## 文件结构

- **slides.md**：主要幻灯片内容
- **components/**：自定义Vue组件
  - **SectionTitle.vue**：章节标题组件，用于展示章节开始的标题和副标题
  - **ContentSection.vue**：内容展示组件，用于统一内容页的布局和样式
  - **QRCode.vue**：二维码组件，用于问答环节展示互动二维码
  - **SpeakerIntro.vue**：讲师介绍组件，用于展示讲师信息和背景
  - **CustomToc.vue**：自定义目录组件，替代内置Toc组件，提供更美观的目录展示
- **public/**：静态资源文件
- **styles/**：全局样式定义（需创建）
- **setup/**：自定义配置（需创建Mermaid配置）