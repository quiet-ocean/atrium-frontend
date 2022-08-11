import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
// import CloseIcon from '@mui/icons-material/Close'
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
// import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
// I've never find any css file in the emoji-mart package, and such as guide
// import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

import { useAppDispatch, useAppSelector } from '../hooks'
import { palette } from '../MuiTheme'
import phaserGame from '../PhaserGame'
import type Game from '../scenes/Game'
import { MessageType, setFocused, setShowChat } from '../stores/ChatStore'
// import { getColorByString } from '../util'

const Backdrop = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 400px;
  width: 500px;
  max-height: 50%;
  max-width: 50%;
  padding: 16px;
  z-index: 10;
`

const Wrapper = styled.div`
  // background: #2c2c2c;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const FabWrapper = styled.div`
  margin-top: auto;
`

const ChatHeader = styled.div`
  position: relative;
  height: 35px;
  background: #000000a7;
  // border-radius: 10px 10px 0px 0px;

  h3 {
    color: #fff;
    margin: 7px;
    font-size: 17px;
    text-align: center;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
  }
`

const ChatBox = styled(Box)`
  height: 100%;
  width: 100%;
  overflow: auto;
  // background: #2c2c2c;
  // border: 1px solid #00000029;
  border-top: 1px solid white;
  z-index: 0;
`

const MessageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0px 2px;

  p {
    margin: 3px;
    text-shadow: 0.3px 0.3px black;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }

  span {
    color: white;
    font-weight: normal;
  }

  .notification {
    color: grey;
    font-weight: normal;
  }

  :hover {
    background: #3a3a3a;
  }
`

const InputWrapper = styled.form`
  box-shadow: 10px 10px 10px #00000018;
  // border: 1px solid #42eacb;
  // border-radius: 0px 0px 10px 10px;
  display: flex;
  flex-direction: row;
  // background: linear-gradient(180deg, #000000c1, #242424c0);
  background: #2c2c2c;
`

const InputTextField = styled(InputBase)`
  border-radius: 0px 0px 10px 10px;
  input {
    padding: 5px;
    color: #f8f9fa;
    font-family: Fractul;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 19px;
    text-transform: capitalize;
  }
`

const EmojiPickerWrapper = styled.div`
  position: absolute;
  bottom: 54px;
  right: 16px;
`

const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'short',
  timeStyle: 'short',
})

const Message = ({ chatMessage, messageType }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return (
    <MessageWrapper
      onMouseEnter={() => {
        setTooltipOpen(true)
      }}
      onMouseLeave={() => {
        setTooltipOpen(false)
      }}
    >
      <Tooltip
        open={tooltipOpen}
        title={dateFormatter.format(chatMessage.createdAt)}
        placement="right"
        arrow
      >
        {messageType === MessageType.REGULAR_MESSAGE ? (
          // <p
          //   style={{
          //     color: getColorByString(chatMessage.author),
          //   }}
          // >
          //   {chatMessage.author}: <span>{chatMessage.content}</span>
          // </p>
          <Typography variant="h6" py="4px">
            {/* {chatMessage.author}: <span>{chatMessage.content}</span> */}
            {`Hades`}:{' '}
            <span style={{ color: palette.secondary.main }}>
              {chatMessage.content}
            </span>
          </Typography>
        ) : (
          // <p className="notification">
          //   {chatMessage.author} {chatMessage.content}
          // </p>
          <Typography
            variant="h6"
            py="4px"
            sx={{ color: palette.secondary.light, fontSize: '12px' }}
          >
            {chatMessage.author} {chatMessage.content}
          </Typography>
        )}
      </Tooltip>
    </MessageWrapper>
  )
}

export default function Chat() {
  const [inputValue, setInputValue] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatMessages = useAppSelector((state) => state.chat.chatMessages)
  const focused = useAppSelector((state) => state.chat.focused)
  const showChat = useAppSelector((state) => state.chat.showChat)
  const dispatch = useAppDispatch()
  const game = phaserGame.game as Game

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      // move focus back to the game
      inputRef.current?.blur()
      dispatch(setShowChat(false))
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // move focus back to the game
    inputRef.current?.blur()

    const val = inputValue.trim()
    setInputValue('')
    if (val) {
      game.network.addChatMessage(val)
      game.myPlayer.updateDialogBubble(val)
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (focused) {
      inputRef.current?.focus()
    }
  }, [focused])

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages, showChat])

  return (
    <Backdrop>
      <Wrapper>
        {showChat ? (
          <>
            {/* <ChatHeader>
              <h3>Chat</h3>
              <IconButton
                aria-label="close dialog"
                className="close"
                onClick={() => dispatch(setShowChat(false))}
                size="small"
              >
                <CloseIcon />
              </IconButton>
            </ChatHeader> */}
            <Box
              sx={{ height: '100%', padding: '32px 16px' }}
              position="relative"
            >
              <ChatBox>
                {chatMessages.map(({ messageType, chatMessage }, index) => (
                  <Message
                    chatMessage={chatMessage}
                    messageType={messageType}
                    key={index}
                  />
                ))}
                <div ref={messagesEndRef} />
                {showEmojiPicker && (
                  <EmojiPickerWrapper>
                    <Picker
                      theme="dark"
                      showSkinTones={false}
                      showPreview={false}
                      onSelect={(emoji) => {
                        setInputValue(inputValue + emoji.native)
                        setShowEmojiPicker(!showEmojiPicker)
                        dispatch(setFocused(true))
                      }}
                      exclude={['recent', 'flags']}
                    />
                  </EmojiPickerWrapper>
                )}
              </ChatBox>
              <Box
                sx={{
                  backdropFilter: 'opacity(20%)',
                  backgroundColor: 'rgba(26, 26, 26, 0.9)',
                  // filter: 'blur(10px)',
                  height: '100%',
                  left: '0px',
                  position: 'absolute',
                  top: '0px',
                  width: '100%',
                  zIndex: '-1',
                }}
              ></Box>
            </Box>
            <InputWrapper onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                sx={{ padding: '6px', whiteSpace: 'nowrap' }}
              >
                ASAC Rocky:
              </Typography>
              <InputTextField
                inputRef={inputRef}
                autoFocus={focused}
                fullWidth
                placeholder="Press Enter to chat"
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                onFocus={() => {
                  if (!focused) dispatch(setFocused(true))
                }}
                onBlur={() => dispatch(setFocused(false))}
              />
              {/* <IconButton
                aria-label="emoji"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <InsertEmoticonIcon />
              </IconButton> */}
            </InputWrapper>
          </>
        ) : (
          <FabWrapper>
            <Fab
              color="secondary"
              aria-label="showChat"
              onClick={() => {
                dispatch(setShowChat(true))
                dispatch(setFocused(true))
              }}
            >
              <ChatBubbleOutlineIcon />
            </Fab>
          </FabWrapper>
        )}
      </Wrapper>
    </Backdrop>
  )
}
