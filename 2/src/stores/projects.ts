import { defineStore } from 'pinia'
import { useUsersStore } from '@/stores/users'
import type { Project } from '@/types'
import { computed, ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const usersStore = useUsersStore()
  const availableUsers = usersStore.getUserById(1)

  const procent = ref(0)
  const calculateProcent = ()=>{
    const totalTasks = projects.value.reduce((acc, project) => acc + project.tasks.length, 0)
    const doneTasks = projects.value.reduce((acc, project) => acc + project.tasks.filter((task) => task.isDone).length, 0)
    procent.value = Math.round((doneTasks / totalTasks) * 100)
  }

  const projects = ref<Project[]>([
    {
      id: 1,
      heading: 'Project 1',
      description: 'Description 1',
      contributors: availableUsers ? [availableUsers] : [],
      status: 'ontrack',
      procent: procent.value,
      timeToEnd: '',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      tasks: [],
    },
  ])
  const returnBiggestId = computed(() => {
    return projects.value.reduce((max, project) => Math.max(max, project.id), 0)
  })

  function addProject(project: Omit<Project, 'id'>) {
    projects.value.push({ ...project, id: returnBiggestId.value + 1 })
    calculateProcent()
  }
  function editProject(project: Omit<Project, 'id'>, id: number) {
    projects.value = projects.value.map((element) => (element.id === id ? { ...project, id } : element))
    calculateProcent()
  }
  function deleteProject(id: number) {
    projects.value = projects.value.filter((element) => element.id !== id)
    calculateProcent()
  }
  const getProjectById = (id: number) => {
    return projects.value.find((element) => element.id === id)
  }
  return { projects, addProject, editProject, deleteProject, getProjectById, procent}
})