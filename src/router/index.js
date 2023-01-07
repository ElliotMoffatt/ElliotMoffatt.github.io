import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import University from '../views/University.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/University',
    name: 'University',
    component: University
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
