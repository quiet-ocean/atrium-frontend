import { Box, TextField, Typography } from '@mui/material'
import React, { useState, forwardRef } from 'react'

import { TabPanel } from '../../../../components'

import { EmojiTabList, EmojiBox } from './'

const tabs = ['emoji a', 'emoji b', 'emoji c']
export type EmojiProps = {
  label: string
  symbol: string
}
const emojis = [
  { label: '', symbol: '&#128507;' },
  { label: '', symbol: '&#128508;' },
  { label: '', symbol: '&#128509;' },
  { label: '', symbol: '&#128510;' },
  { label: '', symbol: '&#128511;' },
  { label: '', symbol: '&#128512;' },
  { label: '', symbol: '&#128513;' },
  { label: '', symbol: '&#128514;' },
  { label: '', symbol: '&#128515;' },
  { label: '', symbol: '&#128516;' },
  { label: '', symbol: '&#128517;' },
  { label: '', symbol: '&#128513;' },
]

export const EmojiDialog = forwardRef<HTMLDivElement, { insert: AnyFunction }>(
  ({ insert }, ref) => {
    const [value, setValue] = useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    }
    return (
      <Box maxWidth={300} ref={ref}>
        <Box>
          <EmojiTabList
            items={tabs}
            value={value}
            handleChange={handleChange}
          />
        </Box>
        <Box py={2}>
          <TextField
            fullWidth
            className="small"
            variant="standard"
            sx={{
              fontSize: 12,
              padding: 1,
            }}
            inputProps={{
              sx: {
                fontSize: 12,
                padding: 0,
              },
            }}
          />
        </Box>
        <Box>
          <Typography variant="h6">Recent</Typography>
          <EmojiBox insert={insert} />
        </Box>
        <Box sx={{ '& > div > div': { p: 0 } }} py={1}>
          <TabPanel value={value} index={0}>
            <Typography variant="h6">{tabs[0]}</Typography>
            <EmojiBox icons={emojis} insert={insert} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="h6">{tabs[1]}</Typography>
            <EmojiBox icons={emojis} insert={insert} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="h6">{tabs[2]}</Typography>
            <EmojiBox icons={emojis} insert={insert} />
          </TabPanel>
        </Box>
        <Box></Box>
      </Box>
    )
  }
)
