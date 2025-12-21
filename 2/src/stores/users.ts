import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { User } from '@/types'
export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      password: '123456',
      avatar: '',
      tasks: [],
      projects: [],
      createdAt: '',
      updatedAt: '',
    },
  ])
  const returnBiggestId = computed(() => {
    return users.value.reduce((max, user) => Math.max(max, user.id), 0)
  })
  function addUser(user: Omit<User, 'id'>) {
    users.value.push({ ...user, id: returnBiggestId.value + 1 })
  }
  function editUser(user: Omit<User, 'id'>, id: number) {
    users.value = users.value.map((element) => (element.id === id ? { ...user, id } : element))
  }
  function deleteUser(id: number) {
    users.value = users.value.filter((element) => element.id !== id)
  }
  const getUserById = (id: number) => {
    return users.value.find((element) => element.id === id)
  }
  return { users, addUser, editUser, deleteUser, getUserById, returnBiggestId }
})
