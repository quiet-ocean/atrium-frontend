import {
  Stack,
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  FormControlLabel,
  TextField,
} from '@mui/material'
import React from 'react'

import { SubTitle, Text, BootstrapInput } from './styled'
import { TextInput } from './TextInput'

export const Identity = () => {
  return (
    <Box>
      <Box>
        <SubTitle>Profile Information</SubTitle>
        <Text>
          Connect your socials to allow people to check out your awesome social
          media pages.
        </Text>
      </Box>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: '50%' }}>
          <TextInput label={`Display Name`} />
        </Box>
        <Box sx={{ width: '50%' }}>
          <TextInput label={`Website`} />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Display Website on Profile"
          />
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: '50%' }}>
          <TextInput label={`Email Address`} />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Display Email on Profile"
          />
        </Box>
        <Box sx={{ width: '50%' }}>
          <TextInput label={`Birthday`} />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Display Email on Profile"
          />
        </Box>
      </Stack>
      <Box sx={{ padding: '24px 0px' }}>
        <InputLabel>Description/Bio</InputLabel>
        <TextField
          multiline
          rows={5}
          maxRows={10}
          sx={{ width: '100%' }}
        ></TextField>
      </Box>
    </Box>
  )
}
