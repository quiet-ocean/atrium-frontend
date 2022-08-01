import { Box } from '@mui/material'

import { AtText } from '../../../components'
import avatar from '../images/project-image.png'
import { OnlineIcon } from '../UserProfile/styled'

export const Contact = ({ active }: { active?: boolean }) => {
  return (
    <Box p="12px 0px">
      <Box
        display="flex"
        gap="12px"
        border={`${active ? '2px solid yellow' : ''}`}
      >
        <img src={avatar} alt="" width="74px" height="74px" />
        <Box p="12px">
          <AtText sx={{ fontSize: '20px' }}>hades</AtText>
          <Box display="flex" gap="8px">
            <Box p="3px 0px">
              <OnlineIcon />
            </Box>
            <AtText className="disabled" sx={{
              fontSize: '12px !important',
            }}>online</AtText>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
