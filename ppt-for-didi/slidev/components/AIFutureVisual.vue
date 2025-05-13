<template>
  <ContentSection :title="title || 'AI 将如何改变研发范式'">
    <div class="future-timeline-container">
      <!-- 时间轴路径 -->
      <div class="timeline-path">
        <div class="timeline-track"></div>
        <div class="timeline-glow"></div>
      </div>

      <!-- 时间节点 -->
      <div class="timeline-nodes">
        <!-- 现在节点 -->
        <div class="timeline-node now-node">
          <div class="node-marker">现在</div>
        </div>

        <!-- 未来节点 -->
        <div class="timeline-node future-node">
          <div class="node-marker">未来</div>
        </div>
      </div>
    
      <!-- 中心AI节点与连接线 -->
      <div class="center-node" :class="{ 'pulse': true }">
        <carbon:ai-status class="center-icon" />
      </div>
      
      <svg class="connections" width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="none">
        <path :class="['connection', { 'active': activeScenario === 0 }]" d="M400,250 L200,150" stroke="url(#gradient1)" stroke-width="2" fill="none" />
        <path :class="['connection', { 'active': activeScenario === 1 }]" d="M400,250 L400,150" stroke="url(#gradient2)" stroke-width="2" fill="none" />
        <path :class="['connection', { 'active': activeScenario === 2 }]" d="M400,250 L600,150" stroke="url(#gradient3)" stroke-width="2" fill="none" />
        
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="100%" stop-color="#8B5CF6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10B981" />
            <stop offset="100%" stop-color="#3B82F6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#8B5CF6" />
            <stop offset="100%" stop-color="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <!-- 未来场景展示 -->
    <div class="future-scenarios">
        <!-- 历史项目重构 -->
        <div 
          class="future-scenario-card" 
          :class="{ 'active': activeScenario === 0 }" 
          @mouseenter="activeScenario = 0"
          :style="{ '--delay': '0s' }"
        >
          <div class="scenario-content">
            <div class="scenario-icon-container">
              <carbon:renew class="scenario-icon" />
            </div>
            <h3 class="scenario-title">历史项目重构</h3>
            <p class="scenario-desc">解决技术债与版本升级</p>
            <ul class="scenario-features">
              <li><carbon:checkmark class="feature-icon" /> 前端架构自动迁移</li>
              <li><carbon:checkmark class="feature-icon" /> 历史代码重构与优化</li>
              <li><carbon:checkmark class="feature-icon" /> 技术栈现代化升级</li>
            </ul>
          </div>
          <div class="holographic-effect"></div>
        </div>
      
      <!-- 面向 AI 的前端交互组件 -->
      <div 
          class="future-scenario-card" 
          :class="{ 'active': activeScenario === 1 }" 
          @mouseenter="activeScenario = 1"
          :style="{ '--delay': '0.3s' }"
        >
          <div class="scenario-content">
            <div class="scenario-icon-container">
              <carbon:assembly class="scenario-icon" />
            </div>
            <h3 class="scenario-title">跨框架组件</h3>
            <p class="scenario-desc">面向 AI 的设计范式</p>
            <ul class="scenario-features">
              <li><carbon:checkmark class="feature-icon" /> 天然跨框架兼容性</li>
              <li><carbon:checkmark class="feature-icon" /> 跨平台自适应渲染</li>
              <li><carbon:checkmark class="feature-icon" /> 语义化交互模型</li>
            </ul>
          </div>
          <div class="holographic-effect"></div>
      </div>
      
      <!-- 范式重构 -->
        <div 
          class="future-scenario-card" 
          :class="{ 'active': activeScenario === 2 }" 
          @mouseenter="activeScenario = 2"
          :style="{ '--delay': '0.6s' }"
        >
          <div class="scenario-content">
            <div class="scenario-icon-container">
              <carbon:idea class="scenario-icon" />
            </div>
            <h3 class="scenario-title">范式重构</h3>
            <p class="scenario-desc">前端设计思想革新</p>
            <ul class="scenario-features">
              <li><carbon:checkmark class="feature-icon" /> 设计系统自动生成</li>
              <li><carbon:checkmark class="feature-icon" /> 组件智能化演进</li>
              <li><carbon:checkmark class="feature-icon" /> 工程化方案重构</li>
            </ul>
          </div>
          <div class="holographic-effect"></div>
        </div>
    </div>
  </ContentSection>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  }
})

