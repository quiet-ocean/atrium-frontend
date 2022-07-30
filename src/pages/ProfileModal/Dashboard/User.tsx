import { Box, Typography } from '@mui/material'
import avatar from '../images/profile-avatar.png'

export const User = ({ name }: { name: string }) => {
  return (
    <Box display="flex">
      <Box width="24px" height="24px">
        <img src={avatar} alt="" width="100%" height="100%" />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Fractul Alt',
          fontSize: '16px',
          fontWeight: '600',
          letterSpacing: '0em',
          lineHeight: '17px',
          padding: '3px 10px',
          textAlign: 'left',
        }}
      >
        {name}
      </Typography>
    </Box>
  )
}
