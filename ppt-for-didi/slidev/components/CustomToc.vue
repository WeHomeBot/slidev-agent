<!--
  Component: CustomToc
  Description: 自定义目录组件，提供生动活泼的目录展示，分为两大部分
  Usage: <CustomToc />
-->
<template>
  <div class="custom-toc-container">
    <!-- 标题 -->
    <h1 class="text-2xl font-bold mb-8 text-center animate-pulse-slow dark:text-dark-heading font-heading whitespace-nowrap overflow-hidden text-overflow-ellipsis">探索之旅</h1>
    
    <!-- 两大部分容器 -->
    <div class="flex flex-col md:flex-row gap-6 w-full">
      <!-- 第一部分：波波熊学伴与Ling框架 -->
      <div class="toc-section flex-1 transform hover:scale-105 transition-transform duration-300">
        <div class="section-header bg-primary text-white p-4 rounded-t-lg flex items-center">
          <div class="text-3xl mr-2">🐻</div>
          <h2 class="text-lg font-bold font-heading dark:text-dark-heading whitespace-nowrap overflow-hidden text-overflow-ellipsis">从波波熊到Ling框架</h2>
        </div>
        <div class="section-content p-4 bg-light-bgAlt dark:bg-dark-bgAlt rounded-b-lg">
          <ul class="space-y-3">
            <li class="toc-item">
              <div class="flex items-center">
                <div class="item-icon">🔍</div>
                <div class="item-text font-sans dark:text-dark-text">大模型 vs 智能体应用</div>
              </div>
            </li>
            <li class="toc-item">
              <div class="flex items-center">
                <div class="item-icon">⚡</div>
                <div class="item-text font-sans dark:text-dark-text">结构化数据响应的技术实现</div>
              </div>
            </li>
            <li class="toc-item">
              <div class="flex items-center">
                <div class="item-icon">🛠️</div>
                <div class="item-text font-sans dark:text-dark-text">Ling框架核心原理与架构</div>
              </div>
            </li>
            <li class="toc-item">
              <div class="flex items-center">
                <div class="item-icon">🌉</div>
                <div class="item-text font-sans dark:text-dark-text">前端：AI产品体验的关键一环</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- 第二部分：AI时代的个人技术成长 -->
      <div class="toc-section flex-1 transform hover:scale-105 transition-transform duration-300">
        <div class="section-header bg-secondary text-white p-4 rounded-t-lg flex items-center">
          <div class="text-3xl mr-2">🚀</div>
          <h2 class="text-lg font-bold font-heading dark:text-dark-heading whitespace-nowrap overflow-hidden text-overflow-ellipsis">AI时代的技术成长</h2>
        </div>
        <div class="section-content p-4 bg-light-bgAlt dark:bg-dark-bgAlt rounded-b-lg">
          <ul class="space-y-3">
            <li class="toc-item">
              <div class="flex items-center">
                <div class="item-icon">🔧</div>
                <div class="item-text font-sans dark:text-dark-text">高效工具链打造与知识获取</div>
              </div>
            </li>
            <li class="toc-item">
              <div class="flex items-center">
                <div class="item-icon">🌐</div>
                <div class="item-text font-sans dark:text-dark-text">工程师核心能力的迁移与升级</div>
              </div>
            </li>
            <li class="toc-item">
              <div class="flex items-center">
                <div class="item-icon">✨</div>
                <div class="item-text font-sans dark:text-dark-text">Vibe Coding：人机协作新模式</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <!-- 底部装饰 -->
    <div class="mt-8 text-center text-sm opacity-70 animate-bounce-slow">
      <div class="font-sans dark:text-dark-text">👇 向下滑动开启精彩内容 👇</div>
    </div>
  </div>
</template>

<style scoped>
.custom-toc-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.toc-section {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
}

.item-icon {
  font-size: 1.25rem;
  margin-right: 0.75rem;
  width: 1.5rem;
  text-align: center;
}

.item-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toc-item {
  padding: 0.5rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.toc-item:hover {
  background-color: rgba(124, 58, 237, 0.1);
  transform: translateX(0.25rem);
}

/* 自定义动画 */
.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-bounce-slow {
  animation: bounce 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>