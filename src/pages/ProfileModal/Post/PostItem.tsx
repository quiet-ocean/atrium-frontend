import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import postImage from '../../../assets/images/post-image.png'
import { AtText, AtButton } from '../../../components'
import { palette } from '../../../MuiTheme'

import { Comments } from './Comments'

export const RefText = styled(Typography)(() => ({
  alignItems: 'center',

  /* identical to box height, or 148% */
  display: 'flex',

  fontFamily: 'Andale Mono Regular',

  fontSize: '20px',

  fontStyle: 'normal',

  fontWeight: 400,
  letterSpacing: '-0.05em',
  lineHeight: '30px',
  textTransform: 'uppercase',
}))
export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <AtButton
      variant="small"
      text={
        <Typography
          sx={{
            fontFamily: 'Andale Mono Regular',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '19px',
            textTransform: 'uppercase',
          }}
        >
          {children}
        </Typography>
      }
    />
  )
}
export const PostItem = () => {
  const [expand, setExpand] = useState(false)
  return (
    <Box
      sx={{ border: `1px solid ${palette.text.primary}`, padding: '36px' }}
      onClick={() => setExpand(!expand)}
    >
      <Box display="flex" justifyContent="space-between">
        <AtText sx={{ fontSize: '60px', fontWeight: 600, maxWidth: '640px' }}>
          spotify integrating with atrium
        </AtText>
        <Box>
          <RefText>//mar 1st, 2022</RefText>
        </Box>
      </Box>
      <Box sx={{ display: `${expand ? 'block' : 'none'}` }}>
        <Box display="flex" gap="24px" pt="48px">
          <Tag>stopify</Tag>
          <Tag>atrium</Tag>
          <Tag>trending news</Tag>
          <Tag>integrations</Tag>
        </Box>
        <AtText
          className="disabled"
          sx={{
            fontSize: '24px !important',
            fontWeight: '400 !important',
            letterSpacing: '-0.05em',
            lineHeight: '27px',
            mt: '48px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quam in
          purus maecenas nisl tincidunt. Nascetur justo adipiscing lectus sapien
          sit accumsan. Platea ultrices est odio neque. Quam hendrerit amet,
          tellus lobortis lacus. Arcu amet, eu, dignissim gravida. A turpis ut
          id amet sollicitudin leo fusce integer.
        </AtText>
        <AtText
          sx={{
            alignItems: 'center',
            color: '#F8F9FA',
            display: 'flex',
            fontFamily: 'Fractul Alt',
            fontSize: '36px',
            lineHeight: '39px',
            padding: '24px 0px',
            textTransform: 'capitalize',
          }}
        >
          “spotify integrating with atrium”
        </AtText>
        <AtText
          className="disabled"
          sx={{
            fontSize: '24px !important',
            fontWeight: '400 !important',
            letterSpacing: '-0.05em',
            lineHeight: '27px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu sed
          et tortor proin. Ac vulputate eget sagittis amet metus feugiat vitae.
          Velit nunc, augue felis interdum integer aliquet commodo vel ultrices.
          Feugiat malesuada tempor euismod et nibh ac laoreet urna, cursus.
          Feugiat nibh non amet, nunc risus faucibus viverra hendrerit. Cursus
          sed est tellus lorem nec vel. Lacinia ut rhoncus massa id turpis
          quisque amet, non.
        </AtText>
        <Box p="24px 0px">
          <img src={postImage} alt="" />
        </Box>
        <AtText
          className="disabled"
          sx={{
            fontSize: '24px !important',
            fontWeight: '400 !important',
            letterSpacing: '-0.05em',
            lineHeight: '27px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis eu sed
          et tortor proin. Ac vulputate eget sagittis amet metus feugiat vitae.
          Velit nunc, augue felis interdum integer aliquet commodo vel ultrices.
          Feugiat malesuada tempor euismod et nibh ac laoreet urna, cursus.
          Feugiat nibh non amet, nunc risus faucibus viverra hendrerit. Cursus
          sed est tellus lorem nec vel. Lacinia ut rhoncus massa id turpis
          quisque amet, non.
        </AtText>
      </Box>
      <Comments />
    </Box>
  )
}
