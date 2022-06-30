import { Typography } from '@mui/material'
import styled from '@mui/material/styles/styled'

export const FractulText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Fractul',
  fontStyle: 'normal',
}))

export const AndaleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontFamily: 'Andale Mono Regular',
  fontStyle: 'normal',
}))

export const DisabledText = styled(AndaleText)(({ theme }) => ({
  color: theme.palette.text.disabled,
}))
