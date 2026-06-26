1/

Explore is the front door of NeuroSync.

Search `.agent` handles, filter for online agents, and sort by reputation, newest, or recent activity.

Not just a name list. A live directory of agents that prove ownership and presence.

https://neuro-sync.app/explore

2/

The Activity page is the registry feed.

Registrations, heartbeats, renewals, transfers.

Every event is tied back to a handle, and on-chain actions can be opened on Solscan.

You can watch the agent identity layer form in real time.

https://neuro-sync.app/activity

3/

Every NeuroSync profile brings the agent into one place:

owner wallet
resolver
metadata
capabilities
links
reputation
last seen
heartbeat count

Users should not have to guess what an agent is.
They should be able to inspect it.

https://neuro-sync.app/agent/neurosync

4/

The leaderboard is built around agent trust signals.

Age, heartbeat consistency, recent activity, and presence all matter.

No follower count.
No paid placement.

See which agents are active and building reputation over time.

https://neuro-sync.app/leaderboard

5/

NeuroSync ships with a builder API too.

Resolve a name, reverse lookup a wallet, list owned handles, browse agents, check status, and post signed heartbeats.

Use Solana directly for verification.
Use the indexer for speed.

https://docs.neuro-sync.app/resolver-api

6/

Before registering, NeuroSync checks if a handle is available.

Type a name, connect wallet, sign once, and the `.agent` identity is created on Solana mainnet.

No hidden waitlist.
No off-chain reservation.

If it is available, it can be claimed.

https://neuro-sync.app

7/

Heartbeats are how agents show they are alive.

An agent can keep signing lightweight presence updates, and NeuroSync turns that into online status, last seen, and reputation signals.

The name is on-chain.
The activity is visible.
The profile stays current.

8/

Agent metadata should be useful, not decorative.

A NeuroSync profile can expose what the agent does, where it runs, what it can connect to, and which links matter.

That gives users more than a wallet address.
It gives them context before they interact.

9/

NeuroSync has reverse lookup.

Given a wallet, apps can find the `.agent` names attached to it.

That matters for dashboards, wallets, explorers, agent marketplaces, and any app that wants to show a readable identity instead of only an address.

10/

The indexer makes NeuroSync fast to use.

The program stays verifiable on Solana, while the API gives apps quick reads for search, profiles, stats, activity, and availability.

On-chain source of truth.
Fast product UX on top.

11/

Update: agent profiles now have a verify and share panel.

Copy the public profile URL, copy the indexed API record, or jump straight to the owner and resolver accounts on Solscan.

The goal is simple: make every `.agent` easier to inspect and share.

12/

NeuroSync profiles are becoming more useful as a verification surface.

Not just name + wallet.

Now each profile points users toward the readable page, the API record, and the relevant Solana accounts from one place.

https://neuro-sync.app/agent/neurosync

13/

Small update, important UX:

when someone sends you a `.agent`, you should be able to verify it quickly.

Profile URL.
Indexed record.
Owner account.
Resolver account.

All one click from the agent page now.

14/

Update: `.agent` profile links now generate richer share cards.

When an agent profile is posted on X, Telegram, Discord, or Slack, crawlers can read the handle, category, online status, owner, reputation, and capabilities.

Cleaner previews for every agent.

15/

NeuroSync agent links are becoming portable identity cards.

Share `neurosync.agent` and the preview now carries useful context, not just a generic website title.

Readable handle.
Live status.
Owner signal.
Capabilities.

That is what agent identity should feel like.

16/

Small infra update:

normal users still load the fast SPA at `/agent/:name`.

social crawlers get server-rendered OG/Twitter metadata for that exact agent.

Same URL, better unfurls, no extra step for the user.

17/

This affects every public agent profile on NeuroSync.

Example:
https://neuro-sync.app/agent/neurosync

Open it normally and you get the full app.
Share it in a social feed or chat and the preview gets agent-specific context.

18/

Agent profiles now work better outside the app too.

The page still behaves the same for users, but shared links can show the actual `.agent` identity:

handle
category
status
owner
reputation
capabilities

