import type { TaskComponent } from '@/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<TaskComponent[]>([
    {
      id: 1,
      heading: 'Task 1',
      description: 'Description 1',
      timeToEnd: '10:00',
      importance: 'High',
      status: 'Pending',
      tags: [
        {
          id: 1,
          name: 'Tag 1',
          color: '#FF0000',
        },
      ],
      project: 'Project 1',
      assignedTo: 'User 1',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      attachments: ['Penos1 1', 'Attachment 2'],
      comments: ['Comment 1', 'Comment 2'],
    },
    {
      id: 2,
      heading: 'Task 2',
      description: 'Description 2(penos sasoahahahah)',
      timeToEnd: '10:00',
      importance: 'High',
      status: 'Pending',
      tags: [
        {
          id: 1,
          name: 'Tag 1',
          color: '#FF0000',
        },
      ],
      project: 'Project 1',
      assignedTo: 'User 1',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-01',
      attachments: ['Attachment 1', 'Attachment 2'],
      comments: ['Comment 1', 'Comment 2'],
    },
  ])
  function editTask(task: Omit<TaskComponent, 'id'>, id: number) {
    tasks.value = tasks.value.map((element) => (element.id === id ? { ...task, id } : element))
  }
  function deleteTask(id: number) {
    tasks.value = tasks.value.filter((element) => element.id !== id)
  }
  function addTask(task: Omit<TaskComponent, 'id'>) {
    tasks.value.push({ ...task, id: returnBiggestId.value + 1 })
  }

  const getTaskById = (id: number) => {
    return tasks.value.find((element) => element.id === id)
  }

  const addCommentToTask = (taskId: number, content:string) => {
    return tasks.value.map((element) => {
      if (element.id === taskId) {
        element.comments.push(content)
      }
      return element
    })
  }

  const returnBiggestId = computed(() => {
    return tasks.value.reduce((max, task) => Math.max(max, task.id), 0)
  })

  return { tasks, editTask, deleteTask, addTask, getTaskById, addCommentToTask, returnBiggestId }
})
