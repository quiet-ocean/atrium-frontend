import SearchIcon from '@mui/icons-material/Search'
import { Box, Stack, Grid } from '@mui/material'
import React from 'react'

import { AdornmentInput } from './AdornmentInput'
import { Heading, Text, Tag } from './styled'

export const Tags = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Heading sx={{ fontSize: '32px', fontWeight: '600' }}>
            Choose Your Tags
          </Heading>
        </Box>
        <AdornmentInput label={'Search tags...'} adornment={<SearchIcon />} />
      </Box>
      <Box>
        <Text>
          Tags allow content to be tailored to you, while also allowing you to
          show off your unique traits.
        </Text>
      </Box>
      <Stack direction="row" spacing={2}>
        <Text>Tags Added: </Text>
        <Stack direction="row" spacing={1}>
          <Tag>Degen</Tag>
          <Tag>Degen</Tag>
          <Tag>Degen</Tag>
          <Tag>Degen</Tag>
          <Tag>Degen</Tag>
        </Stack>
        <Text>See All</Text>
      </Stack>
      <Box>
        <Text>Filter: Most Popular</Text>
        <Grid container spacing={3}>
          {new Array(60).fill(2).map((_, key: number) => (
            <Grid item xs={2} md={1}>
              <Tag key={key}>Degen</Tag>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
