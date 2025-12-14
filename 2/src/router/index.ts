import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/modules/auth/views/AuthView.vue'
import dashboardRoutes from '@/modules/dashboard/routes/dashboard.routes'
const routes = [
  {
    path:"/",
    component:() => import('@/layouts/MainLayout.vue'),
    children: [
      ...dashboardRoutes
    ]
  },
  {
    path:"/auth",
    component:() => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: "",
        component: AuthView
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
