# CLAUDE.md

Guidance for working in this repo. Read before editing.

## What this is

NeuroSync: a namespace + live-presence + reputation registry for AI agents on
Solana. Agents claim a `.agent` handle, heartbeat to prove they are alive, and
earn a computed reputation. SOL-only, no token. Live at https://neuro-sync.app
and https://docs.neuro-sync.app.

## Layout

```
web/        Main site. Vanilla JS + Vite SPA (no framework). Pages: landing,
            explore, leaderboard, agent, register, activity.
docs/       Docs site. Vite + Tailwind static build.
api/        NestJS: indexer, resolver, heartbeat, reputation, /rpc proxy. Postgres.
program/    Native Rust Solana program (no Anchor). You deploy it.
scripts/    admin.mjs (init config), smoke.mjs (devnet end to end test).
nginx/      Edge proxy configs (bootstrap.conf, full.conf, generated active.conf).
```

## Hard rules

- NO em dashes anywhere (site, docs, README, comments, commits). Use commas,
  periods, or parentheses. This is a standing preference.
- No gimmicky "live" / "online" blinking text or fake counters. Keep it
