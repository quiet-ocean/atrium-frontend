import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import type { SelectChangeEvent } from '@mui/material/Select'
import Select from '@mui/material/Select'
import styled from '@mui/material/styles/styled'
import Typography from '@mui/material/Typography'
import * as React from 'react'

import muiTheme from '../../../MuiTheme'

const AccountMenuItem = () => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <img src={`/images/Ellipse 11.png`} alt="" />
      <Typography
        sx={{
          color: muiTheme.palette.text.primary,
          fontFamily: 'Fractul',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '32px',
        }}
      >
        swiftyyy
      </Typography>
    </Box>
  )
}
const MySelect = styled(Select)(() => ({
  '& .MuiSelect-select': {
    padding: '12px',
  },
  borderRadius: '0px',
}))
export default function AccountSelect() {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <Box>
      <FormControl
        sx={{
          background: muiTheme.palette.background.paper,
          // border: muiTheme.palette.border.main,
          minWidth: 120,
        }}
      >
        <MySelect
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value="">
            <AccountMenuItem />
          </MenuItem>
          <MenuItem value={10}>
            <AccountMenuItem />
          </MenuItem>
          <MenuItem value={20}>
            <AccountMenuItem />
          </MenuItem>
          <MenuItem value={30}>
            <AccountMenuItem />
          </MenuItem>
        </MySelect>
      </FormControl>
    </Box>
  )
}
