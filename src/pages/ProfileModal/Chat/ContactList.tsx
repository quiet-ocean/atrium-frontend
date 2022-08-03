import { Box } from '@mui/material'

import { AText } from '../../../components'

import { Contact } from './'

export const ContactList = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <AText className="subtitle" sx={{ fontSize: '24px !important' }}>
          messages
        </AText>
        <AText
          className="disabled"
          sx={{
            fontFamily: 'Fractul Alt !important',
            fontSize: '18px !important',
            fontWeight: 300,
            padding: '3px',
          }}
        >
          requests
        </AText>
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
