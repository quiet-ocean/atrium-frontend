import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

type AButtonProps = { btnColor?: string }
export const AButton = styled(Button)<AButtonProps>(({ theme, btnColor }) => ({
  '&.disabled': {
    textTransform: 'uppercase',
  },
  '&.outlined': {
    border: btnColor
      ? `1px solid ${btnColor} !important`
      : `1px solid ${theme.palette.primary.main}`,
  },
  '&.primary': {
    background: 'transparent',
    color: `${btnColor ? btnColor : theme.palette.text.primary} !important`,
  },
  '&.primary:hover, &.active': {
    background: btnColor ? btnColor : theme.palette.background.paper,
    border: '1px solid transparent !important',
    color: `${theme.palette.background.paper} !important`,
  },
  '&.secondary': {
    background: theme.palette.background.paper,
  },
  '&.secondary:hover': {
    border: `1px solid ${theme.palette.text.primary}`,
  },
  '&.tag': {
    border: `1px solid ${theme.palette.text.secondary}`,
    borderRadius: '54px',
    color: theme.palette.text.secondary,
    fontFamily: 'Andale Mono Regular',
  },
  '&.tag-primary': {

  },
  '&.tag-secondary': {
    border: `1px solid ${btnColor}`,
    borderRadius: '54px',
    color: theme.palette.primary.dark,
    background: `${btnColor}`,
    fontFamily: 'Andale Mono Regular',
  },
  '&.tag-active': {
    background: theme.palette.text.secondary,
    border: `1px solid transparent`,
    color: theme.palette.background.paper,
  },
  '&.tag-large': {
    fontSize: '18px',
    padding: '6px 16px',
  },
  '&.tag-small': {
    fontSize: '12px',
    padding: '4px 10px',
  },
  '&.tag:hover': {
    border: `1px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.primary,
  },
  borderRadius: '0px',
  color: theme.palette.text.primary,
  fontFamily: 'Fractul Alt',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '100%',
  textTransform: 'capitalize',
}))
