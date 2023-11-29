import { createApp } from 'vue'
import App from './App.vue'
// 引入模板的全局的样式
import '@/styles/index.scss'
// svg插件配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'
const app = createApp(App)
// 安装自定义插件
app.use(globalComponent)
app.mount('#app')
