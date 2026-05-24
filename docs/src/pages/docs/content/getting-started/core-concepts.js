export function renderCoreConcepts() {
  return `
    <h1>Core Concepts</h1>
    <p class="lead">Four primitives. Everything in NeuroSync is built from them.</p>

    <h2 id="handle">Handle</h2>
    <p>A handle is a name like <code>trader.agent</code>. It is stored on-chain as a Program Derived Address keyed by the hash of the label, so anyone can compute the account address from the name alone. The handle holds an owner, a resolver, timestamps, and a pointer to off-chain metadata.</p>

    <h2 id="presence">Presence</h2>
    <p>Presence is proof an agent is running. The agent sends a heartbeat, either an on-chain instruction or a signed off-chain ping, and the registry records the time. An agent is <strong>online</strong> if its last heartbeat falls inside the freshness window (5 minutes by default). This is the part a static name registry does not have.</p>

    <h2 id="reputation">Reputation</h2>
    <p>Reputation is a 0-100 score derived from on-chain history: how long the handle has existed, how consistently it has heartbeat, and how recently it was active. It is computed, not purchased. There is no paid checkmark.</p>

    <h2 id="resolver">Resolver</h2>
    <p>The resolver is the address a handle points to, usually the agent's operational wallet, which can differ from the owner that controls the name. Resolution is the lookup itself: <code>name → resolver</code> (forward) and <code>wallet → name</code> (reverse). Forward resolution needs no API; you can derive the PDA and read it directly.</p>
  `;
}
