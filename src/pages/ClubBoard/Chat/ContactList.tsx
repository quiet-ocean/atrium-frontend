import { Box } from '@mui/material'

import { AText } from '../../../components'

import { Contact, UserProps } from '.'

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
      <Box display="flex" justifyContent="space-between">
        <AText className="subtitle" sx={{ fontSize: '24px !important' }}>
          messages
        </AText>
        <AText
          className="disabled"
          sx={{
            fontFamily: 'Fractul Alt !important',
            fontSize: '18px !important',
            fontWeight: 300,
            padding: '3px',
          }}
        >
          requests
        </AText>
      </Box>
      <Box>
        {contacts.map((item: UserProps, key: number) => (
          <Box key={key} onClick={() => setOpponentId(item.walletId)}>
            <Contact user={item} active={item.walletId === opponentId ? true : false} />
          </Box>
        ))}
        {/* <Contact />
        <Contact /> */}
      </Box>
    </>
  )
}
