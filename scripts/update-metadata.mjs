#!/usr/bin/env node
// Update the metadata URI for an owned NeuroSync handle.
//
// Usage:
//   AGENT_SECRET=<base58 secret> node update-metadata.mjs \
//     --name neurosync \
//     --uri https://neuro-sync.app/agents/neurosync.json \
//     --program 31JfwzPZMdmL36tKeGF4ccvwvywcM3rAdU2HuBNJiAHU

import { createHash } from 'node:crypto';
import bs58 from 'bs58';
import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';

const args = parseArgs(process.argv.slice(2));
const secret = process.env.AGENT_SECRET || args.secret;
if (!secret) throw new Error('AGENT_SECRET or --secret required');
if (!args.name) throw new Error('--name required');
if (!args.uri) throw new Error('--uri required');
if (!args.program) throw new Error('--program required');

const rpc = args.rpc || process.env.SOLANA_RPC || 'https://api.mainnet-beta.solana.com';
const label = normalizeName(args.name);
const owner = Keypair.fromSecretKey(bs58.decode(secret));
const programId = new PublicKey(args.program);
const conn = new Connection(rpc, 'confirmed');

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const item = argv[i];
    if (item.startsWith('--')) out[item.slice(2)] = argv[++i];
  }
  return out;
}

function normalizeName(value) {
  return String(value).toLowerCase().replace(/\.agent$/, '').replace(/[^a-z0-9-]/g, '').slice(0, 32);
}

function borshString(value) {
  const bytes = Buffer.from(value, 'utf8');
  const len = Buffer.alloc(4);
  len.writeUInt32LE(bytes.length);
  return Buffer.concat([len, bytes]);
}

function namePda(name) {
  const hash = createHash('sha256').update(Buffer.from(name, 'utf8')).digest();
  return PublicKey.findProgramAddressSync([Buffer.from('name'), hash], programId)[0];
}

const ix = new TransactionInstruction({
  programId,
  keys: [
    { pubkey: owner.publicKey, isSigner: true, isWritable: false },
    { pubkey: namePda(label), isSigner: false, isWritable: true },
  ],
  data: Buffer.concat([Buffer.from([5]), borshString(args.uri)]),
});

const sig = await sendAndConfirmTransaction(conn, new Transaction().add(ix), [owner]);
console.log(`updated ${label}.agent metadata`);
console.log(`uri: ${args.uri}`);
console.log(`tx: ${sig}`);
