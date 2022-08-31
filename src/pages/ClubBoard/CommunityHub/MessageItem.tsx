import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

// import avatar2 from '../../../assets/images/avatar-6.png'
import { Button } from '../../../components'
import { getUserById } from '../../../services/authApi'
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
          src={user && user.avatar}
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
              <Button
                className="tag-secondary tag-small outlined"
                // color0btn="#FFB350"
              >
                {item.tag}
              </Button>
            </Box>
          ))}
          {/* <Box>
            <Button
              className="tag-secondary outlined tag-small"
              color0btn="#71E5FF"
            >
              founder
            </Button>
          </Box>
          <Box>
            <Button
              className="tag-secondary tag-small outlined"
              color0btn="#FFB350"
            >
              devs
            </Button>
          </Box>
          <Box>
            <Button
              className="tag-secondary tag-small outlined"
              color0btn="#DE58FF"
            >
              moderator
            </Button>
          </Box> */}
        </Box>
      </Box>
      <Box pl="49px">{children}</Box>
    </Box>
  )
}

export const MessageItem = ({ user }: { user: IUser }) => {
  const [autor, setAuthor] = useState<IUser>({} as IUser)

  useEffect(() => {
    let isMounted = true

    const init = async () => {
      if (typeof user === undefined) return
      else if (typeof user === 'string') {
        getUserById(user)
          .then((res: any) => {
            if (res && res.status === 200 && res.data && isMounted) {
              setAuthor(res.data)
            } else {
              console.log('something went wrong')
            }
          })
          .catch((error: any) =>
            console.log('error occurred while load user data ', error)
          )
      } else if (typeof user === 'object') {
        if (isMounted) setAuthor(user)
        else console.log('not mounted yet')
      }
    }
    init()

    return () => {
      isMounted = false
    }
  }, [])
  return (
    <Box pb="24px">
      {user && (
        <MessageContainer user={autor}>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac
            convallis commodo morbi ut leo gravida ...
          </Typography>
        </MessageContainer>
      )}
    </Box>
  )
}
