import React from 'react'
import { Outlet } from 'react-router-dom'
import './reset.css'

import SearchAppBar from './SearchAppBar'
import SideBar from './SideBar'
import * as Container from './styled'
interface Props {
  onClose: () => void
}
/* eslint-disable prettier/prettier */
const ProfilePage: React.FC<Props> = ({onClose}) => {
  return (
    <Container.Root>
      <>
        <SearchAppBar onClose={onClose}/>
        <SideBar />
      </>
      <Container.Page>
        <Outlet />
      </Container.Page>
    </Container.Root>
  )
}
/* eslint-enable prettier/prettier */

export default ProfilePage
