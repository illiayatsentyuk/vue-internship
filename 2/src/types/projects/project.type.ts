import type { TaskComponent } from '@/types'

export type Project = {
  id: number
  heading: string
  description: string
  createdAt: string
  updatedAt: string
  tasks: TaskComponent[]
}