import { createFooter } from '../components/footer.js';
import { navigate } from '../router.js';
import { normalizeName } from '../lib/format.js';
import { createRevealer } from '../lib/animate.js';
import { SUFFIX } from '../config.js';

export function landingPage(app) {
  app.innerHTML = '';

  // ---- video background: sits at the top of the page and scrolls away with
  // the content (absolute, not fixed). It never fades, it just leaves the
  // viewport like any other element as you scroll down. ----
  const videoBg = document.createElement('div');
  videoBg.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100vh; z-index:-1; overflow:hidden;';
  const video = document.createElement('video');
  Object.assign(video, { autoplay: true, muted: true, loop: true, playsInline: true });
  video.src = '/background.mp4';
  video.style.cssText = 'width:100%; height:100%; object-fit:cover; opacity:0.65;';
  // Light-lavender multiply: a near-white tint multiplies dark pixels by ~1.0
  // (they stay dark) while pushing the clip's bright/white areas toward purple.
  const tint = document.createElement('div');
  tint.style.cssText = 'position:absolute; inset:0; background:#cabdff; mix-blend-mode:multiply; opacity:0.5;';
  const grad = document.createElement('div');
  grad.style.cssText = 'position:absolute; inset:0; background:linear-gradient(180deg, rgba(7,7,10,0.25) 0%, rgba(7,7,10,0.45) 55%, rgba(7,7,10,1) 100%);';
  videoBg.append(video, tint, grad);
  app.appendChild(videoBg);

  // ---- hero ----
  const hero = document.createElement('section');
  hero.style.cssText = 'min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:96px 24px 72px;';
  hero.innerHTML = `
    <h1 class="reveal-blur" data-delay="0" style="font-size:clamp(40px,7.4vw,78px); font-weight:600; letter-spacing:-0.035em; line-height:1.02; color:#fafafa; margin-bottom:22px; max-width:16ch;">
      Identity for agents<br/>that stay <span style="color:#a78bfa;">alive</span>.
    </h1>
    <p class="reveal" data-delay="140" style="font-size:17px; color:#a1a1aa; line-height:1.6; max-width:480px; margin-bottom:38px;">
