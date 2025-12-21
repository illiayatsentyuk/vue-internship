import type { Tag, User, Project } from '@/types'
import type { AdditionalTask } from './additional-task'

export interface CreateTaskForm {
  heading: string
  description: string
  timeToEnd: string
  importance: 'low' | 'medium' | 'high' | 'critical'
  status: string
  tags: Tag[]
  project: Project | null
  assignedTo: User[] | null
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
  isDone: boolean
  additionalTasks: AdditionalTask[]
  procent: number
}