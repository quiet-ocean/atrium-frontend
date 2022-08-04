import { Box, Typography, Collapse } from '@mui/material'

import project6 from '../../../assets/images/project-6.png'
import { AButton } from '../../../components'
import { palette } from '../../../MuiTheme'

import { useState } from 'react'

export const CommunityCard = () => {
  const [selected, setSelected] = useState(false)
  const handleClick = () => {
    if (!selected) setSelected(true)
  }
  return (
    <Box width="470px">
      <Box
        display="flex"
        gap="16px"
        p="16px"
        border={`1px solid ${
          selected ? palette.secondary.light : palette.text.primary
        }`}
        onClick={handleClick}
      >
        <Box width="120px !important" height="120px">
          <img src={project6} alt="" width="100%" height="100%" />
        </Box>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography variant="h5">Antisocial Ape Club</Typography>
          <Box display="flex" gap="8px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography
                variant="caption"
                sx={{ fontSize: '14px' }}
                py="5px"
                flex="2"
              >
                roles
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: '14px' }}
                py="5px"
                flex="2"
              >
                NFTs Owned
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: '14px' }}
                py="5px"
                flex="2"
              >
                joined
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box display="flex" gap="8px">
                <Box>
                  <AButton
                    className="primary active tag tag-small"
                    btn0color="#FF75CD"
                  >
                    whitelisted
                  </AButton>
                </Box>
                <Box>
                  <AButton
                    className="primary active tag tag-small"
                    btn0color="#90E487"
                  >
                    OG Member
                  </AButton>
                </Box>
              </Box>
              <Typography variant="h6" flex="3">
                0
              </Typography>
              <Typography variant="h6" flex="3">
                august, 2nd 2022
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Collapse in={selected} orientation="vertical">
        <Box width="100%" p="8px" textAlign="center">
          <AButton
            className="primary active"
            btn0color={palette.secondary.light}
            onClick={() => setSelected(false)}
          >
            unselect
          </AButton>
        </Box>
      </Collapse>
    </Box>
  )
}

export const EditContent = () => {
  return (
    <Box sx={{ border: `1px solid ${palette.text.primary}`, padding: '32px' }}>
      <Typography variant="h3">featured content</Typography>
      <Typography variant="body2" pt="16px">
        Edit content featured on your profile.{' '}
      </Typography>
      <Box p="60px 120px">
        <Typography variant="h4">blurp</Typography>
        <Typography mt="8px" variant="body2">
          Write an annoucement that appears next to your Profile Image. 64
          Charaters max.{' '}
        </Typography>
        <Box
          sx={{
            border: `1px solid ${palette.text.primary}`,
            borderRadius: '12px',
            margin: '32px 0px',
            padding: '24px',
          }}
        >
          <Typography variant="body1" color={palette.text.primary}>
            asac is the worst project that i’ve owned
          </Typography>
        </Box>
        <Box py="32px">
          <Typography variant="h4">Favorite Community</Typography>
          <Typography mt="8px" variant="body2">
            Select up to 3 projects to feature.{' '}
          </Typography>
          <Box mt="32px">
            <CommunityCard />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
