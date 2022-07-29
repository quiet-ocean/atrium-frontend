import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import SearchIcon from '@mui/icons-material/Search'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront'
import { Box, Button, Typography, ButtonGroup } from '@mui/material'

import { AtText } from '../../../components'
import { palette } from '../../../MuiTheme'
import avatar from '../images/project-image.png'
import { AdornmentInput } from '../ProfileEdit/AdornmentInput'

import { AntSwitch } from './Switch'
import LaunchIcon from '@mui/icons-material/Launch';
export const ContactInfo = () => {
  return (
    <>
      <AdornmentInput
        variant="default"
        label="search conversation"
        adornment={<SearchIcon />}
      />
      <Box
        sx={{
          border: `1px solid ${palette.border.main}`,
          mt: '24px',
          padding: '18px',
        }}
      >
        <Box display="flex" justifyContent="center">
          <img
            src={avatar}
            alt=""
            style={{
              borderRadius: '100%',
              height: '100px',
              width: '100px',
            }}
          />
        </Box>
        <Box p="6px 0px">
          <Box display="flex" justifyContent="center">
            <AtText
              sx={{
                fontSize: '24px',
              }}
            >
              hades
            </AtText>
            <Box pt="7px">
              <LaunchIcon sx={{ color: palette.text.primary }}/>
            </Box>
          </Box>
          <Typography
            sx={{
              color: `${palette.text.disabled}`,
              fontFamily: 'Andale Mono Regular',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            hades.near
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" p="6px 0px">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              sx={{
                border: `1px solid ${palette.border.light}`,
                padding: '12px 36px',
              }}
            >
              <LocalPhoneIcon sx={{ color: 'yellow' }} />
            </Button>
            <Button
              sx={{
                border: `1px solid ${palette.border.light}`,
                padding: '12px 36px',
              }}
            >
              <VideoCameraFrontIcon sx={{ color: 'yellow' }} />
            </Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Box display="flex" p="12px">
            <Box p="4px">
              <AntSwitch />
            </Box>
            <Typography
              sx={{
                color: `${palette.text.primary}`,
                fontFamily: 'Andale Mono Regular',
                textTransform: 'capitalize',
              }}
            >
              notifications
            </Typography>
          </Box>
          <Box display="flex" p="0px 12px">
            <Box p="4px">
              <AntSwitch />
            </Box>
            <Typography
              sx={{
                color: `${palette.text.primary}`,
                fontFamily: 'Andale Mono Regular',
                textTransform: 'capitalize',
              }}
            >
              allow calls
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
