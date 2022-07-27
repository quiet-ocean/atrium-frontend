import { Box } from '@mui/material'

import { AtText } from '../../../components'
import { palette } from '../../../MuiTheme'

import { Comments } from './Comments'

export const PostItem = ({ variant }: { variant?: 'long' | 'short' }) => {
  return (
    <Box sx={{ border: `1px solid ${palette.text.primary}`, padding: '12px' }}>
      <AtText sx={{ fontSize: '60px' }}>spotify integrating with atrium</AtText>
      <AtText
        className="disabled"
        sx={{
          display: `${variant === 'long' ? 'block' : 'none'}`,
          fontSize: '24px !important',
          fontWeight: '400 !important',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam in
        purus maecenas nisl tincidunt. Nascetur justo adipiscing ...
      </AtText>
      <Comments />
    </Box>
  )
}
