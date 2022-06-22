import { Typography as Text } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import * as React from 'react'

import AvatarIcon from '../images/AvatarIcon.png'

interface Props {
  comment: string
}

const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '60px',
        }}
      >
        <Avatar src={AvatarIcon} />
      </Box>
      <Card
        sx={{
          backgroundColor: '#404345',
          maxHeight: 100,
          maxWidth: 380,
          minHeight: 100,
          minWidth: 380,
          padding: '10px',
        }}
      >
        <Text sx={{ fontSize: 14 }} color="text.secondary">
          {comment}
        </Text>
      </Card>
    </Box>
  )
}

export default Comment
