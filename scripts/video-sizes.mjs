// Records the byte size of every file in dist/videos for the Worker (worker/index.js),
// because Cloudflare's asset store does not report sizes and range responses need them.
import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';

const dir = 'dist/videos';
const sizes = {};
if (existsSync(dir)) {
  for (const name of readdirSync(dir)) sizes[`/videos/${name}`] = statSync(`${dir}/${name}`).size;
}
writeFileSync('worker/video-sizes.json', JSON.stringify(sizes, null, 2) + '\n');
console.log(`video sizes recorded for ${Object.keys(sizes).length} file(s)`);
