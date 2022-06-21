import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Heading = styled(Typography)(() => ({
  fontFamily: 'Fractul',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '60px',
  lineHeight: '50px',
  textTransform: 'uppercase',
  color: '#F8F9FA',
}))

export const Text = styled(Typography)(() => ({
  fontFamily: 'Andale Mono Regular',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '27px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '-0.05em',
  color: '#9AA0A6',
  margin: '24px 0px',
}))

export const HeadButton = styled(Button)(() => ({
  background: '#202124',
  padding: '4px 16px',
  fontFamily: 'Andale Mono Regular',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '19px',
  color: '#F8F9FA',
}))
export const SubHead = styled(Heading)(() => ({
  fontSize: '36px',
}))
export const Container = styled(Box)(() => ({
  border: '1px solid #D9D9D9',
  padding: '48px',
  marginBottom: '48px',
}))
export const Card = styled(Box)(() => ({
  border: '1px solid #D9D9D9',
  padding: '36px',
  background: '#17181B',
}))
