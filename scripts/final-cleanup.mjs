import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git', 'COMBINE_FILES_SERVICE', 'scripts'].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|scss|md|txt|json)$/i.test(ent.name)) files.push(p);
  }
  return files;
}

const reps = [
  ['DealershipsBusiness', 'AutomotiveBusiness'],
  ['Scott Applications', 'GlossLab Auto Detailing'],
  ['scottapps.com', 'glosslabdetail.com'],
  ['admin@scottapps.com', 'admin@glosslabdetail.com'],
  ['Joshua Feliciano', 'Jade Nguyen'],
  ['Founder & Lead Developer', 'Owner & Lead Detailer'],
  ['TDLR Licensed', 'Bonded & Insured'],
  ['TDLR-licensed', 'bonded & insured'],
  ['TDLR', 'Insured'],
  ['Product-Certified-certified', 'Product-Certified'],
  ['254-900-1234', '254-950-1616'],
  ['contact@glosslabdetail.com', 'hello@glosslabdetail.com'],
  ['Full full detail', 'full detail'],
  ['Central Texas heating cooling company', 'Central Texas auto detailing studio'],
  ['AC repair', 'auto detailing'],
  ['schedule AC repair', 'book a detail'],
  ['1-year warranty on every repair', 'Satisfaction Re-Detail Guarantee'],
  ['1-year repair warranty', 'Satisfaction Re-Detail Guarantee'],
  ['1-year warranty', 'Re-Detail Guarantee'],
];

let changed = 0;
for (const f of walk(ROOT)) {
  let t = fs.readFileSync(f, 'utf8');
  let n = t;
  for (const [a, b] of reps) n = n.split(a).join(b);
  if (n !== t) {
    fs.writeFileSync(f, n);
    changed++;
    console.log(path.relative(ROOT, f));
  }
}
console.log('changed', changed);
