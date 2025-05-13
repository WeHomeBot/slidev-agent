<!--
  Component: ContentSection
  Description: 用于展示内容章节的组件，提供一致的样式和布局
  Usage: <ContentSection title="内容标题">
    <template #default>
      内容区域
    </template>
  </ContentSection>
-->
<template>
  <div class="content-section">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <div class="content-area">
      <slot></slot>
    </div>
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

<style scoped>
.content-section {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-area {
  flex: 1;
}
</style>