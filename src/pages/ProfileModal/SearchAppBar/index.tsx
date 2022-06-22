import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import muiTheme from '../../../MuiTheme'
import { AdornmentInput } from '../AdornmentInput'

import MenuIconList from './MenuIconList'
// import * as Styled from './styled'

interface Props {
  onClose: () => void
}

const Text = styled(Typography)(() => ({
  alignItems: 'center',
  color: '#80868B',
  display: 'flex',
  fontFamily: 'Fractul',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '32px',
}))
const fontWeight = 600
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
      }}
    >
      <AppBar position="static" sx={{ opacity: 0.9 }}>
        <Box
          sx={{
            backgroundColor: '#17181B',
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
            justifyContent: 'center',
            padding: '12px 0px',
          }}
        >
          <Text>
            $ATR PRICE:
            <Text sx={{ fontWeight: fontWeight }}> $5.84</Text>
          </Text>
          <Text>
            PLAYERS ONLINE:
            <Text sx={{ fontWeight: fontWeight }}> 104</Text>
          </Text>
          <Text>
            TRANSACTIONS 24H:
            <Text sx={{ fontWeight: fontWeight }}> 526</Text>
          </Text>
          <Text>
            VOLUME 24H:
            <Text sx={{ fontWeight: fontWeight }}> 590,234 $ATR</Text>
          </Text>
        </Box>
        <Toolbar sx={{ backgroundColor: '#0E1013', padding: '12px 0px' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={onClose}
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
          {/* <Styled.Search>
            <Styled.SearchIconWrapper>
              <SearchIcon />
            </Styled.SearchIconWrapper>
            <Styled.TextInput
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Styled.Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <AdornmentInput
            label={`Search the grid...`}
            adornment={<SearchIcon />}
          />
          <Box sx={{ flexGrow: 1 }} />
          <MenuIconList />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default SearchAppBar
