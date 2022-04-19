import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import { getConfig } from '../config';

const nearConfig = getConfig(process.env.REACT_APP_NODE_ENV || 'development');

export interface MyContract extends Contract {
  nft_mint_many: any;
  get_mint_start_epoch: any;
  tokens_left: any;
}
export interface CWindow extends Window {
  walletConnection: any;
  accountId: string;
  contract: MyContract;
  location: any;
}

declare let window: CWindow;

// Initialize contract & set global variables
export async function initNearContract() {
  // Initialize connection to the NEAR testnet
  const near = await connect(
    Object.assign({ deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }, {
      networkId: 'testnet',
      nodeUrl: 'https://rpc.testnet.near.org',
      contractName: process.env.REACT_APP_CONTRACT_NAME,
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org',
      explorerUrl: 'https://explorer.testnet.near.org',
    } as any),
  );
  // console.log('near object is ', near);
  // Initializing Wallet based Account. It can work with NEAR testnet wallet that
  // is hosted at https://wallet.testnet.near.org
  window.walletConnection = new WalletConnection(near, null);

  // Getting the Account ID. If still unauthorized, it's just empty string
  window.accountId = window.walletConnection.getAccountId();

  // Initializing our contract APIs by contract name and configuration
  window.contract = (await new Contract(
    window.walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read only. They don't modify the state, but usually return some value.
      // viewMethods: ['get_greeting'],
      // Change methods can modify the state. But you don't receive the returned value when called.
      viewMethods: ['total_cost', 'tokens_left', 'get_mint_start_epoch', 'nft_metadata'],
      changeMethods: ['nft_mint', 'new_default_meta', 'nft_mint_many'],
      // sender: window.walletConnection.account(),
    },
  )) as MyContract;
}

export async function logoutNEAR() {
  window.walletConnection.signOut();
  // reload page
  window.location.replace(window.location.origin + window.location.pathname);
  console.log('sign out');
  // callback(false);
}

export async function loginNEAR() {
  // Allow the current app to make calls to the specified contract on the
  // user's behalf.
  // This works by creating a new access key for the user's account and storing
  // the private key in localStorage.
  await window.walletConnection
    .requestSignIn(nearConfig.contractName)
    .then((res: any) => {
      console.log(res);
      // callback(true);
    })
    .catch((err: Error) => {
      console.log(err);
    });
}
