import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

import { AtText } from '../../../components'
import { palette } from '../../../MuiTheme'

import { Comments } from './Comments'

export const RefText = styled(Typography)(() => ({
  fontFamily: 'Andale Mono Regular',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '30px',
  /* identical to box height, or 148% */

  display: 'flex',
  alignItems: 'center',
  letterSpacing: '-0.05em',
  textTransform: 'uppercase',
}))
export const PostItem = ({ variant }: { variant?: 'long' | 'short' }) => {
  return (
    <Box sx={{ border: `1px solid ${palette.text.primary}`, padding: '16px' }}>
      <Box display="flex" justifyContent="space-between">
        <AtText sx={{ fontSize: '60px', fontWeight: 600, maxWidth: '640px' }}>spotify integrating with atrium</AtText>
        <Box>
          <RefText>//mar 1st, 2022</RefText>
        </Box>
      </Box>
      <AtText
        className="disabled"
        sx={{
          display: `${variant === 'long' ? 'block' : 'none'}`,
          fontSize: '24px !important',
          fontWeight: '400 !important',
          mt: '48px',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam in
        purus maecenas nisl tincidunt. Nascetur justo adipiscing ...
      </AtText>
      <Comments />
    </Box>
  )
}
