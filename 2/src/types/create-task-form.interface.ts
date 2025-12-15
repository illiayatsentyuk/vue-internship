export interface CreateTaskForm {
  heading: string
  description: string
  timeToEnd: string
  importance: string
  status: string
  tags: string[]
  project: string
  assignedTo: string
  createdAt: string
  updatedAt: string
  attachments: string[]
  comments: string[]
}