import SendIcon from '@mui/icons-material/Send'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'

import { AtButton, AdornmentInput, EmptyBox } from '../../../components'
import { useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import type { TSnack } from '../../../stores/AppStore'
import { openSnack } from '../../../stores/AppStore'
import type { IComment } from '../../../types/model'
// import avatar from '../images/avatar-3.png'

export const Comment = ({ data }: { data: IComment }) => {
  return (
    <Box display="flex" gap="8px" p="12px 4px">
      <Box py="10px">
        <img
          src={data.author?.avatar}
          alt=""
          width="45px"
          height="45px"
          style={{ borderRadius: 45 }}
        />
      </Box>
      <Box
        p="12px"
        sx={{ background: `${palette.background.paper}`, width: '100%' }}
      >
        <Typography variant="caption">{data.body}</Typography>
      </Box>
    </Box>
  )
}
export const Comments = ({
  data,
  createComment,
}: {
  data: IComment[]
  createComment: (body: string) => void
}) => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const handleCreate = () => {
    if (value) createComment(value)
    else {
      const snack: TSnack = {
        content: 'Please fill in the comment',
        open: true,
        type: 'warning',
      }
      dispatch(openSnack(snack))
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <Box p="30px" border={`1px solid ${palette.background.paper}`} mt="48px">
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">comments</Typography>
        <AtButton variant="small" text="see all" />
      </Box>
      <Box
        mt="12px"
        sx={{
          maxHeight: 200,
          // overflowY: 'scroll',
        }}
      >
        <ScrollableFeed>
          {data && data.length > 0 ? (
            <>
              {data.map((item: IComment, key: number) => (
                <Comment data={item} key={key} />
              ))}
            </>
          ) : (
            <EmptyBox>No Commnet Yet</EmptyBox>
          )}
        </ScrollableFeed>
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
          value={value}
          onChange={handleChange}
          adornment={<SendIcon onClick={handleCreate} />}
        />
      </Box>
    </Box>
  )
}
