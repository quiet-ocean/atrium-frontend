import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ATextField = styled(TextField)(({ theme }) => ({
  borderRadius: 0,
  border: `1px solid ${theme.palette.text.primary}`,
}))