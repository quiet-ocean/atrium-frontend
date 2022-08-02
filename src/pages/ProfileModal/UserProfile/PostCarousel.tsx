import { Box } from '@mui/material'
import CarouselLibrary from 'react-material-ui-carousel'

// import carousel1 from '../images/carousel1.png'
// import carousel2 from '../images/carousel2.png'
// import carousel3 from '../images/carousel3.png'

// export const imageList = [carousel1, carousel2, carousel3]
import { AText } from '../../../components'
import { palette } from '../../../MuiTheme'
import image from '../images/post-image.png'

export const imageList = [image, image, image]

export const PostContainer = ({
  children,
  img,
  height,
}: {
  children: React.ReactNode
  img: string
  height?: string
}) => {
  return (
    <Box border={`1px solid ${palette.border.main}`}>
      <Box position="relative" height={`${height ? height : '480px'}`}>
        <img src={img} alt="" width="100%" height="100%" />
        <Box
          sx={{
            backgroundImage: `linear-gradient(0deg, ${palette.background.default}, transparent)`,
            height: '100%',
            left: '0',
            padding: '36px',
            position: 'absolute',
            top: 0,
            width: '100%',
          }}
        >
          <Box position="absolute" sx={{ bottom: '24px' }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export const PostItem = ({ img }: { img: string }) => {
  return (
    <PostContainer img={img}>
      <AText sx={{ fontSize: '36px', fontWeight: 600 }}>
        my very first project
      </AText>
      <AText
        sx={{
          // color: '#BFBFBF',
          color: palette.text.disabled,
          fontFamily: 'Andale Mono Regular',
          fontSize: '20px',
          fontWeight: 400,
        }}
      >
        This is my very first post! Please take a look! Bitch. Dont fade it.
      </AText>
    </PostContainer>
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
          return <PostItem img={image} />
        })}
      </CarouselLibrary>
    </Box>
  )
}
