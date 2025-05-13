<!--
  Component: AIGrowthVisual
  Description: 用于可视化展示AI对工程师成长的三个方面帮助：自动化资讯收集、个人智能收藏夹和知识技能迁移
  Usage: <AIGrowthVisual />
-->
<template>
  <div class="ai-growth-container">
    <h1 class="title">AI助力工程师能力升级</h1>
    
    <div class="growth-paths">
      <!-- 自动化资讯收集工具 -->
      <div class="growth-item" :class="{ 'active': activeItem === 0 }" @mouseenter="activeItem = 0">
        <div class="icon-container">
          <carbon:data-vis-4 class="icon" />
        </div>
        <div class="content">
          <h3>自动化资讯收集</h3>
          <p>构建个性化技术雷达，实时获取前沿动态</p>
        </div>
      </div>
      
      <!-- 个人智能收藏夹 -->
      <div class="growth-item" :class="{ 'active': activeItem === 1 }" @mouseenter="activeItem = 1">
        <div class="icon-container">
          <carbon:catalog class="icon" />
        </div>
        <div class="content">
          <h3>智能知识管理</h3>
          <p>AI辅助整理、分类和检索技术资源</p>
        </div>
      </div>
      
      <!-- 知识技能迁移 -->
      <div class="growth-item" :class="{ 'active': activeItem === 2 }" @mouseenter="activeItem = 2">
        <div class="icon-container">
          <carbon:move class="icon" />
        </div>
        <div class="content">
          <h3>技能快速迁移</h3>
          <p>从前端到全栈，跨平台开发能力构建</p>
        </div>
      </div>
    </div>
    
    <!-- 连接线动画 -->
    <div class="connections">
      <div class="connection-line line1" :class="{ 'active': activeItem === 0 }"></div>
      <div class="connection-line line2" :class="{ 'active': activeItem === 1 }"></div>
      <div class="connection-line line3" :class="{ 'active': activeItem === 2 }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeItem = ref(0)

// 自动循环切换激活项
setInterval(() => {
  activeItem.value = (activeItem.value + 1) % 3
}, 3000)
</script>

<style scoped>
.ai-growth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  padding: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #4776E6, #8E54E9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite;
}

.growth-paths {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 2rem;
}

.growth-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.growth-item.active {
  transform: translateY(-10px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background: rgba(71, 118, 230, 0.1);
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4776E6, #8E54E9);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.active .icon-container {
  transform: rotate(10deg) scale(1.1);
}

.icon {
  width: 40px;
  height: 40px;
  color: white;
}

.content {
  text-align: center;
}

.content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.content p {
  font-size: 1rem;
  opacity: 0.8;
}

.connections {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}

.connection-line {
  position: absolute;
  height: 3px;
  background: linear-gradient(90deg, rgba(71, 118, 230, 0.3), rgba(142, 84, 233, 0.3));
  top: 50%;
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 0.5s ease;
  opacity: 0.5;
}

.connection-line.active {
  transform: scaleX(1);
  opacity: 1;
}

.line1 {
  left: 20%;
  width: 20%;
  transform: rotate(-15deg);
}

.line2 {
  left: 40%;
  width: 20%;
}

.line3 {
  left: 60%;
  width: 20%;
  transform: rotate(15deg);
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>