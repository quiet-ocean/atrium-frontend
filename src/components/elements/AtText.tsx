import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AtText = styled(Typography)(({ theme }) => ({
  '&.disabled': {
    color: theme.palette.text.disabled,
    fontFamily: 'Andale Mono Regular',
    fontSize: '18px',
    fontWeight: '400',
  },
  '&.subtitle': {
    color: theme.palette.text.primary,
    fontSize: '40px',
    fontWeight: 800,
    lineHeight: '32px',
  },
  color: theme.palette.text.primary,
  fontFamily: 'Fractul',
  fontStyle: 'normal',
}))
