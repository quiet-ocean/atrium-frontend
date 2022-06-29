import { createTheme as createAtruimTheme } from '@mui/material/styles'

import type { CreateAtrimTheme, AtriumTheme } from './types/AtriumThemeType'
import { assertCast } from './types/AtriumThemeType'
assertCast<CreateAtrimTheme>(createAtruimTheme)

const muiTheme: AtriumTheme = createAtruimTheme({
  palette: {
    background: {
      black: 'black',
      default: '#16161A',
      primary: {
        p1: '#0E1013',
        p2: '#1A1A1A', //black90
        p3: '#131313',
        p4: '#17181B',
      },
      red: '#E90026',
      yellow: '#FFE721',
    },
    border: {
      dark: '#1D1F23',
      dim: '#3C4043',
      gray: '#80868B',
    },
    color: {
      error: '#FFE721',
      gray: '#80868B',
    },
    error: {
      500: '#FFE721',
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
      gray: '#80868B',
      light: '#F8F9FA',
      primary: '#fff',
    },
    widget: {
      background: '#121212',
    },
  },
  spacing: 8,
})

export const palette = muiTheme.palette

export default muiTheme

// fontFamily: 'Fractul',
// fontStyle: 'normal',
// fontWeight: 800,
// fontSize: '42px',
// lineHeight: '32px',
// /* identical to box height, or 76% */

// display: 'flex';
// align-items: 'center';

// color: '#F8F9FA';
