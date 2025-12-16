import type { Tag } from "./tag.type"

export type TaskComponent = {
  id: number
  heading: string
  description: string
  timeToEnd: string
  importance: string
  status: string
  tags: Tag[]
  project: string
  assignedTo: string
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
}
