import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import MenuItemList from './MenuItemList'
import * as Styled from './styles'

const SearchAppBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <MenuItemList />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SearchAppBar
