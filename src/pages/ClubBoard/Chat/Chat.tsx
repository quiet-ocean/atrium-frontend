// import { SearchIcon } from '@mui/icons-material';
import { Box, styled } from '@mui/material'

import { palette } from '../../../MuiTheme'
import { ModalContainer } from '../styled'

import { ContactList, ChatBox, ContactInfo } from './'

export const ChatContainer = styled(Box)(() => ({
  '&.main': {
    // borderLeft: `1px solid ${palette.primary.main}`,
    // borderRight: `1px solid ${palette.primary.main}`,
    border: 'none',
    width: '100%',
  },
  border: `1px solid ${palette.primary.main}`,
  padding: '24px',
  width: '480px',
}))
export type UserProps = {
  name: string
  walletId: string
  status: 'online' | 'offline'
  avatar: string
}
const users: UserProps[] = [
  {
    name: 'crooks',
    walletId: 'crooks.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'crooks',
    walletId: 'crooks.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'crooks',
    walletId: 'crooks.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'crooks',
    walletId: 'crooks.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'crooks',
    walletId: 'crooks.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'crooks',
    walletId: 'crooks.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'crooks',
    walletId: 'crooks.near',
    status: 'online',
    avatar: '',
  },
]
export const Chat = () => {

  return (
    <Box>
      <ModalContainer>
        <Box display="flex">
          <ChatContainer>
            <ContactList />
          </ChatContainer>
          <ChatContainer className="main">
            <ChatBox />
          </ChatContainer>
          <ChatContainer>
            <ContactInfo />
          </ChatContainer>
        </Box>
      </ModalContainer>
    </Box>
  )
}
