import { createRouter, createWebHistory } from 'vue-router'
import AuthForm from '@/components/AuthForm.vue'
import HomePage from '@/components/HomePage.vue'

const routes = [
  {
    path:"/",
    component:HomePage
  },
  {
    path:"/auth",
    component:AuthForm,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
