import type { RouteRecordRaw } from 'vue-router'

const taskRoutes: RouteRecordRaw[] = [
  {
    path: '/tasks/:id',
    name: 'task',
    component: () => import('@/modules/task/views/TaskView.vue')
  }
]

export default taskRoutes;