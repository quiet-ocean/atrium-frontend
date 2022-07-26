import { connect, Contract, keyStores, WalletConnection } from 'near-api-js'

import { getConfig } from '../config'
import { CONTRACT_NAME } from '../config/nearConfig'
import { Wallet } from '../types/Wallet'
// import { Buffer } from 'buffer';
// globalThis.Buffer = Buffer;

const nearConfig = getConfig(process.env.NODE_ENV || 'development')

export interface MyContract extends Contract {
  nft_mint_many: any
  get_mint_start_epoch: any
  tokens_left: any
}

declare let window: any

// Initialize contract & set global variables
export async function initNearContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(
    Object.assign(
      { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } },
      {
        contractName: CONTRACT_NAME,
        explorerUrl: 'https://explorer.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
      } as any
    )
  )
  window.walletConnection = new WalletConnection(near, null)

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId()

  // Initializing our contract APIs by contract name and configuration
  window.contract = (await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      changeMethods: ['nft_mint', 'new_default_meta', 'nft_mint_many'],
      // View methods are read only. They don't modify the state, but usually return some value.
      // viewMethods: ['get_greeting'],
      // Change methods can modify the state. But you don't receive the returned value when called.
      viewMethods: [
        'total_cost',
        'tokens_left',
        'get_mint_start_epoch',
        'nft_metadata',
      ],
      // sender: window.walletConnection.account(),
    }
  )) as MyContract
}

export async function logoutNear() {
  window.walletConnection.signOut()
  // reload page
  // window.location.replace(window.location.origin + window.location.pathname);
  console.log('sign out')
  // callback(false);
}

export async function loginNear(successUrl?: string, failureUrl?: string) {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  await window.walletConnection
    .requestSignIn(
      nearConfig.contractName,
      'near login',
      successUrl,
      failureUrl
    )
    .then((res: any) => {
      console.log(res)
      // callback(true);
    })
    .catch((err: Error) => {
      console.log(err)
    })
}

export function getAccount() {
  let account = {
    accountId: '',
    type: Wallet.None,
  }
  if (window.walletConnection && window.walletConnection.isSignedIn()) {
    account = {
      accountId: window.walletConnection.getAccountId(),
      type: Wallet.Near,
    }
  } else if (window.near && window.near.isSignedIn()) {
    account = {
      accountId: window.near.getAccountId(),
      type: Wallet.Sender,
    }
  }
  return account
}
