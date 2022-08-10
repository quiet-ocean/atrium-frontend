import Button from '@mui/material/Button'
import * as React from 'react'

import { ModalLayout } from '../../components'

import ProfilePage from './ProfilePage'

const ClubBoard = () => {
  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: 'scroll' }}
      >
        <Box height="100%">
          <ProfilePage />
        </Box>
      </Modal> */}
      <ModalLayout open={open} handleClose={handleClose}>
        <ProfilePage />
      </ModalLayout>
    </>
  )
}

export { ClubBoard }
