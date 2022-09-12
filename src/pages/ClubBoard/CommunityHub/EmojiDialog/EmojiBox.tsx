import { Box } from '@mui/material'

import { Emoji } from '../../../../components'

import type { EmojiProps } from './EmojiDialog'

export const EmojiBox = ({ icons }: { icons?: EmojiProps[] }) => {
  return (
    <Box>
      {icons &&
        icons.length &&
        icons.map((icon: EmojiProps, key: number) => (
          <Box key={key} display="inline-block">
            <Emoji label={icon.label} symbol={`${icon.symbol}`} />
          </Box>
        ))}
    </Box>
  )
}
