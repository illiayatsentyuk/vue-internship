export interface Task {
  importance: 'low' | 'medium' | 'high' | 'critical'
  heading: string
  timeToEnd: string
}
