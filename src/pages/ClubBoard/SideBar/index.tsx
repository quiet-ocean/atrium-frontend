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

// import BagIcon from '../../../assets/icons/bag-icon.png'
// import BountyIcon from '../../../assets/icons/bounties-icon.png'
// import FlagIcon from '../../../assets/icons/flag-icon.png'
// // import HomeIcon from '../../../assets/icons/inv-icon.png'
// import QuestsIcon from '../../../assets/icons/quests-icon.png'
// import UsersIcon from '../../../assets/icons/users-icon.png'
import muiTheme from '../../../MuiTheme'

import HomeIcon from '../../../assets/icons/home-icon.png'
import FrameIcon from '../../../assets/icons/frame-icon.png'
import MessageIcon from '../../../assets/icons/message-icon.png'
import ProposalIcon from '../../../assets/icons/proposal-icon.png'
import SettingIcon from '../../../assets/icons/setting-icon.png'

// const Box = styled(Box)(() => ({
//   background: '',
// }))
const IconLink = ({ children, to }: { children: React.ReactNode, to: string }) => {
  return (
    <Link to={`${to}`}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <Box>
          {children}
        </Box>
      </IconButton>
    </Link>
  )
}
const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        // backgroundColor: muiTheme.palette.background.default,
        // backgroundColor: '#0E1013',
        backgroundColor: muiTheme.palette.grey[300],
        border: '2px solid',
        borderColor: muiTheme.palette.border.dark,
        display: 'flex',
        flexDirection: 'column',
        gap: muiTheme.spacing(3),
        height: '100%',
        left: 0,
        paddingTop: '30px',
        position: 'fixed',
        top: '90px',
        width: '80px',
        xIndex: muiTheme.zIndex.drawer,
      }}
    >
      <IconLink to="profile">
        <img src={HomeIcon} alt="" width="100%" height="100%" />
      </IconLink>
      <IconLink to="profile">
        <img src={FrameIcon} alt="" width="100%" height="100%" />
      </IconLink>
      <IconLink to="community-hub">
        <img src={MessageIcon} alt="" width="100%" height="100%" />
      </IconLink>
      <IconLink to="profile">
        <img src={ProposalIcon} alt="" width="100%" height="100%" />
      </IconLink>
      <IconLink to="edit">
        <img src={SettingIcon} alt="" width="100%" height="100%" />
      </IconLink>
      {/* <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <Box>
          <img src={FlagIcon} alt="" width="100%" height="100%" />
        </Box>
      </IconButton>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <Box>
          <img src={BagIcon} alt="" width="100%" height="100%" />
        </Box>
      </IconButton> */}
    </Box>
  )
}

export default SideBar
