import { Connection } from '@solana/web3.js';
import { WalletReadyState } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';

// Minimal browser event emitter (avoids pulling in Node's 'events').
class Emitter {
  constructor() { this._h = {}; }
  on(e, fn) { (this._h[e] ||= []).push(fn); return this; }
  off(e, fn) { this._h[e] = (this._h[e] || []).filter((f) => f !== fn); return this; }
  emit(e, ...a) { (this._h[e] || []).forEach((fn) => fn(...a)); }
}

const LAST_WALLET_KEY = 'neurosync_last_wallet';

// All reads/sends go through the API RPC proxy so the upstream key stays server-side.
const RPC_PROXY = `${location.origin}/api/rpc`;

const WALLET_ICONS = {
