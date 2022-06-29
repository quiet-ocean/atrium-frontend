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
import { AdornmentInput } from '../AdornmentInput'

import MenuIconList from './MenuIconList'
import { StatusBar } from './StatusBar'
// import * as Styled from './styled'

interface Props {
  onClose: () => void
}


const SearchAppBar: React.FC<Props> = ({ onClose }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: muiTheme.zIndex.appBar,
        background: muiTheme.palette.background.primary.p2
      }}
    >
      <AppBar position="static" sx={{ opacity: 0.9 }}>
        <StatusBar />
        {/* <Toolbar sx={{ backgroundColor: '#0E1013', padding: '12px 0px' }}> */}
        <Toolbar sx={{ padding: '24px 0px', justifyContent: 'space-between' }}>
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
              display: { sm: 'block', xs: 'none' },
              fontFamily: 'Fractul',
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '42px',
              lineHeight: '32px',
              color: '#F8F9FA',
              paddingLeft: '24px'
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
          <Box sx={{ width: '800px'}}>
            <AdornmentInput
              label={`Search the grid...`}
              adornment={<SearchIcon />}
              sx={{
                background: muiTheme.palette.background.primary.p4,
                border: muiTheme.palette.border.dim
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
