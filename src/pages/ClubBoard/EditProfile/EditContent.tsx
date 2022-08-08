import { Box, Typography, Collapse } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import avatar from '../../../assets/images/avatar-6.png'
import post7 from '../../../assets/images/post-7.png'
import post8 from '../../../assets/images/post-8.png'
import post9 from '../../../assets/images/post-9.png'
import project6 from '../../../assets/images/project-6.png'
import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'
import { Reactions } from '../Dashboard'

export const CommunityCard = () => {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    if (!selected) setSelected(true)
  }
  return (
    <Box width="470px" mt="32px">
      <Box
        display="flex"
        gap="16px"
        p="16px"
        border={`1px solid ${
          selected ? palette.secondary.light : palette.text.primary
        }`}
        onClick={handleClick}
      >
        <Box width="120px !important" height="120px">
          <img src={project6} alt="" width="100%" height="100%" />
        </Box>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h5">Antisocial Ape Club</Typography>
          <Box display="flex" gap="8px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography
                variant="caption"
                sx={{ fontSize: '14px' }}
                py="5px"
                flex="2"
              >
                roles
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: '14px' }}
                py="5px"
                flex="2"
              >
                NFTs Owned
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: '14px' }}
                py="5px"
                flex="2"
              >
                joined
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box display="flex" gap="8px">
                <Box>
                  <AButton
                    className="primary active tag tag-small"
                    color0btn="#FF75CD"
                  >
                    whitelisted
                  </AButton>
                </Box>
                <Box>
                  <AButton
                    className="primary active tag tag-small"
                    color0btn="#90E487"
                  >
                    OG Member
                  </AButton>
                </Box>
              </Box>
              <Typography variant="h6" flex="3">
                0
              </Typography>
              <Typography variant="h6" flex="3">
                august, 2nd 2022
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box height="46px">
        <Collapse in={selected} orientation="vertical">
          <Box width="100%" p="8px" textAlign="center">
            <AButton
              className="primary active"
              color0btn={palette.secondary.light}
              onClick={() => setSelected(false)}
            >
              unselect
            </AButton>
          </Box>
        </Collapse>
      </Box>
    </Box>
  )
}

export const PostCard = ({ image }: { image: string }) => {
  return (
    <Box p="16px" border={`1px solid ${palette.text.primary}`}>
      <img src={image} alt="" width="100%" height="180px" />
      <Box py="12px">
        <Typography variant="h6">
          Why ASAC has taken over HavenSwap and it’s plan for the future
        </Typography>
        <Box mt="12px">
          <Reactions />
        </Box>
        <Typography mt="12px" variant="caption" sx={{ fontSize: '12px' }}>
          posted 1 day ago
        </Typography>
      </Box>
    </Box>
  )
}
export const CommentCard = () => {
  const [selected, setSelected] = useState(false)
  return (
    <Box
      border={`1px solid ${
        selected ? palette.secondary.light : palette.text.primary
      }`}
      p="12px"
      onClick={() => setSelected(!selected)}
    >
      <Box display="flex" gap="48px">
        <Box display="flex" gap="12px">
          <Box width="36px" height="36px">
            <img src={avatar} width="100%" height="100%" />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="h6" sx={{ fontSize: 14 }}>
              Hades
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize: 12 }}
              textTransform="lowercase"
            >
              12 hours ago
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="caption" textTransform="lowercase">
            asac seems to have a bright future ahead of it (or it doesn’t idk)
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export const TextPanel = styled(Box)(({ theme }) => ({
  background: 'rgba(242, 242, 242, 0.1)',
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: '12px',
  margin: '32px 0px',
  padding: '24px',
}))
export const EditContent = () => {
  return (
    <Box>
      <Typography variant="h3">featured content</Typography>
      <Typography variant="body2" pt="16px">
        Edit content featured on your profile.{' '}
      </Typography>
      <Box p="60px 120px">
        <Typography variant="h4">blurp</Typography>
        <Typography mt="8px" variant="body2">
          Write an annoucement that appears next to your Profile Image. 64
          Charaters max.{' '}
        </Typography>
        <TextPanel>
          <Typography variant="body1" color={palette.text.primary}>
            asac is the worst project that i’ve owned
          </Typography>
        </TextPanel>
        <Box py="32px" display="flex" flexDirection="column">
          <Typography variant="h4">Favorite Community</Typography>
          <Typography mt="8px" variant="body2">
            Select up to 3 projects to feature.{' '}
          </Typography>
          <Box sx={{ overflowX: 'scroll' }} p="32px 0px">
            <Box display="flex" gap="24px">
              <Box>
                <CommunityCard />
                <CommunityCard />
              </Box>
              <Box>
                <CommunityCard />
                <CommunityCard />
              </Box>
              <Box>
                <CommunityCard />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4">Featured Post</Typography>
          <Typography mt="8px" variant="body2">
            Select 1 post to feature.
          </Typography>
          <Box display="flex" gap="32px" my="32px">
            <PostCard image={post7} />
            <PostCard image={post8} />
            <PostCard image={post9} />
          </Box>
        </Box>
        <Box my="32px">
          <Typography variant="h4">Featured Post Comment</Typography>
          <Typography mt="8px" variant="body2">
            Select 1 comment from your featured post.
          </Typography>
          <Box pt="50px" pl="114px">
            <Box mt="16px">
              <CommentCard />
            </Box>
            <Box mt="16px">
              <CommentCard />
            </Box>
            <Box mt="16px">
              <CommentCard />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end" mt="120px">
        <AButton
          className="primary active medium"
          color0btn={palette.secondary.light}
        >
          save changes
        </AButton>
      </Box>
    </Box>
  )
}
