import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { h } from 'vue'
import { 
  NolebaseGitChangelogPlugin 
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import './style.css'
import { 
    NolebaseEnhancedReadabilitiesMenu, 
    NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
export const Theme: ThemeConfig = {
    extends: DefaultTheme,
    Layout: () => {
      return h(DefaultTheme.Layout, null, {
        // 为较宽的屏幕的导航栏添加阅读增强菜单
        'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
        // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
        'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
      })
    },
    enhanceApp({app}) {
      // 其他的配置...
      app.use(NolebaseGitChangelogPlugin)  
    },
}
export default Theme