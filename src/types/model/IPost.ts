import type { IUser } from './IUser'
export interface IPost {
  _id: string
  title: string
  body: string
  media: string
  // author: string //object id - user
  author: IUser
  createdAt: string
  updatedAt: string
}
