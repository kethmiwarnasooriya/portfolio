/**
 * Cloudflare Worker in front of the static site.
 * Only /videos/* reaches this script (see wrangler.jsonc). It adds HTTP range
 * support, which Safari on iPhone/iPad needs to play MP4s and which lets every
 * browser seek without downloading the whole file.
 *
 * The asset store does not report file sizes, so they are recorded at build time
 * by scripts/video-sizes.mjs.
 */
import sizes from './video-sizes.json';

export default {
  async fetch(request, env) {
    const path = decodeURIComponent(new URL(request.url).pathname);
    const size = sizes[path];
    if (size === undefined) return new Response('Not found', { status: 404 });

    const headers = new Headers(request.headers);
    headers.delete('Range');
    const asset = await env.ASSETS.fetch(new Request(request.url, { method: request.method, headers }));
    if (asset.status !== 200) return asset;

    const out = new Headers(asset.headers);
    out.set('Accept-Ranges', 'bytes');
    out.set('Cache-Control', 'public, max-age=604800');

    const range = request.headers.get('Range');
    if (!range || request.method !== 'GET') {
      out.set('Content-Length', String(size));
      return new Response(request.method === 'HEAD' ? null : asset.body, { status: 200, headers: out });
    }

    const match = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    let start, end;
    if (match && (match[1] || match[2])) {
      if (match[1]) {
        start = Number(match[1]);
        end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
      } else {
        start = Math.max(size - Number(match[2]), 0); // "bytes=-N": the last N bytes
        end = size - 1;
      }
    }
    if (start === undefined || start > end || start >= size) {
      asset.body?.cancel();
      out.set('Content-Range', `bytes */${size}`);
      return new Response(null, { status: 416, headers: out });
    }

    out.set('Content-Range', `bytes ${start}-${end}/${size}`);
    out.set('Content-Length', String(end - start + 1));
    return new Response(asset.body.pipeThrough(slice(start, end)), { status: 206, headers: out });
  },
};

/** Passes through only bytes start..end (inclusive) of a stream, without copying the file. */
function slice(start, end) {
  let pos = 0;
  return new TransformStream({
    transform(chunk, controller) {
      const chunkStart = pos;
      pos += chunk.byteLength;
      if (chunkStart > end) return controller.terminate();
      if (pos <= start) return;
      controller.enqueue(chunk.subarray(Math.max(start - chunkStart, 0), Math.min(end - chunkStart + 1, chunk.byteLength)));
      if (pos > end) controller.terminate();
    },
  });
}
