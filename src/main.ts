import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BrowserInfo from '@/plugin/BrowserInfo';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(BrowserInfo)


app.mount('#app')

export { app }
