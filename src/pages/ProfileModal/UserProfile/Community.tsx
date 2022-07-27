import { Box } from '@mui/material'
import { AtButton, AtText } from '../../../components/elements'

export const Community = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" gap="38px">
        <AtButton text="message" variant="outlined" />
        <Box>
          <AtText className="subtitle">swiftyyy</AtText>
        </Box>
        <AtButton text="add friend" variant="outlined" />
      </Box>
      <Box mt="12px">
        <AtText className="disabled" sx={{ textAlign: 'center' }}>
          Your #1 Favourite Degen on NEAR.
        </AtText>
      </Box>
      <Box
        mt="12px"
        textAlign="center"
        display="flex"
        justifyContent="center"
        gap="18px"
      >
        <AtButton variant="outlined" text="twitter" />
        <AtButton variant="outlined" text="website" />
        <AtButton variant="outlined" text="discord" />
      </Box>
    </>
  )
}
