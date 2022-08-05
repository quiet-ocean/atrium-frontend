import { Box, Typography } from '@mui/material'

import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'

import { TextPanel } from './EditContent'

const tags = [
  'developer',
  'artist',
  'project manager',
  'designer',
  'producer',
  'team manager',
  'founder',
  'inverstor',
]
export const TagDescription = ({ tag }: { tag: string }) => {
  return (
    <Box mb="24px">
      <AButton className="tag tag-large tag-active">{tag}</AButton>
      <TextPanel margin="12px 0px !important">
        <Typography variant="body2">
          I have been coding for 8 years. I’ve built 16 websites using
          React and Javascript mainly. I’ve built games as well, 3 in
          Unity and 2 using custom APIs.
        </Typography>
      </TextPanel>
    </Box>
  )
}
export const EditTags = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3">Choose Your Tags</Typography>
        <Typography variant="body2" mt="16px">
          Select the 3 tags that best represent you, then write a bit about each
          one.{' '}
        </Typography>
      </Box>
      <Box
        p="24px 80px"
        sx={{ '& > div, & > div > div': { paddingY: '24px' } }}
      >
        <Box display="flex" gap="12px">
          {tags.map((item: string, key: number) => (
            <AButton className="tag tag-large" key={key}>
              {item}
            </AButton>
          ))}
        </Box>
        <Box mt="24px" borderTop={`1px solid ${palette.text.disabled}`}>
          <Box>
            <Typography variant="h4">Tag Descriptions</Typography>
            <Typography variant="body2" mt="12px">
              Write 2-3 sentences about why each of these apply to you.{' '}
            </Typography>
          </Box>
          <Box>
            <TagDescription tag={`developer`} />
            <TagDescription tag={`designer`} />
            <TagDescription tag={`founder`} />
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end">
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
