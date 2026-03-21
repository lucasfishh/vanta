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
