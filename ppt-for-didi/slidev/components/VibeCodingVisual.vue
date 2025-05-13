<template>
  <div class="vibe-coding-container">
    <h2 class="title text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
      {{ title }}
    </h2>
    
    <div class="scenarios-grid">
      <!-- AI + Slidev 创作可交互的 PPT -->
      <div class="scenario-card" :class="{ 'active': activeScenario === 0 }" @mouseenter="activeScenario = 0">
        <div class="card-header">
          <div class="icon-container">
            <carbon:screen class="scenario-icon" />
          </div>
          <div class="title-container">
            <h3 class="scenario-title">AI + Slidev</h3>
            <p class="scenario-desc">创作可交互的PPT演示文稿</p>
          </div>
        </div>
        <div class="benefits">
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>快速生成精美幻灯片</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>自动排版与动画效果</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>代码与演示无缝集成</span>
          </div>
        </div>
      </div>
      
      <!-- AI + ProjectRuls/MemoryBank 实现前端项目 -->
      <div class="scenario-card" :class="{ 'active': activeScenario === 1 }" @mouseenter="activeScenario = 1">
        <div class="card-header">
          <div class="icon-container">
            <carbon:application-web class="scenario-icon" />
          </div>
          <div class="title-container">
            <h3 class="scenario-title">AI + ProjectRules</h3>
            <p class="scenario-desc">实现结构化前端项目开发</p>
          </div>
        </div>
        <div class="benefits">
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>项目规范自动化执行</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>上下文感知的代码生成</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>持续一致的开发体验</span>
          </div>
        </div>
      </div>
      
      <!-- AI 辅助生成 Jest 单元测试 -->
      <div class="scenario-card" :class="{ 'active': activeScenario === 2 }" @mouseenter="activeScenario = 2">
        <div class="card-header">
          <div class="icon-container">
            <carbon:test-tool class="scenario-icon" />
          </div>
          <div class="title-container">
            <h3 class="scenario-title">AI + Jest</h3>
            <p class="scenario-desc">自动生成单元测试用例</p>
          </div>
        </div>
        <div class="benefits">
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>代码分析与测试覆盖</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>边界条件自动识别</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>测试维护成本降低</span>
          </div>
        </div>
      </div>
      
      <!-- AI 辅助同步更新 Docs 文档 -->
      <div class="scenario-card" :class="{ 'active': activeScenario === 3 }" @mouseenter="activeScenario = 3">
        <div class="card-header">
          <div class="icon-container">
            <carbon:document class="scenario-icon" />
          </div>
          <div class="title-container">
            <h3 class="scenario-title">AI + Docs</h3>
            <p class="scenario-desc">同步更新技术文档</p>
          </div>
        </div>
        <div class="benefits">
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>代码与文档自动同步</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>多语言文档一键生成</span>
          </div>
          <div class="benefit-item">
            <carbon:checkmark-filled class="benefit-icon" />
            <span>API变更智能追踪</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 连接线和动画效果 -->
    <div class="connections">
      <div class="connection-line line1" :class="{ 'active': activeScenario === 0 || activeScenario === 1 }"></div>
      <div class="connection-line line2" :class="{ 'active': activeScenario === 1 || activeScenario === 2 }"></div>
      <div class="connection-line line3" :class="{ 'active': activeScenario === 2 || activeScenario === 3 }"></div>
      <div class="connection-line line4" :class="{ 'active': activeScenario === 3 || activeScenario === 0 }"></div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Vibe Coding：与AI共舞的编程新体验'
  }
})

const activeScenario = ref(0)

// 自动循环切换激活的场景
onMounted(() => {
  setInterval(() => {
    activeScenario.value = (activeScenario.value + 1) % 4
  }, 3000)
})
</script>

<style scoped>
.vibe-coding-container {
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.title {
  text-align: center;
  margin-bottom: 25px;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}

.scenario-card {
  background: rgba(30, 41, 59, 0.7);
  border-radius: 10px;
  padding: 12px 15px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.scenario-card.active {
  transform: translateY(-5px) scale(1.02);
  border-color: #60a5fa;
  box-shadow: 0 8px 15px rgba(96, 165, 250, 0.3);
  z-index: 3;
}

.card-header {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
}

.icon-container {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.title-container p {
  margin-top: 0;
}

.scenario-icon {
  width: 24px;
  height: 24px;
  color: white;
}

.scenario-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2px;
  color: #e2e8f0;
  text-align: left;
}

.scenario-desc {
  color: #94a3b8;
  text-align: left;
  margin-bottom: 0;
  font-size: 0.85rem;
}

.benefits {
  width: 100%;
  margin-top: 4px;
}

.benefit-item {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.benefit-icon {
  color: #60a5fa;
  margin-right: 6px;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

/* 连接线样式 */
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
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  opacity: 0.2;
  transition: all 0.5s ease;
}

.connection-line.active {
  opacity: 0.7;
  animation: pulse 2s infinite;
}

/* 水平线 */
.line1 {
  top: 25%;
  left: 25%;
  width: 50%;
  height: 2px;
}

.line2 {
  top: 75%;
  left: 25%;
  width: 50%;
  height: 2px;
}

/* 垂直线 */
.line3 {
  top: 25%;
  left: 25%;
  width: 2px;
  height: 50%;
}

.line4 {
  top: 25%;
  left: 75%;
  width: 2px;
  height: 50%;
}

/* 中心AI节点 */
.ai-node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
}

.ai-icon {
  width: 32px;
  height: 32px;
  color: white;
}

@keyframes pulse {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.3;
  }
}
</style>