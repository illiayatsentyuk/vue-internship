import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/modules/auth/views/AuthView.vue'
import DashboardView from '@/modules/dashboard/views/DashboardView.vue'

const routes = [
  {
    path:"/",
    component:DashboardView
  },
  {
    path:"/auth",
    component:AuthView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
