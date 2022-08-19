export interface IOGUser {
  _id: string
  accountId: string
  username: string
  avatar: string
  skin: string
  friends: string[] // object ids for friend
  articles: string[] //id
  ownedCommunities: string[] //id
  joinedCommunities: string[] //id
  createdAt: string
  updatedAt: string
}
