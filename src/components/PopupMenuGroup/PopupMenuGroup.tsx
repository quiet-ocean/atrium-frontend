import Box from '@mui/material/Box'
import * as React from 'react'

import logo from '../../assets/images/atrium-logo-large.png'
import { AButton } from '../elements'

import { PopupMenu } from './PopupMenu'

import './popup-menu.style.scss'
// import { palette } from '../../MuiTheme'

export const PopupMenuGroup = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      width="100%"
      textAlign={`right`}
      sx={{
        bottom: '0px',
        padding: '16px',
        position: 'fixed',
        right: '0px',
      }}
    >
      <AButton
        onClick={handleClick}
        className="primary active"
        color0btn={`rgba(26, 26, 26, 0.8)`}
        sx={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
          padding: '10px',
        }}
      >
        <Box width="56px" height="56px">
          <img src={logo} alt="" width="100%" height="100%" />
        </Box>
      </AButton>
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <PopupMenu anchorEl={anchorEl} handleClose={handleClose} />
    </Box>
  )
}
