export interface ICommunity {
  _id: string
  name: string
  owner: string //object id - user
  description: string
  logoUrl?: string
  discordUrl?: string
  twitterUrl?: string
  marketPlaceUrl?: string
  createdAt?: string
  updatedAt?: string
}
