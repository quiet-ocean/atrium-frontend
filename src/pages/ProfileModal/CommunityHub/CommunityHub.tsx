import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { Box, Grid, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

import avatar1 from '../../../assets/images/avatar-5.png'
import avatar2 from '../../../assets/images/avatar-6.png'
import bannerImage from '../../../assets/images/banner-1.png'
import postImage from '../../../assets/images/post-5.png'
import { AText, AButton } from '../../../components'
import { palette } from '../../../MuiTheme'
import { AdornmentInput } from '../ProfileEdit/AdornmentInput'
import * as PContainer from '../styled'
import { Community as Container } from '../styled'
import { PostContainer } from '../UserProfile'

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
        <AText
          className="disabled"
          sx={{ fontSize: '12px', fontWeight: 400, lineHeight: '15px' }}
        >
          {category}
        </AText>
        <AText sx={{ fontSize: '18px', fontWeight: 600, lineHeight: '22px' }}>
          {value}
        </AText>
      </Box>
    )
  }
  return (
    <Box display="flex">
      <Item category="supply" value="5000" />
      <Item category="listed" value="313" />
      <Item category="floor price" value="20 Ⓝ" />
      <Item category="Vol. All Time" value="93,420 Ⓝ" />
    </Box>
  )
}

export const SocialButtons = () => {
  return (
    <Box display="flex" gap="12px">
      <AButton className="small">marketplace</AButton>
      <AButton className="small">whitepaper</AButton>
      <AButton className="small">twitter</AButton>
      <AButton className="small">discord</AButton>
      <AButton className="small">website</AButton>
    </Box>
  )
}
export const Detail = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={5} position="relative">
        <Box
          position="absolute"
          width="100%"
          textAlign="center"
          bottom="120px"
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
        <Box pt="24px">
          <AText
            sx={{ fontSize: '24px', fontWeight: '800', textAlign: 'center' }}
          >
            Antisocial Ape Club
          </AText>
          <AText className="disabled" sx={{ textAlign: 'center' }}>
            ownerwalletfullID
          </AText>
        </Box>
        <Box pt="24px" textAlign="center">
          <AButton className="community">
            <GroupOutlinedIcon />
            join community
          </AButton>
        </Box>
      </Grid>
      <Grid item lg={7}>
        <Box pt="24px">
          <Box>
            <DetailParams />
          </Box>
          <Box pt="15px">
            <AText className="description">
              A collection of 3333 pixel art ape NFTs stored on the NEAR
              blockchain.
            </AText>
          </Box>
          <Box pt="15px">
            <SocialButtons />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export const UsernameWithTags = () => {
  return (
    <>
      <Box display="flex" gap="8px">
        <Box>
          <AText sx={{ fontSize: '14px', padding: '4px' }}>Hades</AText>
        </Box>
        <Box>
          <Tag tagColor="#71E5FF">founder</Tag>
        </Box>
        <Tag tagColor="#FFB350">devs</Tag>
        <Tag tagColor="#DE58FF">moderator</Tag>
      </Box>
    </>
  )
}
type TagStyleProps = { tagColor: string }
export const Tag = styled(Button)<TagStyleProps>(({ theme, tagColor }) => ({
  '&.outlined': {
    background: 'transparent',
    border: `1px solid ${tagColor ? tagColor : theme.palette.background.paper}`,
    color: tagColor ? tagColor : theme.palette.text.primary,
  },
  background: tagColor,
  borderRadius: '54px',
  fontFamily: 'Andale Mono Regular',
  fontSize: '12px',
  fontWeight: 400,
  padding: '4px 10px',
  textTransform: 'capitalize',
}))

