import type { IUser } from '../User'

import type { ICommunity } from './ICommunity'

export interface ICommunityMember {
  _id: string
  community: ICommunity | string
  member: IUser
  status: boolean
  createdAt: string
  updatedAt: string
}
