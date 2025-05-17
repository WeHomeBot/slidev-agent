<!--
  Component: TwoColumns
  Description: 两列布局组件，用于在内容超过6行时分列展示
  Usage: <TwoColumns>
    <template #left>
      左侧内容
    </template>
    <template #right>
      右侧内容
    </template>
  </TwoColumns>
-->
<template>
  <div class="two-columns-container">
    <div class="column left-column">
      <slot name="left"></slot>
    </div>
    <div class="column right-column">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.two-columns-container {
  @apply grid grid-cols-2 gap-4 w-full;
}

.column {
  @apply flex flex-col;
}
</style>