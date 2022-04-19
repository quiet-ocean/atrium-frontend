import { Contract } from 'near-api-js';
export interface CWindow {
  name: string;
};
export interface CWindow extends Window {
  walletConnection: any;
  accountId: string;
  contract: Contract;
  location: any;
  near: any;
}