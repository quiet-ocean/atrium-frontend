import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
import * as React from 'react'

import logo from '../../assets/images/atrium-logo-large.png'
import { AButton } from '../elements'

import { PopupMenu } from './PopupMenu'

import './popup-menu.style.scss'
// import { palette } from '../../MuiTheme'

export const PopupMenuGroup = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [open, setOpen] = React.useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(!open)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  return (
    <Box
      // width="100%"
      textAlign={`right`}
      sx={{
        background: 'rgba(26, 26, 26, 0.8)',
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))`,
        bottom: '0px',
        margin: '16px',
        position: 'fixed',
        right: '0px',
        // width: 'auto',
        // height: 'auto',
      }}
      className={open ? `popup-menu-group` : ``}
    >
      <AButton
        onClick={handleClick}
        className=""
        // color0btn={`rgba(26, 26, 26, 0.8)`}
        sx={{
          background: 'rgba(26, 26, 26, 0.8) !important',
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)) !important`,
          bottom: '0px',
          padding: '10px',
          position: 'absolute',
          right: '0px',
        }}
      >
        <Box width="56px" height="56px" className={`popup-button`}>
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
