import { createRouter, createWebHistory } from 'vue-router'
import dashboardRoutes from '@/router/routes/dashboard'
import authRoutes from '@/router/routes/auth'
import taskRoutes from '@/router/routes/task'
import projectRoutes from '@/router/routes/project'
import tagRoutes from '@/router/routes/tag'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [...dashboardRoutes, ...taskRoutes, ...projectRoutes, ...tagRoutes],
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
