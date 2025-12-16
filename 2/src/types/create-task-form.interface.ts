import type { Tag } from "./tag.type"
import type { Project } from "./project.type"
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