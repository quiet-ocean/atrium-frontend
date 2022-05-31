const CONTRACT_NAME = process.env.REACT_APP_CONTRACT_ID || 'atrium-contract';
// const CONTRACT_NAME = 'contract-name';
// import { Configure } from '../types';

interface Configure {
  networkId: string;
  nodeUrl: string;
  contractName: string;
  walletUrl: string;
  helperUrl: string;
  explorerUrl: string;
  keyPath: string;
  masterAccount: string;
}
interface NFT {
  name: string;
}

export type { Configure, NFT };

function getConfig(env: string): Configure {
  const configure: Configure = {
    networkId: '',
    nodeUrl: '',
    contractName: '',
    walletUrl: '',
    helperUrl: '',
    explorerUrl: '',
    keyPath: '',
    masterAccount: '',
  };
  switch (env) {
    case 'production':
      return { ...configure };
    case 'mainnet':
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        explorerUrl: 'https://explorer.mainnet.near.org',
      } as Configure;
    case 'development':
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
      } as Configure;
    case 'testnet':
      return {
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org',
      } as Configure;
    case 'betanet':
      return {
        networkId: 'betanet',
        nodeUrl: 'https://rpc.betanet.near.org',
        contractName: CONTRACT_NAME,
        walletUrl: 'https://wallet.betanet.near.org',
        helperUrl: 'https://helper.betanet.near.org',
        explorerUrl: 'https://explorer.betanet.near.org',
      } as Configure;
    case 'local':
      return {
        networkId: 'local',
        nodeUrl: 'http://localhost:3030',
        keyPath: `${process.env.HOME}/.near/validator_key.json`,
        walletUrl: 'http://localhost:4000/wallet',
        contractName: CONTRACT_NAME,
      } as Configure;
    case 'test':
    case 'ci':
      return {
        networkId: 'shared-test',
        nodeUrl: 'https://rpc.ci-testnet.near.org',
        contractName: CONTRACT_NAME,
        masterAccount: 'test.near',
      } as Configure;
    case 'ci-betanet':
      return {
        networkId: 'shared-test-staging',
        nodeUrl: 'https://rpc.ci-betanet.near.org',
        contractName: CONTRACT_NAME,
        masterAccount: 'test.near',
      } as Configure;
    default:
      throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`);
  }
}

export default getConfig;
