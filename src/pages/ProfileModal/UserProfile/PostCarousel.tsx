import { Box } from '@mui/material'

import CarouselLibrary from 'react-material-ui-carousel'

import carousel1 from '../images/carousel1.png'
import carousel2 from '../images/carousel2.png'
import carousel3 from '../images/carousel3.png'

export const imageList = [carousel1, carousel2, carousel3]

export const PostCarousel = () => {
  return (
    <Box sx={{ paddingBottom: '32px', border: `1px solid #2E3134` }} mb="24px">
      <CarouselLibrary
        navButtonsAlwaysVisible
        autoPlay={false}
        indicators={true}
      >
        {imageList.map((img, i) => {
          return <img src={img} key={i} width="100%" height="480px" />
        })}
      </CarouselLibrary>
    </Box>
  )
}