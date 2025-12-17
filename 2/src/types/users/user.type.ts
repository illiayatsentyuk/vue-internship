import type { TaskComponent } from "../tasks/task-component.type"
import type { Project } from "../projects/project.type"

export type User = {
  id: number
  name: string
  email: string
  password: string
  tasks: TaskComponent[]
  projects: Project[]
  createdAt: string
  updatedAt: string
}