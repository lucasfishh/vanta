// Tiny hash-free SPA router with :param support.
const routes = [];
let currentCleanup = null;

export function route(pattern, handler) {
  // pattern like '/', '/explore', '/agent/:name'
  const keys = [];
  const regex = new RegExp(
    '^' +
      pattern
        .replace(/\//g, '\\/')
        .replace(/:(\w+)/g, (_, k) => {
          keys.push(k);
          return '([^\\/]+)';
        }) +
      '\\/?$'
  );
  routes.push({ regex, keys, handler });
}

function match(path) {
  for (const r of routes) {
    const m = path.match(r.regex);
    if (m) {
      const params = {};
      r.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));
      return { handler: r.handler, params };
    }
  }
  return null;
