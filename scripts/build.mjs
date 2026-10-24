import { mkdir, copyFile, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'dist');
const pages = ['index.html', 'client-works.html', 'engineering-projects.html', 'event-showreel.html', 'graphics-design.html'];
const files = new Set([...pages, 'site.css']);
for (const page of pages) {
  const source = await readFile(path.join(root, page), 'utf8');
  for (const match of source.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const link = match[1];
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(link)) continue;
    const local = decodeURIComponent(link.split(/[?#]/)[0]);
    if (!local) continue;
    const resolved = path.resolve(root, local);
    if (!resolved.startsWith(root + path.sep)) throw new Error(`Invalid local path: ${local}`);
    if (!(await stat(resolved)).isFile()) throw new Error(`Missing file: ${local}`);
    files.add(local);
  }
}
for (const file of files) {
  const destination = path.join(output, file);
  await mkdir(path.dirname(destination), { recursive: true });
  await copyFile(path.join(root, file), destination);
}
await writeFile(path.join(output, '_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n');
console.log(`Prepared ${files.size} site files in dist/.`);
