import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../../MuiTheme'

interface Props {
  text: string
}

const SubText: React.FC<Props> = ({ text }) => {
  return (
    <Text
      variant="h6"
      sx={{ color: palette.text.secondary, letterSpacing: '3px' }}
    >
      {text}
    </Text>
  )
}

export default SubText
