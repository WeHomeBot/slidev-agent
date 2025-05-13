---
theme: default
# 使用自定义背景图片
background: '/images/slide_cover.jpeg'
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## AI 时代的技术成长新范式
  探索前端开发的未来之路
drawings:
  persist: false
transition: slide-left
title: AI 时代的技术成长新范式
---

# AI 时代的技术成长新范式

<div class="pt-12">
  <span class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    探索前端开发的未来之路
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    开始探索 <carbon:arrow-right class="inline"/>
  </button>
</div>

<!--
封面背景图片生成提示词：

一幅深邃而富有科技感的数字艺术图像，展现前端开发与AI融合的未来场景。画面中心是一位程序员的剪影，他面对着多个悬浮的代码界面和UI组件，这些元素正在被蓝紫色的AI神经网络光束连接和转化。背景呈现深蓝色到深紫色的渐变，点缀着代表数据和算法的几何图形和粒子效果。整体氛围既神秘又充满可能性，象征着AI赋能下前端工程师的技术成长与转型。图像风格为现代数字插画，细节丰富但不杂乱，色调以深蓝、紫色、青色为主，搭配少量的荧光亮点作为点缀。
-->


<!--
这是演讲者注释部分

- 欢迎大家参加今天的分享
- 我们将一起探讨AI如何改变前端开发的工作方式和技术成长路径
- 分享一些实践经验和未来展望
-->

---
layout: center
class: speaker-page
---

<!-- 讲师介绍页 - 使用自定义组件 -->

<SpeakerIntro 
  name="月影（吴亮）" 
  title="波波熊科技联合创始人" 
  avatar="/images/speaker_avatar.jpg" 
  :items="[
    '资深前端架构师，JavaScript工程师',
    '可视化渲染引擎SpriteJS项目核心作者',
    '20年Web开发和研发团队管理经验',
    '前字节跳动稀土掘金社区和ByteTech业务负责人',
    '《JavaScript王者归来》作者'
  ]" 
/>

<style>
.speaker-page {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(124, 58, 237, 0.1) 100%);
}
</style>

---
layout: center
class: toc-page
transition: slide-up
---

<!-- 自定义目录页 -->

<CustomToc />

<style>
.toc-page {
  background: linear-gradient(135deg, rgba(30, 58, 138, 0.05) 0%, rgba(124, 58, 237, 0.1) 100%);
}
</style>

---
layout: default
---

<!-- 大模型与智能体应用对比内容 -->

<ContentSection title="大模型 vs 智能体应用">
  <div class="mt-4">
    <!-- 对比图展示区域 -->
    <div class="flex flex-col md:flex-row gap-6 mb-4">
      <!-- 大模型图示 -->
      <div class="flex-1 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-light-bgAlt dark:bg-dark-bgAlt">
        <h3 class="text-lg font-bold mb-2 text-center">大模型</h3>
        <div class="h-40 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center overflow-hidden">
          <img src="/images/llm.jpeg" alt="大模型示意图" class="w-full h-full object-cover" />
        </div>
      </div>
      <!-- 智能体应用图示 -->
      <div class="flex-1 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-light-bgAlt dark:bg-dark-bgAlt">
        <h3 class="text-lg font-bold mb-2 text-center">智能体应用</h3>
        <div class="h-40 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center overflow-hidden">
          <img src="/images/agent.jpeg" alt="智能体应用示意图" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
    <!-- 核心区别说明 -->
    <ul class="mt-4">
      <li>大模型：单一交互模式，以文本为主，缺乏持续性记忆和环境感知</li>
      <li>智能体：多模态交互，具备记忆、规划和环境适应能力</li>
      <li>智能体应用通过框架化设计实现更复杂的任务处理和用户体验</li>
    </ul>
  </div>
  
  <!-- 波波熊学伴产品链接 -->
  <div class="mt-6 text-center">
    <a href="https://discovery.bearbobo.com/" target="_blank" class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300">
      <carbon:launch class="mr-2" />
      <span>波波熊学伴 - 满足孩子好奇心的十万个为什么类AI内容产品</span>
    </a>
  </div>
