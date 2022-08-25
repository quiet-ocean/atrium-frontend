import { Box, Typography } from '@mui/material'

import project6 from '../../../assets/images/project-6.png'
import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'
import type { ICommunity, ICommunityMember } from '../../../types/model'
import { convertStr2LongDate } from '../../../utils'

export const CommunityPanel = ({ member }: { member: ICommunityMember }) => {
  const community: ICommunity = member.community as ICommunity

  const handleCommunityHub = (id: string) => {
    console.log('go to community hub for community ', id)
  }
  return (
    <Box display="flex" gap="24px" position="relative">
      <Box width="250px !important" height="250px">
        <img src={project6} alt="" width="100%" height="100%" />
      </Box>
      <Box py="24px" flex="1">
        <Typography variant="h2">{community.name}</Typography>
        <Box mt="40px">
          <AButton
            className="primary outlined active"
            color0btn={palette.secondary.light}
            onClick={() => handleCommunityHub(community._id)}
          >
            view community hub
          </AButton>
        </Box>
        <Box mt="20px" display="flex" flexDirection="column" gap="8px">
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              roles
            </Typography>
            <Box flex="3">
              <Box>
                <AButton
                  className="primary active tag tag-small"
                  color0btn="#FF75CD"
                >
                  whitelisted
                </AButton>
              </Box>
            </Box>
          </Box>
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              NFT Owned
            </Typography>
            <Typography variant="h4" flex="3">
              0
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              joined
            </Typography>
            <Typography variant="h4" flex="3">
              {/* august, 2nd 2022 */}
              {convertStr2LongDate(member.createdAt)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', right: '0px', top: '0px' }}>
        <AButton
          className="outlined primary"
          color0btn={palette.secondary.light}
        >
          view all
        </AButton>
      </Box>
    </Box>
  )
}
