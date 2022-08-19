import type { IFriend, IArticle, ICommunity } from '.'

export interface IOGUser {
  _id: string
  accountId: string
  username: string
  avatar: string
  skin: string
  friends: IFriend[]
  articles: IArticle[]
  ownedCommunities: ICommunity[]
  joinedCommunities: ICommunity[]
  createdAt: string
  updatedAt: string
}
