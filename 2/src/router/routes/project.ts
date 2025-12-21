import type { RouteRecordRaw } from 'vue-router'

const projectRoutes: RouteRecordRaw[] = [
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/Project/ProjectsView.vue'),
  },
  {
    path: '/projects/:id',
    name: 'project',
    component: () => import('@/views/Project/ProjectView.vue'),
  },
  {
    path: '/projects/create',
    name: 'create-project',
    component: () => import('@/views/Project/CreateProjectView.vue'),
  },
  {
    path: '/projects/:id/edit',
    name: 'edit-project',
    component: () => import('@/views/Project/EditProjectView.vue'),
  },
]
export default projectRoutes
