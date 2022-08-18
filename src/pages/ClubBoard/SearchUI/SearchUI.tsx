import { Box, styled, Typography, Grid } from '@mui/material'

const SearchUIWrapper = styled(Box)(() => ({
  opacity: 0,
  width: '100%',
  height: '100%',
  padding: '36px',
  background: 'rgba(20, 20, 20, 0.7)',
  backdropFilter: 'blur(15px)',
  transition: 'opacity 0.5s',
  '&.open': {
    opacity: 1,
  },
}))

const ResultItemWrapper = styled(Box)(() => ({
  // margin: '24px',
  minHeight: '100px',
  width: '100%',
  background: '#D9D9D9',
}))

export const SearchUI = ({ open }: { open: boolean }) => {
  return (
    <SearchUIWrapper className={open ? 'open' : ''}>
      <Box>
        <Box px="24px">
          <Typography variant="h1">user profiles</Typography>
        </Box>

        <Box>
          <Grid container>
            {new Array(6).fill(2).map((_, key: number) => (
              <Grid item lg={4} key={key} p="24px">
                <ResultItemWrapper></ResultItemWrapper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box px="24px">
          <Typography variant="h1">project profiles</Typography>
        </Box>

        <Box>
          <Grid container>
            {new Array(7).fill(2).map((_, key: number) => (
              <Grid item lg={4} key={key} p="24px">
                <ResultItemWrapper></ResultItemWrapper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </SearchUIWrapper>
  )
}
