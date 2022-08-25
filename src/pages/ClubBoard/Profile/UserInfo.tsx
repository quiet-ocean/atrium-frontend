import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { Box, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

import MessageIcon from '../../../assets/icons/message-icon-dark.png'
import { AText, AButton } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { IUser, IFriend } from '../../../types/model'
import { apiPostRequest } from '../../../utils'
import { SocialButtons } from '../CommunityHub'
import editIcon from '../images/edit-icon.png'

import { Text } from './styled'

export const UserInfo = ({ user, isMe }: { user: IUser; isMe?: boolean }) => {
  const dispatch = useAppDispatch()
  const [isFriend, setIsFriend] = useState(false)

  const me = useAppSelector((state) => state.auth.user)


  useEffect(() => {
    let isMounted = true
    if (isMounted && user && user.friends) {
      user.friends.forEach((friend: IFriend) => {
        if (friend.requester === me._id) {
          setIsFriend(true)
          return
        }
      })
    }
    return () => {
      isMounted = false
    }
  }, [])

  const handleEdit = () => {
    dispatch(setCurrentBoardTab(4))
  }

  const handleSetFriend = async () => {
    if (isFriend) {
      //remove
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/user/friend`,
        {
          recipient: user._id,
          status: 4,
        }
      )
      console.log(res)
      if (res.data?.success) {
        setIsFriend(false)
      }
    } else {
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/user/friend`,
        {
          recipient: user._id,
          status: 3,
        }
      )
      console.log(res)
      if (res.data?.success) {
        setIsFriend(true)
      }
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item lg={5} position="relative">
        <Box
          position="absolute"
          width="100%"
          textAlign="center"
          bottom="124px"
          pr="16px"
        >
          <img
            src={user.avatar}
            alt=""
            width="156px"
            height="156px"
            style={{
              border: `1px solid ${palette.primary.main}`,
              borderRadius: '100px',
            }}
          />
        </Box>
        <Box pt="48px">
          <Typography variant="h4" textAlign="center">
            {user.username}
          </Typography>
          <AText className="disabled" sx={{ textAlign: 'center' }} mt="8px">
            {user.accountId}
          </AText>
        </Box>
        {!isMe && (
          <Box pt="24px" display="flex" justifyContent="center" gap="12px">
            <Box>
              <AButton
                className="primary outlined active"
                color0btn={palette.secondary.light}
                onClick={handleSetFriend}
              >
                <PeopleOutlinedIcon />
                {isFriend ? 'remove' : 'add'} friend
              </AButton>
            </Box>
            <Box>
              <AButton
                className="primary outlined active"
                color0btn={palette.secondary.light}
              >
                <Box pr="4px" width="24px" height="24px">
                  <img src={MessageIcon} alt="" width="100%" height="100%" />
                </Box>
                message
              </AButton>
            </Box>
          </Box>
        )}
      </Grid>
      <Grid item lg={7}>
        <Box position="relative">
          <Box pt="64px">
            <Text>cofounder @ASAC_NFT</Text>
          </Box>
          <Box pt="36px">
            <SocialButtons />
          </Box>
          <AButton
            className="outlined primary active"
            color0btn={palette.text.disabled}
            sx={{ position: 'absolute', right: '24px', top: '24px' }}
            onClick={handleEdit}
          >
            <img src={editIcon} alt="" width="24px" height="24px" />
            &nbsp; edit profile
          </AButton>
        </Box>
      </Grid>
    </Grid>
  )
}
