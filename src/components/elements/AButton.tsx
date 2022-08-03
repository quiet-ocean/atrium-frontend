import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

type AButtonProps = { btncolor?: string }
export const AButton = styled(Button)<AButtonProps>(({ theme, btncolor }) => ({
  '&.outlined': {
    border: btncolor
      ? `1px solid ${btncolor}`
      : `1px solid ${theme.palette.primary.main}`,
  },
  '&.priamry:hover': {
    background: btncolor ? btncolor : theme.palette.background.paper,
    border: 'none',
    color: theme.palette.text.primary,
  },
  '&.primary': {
    background: 'transparent',
    color: btncolor ? btncolor : theme.palette.text.primary,
  },
  '&.secondary': {
    background: theme.palette.background.paper,
  },
  '&.secondary:hover': {
    border: `1px solid ${theme.palette.text.primary}`,
  },
  borderRadius: '0px',
  color: theme.palette.text.primary,
  fontFamily: 'Fractul Alt',
  textTransform: 'capitalize',
}))
