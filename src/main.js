import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

import { createHead } from '@unhead/vue/client'
const head = createHead()
app.use(head)

app.mount('#app')