export const UserIntro = () => {
  return (
    <Box display="flex" gap="12px">
      <Box>
        <img
          src={avatar2}
          alt=""
          width="36px"
          height="36px"
          style={{ borderRadius: '18px' }}
        />
      </Box>
      <Box>
        <UsernameWithTags />
        <Box pt="6px">
          <AText className="disabled description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At velit ac
            convallis commodo morbi ut leo gravida ...
          </AText>
        </Box>
      </Box>
    </Box>
  )
}
export const FeaturedPost = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <AText>featured post</AText>
        <AButton className="outlined secondary">view all posts</AButton>
      </Box>
      <Box pt="12px">
        <PostContainer img={postImage} height="">
          <AText>Why do these noobs keep tryna play games with us?</AText>
          <AText className="disabled">
            Keep the peace? Fuck that. We keep it antisocial on this island.
            Stay Ape.{' '}
          </AText>
        </PostContainer>
        <Box pt="12px">
          <UserIntro />
        </Box>
      </Box>
    </Container>
  )
}
export const LiveChat = () => {
  return (
    <Container height="100%">
      <Box height="100%" display="flex" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <AText>live chat</AText>
          <AButton className="outlined secondary">view all</AButton>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
          py="24px"
        >
          <Box sx={{ height: '450px', overflowY: 'scroll' }}>
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
            <UserIntro />
          </Box>
          <Box>
            <AdornmentInput
              adornment={<InsertEmoticonIcon />}
              label=""
              variant="default"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
export const Media = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <AText>Media</AText>
        <AButton className="outlined secondary">view all</AButton>
      </Box>
      <Box
        sx={{
          height: '360px',
          overflowY: 'scroll',
        }}
      >
        <Grid container spacing={1}>
          {new Array(12).fill(2).map((_, key: number) => (
            <Grid item lg={3} key={key}>
              <Box width="136px" height="136px" margin="0px">
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
    </Container>
  )
}
export const Member = ({ index }: { index: number }) => {
  return (
    <Box
      p="8px 16px"
      display="flex"
      justifyContent="space-between"
      sx={{
        background: index % 2 === 0 ? palette.background.paper : '',
      }}
    >
      <Box display="flex" gap="12px">
        <img src={avatar2} alt="" width="46px" height="46px" />
        <Box py="6px">
          <AText sx={{ fontSize: '18px', fontWeight: 800 }}>LtLollipop</AText>
        </Box>
      </Box>
      <Box>
        <AText sx={{ fontSize: '18px', fontWeight: 800 }}>15</AText>
        <AText className="disabled" sx={{ fontSize: '12px !important' }}>
          NFTs
        </AText>
      </Box>
      <Box display="flex" gap="12px">
        <Box py="3px">
          <Tag tagColor="#FF75CD" className="outlined">
            whitelisted
          </Tag>
        </Box>
      </Box>
    </Box>
  )
}
export const Members = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="space-between">
        <AText>members</AText>
        <AButton className="outlined secondary">view all</AButton>
      </Box>
      <Box display="flex" gap="12px" pt="12px">
        <Tag tagColor="#A8A8A8" className="">
          all
        </Tag>
        <Tag tagColor="#FF75CD" className="outlined">
          whitelisted
        </Tag>
        <Tag tagColor="#90E487" className="outlined">
          OG member
        </Tag>
        <Tag tagColor="#FFB350" className="outlined">
          devs
        </Tag>
        <Tag tagColor="#DE58FF" className="outlined">
          moderator
        </Tag>
        <Tag tagColor="#71E5FF" className="outlined">
          founder
        </Tag>
      </Box>
      <Box
        pt="24px"
        sx={{
          height: '360px',
          overflowY: 'scroll',
        }}
      >
        {new Array(10).fill(2).map((_, key: number) => (
          <Member index={key} key={key} />
        ))}
      </Box>
    </Container>
  )
}
export const CommunityHub = () => {
  return (
    <PContainer.Main>
      <Box>
        <Banner />
      </Box>
      <Box>
        <Detail />
      </Box>
      <Grid container p="24px" spacing={2}>
        <Grid item lg={6}>
          <FeaturedPost />
        </Grid>
        <Grid item lg={6}>
          <LiveChat />
        </Grid>
        <Grid item lg={6}>
          <Media />
        </Grid>
        <Grid item lg={6}>
          <Members />
        </Grid>
      </Grid>
    </PContainer.Main>
  )
}
