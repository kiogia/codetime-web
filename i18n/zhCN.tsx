import NuxtLink from './NuxtLink.vue'

export const zhCN = {
  landing: {
    description: 'CodeTime 是一款专为开发者设计的应用，帮助您追踪、分析您的编程时间。',
    toDashboard: '前往仪表盘',
    alreadyStatistical: '已统计编程时间',
    minutes: '分钟',
    loginWithGithub: '使用 GitHub 登录',
    freeMessage: '目前完全免费，无需信用卡',
    demo: '演示',
  },
  dashboard: {
    loginRequired: '欢迎访问 CodeTime 仪表板！请登录以查看你的编程时间数据，或者点击下方的演示按钮体验演示仪表盘。',
    pageHeader: {
      title: {
        overview: '概览',
        shield: '徽章',
        settings: '设置',
      },
      description: {
        overview: '查看您的所有 CodeTime 数据。',
        shield: '在你的项目中用简明、一致、清晰的徽章展示你的编程时间。',
        settings: '管理您的 CodeTime 设置，包含外观、语言、数据等。',
      },
    },
    overview: {
      codetimeTrendTitle: '编程时间趋势',
      codetimeLanguaeTrendTitle: '编程语言趋势',
      dataRange: {
        title(days: number) {
          return `过去 ${days} 天`
        },
      },
      statistic: {
        timeTotal: '编程时间/总计',
        timeToday: '编程时间/今日',
        timeAverage: '编程时间/平均',
        longestStreak: '连续天数/当前',
        currentStreak: '连续天数/最大',
      },
      top: {
        language: '语言',
        project: '项目',
        platform: '平台',
      },
      noData: {
        notice: {
          title: '还没有数据',
          body: defineComponent({
            components: {
              NuxtLink,
            },
            setup() {
              return () => (
                <div class="text-sm">
                  <span class="op50">
                    目前，我们尚未收到您的编码时间记录。我们的应用程序依赖于代码编辑器或集成开发环境（例如 VSCode、JetBrains IDE ）的插件。为了确保正常运作，请您前往
                  </span>
                  <NuxtLink
                    to="dashboard/settings"
                    class="text-sky-6"
                  >
                    [ 设置 ]
                  </NuxtLink>
                  <span class="op50">
                    页面并在您所使用的支持插件的代码编辑器中进行相应配置。感谢您的合作。
                  </span>
                </div>
              )
            },
          }),
        },
      },
    },
    shield: {
      preview: {
        title: '预览',
      },
      placeholder: {
        style: '样式',
        language: '语言',
        days: '天数',
        project: '项目',
        color: '颜色',
      },
    },
    settings: {
      token: {
        title: '令牌',
        tip: '您的令牌用于 CodeTime API 的访问，请保持它的私密性。您可以在此处生成新的令牌。',
      },
      language: {
        title: '语言',
        tip: '选择您的 CodeTime Web UI 的语言。',
      },
      export: {
        title: '导出',
        button: '一键导出',
        description: '我们支持网站数据导出功能，以确保数据的安全备份、便捷迁移、深入分析与合规性，同时赋予您对其数据完全的控制权和透明度。',
        tip: '导出您的数据到 CSV 文件。',
      },
      dangerZone: {
        title: '危险区域',
        description: '这些设置会永久影响你的数据，不可恢复。请谨慎操作。',
        button: {
          removeAllData: '删除所有数据',
        },
      },
    },
  },
  button: {
    copy: '复制',
  },
  plot: {
    label: {
      timeHour: '时间（小时）',
      language: '语言',
      date: '日期',
      duration: '时间',
    },
  },
}