import type { Tag } from '@/types'
import type { Project } from '@/types'
export type TaskComponent = {
  id: number
  heading: string
  description: string
  timeToEnd: string
  importance: string
  status: string
  tags: Tag[]
  project: Project
  assignedTo: string
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
}
