import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

import { useAppSelector } from '../../../hooks'
import type { IUser } from '../../../types/model'
import { apiGetRequest } from '../../../utils'
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

const apiUrl = process.env.VITE_API_URL || 'http://localhost:2567'

export const Profile = () => {
  const [openMembersModal, setOpenMembersModal] = useState(false)
  const [user, setUser] = useState<IUser>({} as IUser)
  const [isMe, setIsMe] = useState(false)
  // const dispatch = useAppDispatch()
  const me: IUser = useAppSelector((state) => state.auth.user)
  // const profile: IUser = useAppSelector((state) => state.app.profile)
  const currentUserId = useAppSelector((state) => state.app.currentUserId)

  useEffect(() => {
    let isMounted = true
    // let abortController = new AbortController()
    if (me._id === currentUserId) setIsMe(true)

    const getUserData = async () => {
      await apiGetRequest(`${apiUrl}/user/${currentUserId}`)
        .then((res: any) => {
          console.log(res)
          if (res.status === 200 && res.data) {
            if (isMounted) setUser(res.data)
            else console.log('not mounted')
          } else {
            console.log(
              'something went wrong while load user data for user id: ',
              currentUserId
            )
          }
        })
        .catch((error) => {
          console.log('error occurred: ', error)
        })
    }
    getUserData()
    return () => {
      isMounted = false
      // abortController.abort()
    }
  }, [])

  // return <>a;ldjf;lsdjflad</>
  return (
    <Container>
      {user ? (
        // <>user is set</>
        <>
          <Box>
            <Banner />
          </Box>
          <Box>
            <UserInfo user={user} isMe={isMe} />
          </Box>
          <Box p="72px 24px">
            <Grid container spacing="24px">
              <Grid item lg={6}>
                <FeaturedPost
                  height="380px"
                  post={
                    user.featuredPost && user.featuredPost.length
                      ? user.featuredPost[0]
                      : null
                  }
                />
              </Grid>
              <Grid item lg={6}>
                <Box height="100%">
                  <CommunityCarousel members={user.joinedCommunities} />
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
          <MembersModal
            open={openMembersModal}
            handleOpen={setOpenMembersModal}
          />
        </>
      ) : (
        <Box p="24px" display="flex" justifyContent="center">
          <Typography variant="h5">No Joined Community</Typography>
        </Box>
      )}
    </Container>
  )
}
