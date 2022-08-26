import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

// import postImage from '../../../assets/images/post-image.png'
import { AtButton } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { IPost } from '../../../types/model'
import { convertString2LongDate } from '../../../utils/util'

import { Comments } from './Comments'

const PostText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontFamily: 'Andale Mono Regular',
  fontSize: '24px !important',
  fontWeight: '400 !important',
  letterSpacing: '-0.05em',
  lineHeight: '27px',
}))

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <AtButton
      variant="small"
      text={<Typography variant="caption">{children}</Typography>}
    />
  )
}

export const PostItem = ({ data }: { data: IPost }) => {
  const [expand, setExpand] = useState(false)

  return (
    <Box sx={{ border: `1px solid ${palette.text.primary}`, padding: '36px' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        onClick={() => setExpand(!expand)}
      >
        <Typography variant="h2" sx={{ fontSize: '60px', maxWidth: '640px' }}>
          {/* spotify integrating with atrium */}
          {data.title}
        </Typography>
        <Box>
          <Typography
            variant="body2"
            sx={{ fontSize: '20px', textTransform: 'uppercase' }}
          >
            {/* //mar 1st, 2022 */}
            {convertString2LongDate(data.createdAt)}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: `${expand ? 'block' : 'none'}` }}>
        <Box display="flex" gap="24px" pt="48px">
          <Tag>stopify</Tag>
          <Tag>atrium</Tag>
          <Tag>trending news</Tag>
          <Tag>integrations</Tag>
        </Box>
        {/* <Box mt="48px">
          <PostText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam
            in purus maecenas nisl tincidunt. Nascetur justo adipiscing lectus
            sapien sit accumsan. Platea ultrices est odio neque. Quam hendrerit
            amet, tellus lobortis lacus. Arcu amet, eu, dignissim gravida. A
            turpis ut id amet sollicitudin leo fusce integer.
          </PostText>
        </Box>
        <Typography variant="h2" sx={{ textAlign: 'center', py: '24px' }}>
          “spotify integrating with atrium”
        </Typography>
        <PostText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu sed
          et tortor proin. Ac vulputate eget sagittis amet metus feugiat vitae.
          Velit nunc, augue felis interdum integer aliquet commodo vel ultrices.
          Feugiat malesuada tempor euismod et nibh ac laoreet urna, cursus.
          Feugiat nibh non amet, nunc risus faucibus viverra hendrerit. Cursus
          sed est tellus lorem nec vel. Lacinia ut rhoncus massa id turpis
          quisque amet, non.
        </PostText> */}
        <Box p="24px 0px">
          {/* <img src={postImage} alt="" /> */}
          <img
            src={`${process.env.VITE_API_URL}/files/${data.media.path}`}
            alt=""
            width="100%"
          />
        </Box>
        <PostText>
          {data.body}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu sed
          et tortor proin. Ac vulputate eget sagittis amet metus feugiat vitae.
          Velit nunc, augue felis interdum integer aliquet commodo vel ultrices.
          Feugiat malesuada tempor euismod et nibh ac laoreet urna, cursus.
          Feugiat nibh non amet, nunc risus faucibus viverra hendrerit. Cursus
          sed est tellus lorem nec vel. Lacinia ut rhoncus massa id turpis
          quisque amet, non. */}
        </PostText>
      </Box>
      <Comments data={data.comments} />
    </Box>
  )
}
