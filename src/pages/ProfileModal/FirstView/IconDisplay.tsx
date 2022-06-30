import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Text from '@mui/material/Typography'
import React from 'react'
import muiTheme from '../../../MuiTheme'

// import { palette } from '../../../MuiTheme'

import AvaterImg from './Avatar.png'

type Props = {
  caption: string
  value: string
}
const DisplayPaper: React.FC<Props> = (props: Props) => {

  return (
    <Paper variant="outlined" sx={{
      padding: '5px 20px',
      }}
    >
      <Text variant="caption" sx={{
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '12px',
        lingHeight: '15px',
        color: muiTheme.palette.text.primary,
        }}
      >{props.caption}</Text>
      <Text sx={{
        fontFamliy: 'Fractul',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '18px',
        lineHeight: '22px',
        color: muiTheme.palette.text.primary,
        textAlign: 'center',
        }}
      >{props.value}</Text>
    </Paper>
  )
}
const IconDisplay = () => {
  return (
    <Box
      sx={{
        // backgroundColor: palette.widget.background,
        display: 'flex',
        gap: '20px',
        // height: 60,
        height: 116,
        justifyContent: 'center',
        width: '100%',
        padding: '24px',
      }}
    >
      <DisplayPaper caption={`Supply`} value={`5000`} />
      <DisplayPaper caption={`Listed`} value={`313`} />
      
      {/* <Paper variant="outlined" sx={{ padding: '5px 20px' }}>
        <Text variant="caption">Listed</Text>
        <Text sx={{ fontWeight: 'bold' }}>313</Text>
      </Paper> */}
      <Box sx={{ bottom: '70px', position: 'relative' }}>
        <img src={AvaterImg} width="160" height="160" />
      </Box>
      <DisplayPaper caption={`Floor Price`} value={`20 Ⓝ`} />
      <DisplayPaper caption={`Vol. All Time`} value={`93,420 Ⓝ`} />
      {/* <Paper variant="outlined" sx={{ padding: '5px 20px' }}>
        <Text variant="caption">Floor Price</Text>
        <Text sx={{ fontWeight: 'bold' }}>20</Text>
      </Paper>
      <Paper variant="outlined" sx={{ padding: '5px 20px' }}>
        <Text variant="caption">Vol. All Time</Text>
        <Text sx={{ fontWeight: '900' }}>93,420</Text>
      </Paper> */}
    </Box>
  )
}

export default IconDisplay
