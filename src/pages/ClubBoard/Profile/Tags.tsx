import { Box, Typography } from '@mui/material'
import { useState } from 'react'

import { Button, EmptyBox } from '../../../components'
// import type { TagProps } from '../EditProfile'
// import { initialTags } from '../EditProfile'
import type { ITag } from '../../../types/model'
import { Community as Panel } from '../styled'

export const Tags = ({ data }: { data: ITag[] }) => {
  // const tags = ['developer', 'founder', 'investor']
  const [currentTag, setCurrentTag] = useState<ITag | null>(
    data && data.length ? data[0] : null
  )
  // const [desc, setDesc] = useState('')

  const handleClick = (tag: ITag) => {
    setCurrentTag(tag)
    // tags && tags.forEach((item: ITag) => {
    //   if (name === item.name) setDesc(item?.description || '')
    // })
  }
  // useEffect(() => {
  // handleClick('developer')
  // }, [])
  return (
    <Panel mt="24px">
      <Box display="flex" gap="64px">
        <Typography variant="h2">tags</Typography>
        <Box display="flex" gap="24px" py="5px">
          {data && data.length
            ? data.map((item: ITag, key: number) => (
                <Button
                  key={key}
                  className={`tag tag-large ${
                    item === currentTag ? 'tag-active' : ''
                  }`}
                  onClick={() => handleClick(item)}
                >
                  {item.tag}
                </Button>
              ))
            : null}
        </Box>
      </Box>
      {data && data.length ? (
        <Box pt="24px">
          <Typography variant="body1">{currentTag?.description}</Typography>
        </Box>
      ) : (
        <EmptyBox>No Tags</EmptyBox>
      )}
    </Panel>
  )
}
