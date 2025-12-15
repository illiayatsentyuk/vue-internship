import type { RouteRecordRaw } from 'vue-router'

const taskRoutes: RouteRecordRaw[] = [
  {
    path: '/tasks/:id',
    name: 'task',
    component: () => import('@/modules/task/views/TaskView.vue'),
  },
  {
    path: '/tasks/create',
    name: 'create-task',
    component: () => import('@/modules/task/views/CreateTaskView.vue'),
  },
]

export default taskRoutes
