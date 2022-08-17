import { Box, Typography, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import Carousel from 'react-material-ui-carousel'

import banner from '../../../assets/images/banner-3.png'
import project6 from '../../../assets/images/project-6.png'
import { AText, AButton } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import { setCurrentBoardTab } from '../../../stores/UiStore'
import {
  SocialButtons,
  FeaturedPost,
  Members,
  MembersModal,
  MediaPanel,
} from '../CommunityHub'
import type { TagProps } from '../EditProfile'
import { initialTags } from '../EditProfile'
import editIcon from '../images/edit-icon.png'
import { Main as Container, Community as Panel } from '../styled'

const Banner = () => {
  return (
    <Box position="relative">
      <Box>
        <img src={banner} alt="" width="100%" height="250px" />
      </Box>
    </Box>
  )
}

const Text = styled(Typography)(() => ({
  color: `${palette.text.primary}`,
  fontFamily: 'Andale Mono Regular',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '-0.05em',
  lineHeight: '120%',
}))

export const UserInfo = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const handleBtnEditProfile = () => {
    dispatch(setCurrentBoardTab(4))
  }

  return (
    <Grid container spacing={2}>
      <Grid item lg={5} position="relative">
        <Box
          position="absolute"
          width="100%"
          textAlign="center"
          bottom="124px"
          pr="16px"
        >
          <img
            src={user.avatar}
            alt=""
            width="156px"
            height="156px"
            style={{
              border: `1px solid ${palette.primary.main}`,
              borderRadius: '100px',
            }}
          />
        </Box>
        <Box pt="48px">
          <Typography variant="h4" textAlign="center">
            {user.username}
          </Typography>
          <AText className="disabled" sx={{ textAlign: 'center' }} mt="8px">
            {user.accountId}
          </AText>
        </Box>
      </Grid>
      <Grid item lg={7}>
        <Box position="relative">
          <Box pt="64px">
            <Text>cofounder @ASAC_NFT</Text>
          </Box>
          <Box pt="36px">
            <SocialButtons />
          </Box>
          <AButton
            className="outlined primary active"
            color0btn={palette.text.disabled}
            sx={{ position: 'absolute', right: '24px', top: '24px' }}
            onClick={handleBtnEditProfile}
          >
            <img src={editIcon} alt="" />
            &nbsp; edit profile
          </AButton>
        </Box>
      </Grid>
    </Grid>
  )
}

export const CommunityPanel = () => {
  return (
    <Box display="flex" gap="24px" position="relative">
      <Box width="250px !important" height="250px">
        <img src={project6} alt="" width="100%" height="100%" />
      </Box>
      <Box py="20px" flex="1">
        <Typography variant="h2">atrium</Typography>
        <Box mt="40px">
          <AButton
            className="primary outlined active"
            color0btn={palette.secondary.light}
          >
            view community hub
          </AButton>
        </Box>
        <Box mt="20px" display="flex" flexDirection="column" gap="8px">
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              roles
            </Typography>
            <Box flex="3">
              <Box>
                <AButton
                  className="primary active tag tag-small"
                  color0btn="#FF75CD"
                >
                  whitelisted
                </AButton>
              </Box>
            </Box>
          </Box>
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              NFT Owned
            </Typography>
            <Typography variant="h4" flex="3">
              0
            </Typography>
          </Box>
          <Box display="flex">
            <Typography variant="caption" py="5px" flex="2">
              joined
            </Typography>
            <Typography variant="h4" flex="3">
              august, 2nd 2022
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'absolute', right: '0px', top: '0px' }}>
        <AButton
          className="outlined primary"
          color0btn={palette.secondary.light}
        >
          view all
        </AButton>
      </Box>
    </Box>
  )
}

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

export const Tags = () => {
  const tags = ['developer', 'founder', 'investor']
  const [currentTag, setCurrentTag] = useState(tags[0])
  const [desc, setDesc] = useState('')
  const handleClick = (name: string) => {
    setCurrentTag(name)
    initialTags.forEach((item: TagProps) => {
      if (name === item.name) setDesc(item?.description || '')
    })
  }
  return (
    <Panel mt="24px">
      <Box display="flex" gap="64px">
        <Typography variant="h2">tags</Typography>
        <Box display="flex" gap="24px" py="5px">
          {tags.map((item: string, key: number) => (
            <AButton
              key={key}
              className={`tag tag-large ${
                item === currentTag ? 'tag-active' : ''
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </AButton>
          ))}
        </Box>
      </Box>
      <Box pt="24px">
        <Typography variant="body1">{desc}</Typography>
      </Box>
    </Panel>
  )
}

export const Profile = () => {
  const [openMembersModal, setOpenMembersModal] = useState(false)

  return (
    <Container>
      <Box>
        <Banner />
      </Box>
      <Box>
        <UserInfo />
      </Box>
      <Box p="72px 24px">
        <Grid container spacing="24px">
          <Grid item lg={6}>
            <FeaturedPost height="380px" />
          </Grid>
          <Grid item lg={6}>
            <Box height="100%">
              <CommunityCarousel />
              <Tags />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Members isModal={false} handleOpen={setOpenMembersModal} />
          </Grid>
          <Grid item lg={6}>
            <MediaPanel />
          </Grid>
        </Grid>
      </Box>
      <MembersModal open={openMembersModal} handleOpen={setOpenMembersModal} />
    </Container>
  )
}
