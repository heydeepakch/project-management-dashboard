import { useEffect, useState, useCallback } from 'react'
import { fetchProjects, saveProjects } from '../services/projectsAPI'
import type { Project, TaskStatus } from '../types'

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setError('Failed to load projects'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!loading) saveProjects(projects)
  }, [projects, loading])

  const addProject = useCallback((name: string) => {
    setProjects(prev => [
      ...prev,
      { id: crypto.randomUUID(), name, tasks: [] }
    ])
  }, [])

  const deleteProject = useCallback((id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id))
  }, [])

  const addTask = useCallback((projectId: string, title: string) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? {
              ...p,
              tasks: [
                ...p.tasks,
                { id: crypto.randomUUID(), title, status: 'todo' }
              ]
            }
          : p
      )
    )
  }, [])

  const updateTaskStatus = useCallback(
    (projectId: string, taskId: string, status: TaskStatus) => {
      setProjects(prev =>
        prev.map(p =>
          p.id === projectId
            ? {
                ...p,
                tasks: p.tasks.map(t =>
                  t.id === taskId ? { ...t, status } : t
                )
              }
            : p
        )
      )
    },
    []
  )

  const deleteTask = useCallback((projectId: string, taskId: string) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? { ...p, tasks: p.tasks.filter(t => t.id !== taskId) }
          : p
      )
    )
  }, [])

  return {
    projects,
    loading,
    error,
    addProject,
    deleteProject,
    addTask,
    updateTaskStatus,
    deleteTask
  }
}
