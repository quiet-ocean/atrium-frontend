import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { Stepper, LoginLayout } from '../components'
import { useAppDispatch, useAppSelector } from '../hooks'
import { signup } from '../stores/AuthStore'

const ConnectSocials = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.auth.user)

  const handleClickBtn = async () => {
    const resultAction = await dispatch(signup(user))
    console.log(resultAction)
    navigate('/success')
  }

  return (
    <LoginLayout>
      <>
        <h1>Connect Socials</h1>
        <p>
          Connect your socials to access special integrations within the game.
        </p>
        <Button className="atrium_btn">Connect Twitter</Button>
        <Button className="atrium_btn">Connect Discord</Button>
        <Button
          className="atrium_btn atrium_btn_primary"
          sx={{ mt: '56px' }}
          onClick={handleClickBtn}
        >
          NEXT
        </Button>
        <Button className="atrium_btn" onClick={handleClickBtn}>
          SKIP FOR NOW
        </Button>
        <Stepper length={5} step={3} />
      </>
    </LoginLayout>
  )
}

export { ConnectSocials }
