/**
 * Rebrand Arctic Air HVAC → GlossLab Auto Detailing
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SKIP = new Set(['node_modules', '.next', '.git', 'GeoLite2-City.mmdb', 'rebrand-glosslab.mjs', 'write-detailing-content.mjs']);

// Longer / more specific first
const REPLACEMENTS = [
  // Package / template names
  ['hvac-template', 'auto-detailing-template'],
  ['hvac-pro-template', 'auto-detailing-template'],

  // Identity — business
  ['Arctic Air Heating & Cooling', 'GlossLab Auto Detailing'],
  ['Arctic Air HVAC', 'GlossLab Auto Detailing'],
  ['Arctic Air Template', 'GlossLab Template'],
  ['Arctic Air', 'GlossLab'],
  ['arcticairhvac.com', 'glosslabdetail.com'],
  ['arcticairhvac', 'glosslabdetail'],
  ['arcticair', 'glosslabdetail'],

  // Owner
  ['Mike Hawkins', 'Jade Nguyen'],
  ['Owner & Master HVAC Technician', 'Owner & Lead Detailer'],
  ['Master HVAC Technician', 'Lead Detailer'],

  // Contact
  ['(254) 900-1234', '(254) 950-1616'],
  ['+12549001234', '+12549501616'],
  ['contact@arcticairhvac.com', 'hello@glosslabdetail.com'],
  ['service@arcticairhvac.com', 'hello@glosslabdetail.com'],
  ['hello@glosslabdetail.com', 'hello@glosslabdetail.com'], // idempotent
  ['4521 Bosque Blvd', '2701 Franklin Ave'],
  ['Bosque Blvd', 'Franklin Ave'],

  // Domain URLs
  ['https://www.arcticairhvac.com', 'https://www.glosslabdetail.com'],
  ['https://arcticairhvac.com', 'https://www.glosslabdetail.com'],
  ['www.arcticairhvac.com', 'www.glosslabdetail.com'],

  // Credentials / proof
  ['NATE Certified Technicians · Bonded & Insured', 'Bonded & Insured · Product-Certified Detailers'],
  ['NATE Certified · Bonded & Insured', 'Bonded & Insured · Product-Certified Detailers'],
  ['NATE-Certified Technicians', 'Product-Certified Detailers'],
  ['NATE Certified Technicians', 'Product-Certified Detailers'],
  ['NATE-Certified', 'Product-Certified'],
  ['NATE Certified', 'Product-Certified'],
  ['NATE certified', 'product-certified'],
  ['NATE', 'Product-Certified'],

  ['100% Satisfaction Guarantee', 'Satisfaction Re-Detail Guarantee'],
  ['Satisfaction Guarantee', 'Satisfaction Re-Detail Guarantee'],

  ['1,200+ Reviews', '1,600+ Reviews'],
  ['1,200+ reviews', '1,600+ reviews'],
  ['1200+ Reviews', '1,600+ Reviews'],
  ['500+ Reviews', '1,600+ Reviews'],
  ['500+ reviews', '1,600+ reviews'],

  ['10,000+ Jobs', '9,000+ Vehicles Detailed'],
  ['10,000+ jobs', '9,000+ vehicles detailed'],
  ['10,000+ Systems Installed', '9,000+ Vehicles Detailed'],
  ['10,000+ systems', '9,000+ vehicles'],

  ['Founded in 2010', 'Founded in 2015'],
  ['Since 2010', 'Since 2015'],
  ['since 2010', 'since 2015'],
  ['foundingDate: "2010"', 'foundingDate: "2015"'],
  ['"2010"', '"2015"'],
  ['15+ Years', '11+ Years'],
  ['15 years', '11 years'],
  ['15 Years', '11 Years'],

  // Taglines / positioning
  ['Cooling · Heating · Air Quality Done Right', 'Ceramic Coatings · Interior Detail · Paint Correction'],
  ['Heating, Cooling & Indoor Air Quality', 'Ceramic Coatings, Interior Detail & Paint Correction'],
  ['Heating & Cooling', 'Auto Detailing'],
  ['heating and cooling', 'auto detailing'],

  // Colors (HVAC orange → indigo)
  ['#f97316', '#6366f1'],
  ['#fb923c', '#818cf8'],
  ['#c2410c', '#4338ca'],
  ['#ea580c', '#4f46e5'],

  // Schema type
  ['HVACBusiness', 'AutomotiveBusiness'],
  ['"@type": "HVACBusiness"', '"@type": "AutomotiveBusiness"'],

  // Service slug paths (longer first)
  ['/services/indoor-air-quality', '/services/headlight-restoration'],
  ['/services/duct-cleaning', '/services/interior-detail'],
  ['/services/installation', '/services/paint-correction'],
  ['/services/ac-repair', '/services/full-detail'],
  ['/services/heating', '/services/ceramic-coating'],
  ['/services/maintenance', '/services/maintenance-detail'],

  // Industry slug paths
  ['/industries/manufacturing', '/industries/fleet-vehicles'],
  ['/industries/automotive', '/industries/dealerships'],
  ['/industries/oil-gas', '/industries/luxury-collectors'],

  // Blog slugs
  ['heat-pump-vs-traditional-hvac-texas', 'ceramic-coating-vs-wax'],
  ['how-often-should-you-replace-hvac-filter', 'how-often-detail-your-car-texas'],
  ['signs-ac-needs-replacement-waco-tx', 'paint-correction-explained'],

  // Service titles (UI)
  ['Indoor Air Quality', 'Headlight Restoration'],
  ['indoor air quality', 'headlight restoration'],
  ['Duct Cleaning', 'Interior Detail'],
  ['duct cleaning', 'interior detail'],
  ['AC Installation', 'Paint Correction'],
  ['New System Installation', 'Paint Correction'],
  ['System Installation', 'Paint Correction'],
  ['AC Repair', 'Full Detail'],
  ['AC & Heating Repair', 'Full Detail'],
  ['Heating Repair', 'Ceramic Coating'],
  ['Furnace Repair', 'Ceramic Coating'],
  ['Furnace Installation', 'Ceramic Coating'],
  ['HVAC Maintenance Plans', 'Maintenance Detail'],
  ['HVAC Maintenance', 'Maintenance Detail'],
  ['Maintenance Plans', 'Maintenance Detail'],
  ['Smart Thermostat Installation', 'Headlight Restoration'],
  ['Smart Thermostat', 'Headlight Restoration'],

  // Industry titles
  ['Oil & Gas', 'Luxury & Collectors'],
  ['Oil and Gas', 'Luxury & Collectors'],
  ['oil & gas', 'luxury & collectors'],
  ['Manufacturing Facilities', 'Fleet Vehicles'],
  ['Manufacturing', 'Fleet Vehicles'],
  ['Automotive Dealerships', 'Dealerships'],
  ['Automotive', 'Dealerships'],

  // Generic HVAC trade → detailing (careful order)
  ['HVAC Services', 'Auto Detailing Services'],
  ['HVAC services', 'auto detailing services'],
  ['HVAC company', 'auto detailing company'],
  ['HVAC Company', 'Auto Detailing Company'],
  ['HVAC contractor', 'auto detailing studio'],
  ['HVAC Contractor', 'Auto Detailing Studio'],
  ['HVAC tech', 'detailer'],
  ['HVAC technician', 'detailer'],
  ['HVAC Technician', 'Detailer'],
  ['HVAC system', 'vehicle finish'],
  ['HVAC System', 'Vehicle Finish'],
  ['HVAC unit', 'vehicle'],
  ['HVAC Unit', 'Vehicle'],
  ['an HVAC', 'a detailing'],
  ['HVAC ', 'detailing '],
  [' HVAC', ' detailing'],
  ['hvac ', 'detailing '],

  // Common phrases
  ['air conditioning', 'auto detailing'],
  ['Air Conditioning', 'Auto Detailing'],
  ['furnace', 'ceramic coating'],
  ['Furnace', 'Ceramic Coating'],
  ['ductwork', 'interior surfaces'],
  ['Ductwork', 'Interior Surfaces'],
  ['thermostat', 'finish package'],
  ['Thermostat', 'Finish Package'],
  ['SEER rating', 'coating longevity'],
  ['SEER', 'coating grade'],

  // Projects removal hints in nav (if any leftover strings)
  ['/projects', '/services'],
];

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (/\.(tsx?|jsx?|scss|css|json|md|txt|mjs|xml|webmanifest)$/i.test(ent.name)) files.push(p);
  }
  return files;
}

function apply(text) {
  let out = text;
  for (const [from, to] of REPLACEMENTS) {
    if (out.includes(from)) out = out.split(from).join(to);
  }
  return out;
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  if (f.includes(`${path.sep}scripts${path.sep}rebrand`)) continue;
  if (f.includes(`${path.sep}scripts${path.sep}write-`)) continue;
  const raw = fs.readFileSync(f, 'utf8');
  const next = apply(raw);
  if (next !== raw) {
    fs.writeFileSync(f, next, 'utf8');
    changed++;
    console.log('updated', path.relative(ROOT, f));
  }
}
console.log(`\nDone. ${changed} files updated.`);
