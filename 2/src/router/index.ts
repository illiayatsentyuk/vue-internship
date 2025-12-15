import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '@/modules/dashboard/routes/dashboard.routes'
import authRoutes from '@/modules/auth/routes/auth.routes'
import taskRoutes from '@/modules/task/routes/task.routes'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [...dashboardRoutes, ...taskRoutes],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [...authRoutes],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
