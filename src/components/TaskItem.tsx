import type { Task, TaskStatus } from '../types'

interface TaskItemProps {
  task: Task
  onStatusChange: (id: string, status: TaskStatus) => void
  onDelete: (id: string) => void
}

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <li>
      <span>{task.title}</span>
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      {task.status === 'done' && <span>✅</span>}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  )
}

export default TaskItem

