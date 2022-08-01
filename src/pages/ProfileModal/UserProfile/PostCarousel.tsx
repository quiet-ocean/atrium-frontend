import { Box } from '@mui/material'
import CarouselLibrary from 'react-material-ui-carousel'

// import carousel1 from '../images/carousel1.png'
// import carousel2 from '../images/carousel2.png'
// import carousel3 from '../images/carousel3.png'

// export const imageList = [carousel1, carousel2, carousel3]
import { palette } from '../../../MuiTheme'
import image from '../images/post-image.png'

export const imageList = [image, image, image]

export const PostItem = () => {
  return (
    <Box>
      <Box position="relative" height="480px">
        <img src={image} alt="" width="100%" height="100%" />
        <Box
          sx={{
            backgroundImage: `linear-gradient(0deg, ${palette.background.default}, transparent)`,
            height: '100%',
            left: '0',
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        ></Box>
      </Box>
    </Box>
  )
}
export const PostCarousel = () => {
  return (
    <Box sx={{ border: `1px solid #2E3134`, paddingBottom: '32px' }} mb="24px">
      <CarouselLibrary
        navButtonsAlwaysVisible
        autoPlay={false}
        indicators={true}
      >
        {imageList.map(() => {
          // return <img src={img} key={i} width="100%" height="480px" />
          return <PostItem />
        })}
      </CarouselLibrary>
    </Box>
  )
}
