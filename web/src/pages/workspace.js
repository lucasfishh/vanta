import { createFooter } from '../components/footer.js';
import { getActivity, getAgent, hostedManifestUrl } from '../api.js';
import { isOnline, timeAgo, shorten, escapeHtml, normalizeName } from '../lib/format.js';
import { createRevealer } from '../lib/animate.js';
import { SUFFIX } from '../config.js';

export function workspacePage(app, params) {
  app.innerHTML = '';
  const name = normalizeName(params.name || '');
  const wrap = document.createElement('div');
  wrap.style.cssText = 'min-height:100vh; padding:120px 24px 0;';
  wrap.innerHTML = `
    <div class="container" style="max-width:72rem;">
      <div class="reveal" style="display:flex; align-items:flex-end; justify-content:space-between; gap:18px; flex-wrap:wrap; margin-bottom:24px;">
        <div>
          <div class="eyebrow" style="margin-bottom:10px;">Agent workspace</div>
          <h1 class="h-title" style="margin-bottom:8px;">${escapeHtml(name)}<span style="color:#71717a;">${SUFFIX}</span></h1>
          <p class="muted" style="font-size:15px; max-width:560px;">A control room for the agent identity: profile, presence, metadata, activity, and launch state in one place.</p>
        </div>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a href="/agent/${encodeURIComponent(name)}" data-link class="btn btn-ghost">Public profile</a>
          <a href="/agent/${encodeURIComponent(name)}/setup" data-link class="btn btn-primary">Edit hosted profile</a>
        </div>
      </div>
      <div id="workspace-body"></div>
    </div>
  `;
  app.appendChild(wrap);
  app.appendChild(createFooter());
  const style = document.createElement('style');
  style.textContent = '@media (max-width: 860px){.workspace-grid{grid-template-columns:1fr!important;}}';
  app.appendChild(style);

  const body = wrap.querySelector('#workspace-body');
  body.innerHTML = `<div class="skeleton" style="height:360px;"></div>`;
  const reveal = createRevealer();

  async function load() {
    try {
      const [agent, activity] = await Promise.all([
        getAgent(name),
        getActivity(80).catch(() => ({ items: [] })),
      ]);
      render(body, agent, (activity.items || []).filter((item) => item.name === agent.name).slice(0, 8));
      reveal.mount(wrap, { stagger: 70 });
    } catch {
      body.innerHTML = `<div class="card reveal" style="padding:44px; text-align:center; color:#71717a;">Could not load this workspace.</div>`;
      reveal.mount(wrap);
    }
  }

  load();
  return () => reveal.destroy();
}

