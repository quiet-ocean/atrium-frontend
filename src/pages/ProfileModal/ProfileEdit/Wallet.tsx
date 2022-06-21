import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { Box, Stack } from '@mui/material'
import React from 'react'

import { AntSwitch } from './AntSwitch'
import { SubTitle, Text, WalletButton } from './styled'

export const Wallet = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: '50%' }}>
        <SubTitle>wallet connection</SubTitle>
        <Text sx={{ fontSize: '28x' }}>Connect your NEAR wallet.</Text>
        <WalletButton>
          <AccountBalanceWalletIcon />
          <Text
            sx={{
              color: '#F8F9FA',
              fontSize: '24px',
              fontWeight: 800,
              margin: '0px',
              textTransform: 'capitalize',
            }}
          >
            Wallet Connected
          </Text>
        </WalletButton>
        <Text>swiftyyy.near (Disconnect)</Text>
      </Box>
      <Box sx={{ width: '50%' }}>
        <SubTitle>Wallet Options</SubTitle>
        <Text>Disable/Enable options relating to your crypto wallet.</Text>
        <Box>
          <Stack direction="row" spacing={2} sx={{ padding: '12px 0px' }}>
            <Box sx={{ padding: '6px' }}>
              <AntSwitch />
            </Box>
            <Text>Allow others to view your balances.</Text>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Box sx={{ padding: '6px' }}>
              <AntSwitch />
            </Box>
            <Text>Allow others to view your balances.</Text>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
