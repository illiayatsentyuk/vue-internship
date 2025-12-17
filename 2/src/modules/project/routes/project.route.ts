import type { RouteRecordRaw } from 'vue-router'

const projectRoutes: RouteRecordRaw[] = [
    {
        path: '/projects/:id',
        name: 'project',
        component: () => import('@/modules/project/views/ProjectView.vue'),
    },
    {
        path: '/projects/create',
        name: 'create-project',
        component: () => import('@/modules/project/views/CreateProjectView.vue'),
    },
    {
        path: '/projects/:id/edit',
        name: 'edit-project',
        component: () => import('@/modules/project/views/EditProjectView.vue'),
    },
]
export default projectRoutes