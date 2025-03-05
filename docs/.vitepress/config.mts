import { defineConfig } from 'vitepress'
import footnote from 'markdown-it-footnote'
import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
  vite: { 
    
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可 //
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/ChisakaKanako/aboutTrans', 
      }), 
      GitChangelogMarkdownSection(), 
    ],
  }, 
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    }
  },
  title: "aboutTrans",
  description: "关于跨性别，你想知道的都在这里。\naboutTrans是一个主要面向不了解或希望了解跨性别群体的人的一个科普网站。",
  head: [
    ['link', { rel: 'icon', href: '/icon.png'}]
  ],
  markdown: {
    config(md) {
      md.use(footnote)
    }
  },
  themeConfig: {
    lastUpdated: {
      text: '当前页面最后更新于',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                noResultsText: '没有相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '深色模式',
    outlineTitle: '在此页面中',
    returnToTopLabel: '回到顶部',
    footer: {
      copyright: '© 2023-2025 aboutTrans'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    editLink: {
      text: '在 GitHub 上编辑此页',
      pattern: 'https://github.com/ChisakaKanako/aboutTrans/blob/main/docs/:path'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我们', link: 'about' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChisakaKanako/aboutTrans' }
    ],
    sidebar: [
      {
        text: "本站页面导航",
        items: [
          { text: '相关概念与释义', link: '/documents/concept-and-definition' },
          { text: '相关诊断与医疗', link: '/documents/diagnosis-and-medical' },
          { text: '相关政策与法规', link: '/documents/policy-and-regulation' },
          { text: '相关国际纪念日', link: '/documents/day-and-festival' },
          { text: '相关误区与问答', link: '/documents/q-and-a' }
        ]
      }
    ]
  }
})