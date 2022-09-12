import { Box } from '@mui/material'

export const EmojiBox = ({ icons }: { icons?: string[] }) => {
  return (
    <Box>
      {icons &&
        icons.length &&
        icons.map((icon: string, key: number) => (
          <Box key={key}>
            <span>{icon}</span>
          </Box>
        ))}
    </Box>
  )
}
