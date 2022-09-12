import { Box, TextField, Typography } from '@mui/material'
import { useState } from 'react'

import { EmojiTabList, EmojiBox } from './'

const tabs = ['a', 'b', 'c']
const emojis = [
  '&#128507',	
  '&#128508',	
  '&#128509',	
  '&#128510',	
  '&#128511',	
  '&#128512',	
  '&#128513',	
  '&#128514',	
  '&#128515',	
  '&#128516',	
  '&#128517',
]
export const EmojiDialog = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Box>
        <EmojiTabList items={tabs} value={value} handleChange={handleChange} />
      </Box>
      <Box>
        <TextField />
      </Box>
      <Box>
        <Typography>Recent</Typography>
        <EmojiBox />
      </Box>
      <Box>
        <Typography>{`smile`}</Typography>
        <EmojiBox icons={emojis}/>
      </Box>
      <Box></Box>
    </Box>
  )
}
