import { Box, Tabs, Tab } from '@mui/material'

import { a11yProps } from '../../../../components'

export const EmojiTabList = ({
  items,
  value,
  handleChange,
}: {
  items: string[]
  value: number
  handleChange: AnyFunction
}) => {
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {items.map((item: string, key: number) => (
          <Tab key={key} label={item} {...a11yProps(key)} />
        ))}
      </Tabs>
    </Box>
  )
}
