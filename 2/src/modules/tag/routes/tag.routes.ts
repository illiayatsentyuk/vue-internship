import type { RouteRecordRaw } from 'vue-router'

const tagRoutes: RouteRecordRaw[] = [
  {
    path: '/tags/create',
    name: 'create-tag',
    component: () => import('@/modules/tag/views/CreateTagView.vue'),
  },
  {
    path: '/tags/:id/edit',
    name: 'edit-tag',
    component: () => import('@/modules/tag/views/EditTagView.vue'),
  },
]

export default tagRoutes


