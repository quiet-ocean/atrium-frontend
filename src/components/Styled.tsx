import { Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'

export const FractulText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Fractul',
  fontStyle: 'normal',
  color: theme.palette.text.primary,
}))

export const AndaleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Andale Mono Regular',
  fontStyle: 'normal',
  color: theme.palette.text.primary,
}))

export const DisabledText = styled(AndaleText)(({ theme }) => ({
  color: theme.palette.text.disabled,
}))