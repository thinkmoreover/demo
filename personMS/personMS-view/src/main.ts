import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
//导入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElMenuItem } from 'element-plus'
//导入路由
import router from "./router"
//导入全局动态管理
import { createPinia } from 'pinia'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(createPinia())
app.use(router)
app.mount('#app')
