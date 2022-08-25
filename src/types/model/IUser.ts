import type { ICommunity, ICommunityMember } from '.'
export interface IUser {
  _id: string
  accountId: string
  username: string
  avatar: string
  skin: string
  friends: string[] // object ids for friend
  articles: string[] //id
  ownedCommunities: string[] | ICommunity[] //id
  joinedCommunities: string[] | ICommunityMember[] //id
  createdAt: string
  updatedAt: string

  //user.ts
  bio?: string
  webUrl?: string
  email?: string
  isDiscord?: boolean
  isTwitter?: boolean
  isInstagram?: boolean
}
