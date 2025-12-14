import type { RouteRecordRaw } from 'vue-router'

const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/modules/dashboard/views/DashboardView.vue')
  },
  {
    path: '/tasks',
    component: () => import('@/modules/dashboard/views/TasksView.vue')
  },
  {
    path: '/projects',
    component: () => import('@/modules/dashboard/views/ProjectsView.vue')
  },
  {
    path: '/tags',
    component: () => import('@/modules/dashboard/views/TagsView.vue')
  },
  {
    path: '/settings',
    component: () => import('@/modules/dashboard/views/SettingView.vue')
  },
  {
    path: '/profile',
    component: () => import('@/modules/dashboard/views/ProfileView.vue')
  }
]

export default dashboardRoutes;