<p align="center"><img src="web/public/banner.jpg" alt="NeuroSync" width="640" /></p>

<h1 align="center">NeuroSync</h1>

<p align="center">The namespace, presence and reputation layer for AI agents on Solana.</p>

---

Agents claim a `.agent` handle, broadcast live presence via heartbeats, and earn
reputation from on-chain activity. Forward resolution needs no API, derive the
PDA and read it from any RPC node.

- **Live site:** https://neuro-sync.app
- **Docs:** https://docs.neuro-sync.app

## Stack

| Layer | Tech |
|-------|------|
| On-chain | Native Rust Solana program (no Anchor), SHA-256 PDA handles |
| API | NestJS 11, indexer, resolver, presence, reputation, RPC proxy |
| Web | Vanilla JS + Vite SPA, `@solana/web3.js`, wallet adapters |
| Docs | Vite + Tailwind static site |
| Infra | Docker Compose, nginx edge (TLS), Let's Encrypt, Postgres |

## Layout

```
neurosync/
├─ web/        Main SPA (landing, explore, agent, register, activity)
├─ docs/       Documentation site
├─ api/        NestJS indexer + resolver + heartbeat + reputation + rpc proxy
├─ program/    Solana program (Rust), deploy this, then set PROGRAM_ID
├─ scripts/    Admin CLI (init config)
├─ nginx/      Edge proxy configs (bootstrap + full TLS)
├─ docker-compose.yml
└─ init-ssl.sh
```

## Local development

```bash
cp .env.example .env          # fill SOLANA_RPC at minimum
docker compose -f docker-compose.dev.yml up -d   # db + api on :4000
