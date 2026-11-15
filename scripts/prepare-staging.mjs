import { readdir, readFile, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';

// Webflow markup contains literal root URLs, so Astro's base option alone
// cannot relocate all links, images, stylesheets and runtime resources.
const root = process.argv[2];
if (!root) throw new Error('Usage: node scripts/prepare-staging.mjs <built-directory>');
async function rewrite(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await rewrite(path);
    else if (/\.(html|css|js)$/.test(entry.name)) {
      let text = await readFile(path, 'utf8');
      text = text.replace(/(["'`])\/(?!\/)([^"'`\s<>]*)\1/g, (_, quote, target) => `${quote}/stg/${target}${quote}`);
      text = text.replace(/url\(\/(?!\/)([^)\s]+)\)/g, 'url(/stg/$1)');
      if (entry.name.endsWith('.html')) {
        text = text.replace(/<head([^>]*)>/i, '<head$1><meta name="robots" content="noindex, nofollow">');
      }
      await writeFile(path, text);
    }
  }
}
await rewrite(root);
await rm(join(root, 'CNAME'), { force: true });
