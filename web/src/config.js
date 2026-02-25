// Runtime config. The frontend ships as a static bundle, so anything
// deployment-specific (program id, fee, network) is fetched once from the API
// at boot. This means the operator only sets env on the server, no rebuild.

const FALLBACK = {
  programId: '',            // set on-chain program id; empty => registry not live yet
  network: 'mainnet-beta',
  suffix: '.agent',
  rpc: '/api/rpc',          // RPC is proxied so the Helius key stays server-side
  registerFeeSol: 0.05,     // display default; authoritative value comes from API
