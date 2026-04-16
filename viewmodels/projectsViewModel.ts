import { userData } from '@/models/userData'

export const projectsViewModel = {
  getAllProjects: () => userData.projects,
  getFeaturedProjects: () => userData.projects.filter((p) => p.featured),
  getProjectById: (id: string) => userData.projects.find((p) => p.id === id),
}
