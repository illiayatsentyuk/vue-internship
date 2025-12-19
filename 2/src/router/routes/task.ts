import type { RouteRecordRaw } from 'vue-router'

const taskRoutes: RouteRecordRaw[] = [
  {
    path: '/tasks',
    name: 'tasks',
    component: () => import('@/views/Task/TasksView.vue'),
  },  
  {
    path: '/tasks/:id',
    name: 'task',
    component: () => import('@/views/Task/TaskView.vue'),
  },
  {
    path: '/tasks/create',
    name: 'create-task',
    component: () => import('@/views/Task/CreateTaskView.vue'),
  },
  {
    path: '/tasks/:id/edit',
    name: 'edit-task',
    component: () => import('@/views/Task/EditTaskView.vue'),
  },
]

export default taskRoutes
