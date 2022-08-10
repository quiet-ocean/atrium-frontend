import CloseIcon from '@mui/icons-material/Close'
import { Box, Modal } from '@mui/material'

import SideBar from '../pages/ClubBoard/SideBar'

export const ModalLayout = ({
  open,
  handleClose,
  children,
}: {
  open: boolean
  handleClose: AnyFunction
  children: React.ReactNode
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ margin: 'auto', pt: '120px', width: '80%' }}
    >
      {/* <ProfilePage onClose={handleClose} /> */}
      <Box height="100%" position="relative">
        <Box display="flex" justifyContent="end" position="relative">
          <Box
            sx={{
              background: '#1a1a1a',
              bottom: '0px',
              height: '10px',
              position: 'absolute',
              width: '100%',
            }}
          />
          <Box
            sx={{
              // border: '1px solid red',
              background: '#1a1a1a',

              clipPath: 'polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%)',
              color: 'white',
              display: 'flex',
              padding: '8px 12px 8px 56px',
            }}
            onClick={handleClose}
          >
            <CloseIcon sx={{ color: 'white' }} />
          </Box>
        </Box>
        <SideBar />
        <Box height="100%" sx={{ overflowY: 'scroll' }}>
          {children}
        </Box>
      </Box>
    </Modal>
  )
}
