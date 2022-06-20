import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import bg from '../images/Frame 138.png'

const Heading = styled(Typography)(() => ({
  fontFamily: 'Fractul',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '60px',
  lineHeight: '50px',
  textTransform: 'uppercase',
  color: '#F8F9FA'
}))
// const Text = styled(Typography)(() => ({

// }))
const HeadButton = styled(Button)(() => ({
  background: '#202124',
  padding: '4px 16px',
}))
const Account = () => {
  return (
    <>
      <Box>
        <Box>
          <img src={bg} alt="" />
        </Box>
        <Box>
          <Box sx={{ p: '32px' }}>
            <Heading>spotify integrating with atrium</Heading>
            <Box>
              <HeadButton>spotify</HeadButton>
              <HeadButton>atrium</HeadButton>
              <HeadButton>trending news</HeadButton>
              <HeadButton>integrations</HeadButton>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </>
  )
}

export default Account
