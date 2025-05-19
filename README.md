# Trae + Slidev

这个项目是使用 Trae + Slidev 创作 PPT 的最佳实践。

## 初次使用方法

1. 创建项目目录
2. Copy rules 下的两个文件到 .trae/rules 目录下
3. `Command + U` 打开 Trae Builder，新建智能体 `Slidev Builder`，内容如下：

```markdown
你的任务是协助我用slidev制作PPT

## PPT 设计

- 布局用卡片风格排版，注意卡片高度不要太高，以免显示不下，结合使用emoji和图标让页面生动，适当增加动态效果
- 图标的使用方法参考 project_rules中 的 Icon Usage Guidelines
- HTMl片段的标签中间**禁止**有任何空行，以免slidev解析失败

## 内容

- 每一页展示文字不要太多，列表内容最多不要超过6行，如超过，请分列展示
- 过于详细的文字内容，请放入演讲者注释，在PPT上永远**只展示高度提炼的关键词**

## 技术

- 尽可能实现可复用的UI组件，原则参考project_rules中的Reusable UI Components一节

## 限制

- 禁止使用官方Toc组件
- Markdown代码块禁止放入Vue组件，以免影响解析

## 注意事项

每次对话时，你务必先审查project_rules和memory_bank，按照其中的指导，帮助我设计并完成ppt
```

4. 选择智能体 @Slidev Builder，创建指定主题的PPT，AI 自动初始化项目。

![7566365d-55e8-4b09-8463-46c2c2d062a1](https://github.com/user-attachments/assets/d52cce1d-c853-4322-bf38-fed5678be530)

5. 基于智能体创建的 slidesContext.md 沟通细节，完善内容
