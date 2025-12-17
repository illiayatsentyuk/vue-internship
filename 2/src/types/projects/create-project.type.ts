import type { TaskComponent } from "../tasks/task-component.type"
import type { User } from "../users/user.type"

export type CreateProjectForm = {
  heading: string
  description: string
  createdAt: string
  updatedAt: string
  tasks: TaskComponent[]
  contributors: User[] | null
}