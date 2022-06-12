import { createTheme as createAtruimTheme } from '@mui/material/styles'

import type { CreateAtrimTheme, AtriumTheme } from './AtriumThemeType'
import { assertCast } from './AtriumThemeType'
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
  },
  spacing: 8,
})

export const palette = muiTheme.palette

export default muiTheme
