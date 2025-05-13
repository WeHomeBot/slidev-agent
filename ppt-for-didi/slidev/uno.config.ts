import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class', // 使用class切换暗色模式
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'Noto Sans SC',
          provider: 'google'
        },
        serif: {
          name: 'Noto Serif SC',
          provider: 'google'
        },
        mono: {
          name: 'JetBrains Mono',
          provider: 'google'
        },
        heading: {
          name: 'Noto Sans SC',
          provider: 'google'
        },
      },
    }),
  ],
  // 自定义主题色
  theme: {
    colors: {
      primary: '#1E3A8A',    // 深蓝色 - 代表技术与专业
      secondary: '#7C3AED',  // 紫色 - 代表创新与AI
      accent: '#06B6D4',     // 青色 - 代表前端技术
      light: {
        bg: '#FFFFFF',       // 浅色模式背景色
        bgAlt: '#F3F4F6',    // 浅色模式次级背景色
        text: '#1F2937',     // 浅色模式文本色
      },
      dark: {
        bg: '#1F2937',       // 深色模式背景色
        bgAlt: '#111827',    // 深色模式次级背景色
        text: '#F9FAFB',     // 深色模式文本色 - 调亮
        heading: '#FFFFFF',  // 深色模式标题色 - 纯白色
      },
    },
  },
  // 自定义动画
  preflights: [
    {
      getCSS: () => `
        @keyframes moveRight {
          0% { transform: translateX(0); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes fadeInOut {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `,
    },
  ],
  // 自定义规则
  rules: [
    ['slide-heading', { 'font-weight': 'bold', 'font-size': '2.25rem', 'color': 'var(--slidev-theme-primary)', 'font-family': 'var(--slidev-font-heading)' }],
    ['slide-subheading', { 'font-weight': '600', 'font-size': '1.75rem', 'color': 'var(--slidev-theme-secondary)', 'font-family': 'var(--slidev-font-heading)' }],
    ['dark-heading', { 'color': 'var(--slidev-theme-dark-heading)' }],
  ],
  // 自定义快捷方式
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg bg-primary text-white font-medium hover:opacity-80 transition-opacity',
    'card': 'bg-light-bgAlt dark:bg-dark-bgAlt rounded-lg p-4 shadow-md',
    'code-block': 'bg-dark-bgAlt text-light-bg p-2 rounded-md font-mono text-sm',
  },
})