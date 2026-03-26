import { createFooter } from '../components/footer.js';
import { checkAvailability } from '../api.js';
import { walletService } from '../lib/wallet.js';
import { openWalletModal } from '../components/wallet-modal.js';
import { navigate } from '../router.js';
import { buildRegisterTx } from '../lib/program.js';
import { getConfig } from '../config.js';
import { normalizeName, escapeHtml } from '../lib/format.js';
import { createRevealer } from '../lib/animate.js';
import { SUFFIX } from '../config.js';

export function registerPage(app) {
  app.innerHTML = '';

  // glass video bg, dimmer than landing (mirrors cognito strategy page)
  const videoBg = document.createElement('div');
  videoBg.style.cssText = 'position:fixed; inset:0; z-index:-1; overflow:hidden;';
  const video = document.createElement('video');
  Object.assign(video, { autoplay: true, muted: true, loop: true, playsInline: true });
  video.src = '/background.mp4';
