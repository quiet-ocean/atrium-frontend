export interface IArticle {
  _id: string
  title: string
  body: string
  mediaUrl: string
  author: string //object id - user
  createdAt: string
  updatedAt: string
}