Better previews, same profile URL.

19/

Update: Agent Cards are live.

Every `.agent` profile now has a richer identity card built around metadata, presence, capabilities, links, and on-chain ownership.

Less random address, more inspectable agent identity.

https://neuro-sync.app/agent/neurosync

20/

Agent Cards give each registered agent a visual identity layer.

Status, category, reputation, owner, heartbeat count, links, and capability tags are now grouped at the top of the profile.

It should be faster to understand what an agent is before interacting with it.

21/

Every NeuroSync Agent Card is generated from the agent handle.

The visual mark is deterministic, the profile data comes from the registry and metadata, and ownership still points back to Solana.

Same `.agent` identity, stronger presentation.

22/

Big update: Hosted Agent Profiles.

You can now make a `.agent` useful from NeuroSync without hosting a JSON file, setting up IPFS, or running your own server.

Connect the owner wallet, fill the agent profile, sign once, and NeuroSync hosts the metadata.

23/

The new setup flow lives on every agent:

`/agent/name/setup`

Add description, category, capabilities, website, X, GitHub, and endpoint.

NeuroSync turns that into a hosted manifest your profile can use immediately.

24/

Hosted profiles keep the ownership model intact.

Only the owner wallet can edit a `.agent` profile, updates are signed, and the hosted URI can still be published on-chain.

No external hosting needed.
No random JSON deployment step.

25/

Most agent identity systems still make builders host their own metadata somewhere.

NeuroSync now handles that.

Claim a `.agent`, open setup, fill the profile, sign with the owner wallet, and your hosted manifest is live from NeuroSync.

No server required.

26/

Hosted Agent Profiles make `.agent` handles useful faster.

You can add what the agent does, what it can do, where it lives, and where users should go next.

Then publish the NeuroSync-hosted URI on-chain when you want the registry to point to it permanently.

27/

NeuroSync is an identity, presence, and reputation layer for AI agents on Solana.

AI agents are starting to trade, route payments, answer users, run workflows, and represent apps.

But most still look like random wallet addresses, random usernames, or opaque API endpoints.

NeuroSync gives them a readable `.agent` handle, on-chain ownership, resolver data, hosted metadata, live presence, shareable profiles, and reputation signals.

Users can inspect what an agent is, who owns it, where it points, whether it is online, and what it claims it can do.

Builders can register an agent, set up its profile without hosting anything themselves, and publish the hosted metadata URI on-chain.

The goal is simple:
make agents easier to find, verify, share, and trust.

28/

NeuroSync is designed around owner-signed changes.

Hosted profile edits require a wallet signature from the `.agent` owner.
On-chain metadata updates require the owner transaction.

That means an agent profile is not just editable text in a database.
It is tied back to the wallet that owns the name.

29/

NeuroSync is open source.

The Solana program, API, indexer, web app, and docs are public, so builders can inspect how names resolve, how presence works, how hosted profiles are verified, and how reputation is surfaced.

Trust should be readable in the product and verifiable in the code.

30/

We are working on the biggest NeuroSync update yet.

Not another small profile improvement.
A full rework of what a `.agent` can become.

Think hosted agent workspaces:
identity, metadata, presence, capabilities, activity, testing, links, integrations, and ownership in one place.

The goal is to make every agent feel like a real, inspectable, usable entity on Solana.

31/

Agent Workspaces are now live.

Every `.agent` gets a workspace page with the important pieces in one place:
launch checklist, hosted manifest, identity state, heartbeat command, recent activity, and owner setup.

Example:
https://neuro-sync.app/agent/neurosync/workspace

32/

The workspace is the control room for a `.agent`.

Not just a public profile.

It shows what is ready, what is missing, whether presence is active, where the metadata lives, and what the next useful action should be.

This is how agents become easier to launch and maintain.

33/

NeuroSync is moving from naming agents to operating their identity layer.

Profiles show the agent.
Hosted metadata makes it useful.
Workspaces help owners manage it.
Presence proves it is alive.
Activity shows what changed.

One `.agent`, one place to understand it.
