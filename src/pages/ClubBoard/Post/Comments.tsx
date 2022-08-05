import SendIcon from '@mui/icons-material/Send'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { Box, Typography } from '@mui/material'

import { AtButton, AText, AdornmentInput } from '../../../components'
import { palette } from '../../../MuiTheme'
import avatar from '../images/avatar-3.png'

export const Comment = () => {
  return (
    <Box display="flex" gap="8px" p="12px 0px">
      <Box py="10px">
        <img src={avatar} alt="" width="45px" height="45px" />
      </Box>
      <Box p="12px" sx={{ background: `${palette.background.paper}` }}>
        <Typography
          sx={{
            fontFamily: 'Andale Mono Regular',
            fontSize: '16px',
            // lineHeight: '15px',
            fontStyle: 'normal',

            fontWeight: 400,

            letterSpacing: '-0. 05em',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac
          convallis commodo morbi ut leo gravida. A nunc laoreet cras semper
          netus quis blandit eu.
        </Typography>
      </Box>
    </Box>
  )
}
export const Comments = () => {
  return (
    <Box p="30px" border={`1px solid ${palette.background.paper}`} mt="48px">
      <Box display="flex" justifyContent="space-between">
        <AText sx={{ fontSize: '22px', fontWeight: '800' }}>comments</AText>
        <AtButton variant="small" text="see all" />
      </Box>
      <Box mt="12px">
        <Comment />
        <Comment />
      </Box>
      <Box display="flex" gap="12px">
        <Box
          sx={{
            border: `1px solid ${palette.border.main}`,
            padding: '13px',
          }}
        >
          <SentimentSatisfiedAltIcon sx={{ color: 'white' }} />
        </Box>
        <AdornmentInput
          variant="default"
          label="type here..."
          adornment={<SendIcon />}
        />
      </Box>
    </Box>
  )
}
