import { Typography as Text } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import * as React from 'react'
import muiTheme from '../../../../MuiTheme'

import AvatarIcon from '../images/AvatarIcon.png'

interface Props {
  comment: string
}

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <Box sx={{ display: 'flex', gap: '12px' }}>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '60px',
        }}
      >
        <Avatar src={AvatarIcon} sx={{ width: '47px', height: '47px' }} />
      </Box>
      <Card
        sx={{
          backgroundColor: '#FFE721',
          // backgroundColor: muiTheme.palette.background.primary.yellow,
          // maxHeight: 100,
          maxWidth: 380,
          minHeight: 100,
          minWidth: 380,
          padding: '12px',
          borderRadius: '0px',
        }}
      >
        <Text sx={{
          fontFamily: 'Andale Mono Regular',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '16px',
          display: 'flex',
          alignItems: 'center',
          letterSpacing: '-0.05em',
          // color: #0E1013,
        }} color="text.secondary">
          {comment}
        </Text>
      </Card>
    </Box>
  )
}

export default Comment
