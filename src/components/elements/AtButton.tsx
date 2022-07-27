import { Typography, Button } from '@mui/material'

import { palette } from '../../MuiTheme'
type ButtonProps = {
  // fontFamily?: string
  text: string
  icon?: any
  variant?: 'default' | 'primary' | 'secodary' | 'outlined'
}

export const AtButton: React.FC<ButtonProps> = ({ variant, text, icon }) => {
  const _variant = variant ? variant : 'default'
  return (
    <Button>
      {icon != undefined && icon ? icon : ''}
      <Typography
        sx={{
          border: `${
            variant === 'outlined'
              ? '1px solid ' + palette.primary.main
              : 'none'
          }`,
          color: palette.text.primary,
          fontFamily: `${_variant === 'outlined' ? 'Fractul Alt' : 'Fractul'}`,
          fontSize: `${_variant === 'outlined' ? '' : ''}`,
          padding: '6px 12px',
          textTransform: 'capitalize !important',
        }}
      >
        {text}
      </Typography>
    </Button>
  )
}
