import React from 'react'

import Heading from './Heading'
import * as Container from './styled'
import Wedget from './Wedget'

const Gallery: React.FC = () => {
  return (
    <Container.Root>
      <Container.Left>
        <Heading />
        <Wedget />
      </Container.Left>
    </Container.Root>
  )
}

export default Gallery
