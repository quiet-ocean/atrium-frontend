import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

import { AButton } from '../../../components'
import type { TagProps } from '../EditProfile'
import { initialTags } from '../EditProfile'
import { Community as Panel } from '../styled'

export const Tags = () => {
  const tags = ['developer', 'founder', 'investor']
  const [currentTag, setCurrentTag] = useState(tags[0])
  const [desc, setDesc] = useState('')
  const handleClick = (name: string) => {
    setCurrentTag(name)
    initialTags.forEach((item: TagProps) => {
      if (name === item.name) setDesc(item?.description || '')
    })
  }
  useEffect(() => {
    handleClick('developer')
  }, [])
  return (
    <Panel mt="24px">
      <Box display="flex" gap="64px">
        <Typography variant="h2">tags</Typography>
        <Box display="flex" gap="24px" py="5px">
          {tags.map((item: string, key: number) => (
            <AButton
              key={key}
              className={`tag tag-large ${
                item === currentTag ? 'tag-active' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </AButton>
          ))}
        </Box>
      </Box>
      <Box pt="24px">
        <Typography variant="body1">{desc}</Typography>
      </Box>
    </Panel>
  )
}
