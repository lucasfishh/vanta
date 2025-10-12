# NeuroSync, what is left

Status as of launch prep. The site, docs, API, and infra are live. The program
is deployed and verified on devnet. Remaining work below.

## 1. Mainnet program (the main blocker for registration)

Devnet is done and proven (register + heartbeat + readback all passed). To go
live on mainnet:

- [ ] Build: `cd program && cargo build-sbf --arch v3`
      (confirm arch at deploy time; mainnet may also have v0/v1 disabled).
