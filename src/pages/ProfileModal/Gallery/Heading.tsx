import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../MuiTheme'

const Heading = () => (
  <>
    <Text
      variant="h4"
      sx={{ color: '#fff', fontWeight: 'bold', height: '30px', width: 290 }}
    >
      Gallery
    </Text>
    <Text
      variant="h6"
      sx={{
        color: palette.grey.A700,
        fontWeight: 'bold',
        marginTop: '5px',
        width: 290,
      }}
    >
      View Our NFT Collection
    </Text>
  </>
)

export default Heading
