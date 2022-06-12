import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

export const RootLayout = styled(Paper)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  paddingBottom: '10px',
  paddingLeft: '20px',
  paddingRight: '10px',
  paddingTop: '25px',
  width: '100%',
}))

export const HeaderRow = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  height: 'auto',
  justifyContent: 'space-between',
  width: '100%',
}))
