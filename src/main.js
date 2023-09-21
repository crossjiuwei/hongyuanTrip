import { createApp } from 'vue'
import router from './routers/index'
import pinia from './stores/index'

import 'normalize.css'
import './assets/css/index.css'

import App from './App.vue'


createApp(App).use(pinia).use(router).mount('#app')
