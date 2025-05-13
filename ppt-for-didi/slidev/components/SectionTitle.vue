<!--
  Component: SectionTitle
  Description: 用于展示章节标题的组件，提供一致的样式和布局
  Usage: <SectionTitle title="章节标题" />
-->
<template>
  <div class="flex flex-col items-center justify-center h-full">
    <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>