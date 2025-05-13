<!--
  Component: QRCode
  Description: 用于展示二维码的组件，提供一致的样式和布局
  Usage: <QRCode image="图片路径" description="描述文字" />
-->
<template>
  <div class="flex flex-col items-center justify-center">
    <img :src="image" :alt="description" class="qr-image" :class="imageClass" />
    <div class="text-center text-sm opacity-50 mt-4" v-if="description">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: 'h-40'
  }
})
</script>

<style scoped>
.qr-image {
  transition: transform 0.3s ease;
}

.qr-image:hover {
  transform: scale(1.05);
}
</style>