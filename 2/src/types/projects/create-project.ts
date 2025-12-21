import type { TaskComponent } from '../tasks/task-component'
import type { User } from '../users/user'

export interface CreateProjectForm {
  heading: string
  description: string
  status: 'ontrack' | 'inprogress' | 'review'
  procent: number
  timeToEnd: string
  createdAt: string
  updatedAt: string
  tasks: TaskComponent[]
  contributors: User[] | null
}
