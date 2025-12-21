import { defineStore } from 'pinia'
import { useUsersStore } from '@/stores/users'
import type { Project } from '@/types'
import { computed, ref, watch } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const usersStore = useUsersStore()
  const availableUsers = usersStore.getUserById(1)

  const projects = ref<Project[]>([
    {
      id: 1,
      heading: 'Project 1',
      description: 'Description 1',
      contributors: availableUsers ? [availableUsers] : [],
      status: 'ontrack',
      procent: 0,
      timeToEnd: '',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      tasks: [],
    },
  ])

  const calculateProcent = (project: Project): number => {
    const totalTasks = project.tasks.length
    if (totalTasks === 0) return 0
    const totalDone = project.tasks.filter((task) => task.isDone).length
    return Math.round((totalDone / totalTasks) * 100)
  }

  const updateProjectsProcent = () => {
    projects.value.forEach((project: Project) => {
      const newProcent = calculateProcent(project)
      if (project.procent !== newProcent) {
        project.procent = newProcent
      }
    })
  }

  const returnBiggestId = computed((): number => {
    return projects.value.reduce((max: number, project: Project) => Math.max(max, project.id), 0)
  })

  function addProject(project: Omit<Project, 'id'>) {
    const newProject: Project = { ...project, id: returnBiggestId.value + 1, procent: 0 }
    newProject.procent = calculateProcent(newProject)
    projects.value.push(newProject)
  }
  function editProject(project: Omit<Project, 'id'>, id: number) {
    const updatedProject: Project = { ...project, id, procent: 0 }
    updatedProject.procent = calculateProcent(updatedProject)
    projects.value = projects.value.map((element: Project) =>
      element.id === id ? updatedProject : element,
    )
  }
  function deleteProject(id: number) {
    projects.value = projects.value.filter((element: Project) => element.id !== id)
  }
  const getProjectById = (id: number) => {
    return projects.value.find((element: Project) => element.id === id)
  }

  watch(
    () => usersStore.users,
    (newUsers) => {
      projects.value.forEach((project) => {
        project.contributors = project.contributors.map((contributor) => {
          const updatedUser = newUsers.find((user) => user.id === contributor.id)
          return updatedUser || contributor
        })
      })
    },
    { deep: true },
  )

  return { projects, addProject, editProject, deleteProject, getProjectById, updateProjectsProcent }
})
