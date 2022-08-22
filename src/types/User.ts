import type { IOGUser } from './model'

export interface IUser extends IOGUser {
  bio?: string
  webUrl?: string
  email?: string
  isDiscord?: boolean
  isTwitter?: boolean
  isInstagram?: boolean
}
