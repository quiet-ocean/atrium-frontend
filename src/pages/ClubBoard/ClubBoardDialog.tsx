import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import * as React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import ProfilePage from './ProfilePage'
import { setBoardDialogOpen } from '../../stores/UiStore'
import { ModalLayout } from '../../components'

const ClubBoardDialog = () => {

  const dispatch = useAppDispatch()
  const boardDialogOpen = useAppSelector(state => state.ui.boardDialogOpen)
  // const [open, setOpen] = React.useState(true)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)

  const handleOpen = () => {
    dispatch(setBoardDialogOpen(true))
  }
  const handleClose = () => {
    dispatch(setBoardDialogOpen(false))
  }

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <Modal
        open={boardDialogOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: 'scroll' }}
      >
        <Box height="100%">
          <ProfilePage />
        </Box>
      </Modal> */}
      <ModalLayout open={boardDialogOpen} handleClose={handleClose} >
        <ProfilePage />
      </ModalLayout>

    </>
  )
}

export { ClubBoardDialog }
