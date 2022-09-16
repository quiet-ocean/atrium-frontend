import { Box, Typography } from '@mui/material'

export const ValidationBox = ({
  children,
  valid,
  sx,
  textStyle,
}: {
  children: React.ReactNode
  valid?: Boolean
  sx?: object
  textStyle?: object
}) => {
  return (
    <Box sx={sx}>
      {children}
      <Typography
        variant="h5"
        sx={{
          mt: '24px',
          textAlign: 'center',
          visibility: valid ? 'visible' : 'hidden',
          ...textStyle,
        }}
      >
        This is enough! Post away bro!
      </Typography>
    </Box>
  )
}
