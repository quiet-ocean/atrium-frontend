import { Typography, Button } from '@mui/material'

import { palette } from '../../MuiTheme'

type ButtonProps = {
  // fontFamily?: string
  text: string
  icon?: any
  variant?: 'default' | 'primary' | 'secodary' | 'outlined' | 'small'
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
          fontSize: `${
            _variant === 'outlined' ? '' : _variant === 'small' ? '14px' : ''
          }`,
          padding: `${_variant === 'small' ? '4px 16px' : '6px 12px'}`,
          textTransform: 'capitalize !important',
          background: _variant === 'small' ? palette.background.paper : '',
        }}
      >
        {text}
      </Typography>
    </Button>
  )
}
