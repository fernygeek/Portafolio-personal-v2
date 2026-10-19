import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 4173);
const mimeTypes = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.md': 'text/plain; charset=utf-8' };

const server = http.createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Método no permitido');
    return;
  }
  try {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '') || 'index.html';
    const target = path.resolve(root, relative);
    const withinRoot = path.relative(root, target);
    if (withinRoot.startsWith('..') || path.isAbsolute(withinRoot) || withinRoot.split(path.sep).some(part => part.startsWith('.'))) {
      response.writeHead(403);
      response.end('Acceso no permitido');
      return;
    }
    if (!(await stat(target)).isFile()) throw new Error('Not a file');
    const data = await readFile(target);
    response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end('<!doctype html><html lang="es"><meta charset="utf-8"><title>Página no encontrada</title><h1>No encontramos esta página</h1><p>Comprueba la dirección o <a href="/index.html">vuelve al portafolio</a>.</p></html>');
  }
});
server.on('error', error => { console.error(`No se pudo iniciar el servidor: ${error.message}`); process.exitCode = 1; });
server.listen(port, '127.0.0.1', () => console.log(`Portafolio local: http://127.0.0.1:${port}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close());
