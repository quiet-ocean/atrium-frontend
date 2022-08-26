import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import PushPinIcon from '@mui/icons-material/PushPin'
import TwitterIcon from '@mui/icons-material/Twitter'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import {
  Box,
  Grid,
  Button,
  Typography,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material'
import Icon from '@mui/material/Icon'
import { styled } from '@mui/material/styles'
import { useState, useEffect } from 'react'

import LinkIcon from '../../../assets/icons/link-chain-icon.png'
import badge from '../../../assets/icons/verified-icon-small.png'
import avatar1 from '../../../assets/images/avatar-7.png'
import bannerImage from '../../../assets/images/banner-2.png'
import { AText, AButton, AdornmentInput } from '../../../components'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { palette } from '../../../MuiTheme'
import type { TAlert, TSnack } from '../../../stores/AppStore'
import { openSnack } from '../../../stores/AppStore'
import { setUser } from '../../../stores/AuthStore'
import type { ICommunity, ICommunityMember, IUser } from '../../../types/model'
import { apiPostRequest, apiGetRequest } from '../../../utils'
import * as PContainer from '../styled'
import { Community as Container } from '../styled'

import { FeaturedPost, Members } from './'

export const Banner = () => {
  return (
    <Box position="relative">
      <Box>
        <img src={bannerImage} alt="" width="100%" height="250px" />
      </Box>
    </Box>
  )
}
export const DetailParams = () => {
  const Item = ({
    category,
    value,
  }: {
    category: string
    value: React.ReactNode
  }) => {
    return (
      <Box p="4px 12px 4px 0px">
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '15px',
            textTransform: 'capitalize',
          }}
        >
          {category}
        </Typography>
        <AText sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>
          {value}
        </AText>
      </Box>
    )
  }
  return (
    <Box display="flex">
      <Item category="supply" value="3333" />
      <Item category="listed" value="258" />
      <Item category="floor price" value="20 Ⓝ" />
      <Item category="Vol. All Time" value="93,420 Ⓝ" />
    </Box>
  )
}

