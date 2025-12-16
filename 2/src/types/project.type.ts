import type { TaskComponent } from "./task-component.type"

export type Project = {
  id: number
  heading: string
  description: string
  createdAt: string
  updatedAt: string
  tasks: TaskComponent[]
}