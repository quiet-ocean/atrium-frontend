import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { Box, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

import MessageIcon from '../../../assets/icons/message-icon-dark.png'
import { AText, AButton } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { IUser } from '../../../types/User'
import { apiPostRequest } from '../../../utils'
import { SocialButtons } from '../CommunityHub'
import editIcon from '../images/edit-icon.png'

import { Text } from './styled'
export const UserInfo = ({
  user,
  profile,
}: {
  user: IUser
  profile: IUser
}) => {
  const dispatch = useAppDispatch()
  const [isMe, setIsMe] = useState(false)
  const [isFriend, setIsFriend] = useState(false)

  useEffect(() => {
    if (user.accountId === profile.accountId) setIsMe(true)
    else setIsMe(false)
    if (user.friends.indexOf(profile._id) > -1) setIsFriend(true)
    else setIsFriend(false)
  }, [user, profile])

  useEffect(() => {
    console.log(isMe ? 'yes, this is me' : 'no, i am not')
    console.log(user, profile)
  }, [isMe])

  const handleBtnEditProfile = () => {
    dispatch(setCurrentBoardTab(4))
  }

  const handleSetFriend = async () => {
    if (isFriend) {
      //remove
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/user/friend`,
        {
          recipient: profile._id,
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
          recipient: profile._id,
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
            {profile.username}
          </Typography>
          <AText className="disabled" sx={{ textAlign: 'center' }} mt="8px">
            {profile.accountId}
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
            onClick={handleBtnEditProfile}
          >
            <img src={editIcon} alt="" width="24px" height="24px" />
            &nbsp; edit profile
          </AButton>
        </Box>
      </Grid>
    </Grid>
  )
}
