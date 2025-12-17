import type { TaskComponent, User } from '@/types'

export type Project = {
  id: number
  heading: string
  description: string
  contributors: User[]
  createdAt: string
  updatedAt: string
  tasks: TaskComponent[]
}