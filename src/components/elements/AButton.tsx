import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AButton = styled(Button)(({ theme }) => ({
  '&.community': {
    background: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    padding: '6px 8px',
  },
  '&.outlined': {
    border: `1px solid ${theme.palette.grey}`,
  },
  '&.small': {
    padding: '6px 8px',
  },
  '&.secondary': {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
  },
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '0px',
  fontFamily: 'Fractul Alt',
  textTransform: 'capitalize',
}))
