import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import { Box, Typography, Grid } from '@mui/material'

import MessageIcon from '../../../assets/icons/message-icon-dark.png'
import { AText, AButton } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import type { IUser } from '../../../types/User'
import { SocialButtons } from '../CommunityHub'
import editIcon from '../images/edit-icon.png'

import { Text } from './styled'
export const UserInfo = ({ user, me }: { user: IUser; me?: boolean }) => {
  const dispatch = useAppDispatch()
  const handleBtnEditProfile = () => {
    dispatch(setCurrentBoardTab(4))
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
        {!me && (
          <Box pt="24px" display="flex" justifyContent="center" gap="12px">
            <AButton
              className="primary outlined active"
              color0btn={palette.secondary.light}
            >
              <PeopleOutlinedIcon />
              add friend
            </AButton>
            <AButton
              className="primary outlined active"
              color0btn={palette.secondary.light}
            >
              <Box pr="4px">
                <img src={MessageIcon} alt="" />
              </Box>
              message
            </AButton>
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
