import { createTheme as createAtruimTheme } from '@mui/material/styles'

import type { CreateAtrimTheme, AtriumTheme } from './types/AtriumThemeType'
import { assertCast } from './types/AtriumThemeType'
assertCast<CreateAtrimTheme>(createAtruimTheme)

export const colors = {
  alertBlue: '#486DF3',
  alertRed: '#E33E3E',
  alertYellow: '#DBE96B',
  black: '#21E0A5',
  grey1: '#4A4A4A',
  grey2: '#B8B8B8',
  grey3: '#EDEDED',
  offBlack: '#D83956',
  offWhite: '#75B863',
  primaryBlue: '#952B87',
  primaryRed: '#463586',
  primaryYellow: '#15707C',
}
const muiTheme: AtriumTheme = createAtruimTheme({
  palette: {
    background: {
      // black: 'black',
      default: '#0E1013',
      paper: '#202124',
    },
    border: {
      dark: '#1D1F23',
      light: '#80868B',
      main: '#3C4043',
    },
    colors: {
      red: '#E90026',
      yellow: '#FFE721',
    },
    // color: {
    //   error: '#FFE721',
    //   gray: '#80868B',
    // },
    error: {
      500: '#FFE721',
    },
    icon: {
      dark: '#898F94',
    },
    mode: 'dark',
    primary: {
      dark: '#131313',

      light: '#17181B',
      // main: '#426dea',
      main: '#1A1A1A',
    },
    secondary: {
      // main: '#42eacb',
      main: '#FFE721', //yellow
      // main: '',
    },
    text: {
      disabled: '#80868B',

      // gray: '#80868B',
      // primary: '#F8F9FA', //white
      primary: colors.offWhite,
      //dark
      secondary: '#0E1013',
      // primary: '#FFF',
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
