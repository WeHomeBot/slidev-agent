<!--
  Component: SpeakerIntro
  Description: 自定义讲师介绍组件，提供方形头像、动态效果和表情符号
  Usage: <SpeakerIntro name="讲师姓名" title="职位" avatar="/path/to/image.jpg" :items="['项目1', '项目2']" />
-->
<template>
  <div class="speaker-intro-container">
    <div class="flex flex-col md:flex-row items-center gap-16">
      <!-- 讲师头像区域 -->
      <div class="avatar-container">
        <div class="avatar-wrapper">
          <img :src="avatar" :alt="name" class="avatar" />
          <div class="emoji-decoration">✨</div>
        </div>
      </div>
      
      <!-- 讲师信息区域 -->
      <div class="info-container">
        <h2 class="name">{{ name }} <span class="wave">👋</span></h2>
        <p class="title">{{ title }}</p>
        <ul class="experience-list">
          <li v-for="(item, index) in items" :key="index" class="experience-item">
            <span class="item-icon">{{ getItemIcon(index) }}</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 定义组件属性
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  avatar: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    default: () => []
  }
})

// 为每个列表项生成不同的图标
const getItemIcon = (index) => {
  const icons = ['🚀', '💻', '📚', '🔍', '🌟', '🎯', '🏆', '🔧']
  return icons[index % icons.length]
}
</script>

<style scoped>
.speaker-intro-container {
  padding: 1rem;
  width: 100%;
}

.avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  animation: float 6s ease-in-out infinite;
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  border: 4px solid var(--slidev-theme-primary);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.emoji-decoration {
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 2rem;
  animation: sparkle 2s ease-in-out infinite;
}

.info-container {
  flex: 1;
}

.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--slidev-theme-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.wave {
  display: inline-block;
  animation: wave 2.5s ease-in-out infinite;
  transform-origin: 70% 70%;
}

.title {
  font-size: 1.5rem;
  color: var(--slidev-theme-secondary);
  margin-bottom: 1.5rem;
  font-weight: 500;
  opacity: 0.9;
}

.experience-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.experience-item {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: slideIn 0.5s ease-out;
  animation-fill-mode: both;
}

.experience-item:nth-child(1) { animation-delay: 0.1s; }
.experience-item:nth-child(2) { animation-delay: 0.2s; }
.experience-item:nth-child(3) { animation-delay: 0.3s; }
.experience-item:nth-child(4) { animation-delay: 0.4s; }
.experience-item:nth-child(5) { animation-delay: 0.5s; }
.experience-item:nth-child(6) { animation-delay: 0.6s; }

.item-icon {
  font-size: 1.4rem;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes sparkle {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>