import { userData } from '@/models/userData'

export type SkillCategory = {
  category: string
  skills: string[]
  color: string
}

const categoryColors: Record<string, string> = {
  Frontend: '#6C63FF',
  Backend: '#00D2FF',
  Tools: '#FF6584',
}

export const skillsViewModel = {
  getGroupedSkills: (): SkillCategory[] => {
    return Object.entries(userData.skills).map(([category, skills]) => ({
      category,
      skills,
      color: categoryColors[category] || '#888',
    }))
  },
  getAllSkills: () => Object.values(userData.skills).flat(),
}
