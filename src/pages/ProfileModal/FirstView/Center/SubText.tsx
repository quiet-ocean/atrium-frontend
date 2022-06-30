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
      sx={{
        fontFamily: 'Andale Mono Regular',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '22px',
        textAlign: 'center',
        letterSpacing: '-0.05em',
        color: palette.text.disabled,
      }}
    >
      {text}
    </Text>
  )
}

export default SubText