</ContentSection>

<!-- 图片生成提示词（仅供参考，不显示在幻灯片中）
大模型图片提示词：创建一个简洁的信息图，展示AI大模型的工作方式。中央是一个大型神经网络结构，周围是文本输入和输出的示例。使用蓝色和紫色的配色方案，风格简约现代。图中应包含"输入→处理→输出"的线性流程，突出大模型的单一交互模式和以文本为主的特点。

智能体应用图片提示词：创建一个信息图，展示AI智能体应用的工作方式。中央是一个智能体核心，周围连接着多个模块：记忆库、规划器、环境感知和多模态输入/输出接口。使用绿色和橙色的配色方案，风格简约现代。图中应体现智能体的循环决策过程和与环境的持续交互，突出其多模态交互和适应性特点。
-->


---
layout: default
---

<!-- 结构化数据在AI工作流中的作用 -->

<ContentSection title="数据即桥梁：结构化JSON在AI工作流中的关键作用">
  <div class="mt-4 relative">
    <!-- JSON数据流转图示 -->
    <div class="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div class="flex justify-between items-center">
        <!-- 输入节点 -->
        <div class="w-1/4 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-center">
          <div class="font-bold mb-2">用户输入</div>
          <div class="text-xs font-mono bg-white dark:bg-gray-700 p-2 rounded text-left overflow-hidden">{"query": "分析数据", "params": {...}}</div>
        </div>
        <!-- 箭头 -->
        <div class="text-2xl text-gray-500">→</div>
        <!-- 处理节点 -->
        <div class="w-1/4 p-3 bg-green-100 dark:bg-green-900 rounded-lg text-center">
          <div class="font-bold mb-2">AI处理</div>
          <div class="text-xs font-mono bg-white dark:bg-gray-700 p-2 rounded text-left overflow-hidden">{"task": "analysis", "data": [...], "model": "gpt4"}</div>
        </div>
        <!-- 箭头 -->
        <div class="text-2xl text-gray-500">→</div>
        <!-- 输出节点 -->
        <div class="w-1/4 p-3 bg-purple-100 dark:bg-purple-900 rounded-lg text-center">
          <div class="font-bold mb-2">结构化输出</div>
          <div class="text-xs font-mono bg-white dark:bg-gray-700 p-2 rounded text-left overflow-hidden">{"result": [...], "status": "success"}</div>
        </div>
      </div>
    </div>
    <ul>
      <li>结构化JSON作为AI系统各组件间的通用语言</li>
      <li>标准化数据格式提升系统稳定性与可扩展性</li>
      <li>前端如何高效处理和展示复杂的结构化AI响应</li>
    </ul>
    <!-- 外链图标 -->
    <div class="absolute bottom-2 right-2">
      <a href="https://www.coze.cn/space/7472697029454872613/bot/7475509892640800780" target="_blank" class="text-2xl hover:text-primary transition-all duration-300 group">
        <carbon:link class="inline-block transform group-hover:scale-110 group-hover:rotate-12 text-blue-400 hover:text-primary-500 animate-pulse-slow link-icon-enhanced filter drop-shadow(0 0 2px rgba(59, 130, 246, 0.8))" />
      </a>
    </div>
  </div>
</ContentSection>

---
layout: default
---

<!-- 结构化JSON数据在流式传输中的弊端 -->

