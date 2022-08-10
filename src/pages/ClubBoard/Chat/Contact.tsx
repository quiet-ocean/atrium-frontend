import { Box, Typography } from '@mui/material'

import { OnlineIcon } from '../UserProfile/styled'
import { UserProps } from './'

export const Contact = ({ user, active }: { user: UserProps, active?: boolean }) => {
  return (
    <Box p="12px 0px">
      <Box
        display="flex"
        gap="12px"
        border={`${active ? '2px solid yellow' : '2px solid transparent'}`}
      >
        <img src={`/images/avatar-${user.walletId}.png`} alt="" width="74px" height="74px" />
        <Box p="12px">
          <Typography variant="h5" sx={{ fontSize: '20px', textTransform: 'lowercase' }}>{user.name}</Typography>
          <Box display="flex" gap="8px" pt="3px">
            <Box p="3px 0px">
              <OnlineIcon />
            </Box>
            <Typography variant="caption" sx={{ fontSize: '12px !important' }} py="3px">
              {user.status}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
