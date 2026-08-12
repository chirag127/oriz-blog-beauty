export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'beauty-blog',
  name: 'Lumen',
  origin: 'https://beauty-blog.oriz.in',
  tagline: 'Plain, tested skincare notes',
  description: 'Plain, tested skincare notes: minimal routines, reading ingredient labels, and caring for skin in Indian conditions.',
}