<ContentSection title="结构化JSON的流式传输困境：完整性与实时性的矛盾">
  <div class="mt-4 relative">
    <!-- 流式传输JSON的问题可视化 -->
    <div class="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div class="flex flex-col space-y-4">
        <!-- 传输过程可视化 -->
        <div class="flex justify-between items-center">
          <!-- 服务端 -->
          <div class="w-1/4 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-center">
            <div class="font-bold mb-2">服务端</div>
            <div class="text-xs font-mono bg-white dark:bg-gray-700 p-2 rounded text-left overflow-hidden">{<br>  "data": [<br>    "item1",<br>    "item2",<br>    ...<br>  ]<br>}</div>
          </div>
          <!-- 传输过程 -->
          <div class="w-2/4 px-4">
            <div class="relative h-16">
              <!-- 数据包动画 -->
              <div class="absolute top-0 left-0 w-full">
                <div class="flex justify-between">
                  <div class="h-6 w-6 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-70 transform translate-x-0 animate-[moveRight_3s_ease-in-out_infinite]"></div>
                  <div class="h-6 w-6 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-70 transform translate-x-12 animate-[moveRight_3s_ease-in-out_infinite_0.5s]"></div>
                  <div class="h-6 w-6 bg-yellow-400 dark:bg-yellow-600 rounded-full opacity-70 transform translate-x-24 animate-[moveRight_3s_ease-in-out_infinite_1s]"></div>
                </div>
              </div>
              <!-- 传输线 -->
              <div class="absolute top-3 left-0 w-full h-0.5 bg-gray-300 dark:bg-gray-600"></div>
              <!-- 等待提示 -->
              <div class="absolute top-8 left-0 w-full text-center text-sm text-red-500 font-bold">
                必须等待完整JSON接收完毕
              </div>
            </div>
          </div>
          <!-- 前端 -->
          <div class="w-1/4 p-3 bg-red-100 dark:bg-red-900 rounded-lg text-center">
            <div class="font-bold mb-2">前端</div>
            <div class="flex flex-col items-center">
              <div class="text-xs font-mono bg-white dark:bg-gray-700 p-2 rounded text-left w-full mb-2 opacity-50">{<br>  "data": [<br>    "item1",<br>    ...<br>}</div>
              <div class="text-sm text-red-500">⚠️ 无法处理不完整的JSON</div>
            </div>
          </div>
        </div>
        <!-- 用户体验问题 -->
        <div class="flex items-center justify-center bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded-lg">
          <div class="flex items-center space-x-4">
            <div class="text-3xl text-yellow-500">⏳</div>
            <div>
              <div class="font-bold">用户等待时间延长</div>
              <div class="text-sm opacity-80">必须等待完整JSON结构接收完毕才能开始渲染和交互</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</ContentSection>

<!--
- JSON结构具有完整性要求，前端必须等待整个数据结构接收完成才能解析
- 大型复杂JSON数据传输时，用户感知到明显的等待时间
- 无法实现渐进式渲染，影响用户体验和交互响应速度
- 在低带宽或不稳定网络环境下问题更加明显
-->

---
layout: default
---

<!-- Ling框架介绍内容 -->

<ContentSection title="Ling框架：突破JSON流式传输的完整性困境">
  <div class="mt-4 relative">
    <!-- Ling框架解决方案可视化 -->
    <div class="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <div class="flex justify-between items-center">
        <!-- 服务端 -->
        <div class="w-1/4 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-center">
          <div class="font-bold mb-2">服务端</div>
          <div class="text-xs font-mono bg-white dark:bg-gray-700 p-2 rounded text-left overflow-hidden">{
  "outline": [
    {"topic": "云朵..."}
  ]
}</div>
        </div>
        <!-- 箭头 -->
        <div class="absolute text-2xl text-gray-500 left-[260px] mt-[-20px]">→</div>
        <!-- Ling处理过程 -->
        <div class="w-2/4 px-4">
          <div class="relative h-24">
            <!-- 动态JSON Parser -->
            <div class="absolute top-0 left-0 w-full h-16 flex items-center justify-center">
              <div class="bg-green-100 dark:bg-green-900 p-2 rounded-lg text-center transform hover:scale-105 transition-all duration-300">
                <div class="font-bold text-sm mb-1">Ling动态JSON Parser</div>
                <div class="text-xs opacity-80">逐字符解析 → 实时转换 → URI映射</div>
              </div>
            </div>
            <!-- 数据流动画 -->
            <div class="absolute top-16 left-0 w-full">
              <div class="flex-col justify-between">
                <div class="text-xs font-mono bg-gray-200 dark:bg-gray-600 p-1 rounded animate-[fadeInOut_2s_ease-in-out_1]">{"uri":"outline/0/topic","delta":"云"}</div>
                <div class="text-xs font-mono bg-gray-200 dark:bg-gray-600 p-1 rounded animate-[fadeInOut_2s_ease-in-out_1_0.5s] opacity-0 animate-fill-forwards">{"uri":"outline/0/topic","delta":"朵"}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 箭头 -->
        <div class="absolute text-2xl text-gray-500 left-[570px] mt-[-20px]">→</div>
        <!-- 前端 -->
        <div class="w-1/4 p-3 bg-green-100 dark:bg-green-900 rounded-lg text-center">
          <div class="font-bold mb-2">前端</div>
          <div class="flex flex-col items-center">
            <div class="text-xs font-mono bg-white dark:bg-gray-700 p-2 rounded text-left w-full mb-2">云朵是由什么构成的？</div>
            <div class="text-sm text-green-600 dark:text-green-400">✓ 实时渲染</div>
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li>通过<strong>逐字符解析</strong>技术，突破JSON必须完整接收才能解析的限制</li>
      <li>采用<strong>JSONL流式协议</strong>，实现结构化数据的逐条流式输出</li>
      <li>使用<strong>URI映射机制</strong>，精确定位数据更新位置，实现前端实时渲染</li>
      <li>内置<strong>Token异常自动修复</strong>，确保流式传输中的数据完整性</li>
    </ul>
    <!-- 项目链接 -->
    <div class="absolute bottom-2 right-2">
      <a href="https://github.com/WeHomeBot/ling" target="_blank" class="text-sm hover:text-primary transition-all duration-300 group flex items-center">
        <span class="mr-1">Ling框架</span>
        <carbon:logo-github class="inline-block transform group-hover:scale-110 text-blue-400 hover:text-primary-500" />
      </a>
    </div>
    <!-- 演示提示图标 -->
    <div class="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2">
      <div class="flex items-center justify-center p-2 pl-4 pr-4 bg-blue-500 dark:bg-cyan-600 rounded-full shadow-lg animate-pulse-slow cursor-pointer">
        <carbon:application class="text-2xl text-white transform hover:rotate-12 transition-all duration-300" />
        <span class="ml-2 text-white font-bold text-sm">演示</span>
      </div>
    </div>
  </div>
</ContentSection>

---
layout: default
---

<!-- 前端作为粘合剂内容 -->

<ContentSection title="前端：AI触达用户的最后一公里">
  <!-- 图形化表达：AI与用户之间的前端桥梁 -->
  <div class="relative mt-4 flex justify-center">
    <div class="connection-flow">
      <!-- AI端 -->
      <div class="node ai-node flex items-center justify-center" animate="pulse">
        <div class="text-xl font-bold">AI模型</div>
      </div>
      <!-- 连接线与前端节点 -->
      <div class="connection-line" animate="pulse">
        <div class="frontend-node" animate="bounce">
          <div class="text-xl font-bold">前端</div>
          <div class="text-sm opacity-80">粘合剂</div>
        </div>
      </div>
      <!-- 用户端 -->
      <div class="node user-node flex items-center justify-center" animate="pulse">
        <div class="text-xl font-bold">用户</div>
      </div>
    </div>
  </div>
  <div class="mt-8">
    <ul>
      <li class="animate-item" animate="fade-in slide-in-right delay-100">将复杂AI能力转化为直观用户界面</li>
      <li class="animate-item" animate="fade-in slide-in-right delay-200">提供实时反馈与交互体验</li>
      <li class="animate-item" animate="fade-in slide-in-right delay-300">弥合技术与用户心智模型的鸿沟</li>
    </ul>
  </div>
  <!-- 项目链接 -->
  <div class="absolute bottom-20 right-20">
    <!-- 演示示例图标 -->
    <div class="flex mt-2 gap-2 justify-end">
      <div class="p-1.5 bg-blue-100 dark:bg-blue-900 rounded-full cursor-pointer hover:scale-110 transition-all duration-300" title="示例1">
        <carbon:code class="text-xl text-blue-600 dark:text-blue-300 transform hover:rotate-12 transition-all duration-300" />
      </div>
      <div class="p-1.5 bg-purple-100 dark:bg-purple-900 rounded-full cursor-pointer hover:scale-110 transition-all duration-300" title="示例2">
        <carbon:data-vis-4 class="text-xl text-purple-600 dark:text-purple-300 transform hover:rotate-12 transition-all duration-300" />
      </div>
      <div class="p-1.5 bg-green-100 dark:bg-green-900 rounded-full cursor-pointer hover:scale-110 transition-all duration-300" title="示例3">
        <carbon:chart-line-data class="text-xl text-green-600 dark:text-green-300 transform hover:rotate-12 transition-all duration-300" />
      </div>
    </div>
  </div>
</ContentSection>

<style>
.connection-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  margin-top: 2rem;
}

