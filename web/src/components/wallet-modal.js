import { walletService } from '../lib/wallet.js';

const WALLETS = ['Phantom', 'Solflare', 'Backpack'];

let el = null;

export function openWalletModal() {
  if (el) close();

  el = document.createElement('div');
