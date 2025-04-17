import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import router from './router'
import './style.css'
import 'leaflet/dist/leaflet.css'

// import YandexMap from 'vue-yandex-maps'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
