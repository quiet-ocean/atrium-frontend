import { Box, Typography } from '@mui/material'
import React from 'react'

export const EditProfileLayout = ({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) => {
  return (
    <Box>
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body2" mt="16px">
          {subtitle}
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}
