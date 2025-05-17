---
description: Memory Bank for Slidev Presentation Project
globs:
  - memory-bank/**
alwaysApply: true
---

# 📚 Memory Bank for Slidev Presentation Project

I am an AI assistant designed to aid in creating Slidev presentations. To function effectively, I rely entirely on the Memory Bank to understand the project's context and progress. At the start of every task, I must read all Memory Bank files—this is non-negotiable.

## 🗂 Memory Bank Structure

The Memory Bank comprises the following Markdown files, each serving a specific purpose:

```mermaid
flowchart TD
    GC[globalContext.md] --> AC[activeContext.md]
    GC --> SC[systemContext.md]
    GC --> TC[techContext.md]
    AC --> SCT[slidesContext.md]
    AC --> PR[progress.md]
    PR --> AT[attention.md]
```

### Core Files (Required)

CRITICAL: If memory_bank/ or any of these files don't exist, CREATE THEM IMMEDIATELY by:
1. Reading all provided documentation
2. Asking user for ANY missing information
3. Creating files with verified information only
4. Never proceeding without complete context

1. globalContext.md
  - Purpose: Provides an overview of the presentation project.
  - Contents:
    - Project title and objectives
    - Target audience
    - High-level outline of the presentation
    - Key messages to convey
2. activeContext.md
  - Purpose: Tracks the current focus and recent developments.
  - Contents:
    - Current section or slide being developed
    - Recent changes or decisions
    - Immediate next steps
    - Open questions or challenges
3. systemContext.md
  - Purpose: Defines the design system and stylistic guidelines.
  - Contents:
    - Color palette and typography 
    - Layout principles
    - Component styles
    - Accessibility considerations
4. techContext.md
  - Purpose: Documents the technical setup and tools in use.
  - Contents:
    - Slidev configuration details
    - UnoCSS settings and customizations
    - Plugins or extensions employed
    - Build and deployment instructions
5. progress.md
  - Purpose: Monitors the project's advancement and outstanding tasks.
  - Contents:
    - Completed slides or sections
    - Pending items and deadlines
    - Feedback received and actions taken
    - Summary of progress over time
6. attention.md
  - Purpose: Tracks the current attention span and upcoming tasks.
  - Contents:
    - Current attention span
    - Pending items and deadlines
    - Feedback received and actions taken
    - Summary of progress over time
7. slidesContext.md
  - Purpose: Maintain a detailed, real-time record of each slide's content and presentation specifics to ensure consistency and clarity throughout the development process.
  - Structure(Example): 

```
# 📊 Slides Context

A comprehensive overview of each slide's content and presentation details.

## 🧭 Presentation Outline

1. Introduction
2. Problem Statement
3. Solution Overview
4. Implementation Details
5. Results and Discussion
6. Conclusion
7. Q&A

---

## 🎬 Slide Details

### Slide 1: Introduction

- **Title**: Welcome to the Presentation
- **Layout**: Cover
- **Content**:
  - Brief overview of the topic
  - Presenter introduction
- **Notes**:
  - Engage the audience with a question
  - Highlight the relevance of the topic

### Slide 2: Problem Statement

- **Title**: Understanding the Challenge
- **Layout**: Default
- **Content**:
  - Detailed explanation of the problem
  - Real-world implications
- **Notes**:
  - Use statistics to emphasize the issue
  - Relate to audience experiences

...
```

## 🔄 Workflow Guidelines

### Initialization

1. Check for Memory Bank Files: Ensure all required files exist in the memory-bank/ directory.
2. Read All Files: Before commencing any task, read and comprehend all Memory Bank files to grasp the project's current state.

### During Development

- Update Active Context: Reflect any changes or decisions in activeContext.md.
- Maintain System and Tech Contexts: Record any alterations to design or technical setups in systemContext.md and techContext.md respectively.
- Track Progress: Log completed tasks and upcoming work in progress.md.
- Update slidesContext.md concurrently as you develop or modify slides to maintain an accurate record.
  - Consistency Check: Regularly review this file to ensure the presentation's flow and content remain coherent.
  - Collaboration: Use this document as a reference point when collaborating with team members to provide clear context.

### Upon Completion

- Review and Update: Reassess all Memory Bank files to ensure they accurately represent the project's status.
- Prepare for Next Session: Outline the next steps in activeContext.md to facilitate a smooth continuation.

## ⚠️ Important Notes

- Consistency is Key: Maintain uniform formatting and structure across all Memory Bank files.
- Clarity and Conciseness: Ensure entries are clear, concise, and informative.
- Regular Updates: Frequently update the Memory Bank to reflect the latest developments and decisions.