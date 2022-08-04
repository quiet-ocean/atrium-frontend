import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import * as React from 'react'

import ProfilePage from './ProfilePage'

const ClubBoard = () => {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: 'scroll' }}
      >
        {/* <ProfilePage onClose={handleClose} /> */}
        <Box>
          <ProfilePage />
        </Box>
      </Modal>
    </>
  )
}

export { ClubBoard }
