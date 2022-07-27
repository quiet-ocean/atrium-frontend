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
    <Button
      sx={{
        background:
          _variant === 'small'
            ? palette.background.paper
            : _variant === 'default'
            ? '#2E3134'
            : '',
        border: `${
          variant === 'outlined' ? '1px solid ' + palette.primary.main : 'none'
        }`,
        borderRadius: '0px',
        padding:
          _variant === 'small'
            ? '4px 16px'
            : _variant === 'default'
            ? '12px 24px'
            : '6px 12px',
      }}
    >
      {icon != undefined && icon ? icon : ''}
      <Typography
        sx={{
          color: palette.text.primary,
          fontFamily: `${_variant === 'outlined' ? 'Fractul Alt' : 'Fractul'}`,
          fontSize: `${
            _variant === 'outlined'
              ? ''
              : _variant === 'small'
              ? '14px'
              : _variant === 'default'
              ? '20px'
              : ''
          }`,
          fontWeight: _variant === 'default' ? '800' : '',
          textTransform: 'capitalize !important',
        }}
      >
        {text}
      </Typography>
    </Button>
  )
}
