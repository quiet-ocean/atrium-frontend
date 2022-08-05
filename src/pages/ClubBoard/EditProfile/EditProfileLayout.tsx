import { Box, Typography } from '@mui/material'
import React from 'react'

import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'

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
      <Box p="24px 80px">{children}</Box>
      <Box display="flex" justifyContent="end" mt="64px">
        <AButton
          className="primary active medium"
          color0btn={palette.secondary.light}
        >
          save changes
        </AButton>
      </Box>
    </Box>
  )
}
