import { createApp } from 'vue'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
//引入svg图标
import 'virtual:svg-icons-register'
//引入目标组件
import goalComponent from './components/index'
//引入模板的全局样式
import '@/styles/index.scss'
//引入路由
import router from '@/router/index'
//引入pinia
import pinia from './store/index'

//创建应用实例
const app = createApp(App)

//安装element-plus
app.use(ElementPlus, {
  locale: zhCn,
})

//安装组件
app.use(goalComponent)

//安装路由
app.use(router)

//安装pinia
app.use(pinia)

//将应用挂载到挂载点上
app.mount('#app')
