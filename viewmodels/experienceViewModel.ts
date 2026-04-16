import { userData } from '@/models/userData'

export const experienceViewModel = {
  getExperience: () => userData.experience,
  getLatestRole: () => userData.experience[0],
  formatDuration: (duration: string) => duration,
}
