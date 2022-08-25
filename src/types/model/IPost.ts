export interface IPost {
  _id?: string
  title: string
  body: string
  media: string
  author?: string //object id - user
  createdAt?: string
  updatedAt?: string
}
