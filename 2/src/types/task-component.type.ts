import type { Tag } from "./tag.type"
import type { Project } from "./project.type"
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
