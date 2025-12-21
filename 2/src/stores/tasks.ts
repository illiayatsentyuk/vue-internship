import type { TaskComponent, Project } from '@/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUsersStore } from './users'
import { useProjectsStore } from './projects'
import type { AdditionalTask } from '@/types/tasks/additional-task'

const usersStore = useUsersStore()
const availableUsers = usersStore.users
if (!availableUsers) {
  throw new Error('Users not found')
}

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<TaskComponent[]>([])
  const projectsStore = useProjectsStore()
  
  function editTask(task: Omit<TaskComponent, 'id'>, id: number) {
    const updatedTask = { ...task, id }
    tasks.value = tasks.value.map((element) => (element.id === id ? updatedTask : element))
    
    const projects = projectsStore.projects
    const project = projects.find((p: Project) => p.tasks.some((t: TaskComponent) => t.id === id))
    if (project) {
      project.tasks = project.tasks.map((t: TaskComponent) => (t.id === id ? updatedTask : t))
      projectsStore.updateProjectsProcent()
    }
  }
  
  function deleteTask(id: number) {
    tasks.value = tasks.value.filter((element) => element.id !== id)
    
    const projects = projectsStore.projects
    const project = projects.find((p: Project) => p.tasks.some((t: TaskComponent) => t.id === id))
    if (project) {
      project.tasks = project.tasks.filter((t: TaskComponent) => t.id !== id)
      projectsStore.updateProjectsProcent()
    }
  }
  
  function addTask(task: Omit<TaskComponent, 'id'>) {
    const newTask = { ...task, id: returnBiggestId.value + 1 }
    tasks.value.push(newTask)
    
    const projects = projectsStore.projects
    const project = projects.find((p: Project) => p.id === task.project.id)
    if (project) {
      project.tasks.push(newTask)
      projectsStore.updateProjectsProcent()
    }
  }

  const getTaskById = (id: number) => {
    return tasks.value.find((element) => element.id === id)
  }

  const addCommentToTask = (taskId: number, content: string) => {
    const task = tasks.value.find((element) => element.id === taskId)
    if (task) {
      task.comments.push(content)
      
      const projects = projectsStore.projects
      const project = projects.find((p: Project) => p.tasks.some((t: TaskComponent) => t.id === taskId))
      if (project) {
        const projectTask = project.tasks.find((t: TaskComponent) => t.id === taskId)
        if (projectTask) {
          projectTask.comments.push(content)
        }
      }
    }
  }
  function editAdditionalTask(taskId: number, additionalTask: AdditionalTask) {
    const task = tasks.value.find((element) => element.id === taskId)
    if (task) {
      task.additionalTasks = task.additionalTasks.map((element) => (element.id === additionalTask.id ? additionalTask : element))
      updateTasksProcent()
    }
  }
  function deleteAdditionalTask(taskId: number, additionalTaskId: number) {
    const task = tasks.value.find((element) => element.id === taskId)
    if (task) {
      task.additionalTasks = task.additionalTasks.filter((element) => element.id !== additionalTaskId)
      updateTasksProcent()
    }
  }
  function addAdditionalTask(taskId: number, additionalTask: AdditionalTask) {
    const task = tasks.value.find((element) => element.id === taskId)
    if (task) {
      task.additionalTasks.push({ ...additionalTask, id: returnBiggestAdditionalTaskId.value + 1 })
      updateTasksProcent()
    }
  }
  
  const calculateProcent = (task: TaskComponent): number => {
    const totalAdditionalTasks = task.additionalTasks.length
    if (totalAdditionalTasks === 0) return 0
    const totalDone = task.additionalTasks.filter((additionalTask) => additionalTask.isDone).length
    return Math.round((totalDone / totalAdditionalTasks) * 100)
  }

  const updateTasksProcent = () => {
    tasks.value.forEach((task: TaskComponent) => {
      const newProcent = calculateProcent(task)
      if (task.procent !== newProcent) {
        task.procent = newProcent
      }
    })
  }

  const returnBiggestAdditionalTaskId = computed(() => {
    return tasks.value.reduce((max, task) => Math.max(max, task.additionalTasks.reduce((max, additionalTask) => Math.max(max, additionalTask.id), 0)), 0)
  })

  const returnBiggestId = computed(() => {
    return tasks.value.reduce((max, task) => Math.max(max, task.id), 0)
  })

  return { tasks, editTask, deleteTask, addTask, getTaskById, addCommentToTask, returnBiggestId, editAdditionalTask, deleteAdditionalTask, addAdditionalTask, updateTasksProcent }
})
