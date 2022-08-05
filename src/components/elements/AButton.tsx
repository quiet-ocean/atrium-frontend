import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

type AButtonProps = { color0btn?: string }
export const AButton = styled(Button)<AButtonProps>(({ theme, color0btn }) => ({
  '&.disabled': {
    textTransform: 'uppercase',
  },
  '&.large': {
    fontSize: '36px',
    padding: '24px 120px',
  },
  '&.medium': {
    fontSize: '18px',
    padding: '16px 20px',
  },
  '&.outlined': {
    border: color0btn
      ? `1px solid ${color0btn} !important`
      : `1px solid ${theme.palette.primary.main}`,
  },
  '&.primary': {
    background: 'transparent',
    color: `${color0btn ? color0btn : theme.palette.text.primary} !important`,
  },
  '&.primary:hover, &.active': {
    background: color0btn ? color0btn : theme.palette.background.paper,
    border: '1px solid transparent !important',
    color: `${theme.palette.background.paper} !important`,
  },
  '&.rounded': {
    '& *': {
      margin: '0px',
    },
    background: color0btn ? color0btn : theme.palette.background.paper,
    borderRadius: '100px',
    padding: '16px',
  },
  '&.secondary': {
    background: theme.palette.background.paper,
    color: `${theme.palette.text.primary} !important`,
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
    background: theme.palette.text.disabled,
    border: `1px solid transparent`,
    color: theme.palette.background.paper,
  },
  '&.tag-large': {
    fontSize: '18px',
    padding: '6px 16px',
  },
  '&.tag-primary': {},
  '&.tag-secondary': {
    background: `${color0btn}`,
    border: `1px solid ${color0btn}`,
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
