import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'

export const Search = styled('div')(({ theme }) => ({
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  backgrondColor: 'transparent',
  border: '1px solid #2E3134',
  // borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  marginRight: theme.spacing(2),
  position: 'relative',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  borderRadius: '0px',
  display: 'flex',
}))

export const SearchIconWrapper = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  // padding: theme.spacing(0, 2),
  padding: '0px 6px',
  pointerEvents: 'none',
  position: 'absolute',
  right: '0px'
}))

export const TextInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: `8px`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontWeight: 400,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  color: 'inherit',
}))
