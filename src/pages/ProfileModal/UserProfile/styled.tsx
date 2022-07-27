import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Container = styled(Box)(({ theme }) => ({
  border: `1px solid #2E3134`,
  marginTop: '20px !important',
  padding: '30px',
  background: theme.palette.primary.light,
}))
