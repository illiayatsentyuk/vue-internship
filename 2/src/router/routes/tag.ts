import type { RouteRecordRaw } from 'vue-router'

const tagRoutes: RouteRecordRaw[] = [
  {
    path: '/tags',
    name: 'tags',
    component: () => import('@/views/Tag/TagsView.vue'),
  },
  {
    path: '/tags/create',
    name: 'create-tag',
    component: () => import('@/views/Tag/CreateTagView.vue'),
  },
  {
    path: '/tags/:id/edit',
    name: 'edit-tag',
    component: () => import('@/views/Tag/EditTagView.vue'),
  },
]

export default tagRoutes
