import { Box } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import React from 'react'
import { Link } from 'react-router-dom'

import FrameIcon from '../../../assets/icons/frame-icon.png'
import HomeIcon from '../../../assets/icons/home-icon.png'
import MessageIcon from '../../../assets/icons/message-icon.png'
import ProposalIcon from '../../../assets/icons/proposal-icon.png'
import SettingIcon from '../../../assets/icons/setting-icon.png'
import muiTheme from '../../../MuiTheme'

const IconLink = ({
  children,
  to,
}: {
  children: React.ReactNode
  to: string
}) => {
  return (
    <Link to={`${to}`}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        sx={{ color: muiTheme.palette.icon.dark }}
      >
        <Box>{children}</Box>
      </IconButton>
    </Link>
  )
}
const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: muiTheme.palette.grey[300],
        // border: '2px solid',
        borderColor: muiTheme.palette.border.dark,
        display: 'flex',
        flexDirection: 'column',
        gap: muiTheme.spacing(3),
        height: '100%',
        left: 0,
        paddingTop: '30px',
        position: 'absolute',
        top: '136px',
        width: '80px',
        xIndex: muiTheme.zIndex.drawer,
        zIndex: 1,
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
    </Box>
  )
}

export default SideBar
