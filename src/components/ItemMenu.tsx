import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box } from '@mui/material'
// import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import item1 from '../assets/images/item-1.png'

const Divider = styled(Box)(() => ({
  borderLeft: `1px solid white`,
  height: '100%',
  margin: '0px 32px',
  width: '0px',
}))

const Item = ({ img }: { img?: string }) => {
  return (
    <Box width="48px" height="48px" sx={{ background: '#A8A8A8' }}>
      {img && <img src={img} width={`100%`} height="100%" />}
    </Box>
  )
}
export const ItemMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box
      sx={{
        bottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        padding: '16px',
        position: 'fixed',
        width: '100%',
      }}
    >
      <Box
        sx={{
          backdropFilter: 'opacity(20%)',
          backgroundColor: 'rgba(26, 26, 26, 0.9)',
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          p="6px"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <KeyboardArrowDownIcon sx={{ color: 'white' }} />
          ) : (
            <KeyboardArrowUpIcon sx={{ color: 'white' }} />
          )}
        </Box>
        <Box
          p="16px"
          sx={{ borderTop: `1px solid white`, display: open ? 'flex' : 'none' }}
        >
          <Box>
            <Item img={item1} />
          </Box>
          {new Array(5).fill(2).map((_, key: number) => (
            <Box key={key} display="flex">
              <Divider />
              <Item />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
