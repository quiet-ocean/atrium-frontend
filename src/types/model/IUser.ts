import type { ICommunity, ICommunityMember, IPost, IFriend, ITag } from '.'
export interface IUser {
  accountId: {
    type: String
    unique: true
  }
  username: String
  avatar: String
  skin: String
  bio: String
  websiteUrl: String
  isWebsiteUrlDOP: Boolean
  email: String
  isEmailNotification: Boolean
  discord: String
  isDiscordDOP: Boolean
  twitter: String
  isTwitterDOP: Boolean
  instagram: String
  isInstagramDOP: Boolean
  isPrivate: Boolean
  blurp: String
  friends: IFriend[]
  posts: IPost[]
  ownedCommunities: ICommunity[]
  joinedCommunities: ICommunityMember
  favoriteCommunities: ICommunity[]
  featuredPost: IPost[]
  tags: ITag[]
}
