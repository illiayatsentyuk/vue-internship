import type { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: 'signup',
    component: () => import('@/modules/auth/views/SingUpView.vue'),
  },
  {
    path: 'signin',
    component: () => import('@/modules/auth/views/SignInView.vue'),
  },
]

export default authRoutes
