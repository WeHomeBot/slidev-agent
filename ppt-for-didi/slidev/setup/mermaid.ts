import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // 通用主题变量
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',
      // 序列图变量
      actorBkg: '#0E131F',
      actorBorder: '#7C3AED', // 使用辅助色（紫色）
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
      // 流程图变量
      primaryColor: '#1E3A8A', // 使用主色（深蓝色）
      primaryTextColor: '#F3F4F6',
      secondaryColor: '#06B6D4', // 使用强调色（青色）
      tertiaryColor: '#7C3AED', // 使用辅助色（紫色）
    }
  }
})