import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
    OutlinedInput,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles'

const Heading = styled(Typography)(() => ({
    fontFamily: 'Fractul',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '48px',
    lineHeight: '32px',
    color: '#F5F7FA',
}))

const ProfileEdit: React.FC = () => {
    return (
        <>
            <Box>
                <Heading>Edit Profile</Heading>
                <FormControl sx={{ width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" sx={{ fontSize: '36px', top: '2px', left: '12px' }}>Type Here...</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type='text'
                    sx={{ height: '100%', fontSize: '42px' }}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                            <SearchIcon />
                        </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                    />
                </FormControl>
            </Box>
        </>
    )
}

export default ProfileEdit