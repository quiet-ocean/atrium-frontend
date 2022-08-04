import { Grid, Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { useNavigate } from 'react-router-dom'

import { Stepper, LoginLayout } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setUser } from '../../stores/AuthStore'
import { addAvatar, setPlayerAvatar } from '../../stores/UserStore'
import 'react-multi-carousel/lib/styles.css'
import { getAccount } from '../../utils'
import { LoginSubLayout } from './LoginSubLayout'

import { palette } from '../../MuiTheme'

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

export const SelectIdentity = () => {
  const [avatar, setAvatar] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const avatars = useAppSelector((state) => state.user.avatars)

  useEffect(() => {
    console.log(avatars.length)
  }, [avatars])

  useEffect(() => {
    loadNFTs()
  }, [])

  const loadNFTs = async () => {
    // if (!(window as any)?.accountId) {
    //   console.log('please login by near wallet')
    //   return
    // }
    let accountId = getAccount().accountId
    if (accountId === '') {
      console.log('please login by near wallet')
      return
    }
    accountId = 'swiftyyy.near'
    let parasApiUrl =
      process.env.VITE_PARAS_API_URL || 'https://api-v2-mainnet.paras.id'
    await fetch(`${parasApiUrl}/token?owner_id=${accountId}&__limit=10`)
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

          console.log(nfts)
          nfts.forEach((item) => {
            dispatch(addAvatar(item.metadata.media.toString()))
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    console.log('fetch ended')
    avatars.forEach((item: any) => {
      console.log(item)
    })
  }

  const handleNextBtn = () => {
    dispatch(setUser({ avatar: avatars[avatar] }))
    navigate('/connect-socials')
  }

  return (
    <LoginLayout>
      <LoginSubLayout enable stepper goForward={() => navigate('/select-skin')}>
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">Select your Identity</Typography>
          </Box>
          <Box mt="24px">
            <Typography variant="body2">
              Choose an NFT from your wallet to represent you on The Grid.
            </Typography>
          </Box>
          <Box mt="32px">
            <Box width="160px" height="160px" borderRadius="102px" border={`1px solid ${palette.text.primary}`}>
              {avatar && <img src={avatar} width="160px" height="160px" style={{
                borderRadius: `50%`,
                border: `1px solid ${palette.text.primary}`,
              }} />}
            </Box>
          </Box>
          <Box>
            <Box mt="32px" sx={{ overflowY: 'scroll',height: '200px', width: { lg: '50%' } }} px="24px">
              <Grid container spacing={'12px'} >
                {avatars.map((url: string, key: number) => {
                  return (
                    <Grid
                      key={key}
                      onClick={() => {
                        setAvatar(url)
                        dispatch(setPlayerAvatar(url))
                      }}
                      item
                      sx={{ height: '100px' }}
                      lg={2}
                    >
                      <img
                        src={url}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </Box>
          {/* <div className="login_panel_avatar_carousel">
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
          </div> */}
        </Box>
      </LoginSubLayout>
    </LoginLayout>
  )
}
