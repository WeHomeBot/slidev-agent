<!--
  Component: CardBox
  Description: 可复用的卡片组件，支持标题、内容和图标，适用于卡片风格排版
  Usage: <CardBox title="标题" icon="mdi-check-circle">
    <template #content>
      内容区域
    </template>
  </CardBox>
-->
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'blue'
  },
  animate: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card-box" :class="[`border-${color}-400`, animate ? 'animate-fade-in' : '']">
    <div class="card-header" :class="`bg-${color}-100 dark:bg-${color}-900/20`">
      <component v-if="icon" :is="icon" class="text-xl mr-2" />
      <h3 v-if="title" class="text-lg font-bold">{{ title }}</h3>
    </div>
    <div class="card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.card-box {
  @apply rounded-lg border-2 shadow-md mb-4 overflow-hidden;
}

.card-header {
  @apply flex items-center p-3 border-b;
}

.card-content {
  @apply p-4;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>