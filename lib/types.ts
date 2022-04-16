export interface Link {
  label: string
  href: string
}

export interface Profile {
  name: string
  positions: string[]
  location: string
  phone: string
  email: string
  homepage?: Link
  linkedin?: Link
  github?: Link
  xing?: Link
  quote?: string
}

export interface Cv {
  profile: Profile
}
