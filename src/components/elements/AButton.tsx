import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

type AButtonProps = { btn0color?: string }
export const AButton = styled(Button)<AButtonProps>(({ theme, btn0color }) => ({
  '&.disabled': {
    textTransform: 'uppercase',
  },
  '&.outlined': {
    border: btn0color
      ? `1px solid ${btn0color} !important`
      : `1px solid ${theme.palette.primary.main}`,
  },
  '&.primary': {
    background: 'transparent',
    color: `${btn0color ? btn0color : theme.palette.text.primary} !important`,
  },
  '&.primary:hover, &.active': {
    background: btn0color ? btn0color : theme.palette.background.paper,
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
  '&.tag-active': {
    background: theme.palette.text.secondary,
    border: `1px solid transparent`,
    color: theme.palette.background.paper,
  },
  '&.tag-large': {
    fontSize: '18px',
    padding: '6px 16px',
  },
  '&.tag-primary': {},
  '&.tag-secondary': {
    background: `${btn0color}`,
    border: `1px solid ${btn0color}`,
    borderRadius: '54px',
    color: theme.palette.primary.dark,
    fontFamily: 'Andale Mono Regular',
  },
  '&.tag-small': {
    fontSize: '12px',
    padding: '4px 10px',
  },
  '&.tag:hover': {
    border: `1px solid ${theme.palette.text.primary}`,
    color: theme.palette.text.primary,
  },
  background: 'transparent',
  border: `1px solid transparent`,
  borderRadius: '0px',
  color: theme.palette.text.primary,
  fontFamily: 'Fractul Alt',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '100%',
  textTransform: 'capitalize',
}))
