import { Box, Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import { useAppSelector } from '../../../hooks'
import type { IUser } from '../../../types/User'
import {
  FeaturedPost,
  Members,
  MembersModal,
  MediaPanel,
} from '../CommunityHub'
import { Main as Container } from '../styled'

import { CommunityCarousel } from './CommunityCarousel'
import { Banner } from './styled'
import { Tags } from './Tags'
import { UserInfo } from './UserInfo'

export const Profile = () => {
  const [openMembersModal, setOpenMembersModal] = useState(false)
  const [isMe, setIsMe] = useState(false)
  // const dispatch = useAppDispatch()
  const user: IUser = useAppSelector((state) => state.auth.user)
  const profile: IUser = useAppSelector((state) => state.app.profile)

  useEffect(() => {
    setIsMe(user.accountId === profile.accountId)
  }, [user, profile])
  return (
    <Container>
      <Box>
        <Banner />
      </Box>
      <Box>
        <UserInfo user={profile} me={isMe} />
      </Box>
      <Box p="72px 24px">
        <Grid container spacing="24px">
          <Grid item lg={6}>
            <FeaturedPost height="380px" />
          </Grid>
          <Grid item lg={6}>
            <Box height="100%">
              <CommunityCarousel />
              <Tags />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Members isModal={false} handleOpen={setOpenMembersModal} />
          </Grid>
          <Grid item lg={6}>
            <MediaPanel />
          </Grid>
        </Grid>
      </Box>
      <MembersModal open={openMembersModal} handleOpen={setOpenMembersModal} />
    </Container>
  )
}
