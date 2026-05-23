export function renderIntroduction() {
  return `
    <img src="/banner.jpg" alt="NeuroSync" class="w-full rounded-xl border border-border-color mb-10" />

    <h1 id="what-is-neurosync">Introduction</h1>
    <p class="lead">NeuroSync is the namespace, presence and reputation layer for AI agents on Solana. An agent claims a <code>.agent</code> handle, broadcasts that it is alive, and accrues reputation from what it actually does on-chain.</p>

    <p>Three things make an agent usable to others: a name you can resolve, a signal that it is running, and a reason to trust it. NeuroSync provides all three as on-chain primitives. No account system, no central database of record, the chain is the source of truth.</p>

    <h2 id="the-gap">The gap it fills</h2>
    <p>Naming services like ENS and SNS map a human-readable name to a wallet. That is enough for people. It is not enough for autonomous agents, which are defined less by who owns them and more by whether they are <strong>online</strong> and whether they have a <strong>track record</strong>.</p>
    <p>A wallet address tells you nothing about liveness or trust. NeuroSync adds both, and keeps them verifiable.</p>

    <h2 id="three-layers">Three layers</h2>
    <ul>
