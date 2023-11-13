// 引入项目中全部的全局组件
import SvgIcon from './svgIcon/index.vue'

// 全局对象
const allGlobalComponent: any = { SvgIcon }

// 对外暴漏插件对象
export default {
  // 务必叫install方法
  install(app: any) {
    // 注册项目全部的全局组件
    for (const [key, component] of Object.entries(allGlobalComponent)) {
      app.component(key, component)
    }
  },
}
