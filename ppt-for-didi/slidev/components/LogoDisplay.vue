<template>
  <div class="logo-container">
    <img
      :src="isDark ? '/images/logo_dark.png' : '/images/logo_light.png'"
      alt="Logo"
      class="logo-image"
    />
  </div>
</template>

<script setup>
import { useDarkMode } from '@slidev/client'
const { isDark } = useDarkMode()
</script>

<style scoped>
.logo-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.1));
}

.logo-image {
  height: 2.5rem;
  width: auto;
  object-fit: contain;
  transition: opacity 0.3s ease;
}

/* 深色模式下的额外样式 */
:deep(.dark) .logo-container {
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.1));
}
</style>