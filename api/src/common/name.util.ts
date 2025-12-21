import { createHash } from 'crypto';
import { PublicKey } from '@solana/web3.js';

const VALID = /^[a-z0-9-]{1,32}$/;

export function normalizeName(raw: string): string {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/\.agent$/, '')
