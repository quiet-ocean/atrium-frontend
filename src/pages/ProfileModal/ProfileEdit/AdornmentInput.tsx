import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material'

import { palette } from '../../../MuiTheme'

export const AdornmentInput: React.FC<{
  adornment: React.ReactNode
  label: string
  variant?: 'primary' | 'default' | undefined
}> = ({ adornment, label, variant }) => {
  return (
    <FormControl
      sx={{ width: variant === 'default' ? '100%' : '350px' }}
      variant="outlined"
    >
      <InputLabel
        htmlFor="outlined-adornment-password"
        sx={{
          color: palette.text.disabled,
          fontSize: '16px',
          textTransform: 'capitalize',
        }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        sx={{ borderRadius: '0px', fontSize: '18px', height: '100%' }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              {adornment}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  )
}
