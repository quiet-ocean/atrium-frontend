// import { SearchIcon } from '@mui/icons-material';
import { Box, styled } from '@mui/material'
import { useState, useEffect } from 'react' 
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
    name: 'snowstorm',
    walletId: 'snowstorm.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'hades',
    walletId: 'hades.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'robbie123',
    walletId: 'robbie123.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'soccor156',
    walletId: 'soccor156.near',
    status: 'online',
    avatar: '',
  },
  {
    name: 'penaldo',
    walletId: 'penaldo.near',
    status: 'online',
    avatar: '',
  },
  {
    name: '',
    walletId: '',
    status: 'online',
    avatar: '',
  },
]
export const Chat = () => {
  const [opponentId, setOpponentId] = useState('')
  const [opponentInfo, setOpponentInfo]= useState<UserProps>(users[0])
  useEffect(() => {
    users.forEach((item: UserProps) => {
      if(item.walletId === opponentId) setOpponentInfo(item)
    })
  }, [opponentId])
  return (
    <Box>
      <ModalContainer>
        <Box display="flex">
          <ChatContainer>
            <ContactList contacts={users} opponentId={opponentId} setOpponentId={setOpponentId} />
          </ChatContainer>
          <ChatContainer className="main">
            <ChatBox />
          </ChatContainer>
          <ChatContainer>
            <ContactInfo info={opponentInfo} />
          </ChatContainer>
        </Box>
      </ModalContainer>
    </Box>
  )
}
