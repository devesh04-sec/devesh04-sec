import { userData } from '@/models/userData'

export const profileViewModel = {
  getName: () => userData.name,
  getTitle: () => userData.title,
  getTagline: () => userData.tagline,
  getBio: () => userData.bio,
  getProfileImage: () => userData.profileImage,
  getHighlights: () => userData.highlights,
  getContactInfo: () => userData.contact,
  getSocialLinks: () => ({
    github: `https://github.com/${userData.contact.github}`,
    linkedin: `https://linkedin.com/in/${userData.contact.linkedin}`,
    twitter: userData.contact.twitter ? `https://twitter.com/${userData.contact.twitter}` : null,
    email: `mailto:${userData.contact.email}`,
  }),
}
