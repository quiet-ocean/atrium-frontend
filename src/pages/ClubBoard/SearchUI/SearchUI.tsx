import { Box, styled, Typography, Grid } from '@mui/material'
import { useState, useEffect } from 'react'

import loadingGif from '../../../assets/icons/search-loading.gif'
import { useAppSelector, useAppDispatch } from '../../../hooks'
import { setCurrentBoardTab, setSearchUiOpen } from '../../../stores/UiStore'
import { apiGetRequest } from '../../../utils'

const SearchUIWrapper = styled(Box)(() => ({
  '&.open': {
    opacity: 1,
  },
  backdropFilter: 'blur(15px)',
  background: 'rgba(20, 20, 20, 0.7)',
  height: '100%',
  opacity: 0,
  padding: '36px',
  transition: 'opacity 0.5s',
  width: '100%',
}))

const ItemWrapper = styled(Box)(({ theme }) => ({
  '&:hover': {
    // background: theme.palette.background.default,
    background: theme.palette.grey[300],
    // '& .MuiTypography-root ': {
    //   color: theme.palette.background.paper,
    // }
  },
  background: theme.palette.background.paper,
  display: 'flex',
  padding: '12px',
  transition: 'background 0.3s',
}))
const UserResultItem = ({
  imgUri,
  name,
}: {
  imgUri?: string
  name?: string
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    console.log('handle click')
    dispatch(setSearchUiOpen(false))
    dispatch(setCurrentBoardTab(3))
  }
  return (
    <ItemWrapper onClick={handleClick}>
      <Box
        width={`76px`}
        height={`76px`}
        sx={{ '& img': { borderRadius: '100%' } }}
      >
        <img src={imgUri} alt="" width="100%" height="100%" />
      </Box>
      <Box p="26px 12px">
        <Typography variant="h5">{name}</Typography>
      </Box>
    </ItemWrapper>
  )
}
const CommunityResultItem = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(setSearchUiOpen(false))
    dispatch(setCurrentBoardTab(5))
  }
  return (
    <ItemWrapper flexDirection="column" gap="8px" onClick={handleClick}>
      <Typography variant="h5">{item?.name}</Typography>
      <Typography variant="body2">{item?.description}</Typography>
      <Typography variant="caption">{item?.owner}</Typography>
    </ItemWrapper>
  )
}
const LoadingItem = () => {
  return (
    <Box>
      <img src={loadingGif} alt="" width="100%" />
    </Box>
  )
}

export const SearchUI = ({ open }: { open: boolean }) => {
  const [users, setUsers] = useState([])
  const [communities, setCommunities] = useState([])
  const [loading, setLoading] = useState(false)

  const value = useAppSelector((state) => state.app.searchUserCriteria)

  useEffect(() => {
    console.log('value changed to: ', value)

    const search = async () => {
      setLoading(true)
      const res = await apiGetRequest(
        `${process.env.VITE_API_URL}/search?user=${value}&community=${value}`
      )
      console.log(res)
      if (res.data.users && res.data.users.length) setUsers(res.data.users)
      else setUsers([])
      if (res.data.communities && res.data.communities.length)
        setCommunities(res.data.communities)
      else setCommunities([])
      setLoading(false)
    }
    search()
  }, [value])
  return (
    <SearchUIWrapper className={open ? 'open' : ''}>
      <Box>
        <Box px="24px">
          <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
            user profiles
          </Typography>
        </Box>

        <Box minHeight={`150px`}>
          <Grid container>
            {loading
              ? new Array(6).fill(2).map((_, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <LoadingItem />
                  </Grid>
                ))
              : users.map((item: any, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <UserResultItem
                      imgUri={item?.avatar}
                      name={item?.username}
                    />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Box>
      <Box>
        <Box px="24px">
          <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>
            project profiles
          </Typography>
        </Box>

        <Box minHeight={`150px`}>
          <Grid container>
            {loading
              ? new Array(6).fill(2).map((_, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <LoadingItem />
                  </Grid>
                ))
              : communities.map((item: any, key: number) => (
                  <Grid item lg={4} key={key} p="24px">
                    <CommunityResultItem item={item} />
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Box>
    </SearchUIWrapper>
  )
}