const activeScenario = ref(0)

// 自动循环切换激活的场景
let interval
onMounted(() => {
  interval = setInterval(() => {
    activeScenario.value = (activeScenario.value + 1) % 3
  }, 4000)
})

// 生成随机粒子样式
function getRandomParticleStyle() {
  const size = Math.random() * 10 + 5
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = Math.random() * 5
  const duration = Math.random() * 10 + 10
  
  return {
    '--size': `${size}px`,
    '--x': `${x}%`,
    '--y': `${y}%`,
    '--delay': `${delay}s`,
    '--duration': `${duration}s`
  }
}
</script>

<style scoped>
.future-timeline-container {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  perspective: 1000px;
  transform-style: preserve-3d;
}

/* 时间轴路径样式 */
.timeline-path {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 4px;
  transform: translateY(-50%);
}

.timeline-track {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.7));
  border-radius: 4px;
}

.timeline-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.3));
  filter: blur(8px);
  border-radius: 4px;
  animation: pulse 2s infinite alternate;
}

/* 时间节点样式 */
.timeline-nodes {
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;
  height: 20px;
  transform: translateY(-50%);
}

.timeline-node {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.now-node {
  left: 5%;
  background: linear-gradient(135deg, #3b82f6, #60a5fa);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.7);
}

.future-node {
  right: 5%;
  background: linear-gradient(135deg, #8b5cf6, #a78bfa);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.7);
}

.node-marker {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
}

/* 未来场景卡片样式 */
.future-scenarios {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5%;
}

.future-scenario-card {
  position: relative;
  width: 28%;
  height: 280px;
  background: rgba(30, 41, 59, 0.7);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: perspective(1000px) rotateX(5deg) translateY(0);
  transition: all 0.5s ease-out;
  animation: floatIn 0.8s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  overflow: hidden;
}

.future-scenario-card.active {
  transform: perspective(1000px) rotateX(0) translateY(-20px) scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(139, 92, 246, 0.5);
  z-index: 10;
}

.scenario-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scenario-icon-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
}

.scenario-icon {
  font-size: 1.5rem;
  color: white;
}

.scenario-title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.scenario-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
}

.scenario-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scenario-features li {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
}

.feature-icon {
  margin-right: 0.5rem;
  color: #60a5fa;
}

/* 全息效果 */
.holographic-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
}

.future-scenario-card.active .holographic-effect {
  animation: holographicScan 3s infinite linear;
  opacity: 0.7;
}

/* 浮动粒子效果 */
.floating-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle, rgba(147, 51, 234, 0.7), rgba(59, 130, 246, 0));
  border-radius: 50%;
  top: var(--y);
  left: var(--x);
  opacity: 0.5;
  animation: float var(--duration) ease-in-out infinite alternate;
  animation-delay: var(--delay);
  filter: blur(1px);
}

/* 动画定义 */
@keyframes pulse {
  0% {
    opacity: 0.5;
    filter: blur(8px);
  }
  100% {
    opacity: 0.8;
    filter: blur(12px);
  }
}

@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.3;
  }
  100% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.7;
  }
}

@keyframes holographicScan {
  0% {
    background-position: 0% 0%;
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    background-position: 100% 100%;
    opacity: 0.3;
  }
}

@keyframes floatIn {
  0% {
    opacity: 0;
    transform: perspective(1000px) rotateX(20deg) translateY(50px);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) rotateX(5deg) translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .future-scenarios {
    flex-direction: column;
    padding: 2rem 0;
  }
  
  .future-scenario-card {
    width: 80%;
    margin-bottom: 1rem;
    height: auto;
    min-height: 200px;
  }
  
  .timeline-path {
    display: none;
  }
  
  .timeline-nodes {
    display: none;
  }
}
</style>