.node {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.ai-node {
  background: linear-gradient(135deg, #4F46E5, #7C3AED);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}

.user-node {
  background: linear-gradient(135deg, #0EA5E9, #06B6D4);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.5);
}

.connection-line {
  flex: 1;
  height: 6px;
  background: linear-gradient(90deg, #4F46E5, #0EA5E9);
  position: relative;
  margin: 0 20px;
}

.frontend-node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #EC4899, #F97316);
  width: 100px;
  height: 100px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 25px rgba(249, 115, 22, 0.6);
  transition: all 0.3s ease;
}

.frontend-node:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.animate-item {
  transition: all 0.5s ease;
}
</style>

---
layout: default
---

<!-- AI推动能力升级可视化展示 -->

<AIGrowthVisual />

---
layout: default
---

<!-- 自动化资讯收集工具 -->

<ContentSection title="自动化资讯收集：构建个性化技术雷达系统">
  <!-- 技术资讯收集痛点可视化 -->
  <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
      <h3 class="text-base font-bold mb-1 flex items-center">
        <carbon:warning-alt class="mr-1.5 text-amber-500" />
        技术资讯收集痛点
      </h3>
      <ul class="space-y-1">
        <li class="flex items-start">
          <carbon:checkmark-outline class="mt-0.5 mr-1.5 text-red-500 text-sm" />
          <span class="text-sm">内容质量参差不齐，筛选成本高</span>
        </li>
        <li class="flex items-start">
          <carbon:checkmark-outline class="mt-0.5 mr-1.5 text-red-500 text-sm" />
          <span class="text-sm">难以判断内容是否相关</span>
        </li>
        <li class="flex items-start">
          <carbon:checkmark-outline class="mt-0.5 mr-1.5 text-red-500 text-sm" />
          <span class="text-sm">知识难以沉淀与复用</span>
        </li>
        <li class="flex items-start">
          <carbon:checkmark-outline class="mt-0.5 mr-1.5 text-red-500 text-sm" />
          <span class="text-sm">缺乏系统化的知识管理工具</span>
        </li>
      </ul>
    </div>
    <!-- 自动化流程架构图 -->
    <div class="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
      <h3 class="text-base font-bold mb-1 flex items-center">
        <carbon:flow class="mr-1.5 text-purple-500" />
        自动化流程架构
      </h3>
      <div class="flex flex-col space-y-1">
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded animate-pulse-slow">
          <carbon:data-share class="mr-1.5 text-blue-500 text-sm" />
          <span class="text-sm">数据采集模块</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded animate-pulse-slow">
          <carbon:machine-learning-model class="mr-1.5 text-green-500 text-sm" />
          <span class="text-sm">内容处理模块</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded animate-pulse-slow">
          <carbon:data-base class="mr-1.5 text-indigo-500 text-sm" />
          <span class="text-sm">数据同步模块</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded animate-pulse-slow">
          <carbon:alarm class="mr-1.5 text-red-500 text-sm" />
          <span class="text-sm">监控告警模块</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 工具链与核心技术 -->
  <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <!-- 工具链组合 -->
    <div class="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg shadow-md">
      <h3 class="text-base font-bold mb-1 flex items-center">
        <carbon:tool-kit class="mr-1.5 text-green-600" />
        工具链组合
      </h3>
      <div class="grid grid-cols-2 gap-2">
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded transform transition-all duration-300 hover:scale-110 hover:rotate-1">
          <carbon:document class="mr-1.5 text-blue-500 text-sm" />
          <span class="text-sm">Readwise Reader</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded transform transition-all duration-300 hover:scale-110 hover:rotate-1">
          <carbon:notebook class="mr-1.5 text-indigo-500 text-sm" />
          <span class="text-sm">Notion</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded transform transition-all duration-300 hover:scale-110 hover:rotate-1">
          <carbon:connect class="mr-1.5 text-purple-500 text-sm" />
          <span class="text-sm">Make.com</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded transform transition-all duration-300 hover:scale-110 hover:rotate-1">
          <carbon:websheet class="mr-1.5 text-teal-500 text-sm" />
          <span class="text-sm">BrowserUse</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded transform transition-all duration-300 hover:scale-110 hover:rotate-1">
          <carbon:bot class="mr-1.5 text-orange-500 text-sm" />
          <span class="text-sm">Coze（扣子）</span>
        </div>
      </div>
    </div>
    <!-- 核心技术要点 -->
    <div class="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-lg shadow-md">
      <h3 class="text-base font-bold mb-1 flex items-center">
        <carbon:idea class="mr-1.5 text-amber-500" />
        核心技术要点
      </h3>
      <ul class="space-y-1">
        <li class="flex items-start">
          <carbon:ai-status class="mt-0.5 mr-1.5 text-blue-500 text-sm" />
          <span class="text-sm">自动摘要、分类、打分、翻译的AI处理流程</span>
        </li>
        <li class="flex items-start">
          <carbon:chart-evaluation class="mt-0.5 mr-1.5 text-green-500 text-sm" />
          <span class="text-sm">基于评分的内容筛选机制</span>
        </li>
        <li class="flex items-start">
          <carbon:data-refinery class="mt-0.5 mr-1.5 text-purple-500 text-sm" />
          <span class="text-sm">增量同步策略与数据模型设计</span>
        </li>
        <li class="flex items-start">
          <carbon:music class="mt-0.5 mr-1.5 text-orange-500 text-sm" />
          <span class="text-sm">播客语音与图片生成</span>
        </li>
        <li class="flex items-start">
          <carbon:text-link-analysis class="mt-0.5 mr-1.5 text-indigo-500 text-sm" />
          <span class="text-sm">提示词优化与结构化输出</span>
        </li>
      </ul>
    </div>
  </div>
</ContentSection>

---
layout: default
---

<!-- 打造个人智能收藏助手 -->

<ContentSection title="打造个人智能收藏助手">
  <!-- 智能收藏助手功能可视化 -->
  <div class="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
      <h3 class="text-base font-bold mb-1 flex items-center">
        <carbon:bookmark class="mr-1.5 text-blue-500" />
        核心功能
      </h3>
      <ul class="space-y-1">
        <li class="flex items-start">
          <carbon:link class="mt-0.5 mr-1.5 text-blue-500 text-sm" />
          <span class="text-sm">网址收藏：一键保存任意网页内容</span>
        </li>
        <li class="flex items-start">
          <carbon:translate class="mt-0.5 mr-1.5 text-green-500 text-sm" />
          <span class="text-sm">英文资料转写：自动翻译为中文并保存</span>
        </li>
        <li class="flex items-start">
          <carbon:notebook class="mt-0.5 mr-1.5 text-purple-500 text-sm" />
          <span class="text-sm">多模态笔记：支持文字、语音、图片等记录</span>
        </li>
        <li class="flex items-start">
          <carbon:data-table class="mt-0.5 mr-1.5 text-indigo-500 text-sm" />
          <span class="text-sm">飞书多维表格：结构化保存所有收藏</span>
        </li>
        <li class="flex items-start">
          <carbon:tag-group class="mt-0.5 mr-1.5 text-amber-500 text-sm" />
          <span class="text-sm">自动标签分类：智能添加标签便于检索</span>
        </li>
      </ul>
    </div>
    <!-- 工作流程图示 -->
    <div class="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
      <h3 class="text-base font-bold mb-1 flex items-center">
        <carbon:flow class="mr-1.5 text-purple-500" />
        工作流程
      </h3>
      <div class="flex flex-col space-y-2">
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded animate-pulse-slow">
          <carbon:user-avatar class="mr-1.5 text-blue-500 text-sm" />
          <span class="text-sm">用户输入：发送网址、转写请求或笔记内容</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded animate-pulse-slow">
          <carbon:machine-learning-model class="mr-1.5 text-green-500 text-sm" />
          <span class="text-sm">AI处理：内容提取、翻译、标签生成</span>
        </div>
        <div class="flex items-center p-1.5 bg-white dark:bg-gray-800 rounded animate-pulse-slow">
          <carbon:data-base class="mr-1.5 text-indigo-500 text-sm" />
          <span class="text-sm">存储与检索：飞书多维表格与文档管理</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 交互示例 -->
  <div class="mt-3 p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg shadow-md">
    <h3 class="text-sm font-bold mb-1 flex items-center">
      <carbon:chat class="mr-1 text-blue-600" />
      交互示例
      <a href="https://www.coze.cn/store/agent/7490830181116952628?bid=6g8mq3l40201j&bot_id=true" target="_blank" class="ml-1 inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors">
        <carbon:launch class="text-xs" />
      </a>
    </h3>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-inner">
      <div class="flex items-start mb-1">
        <div class="bg-blue-100 dark:bg-blue-800 rounded-lg p-1 max-w-[80%]">
          <div class="text-xs p-2">将这个网址收藏一下：https://example.com/article</div>
        </div>
      </div>
      <div class="flex items-start justify-end mb-1">
        <div class="bg-green-100 dark:bg-green-800 rounded-lg p-1 max-w-[80%]">
          <div class="text-xs p-2">已为你收藏网页「示例文章标题」，并自动添加了标签：#技术 #前端</div>
        </div>
      </div>
      <div class="flex items-start mb-1">
        <div class="bg-blue-100 dark:bg-blue-800 rounded-lg p-1 max-w-[80%]">
          <div class="text-xs p-2">转写 https://example.com/english-article</div>
        </div>
      </div>
      <div class="flex items-start justify-end">
        <div class="bg-green-100 dark:bg-green-800 rounded-lg p-1 max-w-[80%]">
          <div class="text-xs p-2">已将英文文章转写为中文并保存到飞书文档，你可以在收藏夹中查看</div>
        </div>
      </div>
    </div>
  </div>
</ContentSection>

---
layout: default
---

<!-- 工程师能力迁移内容 -->

<ContentSection title="当编程语言不再成为限制：AI时代的工程师能力迁移">
  <div class="mt-4 flex flex-col space-y-6">
    <!-- 框架对比可视化 -->
    <div class="framework-comparison relative">
      <!-- React/Web 技术栈 -->
      <div class="web-stack p-4 border border-blue-400 rounded-lg bg-blue-50 dark:bg-blue-900/30 dark:border-blue-600 w-[45%] absolute left-0 top-0 transition-all duration-500 hover:scale-105" dark:text-white>
        <h3 class="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">React / Web 技术栈</h3>
        <ul class="text-sm space-y-1">
          <li><span class="font-bold">UI构建:</span> JSX, 函数式组件</li>
          <li><span class="font-bold">状态管理:</span> useState, Redux</li>
          <li><span class="font-bold">样式方案:</span> CSS-in-JS, Tailwind</li>
          <li><span class="font-bold">生命周期:</span> useEffect Hooks</li>
          <li><span class="font-bold">路由:</span> React Router</li>
        </ul>
      </div>
      <!-- AI 桥接 -->
      <div class="ai-bridge absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center animate-pulse">
        <div class="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
          <carbon:ai-status class="text-white text-2xl" />
        </div>
        <div class="mt-2 text-center text-xs font-bold text-purple-600 dark:text-purple-400">AI 辅助迁移</div>
        <div class="bridge-lines absolute w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 top-8 -z-10 transform rotate-[5deg]" style="width: 200px; left: -100px;"></div>
      </div>
      <!-- Kotlin/Android 技术栈 -->
      <div class="android-stack p-4 border border-green-400 rounded-lg bg-green-50 dark:bg-green-900/30 dark:border-green-600 w-[45%] absolute right-0 top-0 transition-all duration-500 hover:scale-105" dark:text-white>
        <h3 class="text-lg font-bold text-green-600 dark:text-green-400 mb-2">Kotlin / Jetpack Compose</h3>
        <ul class="text-sm space-y-1">
          <li><span class="font-bold">UI构建:</span> @Composable 函数</li>
          <li><span class="font-bold">状态管理:</span> MutableState, ViewModel</li>
          <li><span class="font-bold">样式方案:</span> Modifier 链式API</li>
          <li><span class="font-bold">生命周期:</span> 副作用 API</li>
          <li><span class="font-bold">导航:</span> Navigation Compose</li>
        </ul>
      </div>
    </div>
    <!-- 核心迁移要点 -->
    <div class="mt-8 pt-[30px]">
      <h3 class="text-lg font-bold mb-2">AI辅助迁移核心要点:</h3>
      <ul class="grid grid-cols-2 gap-x-4 gap-y-2">
        <li class="flex items-center"><carbon:idea class="mr-1 text-yellow-500" /> 组件化思维直接迁移</li>
        <li class="flex items-center"><carbon:translate class="mr-1 text-blue-500" /> 声明式UI范式对应</li>
        <li class="flex items-center"><carbon:chart-relationship class="mr-1 text-purple-500" /> 状态管理概念映射</li>
        <li class="flex items-center"><carbon:code class="mr-1 text-green-500" /> 代码示例自动转换</li>
        <li class="flex items-center"><carbon:development class="mr-1 text-red-500" /> 平台特性差异解释</li>
        <li class="flex items-center"><carbon:time class="mr-1 text-indigo-500" /> 学习曲线大幅缩短</li>
      </ul>
    </div>
  </div>
</ContentSection>

<style>
.framework-comparison {
  height: 180px;
  position: relative;
}

/* 添加动画效果 */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px 0 rgba(139, 92, 246, 0.5); }
  50% { box-shadow: 0 0 20px 5px rgba(139, 92, 246, 0.7); }
}

.ai-bridge > div:first-child {
  animation: pulse-glow 3s infinite;
}
</style>

---
layout: default
---

<!-- Vibe Coding内容 -->

<VibeCodingVisual title="Vibe Coding：与AI共舞的编程新体验" />

<!-- 
  使用可视化组件展示AI辅助编程的四个适用场景：
  1. AI + Slidev 创作可交互的 PPT 
  2. AI + ProjectRuls/MemoryBank 实现前端项目 
  3. AI 辅助生成 Jest 单元测试 
  4. AI 辅助同步更新 Docs 文档
-->


---
layout: default
---

<!-- AI如何改变研发范式的展望 -->

<AIFutureVisual title="AI 将如何改变研发范式" />

<!-- 
  使用可视化组件展示AI如何改变研发范式的三个核心观点：
  1. AI能够重构和升级历史项目，解决技术债
  2. 面向AI设计的前端交互组件能够天然跨框架、跨平台
  3. 未来整个前端设计思想、设计系统、组件和工程化方案都可能被AI彻底重构
-->


---
layout: center
---

<!-- 问答环节页使用center布局 -->

# Q & A

<div class="flex flex-col md:flex-row items-center justify-center gap-8">
  <QRCode 
    image="/images/wechat-qrcode.png" 
    description="扫码参与互动" 
  />
  
  <div class="flex flex-col items-center">
    <img src="/images/donot_panic_fe_podcast.jpg" alt="别慌前端电台" class="h-48 rounded-lg shadow-md hover:scale-105 transition-all duration-300" />
    <div class="text-center text-sm opacity-50 mt-4">别慌前端电台 - 波波熊科技出品</div>
  </div>
</div>
