import { Box } from '@mui/material'
import { AtText } from '../../../components'

import { Container as PContainer } from './styled'

export const Skills = () => {
  return (
    <PContainer>
      <Box>
        <AtText className="disabled" sx={{ color: "white !important" }}>Skills</AtText>
      </Box>
    </PContainer>
  )
}
