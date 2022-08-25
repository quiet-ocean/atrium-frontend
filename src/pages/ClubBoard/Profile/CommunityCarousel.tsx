import { Box, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import { palette } from '../../../MuiTheme'
import type { ICommunityMember } from '../../../types/model'
import { Community as Panel } from '../styled'

import { CommunityPanel } from './CommunityPanel'

const settings = {
  IndicatorIcon: <Box sx={{}}></Box>,
  NextIcon: <>Next</>,
  PrevIcon: <>Prev</>,
  activeIndicatorIconButtonProps: {
    style: {
      backgroundColor: 'red', // 2
    },
  },
  autoPlay: false,
  indicatorContainerProps: {
    style: {
      display: 'flex',
      gap: 24,
    },
  },
  indicatorIconButtonProps: {
    style: {
      backgroundColor: palette.text.disabled,
      borderRadius: '0px',
      // 1
      color: 'blue',

      flex: 1,

      height: '4px',
      width: 'auto', // 3
    },
  },
  indicators: true,
  navButtonsAlwaysVisible: true,
  navButtonsProps: {
    // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
    style: {
      background: palette.background.paper,
      borderRadius: 0,
      bottom: 0,
      color: palette.text.primary,
      fontFamily: 'Fractul',
      fontSize: '16px',
      fontWeight: 600,
      left: 0,
      padding: '4px 8px',
      // position: 'absolute',
    },
  },
  navButtonsWrapperProps: {
    // Move the buttons to the bottom. Unsetting top here to override default style.
    style: {
      bottom: '0',
      top: 'unset',
    },
  },
}
export const CommunityCarousel = ({
  members,
}: {
  members: ICommunityMember[]
}) => {
  return (
    <Panel>
      {members && members.length ? (
        <Carousel {...settings}>
          {members.map((item: any, key: number) => (
            <CommunityPanel member={item} key={key} />
          ))}
        </Carousel>
      ) : (
        <Box p="24px" display="flex" justifyContent="center">
          <Typography variant="h5">No Joined Community</Typography>
        </Box>
      )}

      {/* <Box display="flex" gap="24px">
        <Box display="flex" gap="24px"></Box>
        <Box display="flex" gap="16px">
          <AButton className="primary active" color0btn={palette.text.disabled}>
            Prev
          </AButton>
          <AButton className="primary active" color0btn={palette.text.disabled} ref={nextButtonRef}>
            Next
          </AButton>
        </Box>
      </Box> */}
    </Panel>
  )
}
