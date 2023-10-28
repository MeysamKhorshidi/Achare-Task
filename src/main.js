import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/variables.css'
import 'leaflet/dist/leaflet.css';

// import './styles/fonts.css'



const app = createApp(App)
app.use(router)
app.mount('#app')

