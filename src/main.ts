import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import './service/index';


createApp(App)
.use(router)
.use(Antd)
.use(createPinia())
.mount('#app')
