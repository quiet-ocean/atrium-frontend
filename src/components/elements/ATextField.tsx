import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ATextField = styled(TextField)(({ theme }) => ({
  border: `2px solid ${theme.palette.text.disabled}`,
  borderRadius: 0,
  '&.rounded': {
    borderRadius: '12px',
    '& input, .MuiOutlinedInput-root': {
      borderRadius: '12px',
    }
  },
  '&.default': {
    // background: theme.palette.text.disabled,
    background: 'rgba(242, 242, 242, 0.1)',
  },
  '&.dark': {
    border: `2px solid #2E3134`,
    background: `#202124`,
    color: 'white',
  },
  '& input': {
    padding: '24px',
    fontSize: '24px',
  },
  width: '100%',
}))
