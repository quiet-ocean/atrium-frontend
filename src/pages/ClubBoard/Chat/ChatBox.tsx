import AttachFileIcon from '@mui/icons-material/AttachFile'
import ImageIcon from '@mui/icons-material/Image'
import SendIcon from '@mui/icons-material/Send'
import { Box } from '@mui/material'

import { palette } from '../../../MuiTheme'
import { AdornmentInput } from '../../../components'

import { Message } from './Message'

export const ChatBox = () => {
  return (
    <>
      <Box height="720px" sx={{ overflowY: 'scroll' }} p="24px">
        {new Array(4).fill(3).map((_, key: number) => (
          <Message key={key} sent={key % 2 === 0 ? true : false} />
        ))}
        <Message />
      </Box>
      <Box display="flex" gap="12px">
        <Box
          sx={{
            border: `1px solid ${palette.border.main}`,
            padding: '13px',
          }}
        >
          <ImageIcon sx={{ color: 'white' }} />
        </Box>
        <Box
          sx={{
            border: `1px solid ${palette.border.main}`,
            padding: '13px',
          }}
        >
          <AttachFileIcon sx={{ color: 'white' }} />
        </Box>
        <AdornmentInput
          variant="default"
          label="type here..."
          adornment={<SendIcon />}
        />
      </Box>
    </>
  )
}
