import { defineStore } from 'pinia'
import type { Project } from '@/types'
import { computed, ref } from 'vue'
export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<Project[]>([
    {
      id: 1,
      heading: 'Project 1',
      description: 'Description 1',
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
  }
  function editProject(project: Omit<Project, 'id'>, id: number) {
    projects.value = projects.value.map((element) => (element.id === id ? { ...project, id } : element))
  }
  function deleteProject(id: number) {
    projects.value = projects.value.filter((element) => element.id !== id)
  }
  const getProjectById = (id: number) => {
    return projects.value.find((element) => element.id === id)
  }
  return { projects, addProject, editProject, deleteProject, getProjectById }
})