import type { Project } from '../types/index'

const STORAGE_KEY = 'projects_data'

export function fetchProjects(): Promise<Project[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = localStorage.getItem(STORAGE_KEY)
      resolve(data ? JSON.parse(data) : [])
    }, 800)
  })
}

export function saveProjects(projects: Project[]): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
      resolve()
    }, 500)
  })
}
