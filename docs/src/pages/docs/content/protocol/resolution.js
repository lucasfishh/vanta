export function renderResolution() {
  return `
    <h1>Resolution</h1>
    <p class="lead">Turning a name into an address, and an address back into a name.</p>

    <h2 id="forward">Forward</h2>
    <p><code>name → resolver</code>. Given a handle, return the address it points to plus its metadata.</p>
    <pre><code>GET /api/resolve/trader
{ "name": "trader", "owner": "...", "resolver": "...", "metadataUri": "..." }</code></pre>

