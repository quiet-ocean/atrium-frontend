import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Text from '@mui/material/Typography'
import React from 'react'

import { palette } from '../../../MuiTheme'
import * as Styled from '../SearchAppBar/styled'

const Gallery: React.FC = () => {
  return (
    /* eslint-disable-next-line prettier/prettier */
    <Box sx={{ backgroundColor: palette.wedget.background, border: `2px solid ${palette.border.dark}`, display: 'flex', height: 450, width: 890 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16  px',
          height: 450,
          padding: '30px',
          width: 290,
        }}
      >
        <Text
          variant="h4"
          sx={{ color: '#fff', fontWeight: 'bold', height: '30px', width: 290 }}
        >
          Gallery
        </Text>
        <Text
          variant="h5"
          sx={{
            color: palette.grey.A700,
            fontWeight: 'bold',
            width: 290,
          }}
        >
          View Our NFT Collection
        </Text>
        <Text
          variant="h6"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            padding: '20px 0',
            width: 290,
          }}
        >
          Filter
        </Text>
        <Box
          sx={{
            display: 'flex',
            itemAlign: 'center',
            justfyContent: 'space-btween',
          }}
        >
          <Text
            variant="body1"
            sx={{
              alignItems: 'center',
              color: palette.grey[600],
              display: 'flex',
              width: 290,
            }}
          >
            Listed Items Only
          </Text>
          <Switch sx={{ positon: 'reletive', right: '10px' }} />
        </Box>
        {/* @TODO Need Gellery spefic search input */}
        <Styled.Search>
          <Styled.SearchIconWrapper>
            <SearchIcon />
          </Styled.SearchIconWrapper>
          <Styled.TextInput
            placeholder="Search By ID #..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{ color: '#fff', width: '190px' }}
          />
        </Styled.Search>
      </Box>
    </Box>
  )
}

export default Gallery
