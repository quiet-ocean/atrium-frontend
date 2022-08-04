// import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'

import logo from '../../../assets/images/atrium-logo.png'
import { AdornmentInput } from '../../../components'
import muiTheme from '../../../MuiTheme'

import MenuIconList from './MenuIconList'
// import { StatusBar } from './StatusBar'

const SearchAppBar: React.FC = () => {
  return (
    <Box
      sx={{
        background: muiTheme.palette.background.paper,
        flexGrow: 1,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: muiTheme.zIndex.appBar,
      }}
    >
      <AppBar position="static" sx={{ opacity: 0.9 }}>
        {/* <StatusBar /> */}
        <Toolbar sx={{ justifyContent: 'space-between', padding: '16px 0px' }}>
          <img src={logo} alt="" />

          <Box sx={{ textAlign: 'center' }}>
            <AdornmentInput
              label={`Search the grid...`}
              adornment={<SearchIcon />}
              sx={{
                background: muiTheme.palette.background.paper,
                border: muiTheme.palette.border.main,
                width: { lg: '560px', md: '100%', sm: '100%', xs: '100%' },
              }}
            />
          </Box>
          <MenuIconList />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SearchAppBar
