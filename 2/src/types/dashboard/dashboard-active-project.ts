export interface DashboardActiveProject {
  id: number
  status: 'ontrack' | 'inprogress' | 'review'
  description: string
  heading: string
  procent: number
  timeToEnd: string
}
