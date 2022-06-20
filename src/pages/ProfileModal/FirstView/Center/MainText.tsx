import Text from '@mui/material/Typography'
import React from 'react'

interface Props {
  text: string
}

const MainText: React.FC<Props> = ({ text }) => {
  return (
    <Text
      align="center"
      variant="h2"
      sx={{ color: '#fff', fontWeight: 'bold' }}
    >
      {text}
    </Text>
  )
}

export default MainText
