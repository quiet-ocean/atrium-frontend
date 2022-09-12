import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import PushPinIcon from '@mui/icons-material/PushPin'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import { Box, Typography, IconButton, Popover, Popper } from '@mui/material'
import { useState, useEffect, useRef, ReactNode } from 'react'

import { AdornmentInput } from '../../../components'
import { palette } from '../../../MuiTheme'
import { Community as Container } from '../styled'

import { EmojiDialog } from './EmojiDialog'

export const LiveChat = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const handlePopperOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handlePopperClose = () => {
    setAnchorEl(null)
  }
  const handleClose = (e: Event) => {
    console.log(e.target, dialogRef.current?.contains(e.target))
    if (!dialogRef.current?.contains(e.target)) {
      handlePopperClose()
    }
  }
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popper' : undefined

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClose)
    } else {
      document.removeEventListener('click', handleClose)
    }

    return () => document.removeEventListener('click', handleClose)
  }, [open])
  return (
    <Container height="100%">
      <Box height="100%" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h2">live chat</Typography>
          <Box display="flex" gap="6px">
            <PushPinIcon
              sx={{
                color: palette.secondary.light,
                transform: 'rotate(45deg)',
              }}
            />
            <ZoomOutMapIcon sx={{ color: palette.secondary.light }} />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          mt="24px"
          sx={{
            borderTop: `1px solid ${palette.text.primary}`,
          }}
        >
          <Box
            sx={{
              height: '512px',
              mt: '12px',
              overflowY: 'scroll',
            }}
          >
            {/* <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem /> */}
          </Box>
          <Box>
            <AdornmentInput
              adornment={
                <IconButton
                  aria-describedby={id}
                  onMouseEnter={handlePopperOpen}
                  // onMouseLeave={handlePopperClose}
                >
                  <InsertEmoticonIcon />
                </IconButton>
              }
              label="type here..."
              variant="default"
              sx={{
                background: palette.background.paper,
                border: palette.border.main,
              }}
            />
          </Box>
        </Box>
        {/* <button aria-describedby={id} type="button" onClick={handleClick}>
          Toggle Popper
        </button> */}
        <Popper
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement={`top-end`}
          sx={{ zIndex: 10000 }}
        >
          <Box pb={2}>
            <Box sx={{ bgcolor: 'background.paper', border: 1, p: 1 }}>
              <EmojiDialog ref={dialogRef} />
            </Box>
          </Box>
        </Popper>
      </Box>
    </Container>
  )
}
