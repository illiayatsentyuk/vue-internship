import type { RouteRecordRaw } from 'vue-router'

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard/DashboardView.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/Dashboard/SettingView.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Dashboard/ProfileView.vue'),
  },
]

export default dashboardRoutes
