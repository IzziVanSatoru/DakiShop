import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'  // <== ini

const app = createApp(App)

app.use(createPinia()) // <== ini
app.use(router)

app.mount('#app')
