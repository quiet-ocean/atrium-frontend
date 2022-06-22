import { Box, TextField, InputLabel } from '@mui/material'

import { Heading, Text } from '../ProfileEdit/styled'
import { TextInput } from '../ProfileEdit/TextInput'
import { UploadButton } from '../ArticleBuilder/styled'

export const FeedbackForm = () => {
  return (
    <Box sx={{ gridArea: 'main', padding: '64px 0px' }}>
      <Box>
        <Heading sx={{ textAlign: 'center' }}>Feedback Form</Heading>
        <Text sx={{ justifyContent: 'center' }}>
          Submit feedback or bug reports to enter a raffle to win an Atrium NFT!
        </Text>
      </Box>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <TextInput label={`Display Name`} />
        <TextInput label={``} />
      </Box>
      <Box sx={{ padding: '24px 0px' }}>
        <InputLabel>Description/Bio</InputLabel>
        <TextField
          multiline
          rows={5}
          maxRows={10}
          sx={{ borderRadius: '0px', width: '100%' }}
        ></TextField>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <UploadButton>Submit</UploadButton>
      </Box>
    </Box>
  )
}
