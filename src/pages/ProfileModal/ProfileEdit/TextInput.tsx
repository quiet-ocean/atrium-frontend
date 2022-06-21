import { FormControl, InputLabel } from '@mui/material'

import { BootstrapInput } from './styled'

export const TextInput: React.FC<{ label }> = ({
  label
}: {
  label: string
}) => {
  return (
    <FormControl variant="standard" sx={{ width: '100%' }}>
      <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: '18px' }}>
        {label}
      </InputLabel>
      <BootstrapInput
        sx={{ width: '100%' }}
        defaultValue=""
        id="bootstrap-input"
      />
    </FormControl>
  )
}
