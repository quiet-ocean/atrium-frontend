import { Box, Typography } from '@mui/material'
// import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem'
// import * as React from 'react'

// import PostIcon from '../../assets/icons/frame-icon.png'
import HomeIcon from '../../assets/icons/home-icon.png'
import MessageIcon from '../../assets/icons/message-icon.png'
import SettingIcon from '../../assets/icons/setting-icon.png'
import WalletIcon from '../../assets/icons/wallet-icon.png'
import avatar from '../../assets/images/avatar-6.png'

export const PopupMenu = ({
  anchorEl,
  handleClose,
}: {
  anchorEl: null | HTMLElement
  handleClose: AnyFunction
}) => {
  const open = Boolean(anchorEl)

  const MenuItemContent = ({ icon, text }: { icon: string; text: string }) => {
    return (
      <Box display="flex" gap="16px" py="12px" width="154px">
        <img src={icon} alt="" width="24px" height="24px" />
        <Box py="2px">
          <Typography variant="h6">{text}</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'top',
        }}
        transformOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        sx={{
          '& .MuiPaper-root': {
            borderRadius: '0px !important',
            padding: '24px',
          },  
          borderRadius: '0px !important',
          padding: '24px',
          // display: 'none',
        }}
      >
        <MenuItem>
          <Box display="flex" gap="12px" py="12px">
            <img
              src={avatar}
              alt=""
              width="32px"
              height="32px"
              style={{ borderRadius: '16px' }}
            />
            <Box py="5px">
              <Typography
                variant="h6"
                sx={{ textDecoration: 'underline', textTransform: 'lowercase' }}
              >
                midnight maverick
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuItemContent icon={HomeIcon} text={`home`} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuItemContent icon={HomeIcon} text={`home`} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuItemContent icon={MessageIcon} text={`messages`} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuItemContent icon={SettingIcon} text={`settings`} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <MenuItemContent icon={WalletIcon} text={`view wallet`} />
        </MenuItem>
        <MenuItem>
          <Typography
            variant="caption"
            sx={{ fontSize: '12px', textDecoration: 'underline' }}
          >
            disconnect wallet
          </Typography>
        </MenuItem>
      </Menu> */}
      <Box className="MuiPaper-root" p="24px" onClick={handleClose}>
        <Box display="flex" gap="12px" py="12px">
          <img
            src={avatar}
            alt=""
            width="32px"
            height="32px"
            style={{ borderRadius: '16px' }}
          />
          <Box py="5px">
            <Typography
              variant="h6"
              sx={{ textDecoration: 'underline', textTransform: 'lowercase' }}
            >
              midnight maverick
            </Typography>
          </Box>
        </Box>
        <MenuItemContent icon={HomeIcon} text={`home`} />
        <MenuItemContent icon={HomeIcon} text={`home`} />
        <MenuItemContent icon={MessageIcon} text={`messages`} />
        <MenuItemContent icon={SettingIcon} text={`settings`} />
        <MenuItemContent icon={WalletIcon} text={`view wallet`} />
        <Box>
          <Typography
            variant="caption"
            sx={{ fontSize: '12px', textDecoration: 'underline' }}
          >
            disconnect wallet
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
