# 活动上下文

## 当前开发重点

- 正在开发AI时代的技术成长新范式演示文稿
- 已完成封面页设计，使用自定义背景图片
- 规划了整体演示文稿结构，包括8个主要章节
- 重构了幻灯片布局，应用了新的布局规则和可复用组件
- 添加了讲师介绍页和自定义目录页

## 最近变更

- 创建了基本的slides.md文件
- 添加了封面页设计
- 设置了主题为seriph
- 添加了演讲者注释
- 创建了可复用UI组件：SectionTitle、ContentSection、QRCode、SpeakerIntro和CustomToc
- 为每个章节应用了适当的布局（section、default、center等）
- 更新了slidesContext.md，记录了每个幻灯片的布局和组件使用情况
- 添加了讲师介绍页，使用自定义SpeakerIntro组件展示讲师信息
- 重新设计了目录页，使用自定义CustomToc组件替代内置Toc组件
- 更新了attention.md，添加了关于HTML内容格式的重要提示，强调HTML标签之间不应有空行以避免Slidev解析错误
- 将幻灯片中的外链emoji符号(🔗)替换为Carbon图标组件(<carbon:link>)，提升专业性和一致性
- 增强了外链图标的视觉效果，添加了醒目的蓝色、阴影效果，以及悬停时的缩放和旋转动画，使其更加活泼和引人注目
- 在"大模型 vs 智能体应用"幻灯片中添加了波波熊学伴产品外链，指向https://discovery.bearbobo.com/，并添加了产品描述：满足少儿好奇心的十万个为什么类AI内容产品

## 待办任务

- 完善各章节内容
- 添加视觉元素和图表
- 优化演示文稿的整体视觉效果
- 添加交互元素
- 考虑创建更多专用组件，如CodeBlock、ChartDisplay等