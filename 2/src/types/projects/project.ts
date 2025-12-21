import type { TaskComponent, User } from '@/types'

export interface Project {
  id: number
  heading: string
  status: 'ontrack' | 'inprogress' | 'review'
  procent: number
  timeToEnd: string
  description: string
  contributors: User[]
  createdAt: string
  updatedAt: string
  tasks: TaskComponent[]
}