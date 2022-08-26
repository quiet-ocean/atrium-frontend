import type { IUser } from './IUser'

export interface IFile {
  name: string
  path: string
  mimeType: string
  fileSize: number
  owner: IUser
  createdAt: string
  updatedAt: string
}
