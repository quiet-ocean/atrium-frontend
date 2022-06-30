import Text from '@mui/material/Typography'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import Box from '@mui/material/Box'
import muiTheme from '../../../../MuiTheme';

interface Props {
  text: string
}

const MainText: React.FC<Props> = ({ text }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
      <Text
        align="center"
        variant="h2"
        sx={{
          color: muiTheme.palette.text.primary,
          fontWeight: 800,
          fontStyle: 'normal',
          fontFamily: 'Fractul',
          fontSize: '40px'
        }}
      >
        {text}
      </Text>
      <Box sx={{ padding: '4px' }}>
        <VerifiedIcon sx={{ fontSize: '40px', color: muiTheme.palette.background?.yellow }} />
      </Box>
    </Box>
  )
}

export default MainText
