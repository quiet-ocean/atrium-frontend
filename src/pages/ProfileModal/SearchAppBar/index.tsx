import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import muiTheme from '../../../MuiTheme'

import MenuIconList from './MenuIconList'
import * as Styled from './styled'

const SearchAppBar: React.FC = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: muiTheme.zIndex.appBar,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: 'block', xs: 'none' } }}
          >
            ATRIUM
          </Typography>
          <Styled.Search>
            <Styled.SearchIconWrapper>
              <SearchIcon />
            </Styled.SearchIconWrapper>
            <Styled.TextInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Styled.Search>
          <Box sx={{ flexGrow: 1 }} />
          <MenuIconList />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SearchAppBar
