import { Box, Typography } from '@mui/material'

// import avatar2 from '../../../assets/images/avatar-6.png'
import { AButton } from '../../../components'
import type { ITag, IUser } from '../../../types/model'

export const MessageContainer = ({
  user,
  children,
}: {
  user: IUser
  children: React.ReactNode
}) => {
  return (
    <Box>
      <Box display="flex" gap="12px">
        <img
          src={user.avatar}
          alt=""
          width="36px"
          height="36px"
          style={{ borderRadius: '18px' }}
        />
        <Box display="flex" gap="8px" py="6px">
          <Box>
            <Typography variant="h6" p="2px" sx={{ fontSize: 14 }}>
              {user.username}
            </Typography>
          </Box>
          {user.tags.map((item: ITag, key: number) => (
            <Box key={key}>
              <AButton
                className="tag-secondary tag-small outlined"
                // color0btn="#FFB350"
              >
                {item.tag}
              </AButton>
            </Box>
          ))}
          {/* <Box>
            <AButton
              className="tag-secondary outlined tag-small"
              color0btn="#71E5FF"
            >
              founder
            </AButton>
          </Box>
          <Box>
            <AButton
              className="tag-secondary tag-small outlined"
              color0btn="#FFB350"
            >
              devs
            </AButton>
          </Box>
          <Box>
            <AButton
              className="tag-secondary tag-small outlined"
              color0btn="#DE58FF"
            >
              moderator
            </AButton>
          </Box> */}
        </Box>
      </Box>
      <Box pl="49px">{children}</Box>
    </Box>
  )
}

export const MessageItem = ({ user }: { user: IUser }) => {
  return (
    <Box pb="24px">
      <MessageContainer user={user}>
        <Typography variant="caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac
          convallis commodo morbi ut leo gravida ...
        </Typography>
      </MessageContainer>
    </Box>
  )
}
