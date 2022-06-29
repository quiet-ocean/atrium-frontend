import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'

const StatusBarContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.background.primary.p3,
  // backgroundColor: '#17181B',
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
  justifyContent: 'center',
  padding: '12px 0px',
}))
const Text = styled(Typography)(() => ({
  alignItems: 'center',
  color: '#80868B',
  display: 'flex',
  fontFamily: 'Fractul',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '32px',
}))

const fontWeight = 600

export const StatusBar = () => {
  return (
    <StatusBarContainer>
      <Text>
        $ATR PRICE:
        <Text sx={{ fontWeight: fontWeight }}> $5.84</Text>
      </Text>
      <Text>
        PLAYERS ONLINE:
        <Text sx={{ fontWeight: fontWeight }}> 104</Text>
      </Text>
      <Text>
        TRANSACTIONS 24H:
        <Text sx={{ fontWeight: fontWeight }}> 526</Text>
      </Text>
      <Text>
        VOLUME 24H:
        <Text sx={{ fontWeight: fontWeight }}> 590,234 $ATR</Text>
      </Text>
    </StatusBarContainer>
  )
}