import React from 'react'
import { Typography, Button } from '@mui/material'

import { palette } from '../../MuiTheme'

type ButtonProps = {
  // fontFamily?: string
  text: string
  icon?: React.ReactNode
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
            : _variant === 'primary'
            ? palette.background.paper
            : '',
        border: `${
          variant === 'outlined' ? '1px solid ' + palette.primary.main : 'none'
        }`,
        borderRadius: '0px',
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        padding:
          _variant === 'small'
            ? '4px 16px'
            : _variant === 'default' || _variant === 'primary'
            ? '12px 24px'
            : '6px 12px',
      }}
    >
      {icon != undefined && icon ? icon : ''}
      <Typography
        sx={{
          color: palette.text.primary,
          fontFamily:
            _variant === 'outlined'
              ? 'Fractul Alt'
              : _variant === 'primary'
              ? 'Andale Mono Regular'
              : 'Fractul',
          fontSize: `${
            _variant === 'outlined'
              ? ''
              : _variant === 'small'
              ? '14px'
              : _variant === 'default'
              ? '20px'
              : _variant === 'primary'
              ? '16px'
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
