import { Box, Typography } from '@mui/material'

// import { AText } from '../../../components'

import type { UserProps } from '.'
import { Contact } from '.'

export const ContactList = ({
  contacts,
  opponentId,
  setOpponentId,
}: {
  contacts: UserProps[]
  opponentId: string
  setOpponentId: AnyFunction
}) => {
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', textDecoration: 'underline' }}
        >
          friends
        </Typography>
      </Box>
      <Box>
        {contacts.map((item: UserProps, key: number) => (
          <Box key={key} onClick={() => setOpponentId(item.walletId)}>
            <Contact
              user={item}
              active={item.walletId === opponentId ? true : false}
            />
          </Box>
        ))}
        {/* <Contact />
        <Contact /> */}
      </Box>
    </>
  )
}
