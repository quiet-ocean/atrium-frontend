import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Typography } from '@mui/material'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'

import skin1 from '../../assets/images/ASAC 1.png'
import skin2 from '../../assets/images/ASAC 2.png'
import skin3 from '../../assets/images/ASAC 4.png'
import skin7 from '../../assets/images/ASAC 5.png'
import skin4 from '../../assets/images/ASAC 6.png'
import skin6 from '../../assets/images/ASAC 7.png'
import skin5 from '../../assets/images/ASAC 8.png'
import { AButton, LoginLayout } from '../../components'
import { palette } from '../../MuiTheme'

import { LoginSubLayout } from './LoginSubLayout'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const skins = [skin1, skin2, skin3, skin4, skin5, skin6, skin7]

const sliderSettings = {
  arrows: false,
  centerMode: true,
  centerPadding: '5px',
  focusOnSelect: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 5,

  // dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1
}

export const SelectSkin = () => {
  const navigate = useNavigate()
  const carouselRef = useRef<Slider>(null)
  return (
    <LoginLayout>
      <LoginSubLayout
        stepper
        enable
        goForward={() => navigate('/load-scene')}
        goBack={() => navigate('/select-identity')}
      >
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">Select your Skin</Typography>
          </Box>
          <Box mt="24px">
            <Typography variant="body2">
              More skins integrations are coming soon!
            </Typography>
          </Box>
          <div style={{ marginTop: '32px', width: '1200px' }}>
            <Slider {...sliderSettings} ref={carouselRef}>
              {skins.map((item: string, key) => (
                <div
                  key={key}
                  style={{
                    display: 'inline-block !important',
                    padding: '24px 12px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={item}
                    alt=""
                    style={{
                      margin: 'auto',
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <Box gap="32px" py="12px">
            <AButton
              className="rounded active"
              color0btn={palette.secondary.light}
              onClick={() => {
                if (carouselRef && carouselRef.current)
                  carouselRef.current?.slickPrev()
              }}
            >
              <ArrowBackIcon />
            </AButton>
            <Box py="16px">
              <Typography variant="h5" color={palette.secondary.light}>
                Antisocial Ape Club
              </Typography>
            </Box>
            <Box>
              <AButton
                className="rounded active"
                color0btn={palette.secondary.light}
                onClick={() => {
                  if (carouselRef && carouselRef.current)
                    carouselRef.current?.slickNext()
                }}
              >
                <ArrowForwardIcon />
              </AButton>
            </Box>
          </Box>
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}
