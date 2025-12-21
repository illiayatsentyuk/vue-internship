import type { TaskComponent } from '../tasks/task-component'
import type { Project } from '../projects/project'

export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  avatar?: string
  tasks: TaskComponent[]
  projects: Project[]
  createdAt: string
  updatedAt: string
}
