---
description: Slidev Project Rules - Includes Project Initialization, Memory Bank Structure, UnoCSS Theme Configuration, Mermaid Custom Settings, and Initial Slide Management
globs:
  - slides/**
  - rules/**
  - memory-bank/**
  - setup/mermaid.ts
alwaysApply: true
---

# 📘 Slidev Project Rules

## 🧭 Project Goals and Style

- **Objective**: Create well-structured and visually consistent slides using Slidev.
- **Language**: Simplified Chinese.
- **Content Strategy**: Convey one core idea per slide to avoid information overload.
- **Presentation Pace**: Content should match the speaking pace for easy explanation and interaction.

## 🧱 Slide Structure Guidelines

- **Title Slide**: Used at the beginning of sections or topic transitions, formatted as `# Main Title`.
- **Content Slide**: Used to explain key points, using secondary headings `##` and unordered lists `-`.
- **Code Slide**: Display example code using code block syntax, specifying the language type.
- **Diagram Slide**: Insert images or charts, supporting Mermaid diagrams.
- **Summary Slide**: Review key points of the section to aid audience understanding and memory.

## 🎨 Design System: Light and Dark Mode Support

To accommodate different viewing preferences and environments, the design system should support both light and dark themes. This ensures optimal readability and aesthetics across various contexts.

### 🧾 Configuration Guidelines

1. **Define Theme Colors**:
   - Establish separate color palettes for light and dark modes.
   - Use CSS variables to manage theme colors, enabling easy switching between modes.

2. **UnoCSS Configuration**:
   - Utilize UnoCSS's dark mode feature by setting the `dark` option in your `uno.config.ts`:
     ```typescript
     import { defineConfig, presetUno } from 'unocss'

     export default defineConfig({
       presets: [
         presetUno({
           dark: 'class', // or 'media' for media-query based switching
         }),
       ],
     })
     ```
   - This setup allows you to use `dark:` variants in your class names, such as `dark:bg-gray-800`.

3. **HTML Structure**:
   - Apply the appropriate class to the `<html>` or `<body>` tag to activate the desired theme:
     ```html
     <html class="dark"> <!-- For dark mode -->
     <html class="">     <!-- For light mode -->
     ```
   - Alternatively, use media queries to automatically switch themes based on user preferences.

4. **Slidev Theme Metadata**:
   - Specify the supported color schema in your theme's `package.json`:
     ```json
     {
       "slidev": {
         "colorSchema": "both" // Options: 'light', 'dark', 'both'
       }
     }
     ```
   - This informs Slidev of the theme's capabilities and ensures proper handling.

5. **Design Tokens**:
   - Define design tokens in `systemContext.md` to maintain consistency:
     ```markdown
     ## Colors

     - Primary: `--color-primary`
     - Background: `--color-background`
     - Text: `--color-text`

     ## Typography

     - Font Family: `--font-family`
     - Font Size: `--font-size-base`
     ```
   - Assign different values to these tokens for light and dark modes as needed.

6. **Component Styling**:
   - Use the defined CSS variables in your components to ensure they adapt to the active theme:
     ```css
     .button {
       background-color: var(--color-primary);
       color: var(--color-text);
     }
     ```

7. **Testing**:
   - Regularly test your slides in both light and dark modes to ensure visual consistency and readability.

By following these guidelines, your Slidev presentation will provide a seamless experience for users, regardless of their theme preference.

## 🧱 Slide Layout Guidelines

Slidev provides various built-in layouts to structure your slides effectively. You can specify a layout for each slide using the `layout` option in the slide's frontmatter. Below are some commonly used layouts:

- `cover`: Used for the presentation's cover page, typically containing the title and contextual information.
- `default`: The most basic layout, suitable for general content.
- `center`: Centers the content on the screen.
- `image-left`: Displays an image on the left side with content on the right.
- `image-right`: Displays an image on the right side with content on the left.
- `image`: Shows an image as the main content of the slide.
- `iframe-left`: Embeds a webpage on the left side with content on the right.
- `iframe-right`: Embeds a webpage on the right side with content on the left.
- `iframe`: Embeds a webpage as the main content of the slide.
- `quote`: Highlights a quotation prominently.
- `section`: Marks the beginning of a new section in the presentation.
- `two-cols`: Splits the slide content into two columns.
- `two-cols-header`: Divides the slide into an upper section and a lower section with two columns.

### Usage Example

Specify the layout in the slide's frontmatter:

```yaml
---
layout: image-left
image: /path/to/image.png
class: custom-class
---
```

### Custom Layouts

If the built-in layouts do not meet your requirements, you can create custom layouts:

1. Create a new Vue component in the layouts/ directory of your project, for example, MyLayout.vue:

```vue
<template>
  <div class="my-layout">
    <slot />
  </div>
</template>
```

2. Use the custom layout in your slide's frontmatter:

```yaml
---
layout: my-layout
---
```

### Layout Loading Priority

Slidev loads layouts in the following order, with later ones overriding earlier ones:

1. Built-in layouts.
2. Layouts provided by the theme.
3. Layouts provided by addons.
4. Custom layouts in the project's layouts/ directory.

## 🧩 Reusable UI Components

To promote consistency and maintainability in your Slidev presentations, adhere to the following best practices when designing UI components:

### 1. Component Placement

- **Directory Structure**: Place all custom UI components within the `components/` directory at the root of your Slidev project. This aligns with Slidev's convention for automatic component registration.

```
slidev/
├── components/
│ ├── MyComponent.vue
│ └── AnotherComponent.vue
```

### 2. Naming Conventions

- **Component Naming**: Use PascalCase for component names, such as `MyComponent`.
- **Component File Naming**: Use the same name as the component, with a `.vue` extension, for example, `MyComponent.vue`.

### 3. Component Documentation

- **Component Description**: Include a brief description of the component's purpose and functionality in the component's `vue` file with HTML comment.

```vue
<!--
  Component: MyComponent
  Description: Displays a styled alert box with customizable message and type.
  Usage: <MyComponent type="success" message="Operation completed successfully." />
-->
<template>
  <div :class="`alert alert-${type}`">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'info'
  },
  message: {
    type: String,
    required: true
  }
})
</script>
```

### 4. Design Principles

- Modularity: Design components to be self-contained and focused on a single functionality. This enhances reusability across different slides and projects.
- Customization: Utilize props and slots to allow flexible customization of components without modifying their internal implementation.
- Styling: Apply consistent styling using UnoCSS utility classes or define styles within the component's <style> block to maintain visual coherence.

5. Integration in Slides

- Usage: Once components are placed in the components/ directory, they can be used directly in your Markdown slides without the need for manual imports.

```markdown
# Slide Title

<MyComponent type="warning" message="Please review the guidelines before proceeding." />
```

## 🧠 AI Assistance Prompts

- When requesting AI-generated content, use the following prompts:
  - "Please generate three content slides for the topic 'XXX', including key point lists and a code example."
  - "Please create a summary slide summarizing the three main points of the current section."
  - "Please organize the following content into multiple slides, each focusing on one topic."

## ⚙️ Technical Content Guidelines

- **Code Display**: Code examples should specify the language type, such as `js`, `ts`, `html`, `python`, etc., and include comments explaining their purpose and functionality.
- **Process Description**: Use ordered lists or flowcharts to describe step-by-step processes.
- **Speaker Notes**: Use Slidev's `notes:` block to add speaker notes to assist in explanations.

## 🧠 Memory Bank Integration

To maintain context and simplify collaboration, implement the Memory Bank system as follows:

### 📁 Memory Bank Directory Structure

Create a `memory-bank/` folder in the project root directory, containing the following Markdown files:

- `globalContext.md`: Overview of the presentation's theme, objectives, and audience.
- `activeContext.md`: Records current development focus, recent changes, and upcoming tasks.
- `techContext.md`: Records the technology stack, tools, and configurations used.
- `progress.md`: Tracks completed slides, pending sections, and current progress status.
- `systemContext.md`: Defines the design system, including colors, fonts, layouts, etc.
- `slidesContext.md`: Real-time updates recording each slide's content, presentation details, and a clear overall structure.
- `attention.md`: Records important notes, warnings, and special requirements that need attention during development.

### 🔄 Memory Bank Maintenance Process

1. **Initialization**:
   - Ensure all Memory Bank files exist; if not, create them based on available documentation and user input.
   - Create an `attention.md` file in the `memory-bank/` directory to record important notes, warnings, and special requirements that need attention during development.

2. **Before Each Conversation**:
   - **Review Attention File**: At the beginning of each conversation, MUST review the `memory-bank/attention.md` file to understand any special requirements or important notes that need attention.
   - **Mandatory Review**: Read all files in the `memory-bank/` directory to fully understand the current state of the project.
   - **Identify Changes**: Compare the current project status with the information recorded in the Memory Bank to identify any additions, modifications, or deletions.
   - **Update Relevant Files**: Update the corresponding Memory Bank files based on the identified changes to ensure information accuracy and timeliness.
   - **Record Update Log**: Summarize the review and updates in `progress.md`, including the changes made and their reasons.

3. **During Development**:
   - Record new developments and decisions in `activeContext.md`.
   - Record any changes to tools or design guidelines in `techContext.md` and `systemContext.md`.
   - Record completed and pending tasks in `progress.md`.
   - Update `slidesContext.md` with detailed information on each slide's content and presentation details.

4. **After Each Conversation**:
   - **Update Memory Bank**: Based on the conversation results and any changes made, update all relevant Memory Bank files to reflect the latest status.
   - **Record Conversation Summary**: Add a brief summary of the conversation, decisions made, and actions taken to `activeContext.md`.
   - **Update Attention File**: If any new important notes or warnings emerged during the conversation, add them to `attention.md`.

5. **After Significant Changes**:
   - Review and update all Memory Bank files to ensure consistency and accuracy.
   - Confirm that the documentation reflects the latest project status and decisions.

## 🚀 Slidev Project Initialization Rules

After the user provides the presentation topic, follow these steps to initialize the Slidev project:

1. **Check Directory**:
   - If the specified Slidev project directory does not exist, create it.

2. **Initialize Project**:
   - Run the following command in the directory to initialize the Slidev project:

     ```bash
     npm init slidev@latest
     ```

   - Follow the prompts to enter the project name and complete the initialization process.

3. **Start Development Server**:
   - After initialization, navigate to the project directory and run the following command to start the development server:

     ```bash
     pnpm dev
     ```

   - Open a browser and visit `http://localhost:3030` to preview the slides.

4. **Initial Slide Management**:
   - Rename the default `slides.md` file generated during initialization to `slides.example.md` to retain the default example for reference:

     ```bash
     mv slides.md slides.example.md
     ```

   - Create a new `slides.md` file and add a cover slide with the following content:

     ````markdown
     ---
     layout: cover
     title: Presentation Title
     ---

     # Welcome to Slidev
     ````

   - Please modify the title content according to the actual project requirements.

   - Subsequent slide content will be added and refined through further communication with the user.

## 📊 Mermaid Diagram Configuration

To customize Mermaid diagrams in Slidev, follow these steps:

1. **Create Configuration File**:
   - Create a `setup/mermaid.ts` file in the project root directory with the following content:

     ```typescript
     import { defineMermaidSetup } from '@slidev/types'

     export default defineMermaidSetup(() => {
       return {
         theme: 'base',
         themeVariables: {
           // General theme variables
           noteBkgColor: '#181d29',
           noteTextColor: '#F3EFF5cc',
           noteBorderColor: '#404551',
           // Sequence diagram variables
           actorBkg: '#0E131F',
           actorBorder: '#44FFD2',
           actorTextColor: '#F3EFF5',
           actorLineColor: '#F3EFF5',
           signalColor: '#F3EFF5',
           signalTextColor: '#F3EFF5',
         }
       }
     })
     ```

   - You can adjust the `theme` and `themeVariables` values based on your project's design system.

2. **Use Mermaid Diagrams**:
   - In the slide's Markdown file, insert Mermaid diagrams using the following syntax:

     ````markdown
     ```mermaid
     graph TD
       A[Start] --> B{Decision}
       B -->|Yes| C[Result 1]
       B -->|No| D[Result 2]
     ```
     ````

   - You can also add configuration objects after the code block, for example:

     ````markdown
     ```mermaid {theme: 'neutral', scale: 0.8}
     graph TD
       A[Start] --> B{Decision}
       B -->|Yes| C[Result 1]
       B -->|No| D[Result 2]
     ```
     ````

3. **Notes**:
   - Ensure that the necessary dependencies are installed in the project and that the `setup/mermaid.ts` file is correctly configured.
   - For more customization options, please refer to Mermaid's official documentation: https://mermaid.js.org/config/theming.html

By following the above configuration, you can create Mermaid diagrams in Slidev that align with your project's design style, enhancing the expressiveness and visual appeal of your slides.
