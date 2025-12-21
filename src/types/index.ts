export type TaskStatus = 'todo' | 'in-progress' | 'done'

export type Task = {
  id: string
  title: string
  status: TaskStatus
}

export type Project = {
  id: string
  name: string
  tasks: Task[]
}
