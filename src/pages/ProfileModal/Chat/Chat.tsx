import SearchIcon from '@mui/icons-material/Search'
import { Box, styled } from '@mui/material'

import { AtText } from '../../../components'
import avatar from '../images/project-image.png'
import { AdornmentInput } from '../ProfileEdit/AdornmentInput'
import { ModalContainer } from '../styled'
import { OnlineIcon } from '../UserProfile/styled'

import { Message } from './Message'

export const Contact = ({ active }: { active?: boolean }) => {
  return (
    <Box p="12px 0px">
      <Box
        display="flex"
        gap="12px"
        border={`${active ? '2px solid yellow' : ''}`}
      >
        <img src={avatar} alt="" width="74px" height="74px" />
        <Box p="12px">
          <AtText>hades</AtText>
          <Box display="flex" gap="8px">
            <Box p="6px 0px">
              <OnlineIcon />
            </Box>
            <AtText className="">online</AtText>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export const ChatContainer = styled(Box)(() => ({
  '&.main': {
    width: '100%',
  },
  padding: '24px',
  width: '480px',
}))
export const Chat = () => {
  return (
    <ModalContainer>
      <Box display="flex">
        <ChatContainer>
          <Box display="flex" justifyContent="space-between">
            <AtText className="subtitle" sx={{ fontSize: '24px !important' }}>
              messages
            </AtText>
            <AtText
              className="disabled"
              sx={{ fontSize: '18px !important', padding: '3px' }}
            >
              requests
            </AtText>
          </Box>
          <Box>
            <Contact />
            <Contact />
            <Contact />
            <Contact active />
            <Contact />
            <Contact />
            <Contact />
          </Box>
        </ChatContainer>
        <ChatContainer className="main">
          <Box height="720px" sx={{ overflowY: 'scroll' }} p="24px">
            {new Array(10).fill(3).map((_, key: number) => (
              <Message key={key} sent={ key % 2 === 0 ? true : false }/>
            ))}
            <Message />
          </Box>
          <Box>
            <AdornmentInput
              variant="default"
              label="search conversaion"
              adornment={<SearchIcon />}
            />
          </Box>
        </ChatContainer>
        <ChatContainer>
          <AdornmentInput
            variant="default"
            label="search conversation"
            adornment={<SearchIcon />}
          />
        </ChatContainer>
      </Box>
    </ModalContainer>
  )
}
