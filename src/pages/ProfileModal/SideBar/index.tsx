// import AccountCircle from '@mui/icons-material/AccountCircle'
// import AddBoxIcon from '@mui/icons-material/AddBox'
// import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
// import AdUnitsIcon from '@mui/icons-material/AdUnits'
// import AppsIcon from '@mui/icons-material/Apps'
// import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned'
// import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord'
import { Box, styled } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import { Link } from 'react-router-dom'

import BagIcon from '../../../assets/icons/bag-icon.png'
import BountyIcon from '../../../assets/icons/bounties-icon.png'
import FlagIcon from '../../../assets/icons/flag-icon.png'
import HomeIcon from '../../../assets/icons/inv-icon.png'
import QuestsIcon from '../../../assets/icons/quests-icon.png'
import UsersIcon from '../../../assets/icons/users-icon.png'
import muiTheme from '../../../MuiTheme'

const IconContainer = styled(Box)(() => ({
  background: '',
}))
const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        // backgroundColor: muiTheme.palette.background.default,
        // backgroundColor: '#0E1013',
        backgroundColor: muiTheme.palette.primary.main,
        border: '2px solid',
        borderColor: muiTheme.palette.border.dark,
        display: 'flex',
        flexDirection: 'column',
        gap: muiTheme.spacing(3),
        height: '100%',
        left: 0,
        paddingTop: '30px',
        position: 'fixed',
        top: '159px',
        width: '80px',
        xIndex: muiTheme.zIndex.drawer,
      }}
    >
      <Link to="account">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          sx={{ color: muiTheme.palette.icon.dark }}
        >
          <IconContainer>
            <img src={HomeIcon} alt="" width="100%" height="100%" />
          </IconContainer>
        </IconButton>
      </Link>

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <IconContainer>
          <img src={BountyIcon} alt="" width="100%" height="100%" />
        </IconContainer>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <IconContainer>
          <img src={UsersIcon} alt="" width="100%" height="100%" />
        </IconContainer>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <IconContainer>
          <img src={HomeIcon} alt="" width="100%" height="100%" />
        </IconContainer>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <IconContainer>
          <img src={QuestsIcon} alt="" width="100%" height="100%" />
        </IconContainer>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <IconContainer>
          <img src={FlagIcon} alt="" width="100%" height="100%" />
        </IconContainer>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <IconContainer>
          <img src={BagIcon} alt="" width="100%" height="100%" />
        </IconContainer>
      </IconButton>
    </Box>
  )
}

export default SideBar
