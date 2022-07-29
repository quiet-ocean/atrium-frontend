import { Box, Typography } from '@mui/material'

import { palette } from '../../../MuiTheme'
import avatar from '../images/avatar-1.png'

export const Message = ({ sent }: { sent?: boolean }) => {
  return (
    <Box
      display="flex"
      flexDirection={`${sent ? 'row-reverse' : 'row'}`}
      my="24px"
      gap="12px"
    >
      <Box>
        <img
          src={avatar}
          alt=""
          width="47px"
          height="47px"
          style={{
            border: `1px solid ${palette.primary.main}`,
            borderRadius: '100%',
          }}
        />
      </Box>
      <Box
        width="80%"
        sx={{
          background: sent ? 'yellow' : palette.background.paper,
          border: !sent ? `1px solid ${palette.border.main}` : ``,
          padding: '24px',
        }}
      >
        <Typography
          sx={{
            color: `${sent ? palette.text.secondary : palette.text.primary}`,
            fontFamily: 'Andale Mono Regular',
          }}
        >
          This is a sample message
        </Typography>
      </Box>
    </Box>
  )
}
