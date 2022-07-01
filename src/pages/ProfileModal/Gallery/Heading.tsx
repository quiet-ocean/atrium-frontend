import Text from '@mui/material/Typography'
import React from 'react'
import { DisabledText, FractulAltText } from '../../../components/Styled'

import { palette } from '../../../MuiTheme'

const Heading = () => (
  <>
    <FractulAltText
      variant="h4"
      sx={{ color: '#fff', fontWeight: 'bold', height: '30px', width: 290 }}
    >
      Gallery
    </FractulAltText>
    <DisabledText
      variant="h6"
      sx={{
        color: palette.grey.A700,
        marginTop: '5px',
        width: 290,
        fontSize: '16px',
        fontWeight: '400',
        // lineHeight: '18px',
      }}
    >
      View Our NFT Collection
    </DisabledText>
  </>
)

export default Heading
