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
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Display Name
            </InputLabel>
            <BootstrapInput
              sx={{ width: '100%' }}
              defaultValue=""
              id="bootstrap-input"
            />
          </FormControl>
        </Box>
        <Box sx={{ width: '50%' }}>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Website
            </InputLabel>
            <BootstrapInput
              sx={{ width: '100%' }}
              defaultValue=""
              id="bootstrap-input"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="display website on profile"
          />
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: '50%' }}>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Display Name
            </InputLabel>
            <BootstrapInput
              sx={{ width: '100%' }}
              defaultValue=""
              id="bootstrap-input"
            />
          </FormControl>
        </Box>
        <Box sx={{ width: '50%' }}>
          <FormControl variant="standard" sx={{ width: '100%' }}>
            <InputLabel shrink htmlFor="bootstrap-input">
              Website
            </InputLabel>
            <BootstrapInput
              sx={{ width: '100%' }}
              defaultValue=""
              id="bootstrap-input"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="display website on profile"
          />
        </Box>
      </Stack>
      <Box>
        <InputLabel>Description/Bio</InputLabel>
        <TextField multiline rows={5} maxRows={10} sx={{ width: '100%' }}></TextField>
      </Box>
    </Box>
  )
}
