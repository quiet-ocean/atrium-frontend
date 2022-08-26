import SendIcon from '@mui/icons-material/Send'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { Box, Typography } from '@mui/material'

import { AtButton, AdornmentInput, EmptyBox } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { IComment } from '../../../types/model'
// import avatar from '../images/avatar-3.png'

export const Comment = ({ data }: { data: IComment }) => {
  return (
    <Box display="flex" gap="8px" p="12px 0px">
      <Box py="10px">
        <img src={data.author?.avatar} alt="" width="45px" height="45px" />
      </Box>
      <Box p="12px" sx={{ background: `${palette.background.paper}` }}>
        <Typography variant="caption">{data.body}</Typography>
      </Box>
    </Box>
  )
}
export const Comments = ({ data }: { data: IComment[] }) => {
  return (
    <Box p="30px" border={`1px solid ${palette.background.paper}`} mt="48px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">comments</Typography>
        <AtButton variant="small" text="see all" />
      </Box>
      <Box mt="12px">
        {data && data.length > 0 ? (
          <>
            {data.map((item: IComment, key: number) => (
              <Comment data={item} key={key} />
            ))}
          </>
        ) : (
          <EmptyBox>No Commnet Yet</EmptyBox>
        )}
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
