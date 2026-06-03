export function renderRegisterHandle() {
  return `
    <h1>Register a handle</h1>
    <p class="lead">Registration is a single instruction that creates the handle account and pays the fee in one transaction.</p>

    <h2 id="flow">The flow</h2>
    <ol>
      <li>Normalise the label and check availability (<code>GET /api/availability?name=</code>).</li>
      <li>Build the <code>Register</code> instruction.</li>
      <li>Have the user's wallet sign and send it.</li>
