import { createTheme as createAtruimTheme } from '@mui/material/styles'

import type { CreateAtrimTheme, AtriumTheme } from './types/AtriumThemeType'
import { assertCast } from './types/AtriumThemeType'
assertCast<CreateAtrimTheme>(createAtruimTheme)

const muiTheme: AtriumTheme = createAtruimTheme({
  palette: {
    background: { default: '#16161A' },
    border: {
      dark: '#1D1F23',
      gray: '#80868B',
    },
    icon: {
      dark: '#898F94',
    },
    mode: 'dark',
    primary: {
      main: '#426dea',
    },
    secondary: {
      main: '#42eacb',
    },
    text: {
      primary: '#fff',
      gray: '#80868B',
    },
    wedget: {
      background: '#121212',
    },
    color: {
      gray: '#80868B'
    },
  },
  spacing: 8,
})

export const palette = muiTheme.palette

export default muiTheme
