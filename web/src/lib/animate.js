// Shared reveal-on-scroll / on-load system.
// Elements tagged with a reveal class start hidden (see style.css) and get the
// `in` class when they enter the viewport. Above-the-fold elements fire almost
// immediately, so the same mechanism doubles as a staggered load entrance.

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur';

export function mountReveals(root = document, { stagger = 0 } = {}) {
  const els = Array.from(root.querySelectorAll(REVEAL_SELECTOR)).filter(
    (el) => !el.classList.contains('in')
  );
  if (!els.length) return { disconnect() {} };

  if (stagger) {
    els.forEach((el, i) => {
