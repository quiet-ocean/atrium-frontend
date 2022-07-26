// import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
// import IconButton from '@mui/material/IconButton'
// import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import muiTheme from '../../../MuiTheme'
import { AdornmentInput } from '../_AdornmentInput'

import MenuIconList from './MenuIconList'
import { StatusBar } from './StatusBar'

const SearchAppBar: React.FC = () => {
  return (
    <Box
      sx={{
        background: muiTheme.palette.primary.main,
        flexGrow: 1,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: muiTheme.zIndex.appBar,
      }}
    >
      <AppBar position="static" sx={{ opacity: 0.9 }}>
        <StatusBar />
        {/* <Toolbar sx={{ backgroundColor: '#0E1013', padding: '12px 0px' }}> */}
        <Toolbar sx={{ justifyContent: 'space-between', padding: '24px 0px' }}>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={onClose}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: '#F8F9FA',
              display: { sm: 'block', xs: 'none' },
              fontFamily: 'Fractul',
              fontSize: '42px',
              fontStyle: 'normal',
              fontWeight: 800,
              lineHeight: '32px',
              paddingLeft: '24px',
            }}
          >
            ATRIUM
          </Typography>
          {/* <Styled.Search>
            <Styled.SearchIconWrapper>
              <SearchIcon />
            </Styled.SearchIconWrapper>
            <Styled.TextInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Styled.Search> */}
          <Box sx={{ width: '900px' }}>
            <AdornmentInput
              label={`Search the grid...`}
              adornment={<SearchIcon />}
              sx={{
                background: muiTheme.palette.primary.light,
                border: muiTheme.palette.border.main,
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
