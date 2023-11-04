import { createRouter, createWebHistory } from 'vue-router'
import RequestPage from './pages/RequestPage.vue'
import LocationPage from './pages/LocationPage.vue'
import UserPage from './pages/UserPage.vue'
import SweetAlert from './pages/SweetAlert.vue'

const routes = [
        { path: '/', name: 'RequestPage', component: RequestPage },
        { path: '/location', name: 'userId', component: LocationPage },
        { path: '/users', name: 'UserPage', component: UserPage },
        { path: '/alert', name: 'UserPage', component: SweetAlert },

]

const router = createRouter({
        history: createWebHistory(),
        routes
})

export default router