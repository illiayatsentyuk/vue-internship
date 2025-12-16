import type { TaskComponent } from "../tasks/task-component.type"

export type CreateProjectForm = {
  heading: string
  description: string
  createdAt: string
  updatedAt: string
  tasks: TaskComponent[]
}