import React from 'react'

import Heading from './Heading'
import * as Container from './styled'
import TimeLine from './TimeLine/index'

const LiveChat: React.FC = () => {
  return (
    <Container.Root variant="outlined">
      <Container.Heading>
        <Heading />
      </Container.Heading>
      <Container.Timeline>
        <TimeLine />
      </Container.Timeline>
    </Container.Root>
  )
}

export default LiveChat
