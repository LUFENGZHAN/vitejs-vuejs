import { createApp } from 'vue';
import App from './App.vue';
import './utils';
import './utils/request';

const app = createApp(App);
// 注册接口
import api from '@/api';
app.use(api);
import router from './router';
app.use(router);
// 全局样式
import '@/assets/less/root.less'
// UI导入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app');