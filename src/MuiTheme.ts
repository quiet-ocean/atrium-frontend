import { createTheme as createAtruimTheme } from '@mui/material/styles'

import type { CreateAtrimTheme, AtriumTheme } from './types/AtriumThemeType'
import { assertCast } from './types/AtriumThemeType'
assertCast<CreateAtrimTheme>(createAtruimTheme)

export const colors = {
  black: '#21E0A5',
  grey1: '#4A4A4A',
  grey2: '#B8B8B8',
  grey3: '#EDEDED',
  offBlack: '#1A1A1A',
  offWhite: '#F2F2F2',
  primaryBlue: '#0049D1',
  primaryRed: '#D11F00',
  primaryYellow: '#FFDC00',
}

const muiTheme: AtriumTheme = createAtruimTheme({
  palette: {
    background: {
      default: '#80868B',
      paper: '#252525', //CONTAINER
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
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    error: {
      500: '#FFE721',
    },
    grey: {
      100: colors.grey3,
      200: colors.grey2,
      300: colors.grey1,
    },
    icon: {
      dark: '#898F94',
    },
    mode: 'dark',
    primary: {
      dark: colors.offBlack,
      main: '#303234', //LINE & GRID,
    },
    secondary: {
      dark: colors.primaryBlue,
      light: colors.primaryYellow,
      main: colors.primaryRed,
    },
    text: {
      disabled: '#a8a8a8',
      primary: colors.offWhite, //ICONS ON BACKGROUND
      secondary: '#80868B', //TEXT IN ICON/CONTAINER
    },
    widget: {
      background: '#121212',
    },
  },
  spacing: 8,
})

export const palette = muiTheme.palette

export default muiTheme
