import { Box, Typography } from '@mui/material'

import { AtText, AtButton } from '../../../components'
import { palette } from '../../../MuiTheme'

import { Container as PContainer } from './styled'

export const AiIcon = () => {
  return (
    <Box
      sx={{
        background: 'white',
        height: '16px',
        width: '16px',
      }}
    >
      <Typography
        sx={{
          color: palette.text.secondary,
          fontSize: '12px',
          textTransform: 'capitalize',
        }}
      >
        Ai
      </Typography>
    </Box>
  )
}
export const Skills = () => {
  return (
    <PContainer>
      <Box display="flex" justifyContent="space-between">
        <AtText
          className="disabled"
          sx={{
            fontSize: '20px !important',
          }}
        >
          <AtText
            component="span"
            sx={{
              color: 'white !important',
              fontSize: '20px !important',
              textTransform: 'capitalize',
            }}
          >
            skills
          </AtText>
          &nbsp;&nbsp;tags
        </AtText>
        <AtButton variant="small" text="see all" />
      </Box>
      <Box display="flex" gap="16px" pt="12px">
        <AtButton variant="primary" icon={<AiIcon />} text="Adobe PhotoShop" />
        <AtButton
          variant="primary"
          icon={<AiIcon />}
          text="Adobe Illustrator"
        />
        <AtButton variant="primary" icon={<AiIcon />} text="Figma" />
      </Box>
    </PContainer>
  )
}
