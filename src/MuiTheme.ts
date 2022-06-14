import { createTheme as createAtruimTheme } from '@mui/material/styles'

import type { CreateAtrimTheme, AtriumTheme } from './types/AtriumThemeType'
import { assertCast } from './types/AtriumThemeType'
assertCast<CreateAtrimTheme>(createAtruimTheme)

const muiTheme: AtriumTheme = createAtruimTheme({
  palette: {
    background: { default: '#16161A' },
    border: {
      dark: '#1D1F23',
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
    wedget: {
      background: '#121212',
    },
  },
  spacing: 8,
})

export const palette = muiTheme.palette

export default muiTheme