export const SocialButtons = () => {
  return (
    <Box display="flex" gap="12px">
      <AButton className="secondary">
        <img src={LinkIcon} alt="" /> &nbsp; marketplace
      </AButton>
      {/* <AButton className="secondary">whitepaper</AButton> */}
      <AButton className="secondary">
        <TwitterIcon sx={{ fontSize: '16px' }} />
        &nbsp; twitter
      </AButton>
      <AButton className="secondary">
        <Icon sx={{ fontSize: '16px' }}>discord</Icon>
        &nbsp; discord
      </AButton>
      <AButton className="secondary">
        <img src={LinkIcon} alt="" /> &nbsp; website
      </AButton>
    </Box>
  )
}
export const Detail = ({
  community,
  handleJoin,
  joined,
}: {
  community: ICommunity
  handleJoin: AnyFunction
  joined: boolean
}) => {
  const Text = styled(Typography)(() => ({
    color: `${palette.text.primary}`,
    fontFamily: 'Andale Mono Regular',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '-0.05em',
    lineHeight: '120%',
  }))
  return (
    <Grid container spacing={2}>
      <Grid item lg={5} position="relative">
        <Box
          position="absolute"
          width="100%"
          textAlign="center"
          bottom="160px"
          pr="16px"
        >
          <img
            src={avatar1}
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
          <Box display="flex" justifyContent="center" gap={`8px`}>
            <Typography variant="h4" textAlign="center">
              {community.name}
            </Typography>
            <Box py="6px">
              <img src={badge} alt="" />
            </Box>
          </Box>
          <AText className="disabled" sx={{ textAlign: 'center' }}>
            {(community.owner as IUser).accountId}
          </AText>
        </Box>
        <Box pt="32px" textAlign="center">
          <AButton
            // className={`community primary outlined active`}
            className={`community primary outlined ${joined ? '' : 'active'}`}
            color0btn={joined ? palette.text.primary : palette.secondary.light}
            onClick={handleJoin}
          >
            <GroupOutlinedIcon />
            {joined ? 'remove' : 'join'} community
          </AButton>
        </Box>
      </Grid>
      <Grid item lg={7}>
        <Box pt="24px">
          <Box>
            <DetailParams />
          </Box>
          <Box pt="15px">
            <Typography variant="body1" color={palette.text.primary}>
              A collection of 3333 unique, randomly
            </Typography>
            <Text>generated pixel art NFTs stored on the NEAR</Text>
            <Text> blockchain.</Text>
          </Box>
          <Box pt="15px">
            <SocialButtons />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

type TagStyleProps = { tcolor: string }
export const Tag = styled(Button)<TagStyleProps>(({ theme, tcolor }) => ({
  '&.outlined': {
    background: 'transparent',
    border: `1px solid ${tcolor ? tcolor : theme.palette.background.paper}`,
    color: tcolor ? tcolor : theme.palette.text.primary,
  },
  background: tcolor,
  borderRadius: '54px',
  fontFamily: 'Andale Mono Regular',
  fontSize: '12px',
  fontWeight: 400,
  padding: '4px 10px',
  textTransform: 'capitalize',
}))

export const LiveChat = () => {
  return (
    <Container height="100%">
      <Box height="100%" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h2">live chat</Typography>
          <Box display="flex" gap="6px">
            <PushPinIcon
              sx={{
                color: palette.secondary.light,
                transform: 'rotate(45deg)',
              }}
            />
            <ZoomOutMapIcon sx={{ color: palette.secondary.light }} />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          mt="24px"
          sx={{
            borderTop: `1px solid ${palette.text.primary}`,
          }}
        >
          <Box
            sx={{
              height: '512px',
              mt: '12px',
              overflowY: 'scroll',
            }}
          >
            {/* <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem />
            <MessageItem /> */}
          </Box>
          <Box>
            <AdornmentInput
              adornment={<InsertEmoticonIcon />}
              label="type here..."
              variant="default"
              sx={{
                background: palette.background.paper,
                border: palette.border.main,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
export const MediaPanel = () => {
  return (
    <Container height="100%">
      <Box height="100%">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h2">media</Typography>
          <Box>
            <AButton
              className="primary outlined"
              color0btn={palette.secondary.light}
            >
              view all
            </AButton>
          </Box>
        </Box>
        <Box
          sx={{
            height: '390px',
            overflowY: 'scroll',
          }}
          mt="32px"
          pr="24px"
        >
          <Grid container spacing={1}>
            {new Array(12).fill(2).map((_, key: number) => (
              <Grid item lg={3} key={key}>
                <Box width="100%" height="136px" margin="0px">
                  <img
                    src={`/assets/images/media (${key + 1}).png`}
                    alt=""
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export const MembersModal = ({
  open,
  handleOpen,
}: {
  open: boolean
  handleOpen: AnyFunction
}) => {
  const style = {
    bgcolor: palette.grey[300],
    // border: '2px solid #000',
    boxShadow: 24,

    left: '50%',

    position: 'absolute' as const,

    top: '50%',

    transform: 'translate(-50%, -50%)',

    width: '70%',
    // p: 4,
  }
  return (
    <Modal
      open={open}
      onClose={() => handleOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Members isModal={true} handleOpen={handleOpen} />
        </Box>
      </Fade>
    </Modal>
  )
}
export const CommunityHub = () => {
  const [joined, setJoined] = useState(false)
  const [openMembersModal, setOpenMembersModal] = useState(false)

  const dispatch = useAppDispatch()
  const community = useAppSelector((state) => state.community.data)
  const user = useAppSelector((state) => state.auth.user)

  useEffect(() => {
    console.log('user changed: ', user)
  }, [user])
  useEffect(() => {
    console.log('current community is : ', community, 'user: ', user)
    if (user.joinedCommunities.length === 0) {
      console.log('no joined community')
      setJoined(false)
      return
    }
    console.log(community._id, user.joinedCommunities)
    user.joinedCommunities.forEach((cm: ICommunityMember | string) => {
      if (typeof cm === 'string') {
        if (cm === community._id) {
          console.log('you are connected')
          setJoined(true)
          return
        } else {
          setJoined(false)
        }
      } else {
        if (
          ((cm as ICommunityMember).community as ICommunity)._id ===
          community._id
        ) {
          console.log('you are connected')
          setJoined(true)
          return
        } else {
          setJoined(false)
        }
      }
    })
    console.log('end of loop')
    // const ownerId = community.owner
  }, [community, user])
  const handleJoin = async () => {
    if (!joined) {
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/communities/join`,
        {
          community: community._id,
        }
      )
      console.log('join community api response: ', res)
      if (res.status === 200) {
        if (res?.data?.community) {
          // console.log('you are joined')
          handleSnack('success', 'You are successfully joined')
          const res = await apiGetRequest(`${process.env.VITE_API_URL}/auth/me`)
          console.log(res.data)
          dispatch(setUser(res.data as IUser))
          setJoined(true)
        }
      } else {
        console.log('Bad Request 400')
        // alert(res?.data?.msg)
        handleSnack('error', res.data?.msg)
      }
    } else {
      const res = await apiPostRequest(
        `${process.env.VITE_API_URL}/communities/join`,
        {
          community: community._id,
          leave: true,
        }
      )
      if (res?.status === 200) {
        setJoined(false)
        dispatch(
          setUser({
            ...user,
            joinedCommunities: (
              user.joinedCommunities as ICommunityMember[]
            ).filter(
              (item: ICommunityMember) =>
                (item.community as ICommunity)._id !== community._id
            ),
          })
        )
      }
    }
  }
  const handleSnack = (type: TAlert, content: string) => {
    const snack: TSnack = { content, open: true, type }
    dispatch(openSnack(snack))
  }
  return (
    <PContainer.Main>
      <Box>
        <Banner />
      </Box>
      <Box>
        <Detail handleJoin={handleJoin} joined={joined} community={community} />
      </Box>
      <Grid container p="72px 24px" spacing={`24px`}>
        <Grid item lg={6}>
          <FeaturedPost />
        </Grid>
        <Grid item lg={6}>
          <LiveChat />
        </Grid>
        <Grid item lg={6}>
          <MediaPanel />
        </Grid>
        <Grid item lg={6} sx={{ width: '100%' }}>
          <Members isModal={false} handleOpen={setOpenMembersModal} />
        </Grid>
      </Grid>
      <MembersModal open={openMembersModal} handleOpen={setOpenMembersModal} />
    </PContainer.Main>
  )
}
