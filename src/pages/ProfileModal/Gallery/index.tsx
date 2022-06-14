import AddIcon from '@mui/icons-material/Add'
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
          height: 450,
          padding: '15px 30px',
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
          variant="h6"
          sx={{
            color: palette.grey.A700,
            fontWeight: 'bold',
            marginTop: '5px',
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
        <Box sx={{ width: 290 }}>
          {/* @TODO Need Gellery spefic search input */}
          <Box sx={{ marginLeft: '-30px', width: 270 }}>
            <Styled.Search>
              <Styled.SearchIconWrapper>
                <SearchIcon />
              </Styled.SearchIconWrapper>
              <Styled.TextInput
                placeholder="Search By ID #..."
                inputProps={{ 'aria-label': 'search' }}
                sx={{ color: '#fff' }}
              />
            </Styled.Search>
          </Box>
          {/* eslint-disable-next-line prettier/prettier */}
          <Box sx={{ alignItems: 'center', border: `2px solid ${palette.border.dark}`, display: 'flex', height: 40, justifyContent: 'space-between', marginTop: '10px', width: 220, }}>
            {/* eslint-disable-next-line prettier/prettier */}
            <Text variant="h6" sx={{ alignItems: 'center', color: '#fff', display: 'flex', fontWeight: 'bold', }}>
              Skin
            </Text>
            <AddIcon fontSize="large" sx={{ color: '#fff' }} />
          </Box>

          {/* eslint-disable-next-line prettier/prettier */}
          <Box sx={{ alignItems: 'center', border: `2px solid ${palette.border.dark}`, display: 'flex', height: 40, justifyContent: 'space-between', marginTop: '10px', width: 220, }}>
            {/* eslint-disable-next-line prettier/prettier */}
            <Text variant="h6" sx={{ alignItems: 'center', color: '#fff', display: 'flex', fontWeight: 'bold', }}>
              Head
            </Text>
            <AddIcon fontSize="large" sx={{ color: '#fff' }} />
          </Box>

          {/* eslint-disable-next-line prettier/prettier */}
          <Box sx={{ alignItems: 'center', border: `2px solid ${palette.border.dark}`, display: 'flex', height: 40, justifyContent: 'space-between', marginTop: '10px', width: 220, }}>
            {/* eslint-disable-next-line prettier/prettier */}
            <Text variant="h6" sx={{ alignItems: 'center', color: '#fff', display: 'flex', fontWeight: 'bold', }}>
              Eyes
            </Text>
            <AddIcon fontSize="large" sx={{ color: '#fff' }} />
          </Box>

          {/* eslint-disable-next-line prettier/prettier */}
          <Box sx={{ alignItems: 'center', border: `2px solid ${palette.border.dark}`, display: 'flex', height: 40, justifyContent: 'space-between', marginTop: '10px', width: 220, }}>
            {/* eslint-disable-next-line prettier/prettier */}
            <Text variant="h6" sx={{ alignItems: 'center', color: '#fff', display: 'flex', fontWeight: 'bold', }}>
              Month
            </Text>
            <AddIcon fontSize="large" sx={{ color: '#fff' }} />
          </Box>

          {/* eslint-disable-next-line prettier/prettier */}
          <Box sx={{ alignItems: 'center', border: `2px solid ${palette.border.dark}`, display: 'flex', height: 40, justifyContent: 'space-between', marginTop: '10px', width: 220, }}>
            {/* eslint-disable-next-line prettier/prettier */}
            <Text variant="h6" sx={{ alignItems: 'center', color: '#fff', display: 'flex', fontWeight: 'bold', }}>
              Hat
            </Text>
            <AddIcon fontSize="large" sx={{ color: '#fff' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Gallery
