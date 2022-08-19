import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

import { palette } from '../../../MuiTheme'
import { Community as Panel } from '../styled'

import { CommunityPanel } from './CommunityPanel'

export const CommunityCarousel = () => {
  return (
    <Panel>
      <Carousel
        navButtonsAlwaysVisible
        autoPlay={false}
        indicators={true}
        NextIcon={<>Next</>}
        PrevIcon={<>Prev</>}
        navButtonsProps={{
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
        }}
        navButtonsWrapperProps={{
          // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
            bottom: '0',
            top: 'unset',
          },
        }}
        IndicatorIcon={<Box sx={{}}></Box>}
        indicatorIconButtonProps={{
          style: {
            backgroundColor: palette.text.disabled,
            borderRadius: '0px',
            // 1
            color: 'blue',

            flex: 1,

            height: '4px',
            width: 'auto', // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: 'red', // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            display: 'flex',
            gap: 24,
          },
        }}
      >
        <CommunityPanel />
        <CommunityPanel />
        <CommunityPanel />
      </Carousel>
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
