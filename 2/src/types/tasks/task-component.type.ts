import type { Tag, User, Project } from '@/types'
export type TaskComponent = {
  id: number
  heading: string
  description: string
  timeToEnd: string
  importance: string
  status: string
  tags: Tag[]
  project: Project
  assignedTo: User[] | null
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
}
