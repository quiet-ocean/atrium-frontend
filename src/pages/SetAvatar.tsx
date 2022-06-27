import { Button, Box } from '@mui/material'
import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { useNavigate } from 'react-router-dom'

import { Stepper, LoginLayout } from '../components'
import { useAppDispatch, useAppSelector } from '../hooks'
import { addAvatar, setPlayerAvatar } from '../stores/UserStore'
import { setUser } from '../stores/AuthStore'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
}

const SetAvatar = () => {
  const [avatar, setAvatar] = useState(0)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const avatars = useAppSelector((state) => state.user.avatars)

  useEffect(() => {
    // console.log(avatars);
  }, [avatars])

  useEffect(() => {
    loadNFTs()
  }, [])

  const selectAvatar = (id: number) => {
    console.log('select avatar ', id)
    setAvatar(id)
  }

  const loadNFTs = async () => {
    if (!(window as any)?.accountId) {
      console.log('please login by near wallet')
      return
    }
    let accountId = (window as any).accountId
    accountId = 'swiftyyy.near'
    let parasApiUrl =
      process.env.VITE_PARAS_API_URL || 'https://api-v2-mainnet.paras.id'
    fetch(`${parasApiUrl}/token?owner_id=${accountId}&__limit=100`)
      // fetch("https://api-v2-mainnet.paras.id/token?owner_id=swiftyyy.near")
      .then(async (res) => {
        let result = await res.json()
        if (
          result?.status &&
          result?.data &&
          result.data.results &&
          result.data.results.length > 0
        ) {
          let nfts = result.data.results

          console.log(nfts)
          nfts.forEach((item) => {
            dispatch(addAvatar(item.metadata.media.toString()))
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleNextBtn = () => {
    dispatch(setUser({ avatar: avatars[avatar] }))
    navigate('/connect-socials')
  }

  return (
    <LoginLayout>
      <h1>Set your Avatar</h1>
      <p>Choose your avatar to represent yourself in the digital world.</p>
      <div className="login_panel_avatar_carousel">
        <Carousel
          responsive={responsive}
          showDots={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          autoPlay={false}
        >
          {avatars.map((url: string, key: number) => {
            return (
              <Box
                sx={{ px: '6px' }}
                key={key}
                onClick={() => {
                  selectAvatar(key)
                  dispatch(setPlayerAvatar(url))
                }}
              >
                <img
                  className={`${avatar === key ? 'selected' : ''}`}
                  src={url}
                  alt=""
                />
              </Box>
            )
          })}
        </Carousel>
      </div>
      <Button
        className="atrium_btn atrium_btn_primary"
        sx={{ mt: '56px' }}
        onClick={handleNextBtn}
      >
        NEXT
      </Button>
      <Button className="atrium_btn" onClick={handleNextBtn}>
        SKIP FOR NOW
      </Button>
      <Stepper length={5} step={2} />
    </LoginLayout>
  )
}

export { SetAvatar }
