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
    avatar: '',
    name: 'crooks',
    status: 'online',
    walletId: 'crooks.near',
  },
  {
    avatar: '',
    name: 'snowstorm',
    status: 'online',
    walletId: 'snowstorm.near',
  },
  {
    avatar: '',
    name: 'hades',
    status: 'online',
    walletId: 'hades.near',
  },
  {
    avatar: '',
    name: 'robbie123',
    status: 'online',
    walletId: 'robbie123.near',
  },
  {
    avatar: '',
    name: 'soccor156',
    status: 'online',
    walletId: 'soccor156.near',
  },
  {
    avatar: '',
    name: 'penaldo',
    status: 'online',
    walletId: 'penaldo.near',
  },
  {
    avatar: '',
    name: '',
    status: 'online',
    walletId: '',
  },
]
export const Chat = () => {
  const [opponentId, setOpponentId] = useState('')
  const [opponentInfo, setOpponentInfo] = useState<UserProps>(users[0])
  useEffect(() => {
    users.forEach((item: UserProps) => {
      if (item.walletId === opponentId) setOpponentInfo(item)
    })
  }, [opponentId])
  return (
    <Box>
      <ModalContainer>
        <Box display="flex">
          <ChatContainer>
            <ContactList
              contacts={users}
              opponentId={opponentId}
              setOpponentId={setOpponentId}
            />
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
