import type { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: 'signup',
    component: () => import('@/views/Auth/SingUpView.vue'),
  },
  {
    path: 'signin',
    component: () => import('@/views/Auth/SignInView.vue'),
  },
]

export default authRoutes
