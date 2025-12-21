import type { Tag, User, Project } from '@/types'
export interface TaskComponent {
  id: number
  heading: string
  description: string
  timeToEnd: string
  importance: 'low' | 'medium' | 'high' | 'critical'
  status: string
  tags: Tag[]
  project: Project
  assignedTo: User[] | null
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
}
