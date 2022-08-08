import Box from '@mui/material/Box'
import * as React from 'react'

import logo from '../../assets/images/atrium-logo-large.png'
import { AButton } from '../elements'

import { PopupMenu } from './PopupMenu'

import './popup-menu.style.scss'

export const PopupMenuGroup = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box width="100%" textAlign={`right`}>
      <AButton p="10px" onClick={handleClick}>
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
