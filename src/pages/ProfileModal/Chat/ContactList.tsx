import { Box } from '@mui/material'
import { AtText } from '../../../components'
import { Contact } from './'

export const ContactList = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <AtText className="subtitle" sx={{ fontSize: '24px !important' }}>
          messages
        </AtText>
        <AtText
          className="disabled"
          sx={{ fontSize: '18px !important', padding: '3px' }}
        >
          requests
        </AtText>
      </Box>
      <Box>
        <Contact />
        <Contact />
        <Contact />
        <Contact active />
        <Contact />
        {/* <Contact />
        <Contact /> */}
      </Box>
    </>
  )
}
