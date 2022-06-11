import AccountCircle from '@mui/icons-material/AccountCircle'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import AppsIcon from '@mui/icons-material/Apps'
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned'
import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React from 'react'

import muiTheme from '../../../MuiTheme'
console.log(muiTheme)

const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        border: '2px solid',
        borderColor: muiTheme.palette.border.dark,
        borderRadius: muiTheme.shape.borderRadius,
        display: 'flex',
        flexDirection: 'column',
        gap: muiTheme.spacing(3),
        height: '100%',
        left: 0,
        paddingTop: '30px',
        position: 'fixed',
        top: '64px',
        width: '80px',
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.sideBar }}
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.sideBar }}
      >
        <AccountCircle />
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.sideBar }}
      >
        <AddBoxIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.sideBar }}
      >
        <AdUnitsIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.sideBar }}
      >
        <AddToPhotosIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.sideBar }}
      >
        <AppsIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.sideBar }}
      >
        <AssignmentReturnedIcon />
      </IconButton>
    </Box>
  )
}

export default SideBar
