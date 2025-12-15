import type { RouteRecordRaw } from 'vue-router'

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/modules/dashboard/views/DashboardView.vue'),
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('@/modules/dashboard/views/TasksView.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/modules/dashboard/views/ProjectsView.vue'),
  },
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/modules/dashboard/views/TagsView.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/modules/dashboard/views/SettingView.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/modules/dashboard/views/ProfileView.vue'),
  },
]

export default dashboardRoutes
