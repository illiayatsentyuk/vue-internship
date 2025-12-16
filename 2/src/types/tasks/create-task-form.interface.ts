import type { Tag } from '@/types'
import type { Project } from '@/types'
export interface CreateTaskForm {
  heading: string
  description: string
  timeToEnd: string
  importance: string
  status: string
  tags: Tag[]
  project: Project | null
  assignedTo: string
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
}