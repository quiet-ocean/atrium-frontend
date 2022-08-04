import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

export const AntSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        opacity: 1,
      },
      color: '#fff',
      transform: 'translateX(30px)',
    },
    padding: 2,
  },
  '& .MuiSwitch-thumb': {
    borderRadius: 10,
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    height: 20,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
    width: 20,
  },
  '& .MuiSwitch-track': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255,255,255,.35)'
        : 'rgba(0,0,0,.25)',
    borderRadius: 24 / 2,
    boxSizing: 'border-box',
    opacity: 1,
  },
  '&:active': {
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(30px)',
    },
    '& .MuiSwitch-thumb': {
      width: 20,
    },
  },
  display: 'flex',
  height: 24,
  padding: 0,
  width: 56,
}))
