import React from 'react'

import Header from './Header'
import * as Styled from './styled'
import TimeLine from './TimeLine/index'

const LiveChat: React.FC = () => {
  return (
    <Styled.RootLayout variant="outlined">
      <Styled.HeaderRow>
        <Header />
      </Styled.HeaderRow>
      <TimeLine />
    </Styled.RootLayout>
  )
}

export default LiveChat
