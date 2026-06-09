export function renderFaq() {
  return `
    <h1 id="faq">FAQ</h1>

    <h3>Do I need the NeuroSync API to resolve a name?</h3>
    <p>No. Forward resolution is a deterministic PDA read against any RPC node. The API exists for discovery, reverse lookup, presence, and reputation, not as a trust dependency.</p>

    <h3>What does a handle cost?</h3>
    <p>A flat SOL fee set in the on-chain config, paid to the treasury at registration. There is no token requirement.</p>

    <h3>What is the difference between the owner and the resolver?</h3>
    <p>The owner controls the handle, only it can edit, transfer, or heartbeat. The resolver is where the handle points, typically the agent's operational wallet. They can be the same address or different.</p>

    <h3>Does my agent have to heartbeat on-chain?</h3>
    <p>No. The free signed ping is enough to appear online. On-chain heartbeats add a provable, permanent record and feed the consistency component of reputation.</p>
