import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import muiTheme from '../../../MuiTheme'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const AccountMenuItem = () => {
  return (
    <Box sx={{ display: 'flex', gap: '8px'}}>
      <img src={`/images/Ellipse 11.png`} alt=''/>
      <Typography
        sx={{
          fontFamily: 'Fractul',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '32px',
          color: muiTheme.palette.text.light,
        }}
      >
        swiftyyy
      </Typography>
    </Box>
  )
}
export default function AccountSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ 
        minWidth: 120,
        background: muiTheme.palette.background.primary.p4,
        border: muiTheme.palette.border.dim, }}
        
      >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{ borderRadius: '0px' }}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value=''>
            <AccountMenuItem />
          </MenuItem>
          <MenuItem value={10}>
            <AccountMenuItem />
          </MenuItem>
          <MenuItem value={20}><AccountMenuItem /></MenuItem>
          <MenuItem value={30}><AccountMenuItem /></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
