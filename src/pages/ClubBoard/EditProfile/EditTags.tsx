import { Box, Typography } from '@mui/material'
import { useState } from 'react'

import { AButton, ATextField } from '../../../components'
import { palette } from '../../../MuiTheme'

export const initialTags = [
  {
    active: false,
    description:
      'I have been coding for 8 years. I’ve built 16 websites using React and JavaScript mainly. I’ve built games as well, 3 in Unity and 2 using custom APIs.',
    name: 'developer',
  },
  {
    active: false,
    description: '',
    name: 'artist',
  },
  {
    active: false,
    description: '',
    name: 'project manager',
  },
  {
    active: false,
    description:
      'I have been coding for 8 years. I’ve built 16 websites using React and JavaScript mainly. I’ve built games as well, 3 in Unity and 2 using custom APIs.',
    name: 'designer',
  },
  {
    active: false,
    description: '',
    name: 'producer',
  },
  {
    active: false,
    description: '',
    name: 'team manager',
  },
  {
    active: false,
    description:
      'I have been coding for 8 years. I’ve built 16 websites using React and JavaScript mainly. I’ve built games as well, 3 in Unity and 2 using custom APIs.',
    name: 'founder',
  },
  {
    active: false,
    description: '',
    name: 'investor',
  },
]
export type TagProps = {
  name: string
  description?: string
  active?: boolean
}
export const TagContent = ({
  tag,
  update,
}: {
  tag: TagProps
  update: (v: string) => void
}) => {
  // console.log(tag.description)
  const handleUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    update(e.target.value)
  }
  return (
    <Box mb="24px">
      <AButton className="tag tag-large tag-active">{tag.name}</AButton>
      <ATextField
        multiline
        value={tag?.description}
        className="rounded"
        onChange={handleUpdate}
        sx={{
          '& textarea.MuiInputBase-input': {
            fontSize: '18px !important',
          },
          margin: '12px 0px',
        }}
        rows={2}
      />
    </Box>
  )
}
export const EditTags = () => {
  const [tags, setTags] = useState<TagProps[]>(initialTags)
  const [tempTags, setTempTags] = useState<TagProps[]>(tags)
  const updateTag = (
    name: string,
    field: 'name' | 'active' | 'description',
    value: string | boolean
  ) => {
    setTempTags(
      tempTags.map((item: TagProps) => {
        if (item.name === name) {
          return { ...item, [field]: value }
        }
        return item
      })
    )
  }
  // useEffect(() => {
  //   console.log(tempTags)
  // }, [tempTags])
  // useEffect(() => {
  //   console.log(tags)
  // }, [tags])
  const save = () => {
    setTags(tempTags)
  }
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
          {tempTags.map((item: TagProps, key: number) => (
            <Box key={key}>
              <AButton
                className={`tag tag-large ${item.active ? 'tag-active' : ''}`}
                onClick={() => updateTag(item.name, 'active', !item.active)}
              >
                {item.name}
              </AButton>
            </Box>
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
            {tempTags.map(
              (item: TagProps, key: number) =>
                item.active && (
                  <TagContent
                    tag={item}
                    key={key}
                    update={(value: string) =>
                      updateTag(item.name, 'description', value)
                    }
                  />
                )
            )}
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="end">
        <AButton
          className="primary active medium"
          color0btn={palette.secondary.light}
          onClick={save}
        >
          save changes
        </AButton>
      </Box>
    </Box>
  )
}