function render(body, agent, events) {
  const links = agent.links || {};
  const caps = Array.isArray(agent.capabilities) ? agent.capabilities : [];
  const online = isOnline(agent.lastSeen);
  const hostedUri = hostedManifestUrl(agent.name);
  const tasks = [
    ['Profile', Boolean(agent.description && agent.category), 'Add description and category'],
    ['Capabilities', caps.length > 0, 'List what the agent can do'],
    ['Links', Boolean(links.website || links.twitter || links.github || links.endpoint), 'Attach useful links or endpoint'],
    ['Presence', online, 'Run heartbeat so users see it live'],
    ['On-chain URI', agent.metadataUri === hostedUri, 'Publish hosted metadata URI on-chain'],
  ];

  body.innerHTML = `
    <div class="reveal workspace-grid" style="display:grid; grid-template-columns:1.15fr .85fr; gap:14px; align-items:start;">
      <div style="display:grid; gap:14px;">
        <section class="card" style="padding:22px;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:14px; flex-wrap:wrap; margin-bottom:18px;">
            <div>
              <div style="font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Launch state</div>
              <div style="font-size:22px; color:#f4f4f6; font-weight:600;">${tasks.filter(([, done]) => done).length}/${tasks.length} ready</div>
            </div>
            <span style="display:inline-flex; align-items:center; gap:8px; font-size:13px; color:${online ? '#34d399' : '#71717a'};"><span class="${online ? 'dot-online' : 'dot-offline'}"></span>${online ? 'online' : `last seen ${timeAgo(agent.lastSeen)}`}</span>
          </div>
          <div style="display:grid; gap:8px;">
            ${tasks.map(([label, done, hint]) => taskRow(label, done, hint)).join('')}
          </div>
        </section>

        <section class="card" style="padding:22px;">
          <div style="font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">Hosted manifest</div>
          <pre style="white-space:pre-wrap; overflow:auto; max-height:320px; margin:0; padding:14px; border-radius:9px; background:rgba(0,0,0,0.28); border:1px solid rgba(255,255,255,0.06); color:#a1a1aa; font-size:12px; line-height:1.55;">${escapeHtml(JSON.stringify(manifest(agent, hostedUri), null, 2))}</pre>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:14px;">
            <a href="${escapeHtml(hostedUri)}" target="_blank" rel="noopener" class="btn btn-ghost">Open JSON</a>
            <a href="/agent/${encodeURIComponent(agent.name)}/setup" data-link class="btn btn-primary">Edit profile</a>
          </div>
        </section>
      </div>

      <div style="display:grid; gap:14px;">
        <section class="card" style="padding:22px;">
          <div style="font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">Identity</div>
          ${fact('Owner', shorten(agent.owner, 6))}
          ${fact('Resolver', agent.resolver ? shorten(agent.resolver, 6) : 'not set')}
          ${fact('Reputation', `${agent.reputation ?? 0}`)}
          ${fact('Heartbeats', `${agent.heartbeatCount ?? 0}`)}
          ${fact('Metadata URI', agent.metadataUri === hostedUri ? 'hosted on NeuroSync' : agent.metadataUri ? 'external' : 'not set')}
        </section>

        <section class="card" style="padding:22px;">
          <div style="font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">Heartbeat command</div>
          <p style="font-size:13px; color:#71717a; line-height:1.6; margin-bottom:12px;">Use this when the agent is ready to prove presence from its runtime.</p>
          <pre style="white-space:pre-wrap; overflow:auto; margin:0; padding:14px; border-radius:9px; background:rgba(0,0,0,0.28); border:1px solid rgba(255,255,255,0.06); color:#a1a1aa; font-size:12px;">AGENT_NAME=${escapeHtml(agent.name)} node scripts/agent-heartbeat.mjs</pre>
        </section>

        <section class="card" style="padding:22px;">
          <div style="font-size:12px; color:#71717a; text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">Recent activity</div>
          <div style="display:grid; gap:8px;">
            ${events.length ? events.map(eventRow).join('') : '<div style="font-size:13px; color:#52525b;">No recent events for this agent.</div>'}
          </div>
        </section>
      </div>
    </div>
  `;
}

function taskRow(label, done, hint) {
  return `
    <div style="display:flex; align-items:center; gap:10px; padding:11px 12px; border-radius:9px; background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.05);">
      <span style="width:9px; height:9px; border-radius:50%; background:${done ? '#34d399' : '#52525b'}; box-shadow:${done ? '0 0 0 3px rgba(52,211,153,0.12)' : 'none'};"></span>
      <div style="flex:1; min-width:0;">
        <div style="font-size:13px; color:#f4f4f6;">${escapeHtml(label)}</div>
        <div style="font-size:12px; color:#71717a;">${escapeHtml(hint)}</div>
      </div>
      <span style="font-size:11px; color:${done ? '#34d399' : '#52525b'};">${done ? 'done' : 'todo'}</span>
    </div>
  `;
}

function fact(label, value) {
  return `
    <div style="display:flex; justify-content:space-between; gap:12px; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.045);">
      <span style="font-size:13px; color:#71717a;">${escapeHtml(label)}</span>
      <span class="mono" style="font-size:13px; color:#d4d4d8; text-align:right; overflow-wrap:anywhere;">${escapeHtml(value)}</span>
    </div>
  `;
}

function eventRow(event) {
  return `
    <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; padding:9px 0; border-bottom:1px solid rgba(255,255,255,0.045);">
      <span style="font-size:13px; color:#d4d4d8;">${escapeHtml(event.type)}</span>
      <span style="font-size:12px; color:#71717a;">${timeAgo(event.ts)}</span>
    </div>
  `;
}

function manifest(agent, hostedUri) {
  const links = agent.links || {};
  return {
    name: `${agent.name}${SUFFIX}`,
    description: agent.description || null,
    category: agent.category || null,
    capabilities: agent.capabilities || [],
    owner: agent.owner,
    resolver: agent.resolver,
    website: links.website || null,
    twitter: links.twitter || null,
    github: links.github || null,
    endpoint: links.endpoint || null,
    hostedUri,
  };
}
