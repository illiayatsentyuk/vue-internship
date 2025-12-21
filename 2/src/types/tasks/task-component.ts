import type { Tag, User, Project } from '@/types'
import type { AdditionalTask } from './additional-task'
export interface TaskComponent {
  id: number
  heading: string
  description: string
  timeToEnd: string
  procent: number
  importance: 'low' | 'medium' | 'high' | 'critical'
  status: string
  tags: Tag[]
  project: Project
  assignedTo: User[] | null
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
  isDone: boolean
  additionalTasks: AdditionalTask[]
}
