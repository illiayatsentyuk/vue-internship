export interface Task {
  id: number
  importance: 'low' | 'medium' | 'high' | 'critical'
  heading: string
  timeToEnd: string
  isDone: boolean
  procent: number
}
