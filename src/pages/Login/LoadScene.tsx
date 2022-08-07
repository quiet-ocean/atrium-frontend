import { Box, Typography } from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
import * as React from 'react'

import logo from '../../assets/images/atrium-logo-large.png'
import { LoginLayout } from '../../components'

export default function LinearDeterminate({
  rotate,
}: {
  rotate?: AnyFunction
}) {
  const [progress, setProgress] = React.useState<number>(0)
  // const [state, setState] = useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        // if(oldProgress > )
        if(rotate) rotate(parseInt((oldProgress / 25).toString()) * 90)

        if (oldProgress === 100) {
          clearInterval(timer)
          // return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box sx={{ '& .MuiLinearProgress-root': { width: '100%' }, width: '100%' }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          '& .MuiLinearProgress-bar': { background: 'white' },
          background: '#929292',
        }}
      />
    </Box>
  )
}
export const LoadScene = () => {
  const [angle, setAngle] = React.useState(0)

  // const rotateLogo = () => {
  //   setAngle((prevAngle) => prevAngle + 45)
  // }
  return (
    <LoginLayout>
      <Box
        p="24px"
        display="flex"
        height="100%"
        pt="220px"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          '& div': {
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <Box flexDirection="column">
          <Box>
            <Typography variant="h3">User Account All Setup!</Typography>
          </Box>
          <Box mt="24px">
            <Typography variant="caption">
              We’re now loading you into Atrium,
            </Typography>
          </Box>
          <Box mt="12px">
            <Typography variant="caption">
              enjoy your stay ASAP Rocky.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            width="360px"
            height="360px"
            sx={{
              transform: `rotate(${angle}deg)`,
              transition: 'transform 1s',
            }}
          >
            <img src={logo} alt="" width="100%" height="100%" />
          </Box>
        </Box>
        <Box width="100%">
          <LinearDeterminate rotate={setAngle} />
        </Box>
      </Box>
    </LoginLayout>
  )
}
