import React from 'react'
import { Box, Stack } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import { SubTitle, Text, WalletButton } from './styled'
import { AntSwitch } from './AntSwitch'

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
              fontSize: '24px',
              fontWeight: 800,
              color: '#F8F9FA',
              textTransform: 'capitalize',
              margin: '0px',
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
