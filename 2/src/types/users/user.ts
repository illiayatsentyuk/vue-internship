import type { TaskComponent } from "../tasks/task-component"
import type { Project } from "../projects/project"

export interface User {
  id: number
  name: string
  email: string
  password: string
  tasks: TaskComponent[]
  projects: Project[]
  createdAt: string
  updatedAt: string
}