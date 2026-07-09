import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (p, c) => { fs.writeFileSync(path.join(ROOT, p), c); console.log('patched', p); };

// Variant4
{
  let v4 = read('components/PageComponents/ContactForms/Variant4/Form.tsx');
  v4 = v4.replace(
    /import \{[\s\S]*?\} from '@fortawesome\/free-solid-svg-icons';/,
    `import {
  faCircleCheck, faExclamationTriangle, faArrowRight, faArrowLeft,
  faCar, faShieldHalved, faSprayCanSparkles, faCouch, faLightbulb, faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';`
  );
  v4 = v4.replace(
    /const SERVICES = \[[\s\S]*?\];/,
    `const SERVICES = [
  { icon: faCar,              label: 'Full Detail',           sub: 'Interior + exterior refresh' },
  { icon: faShieldHalved,     label: 'Ceramic Coating',       sub: 'Multi-year paint protection' },
  { icon: faSprayCanSparkles, label: 'Paint Correction',      sub: 'Swirl & haze removal' },
  { icon: faCouch,            label: 'Interior Detail',       sub: 'Deep cabin cleaning' },
  { icon: faLightbulb,        label: 'Headlight Restoration', sub: 'Clear cloudy lenses' },
  { icon: faCalendarCheck,    label: 'Maintenance Detail',    sub: 'Keep-up packages' },
];`
  );
  v4 = v4.replace(
    /const BUDGET_LABELS = \[[^\]]+\];/,
    `const BUDGET_LABELS = ['Under $150', '$150–$300', '$300–$600', '$600–$1,500', '$1,500+'];`
  );
  v4 = v4.replace(/A licensed[^<]*/g, 'A GlossLab detailer will reach out about your ');
  v4 = v4.replace(/Arctic Air tech/g, 'GlossLab detailer');
  write('components/PageComponents/ContactForms/Variant4/Form.tsx', v4);
}

// Variant1–3 service labels
for (const v of ['Variant1', 'Variant2', 'Variant3']) {
  const p = `components/PageComponents/ContactForms/${v}/Form.tsx`;
  let t = read(p);
  t = t
    .replace(/Heating \/ Ceramic Coating/g, 'Ceramic Coating')
    .replace(/New Installation/g, 'Paint Correction')
    .replace(/Air Quality/g, 'Headlight Restoration')
    .replace(/Emergency/g, 'Maintenance Detail')
    .replace(/Maintenance(?! Detail)/g, 'Maintenance Detail')
    .replace(/Product-Certified · TDLR/g, 'Product-Certified · Insured')
    .replace(/TDLR/g, 'Insured')
    .replace(/System not cooling[^\']*/g, 'Interior + exterior refresh')
    .replace(/Heat not working[^\']*/g, 'Multi-year protection')
    .replace(/Replace or add[^\']*/g, 'Swirl & haze removal')
    .replace(/Improve airflow[^\']*/g, 'Deep cabin cleaning')
    .replace(/Tune-up[^\']*/g, 'Keep-up packages')
    .replace(/Filters[^\']*/g, 'Clear cloudy lenses')
    .replace(/System down[^\']*/g, 'Priority booking');
  write(p, t);
}

// ValueComparison
{
  let vc = read('components/PageComponents/ValueComparison/ValueComparison.tsx');
  vc = vc.replace(
    /const DEFAULT_ROWS: ComparisonRow\[\] = \[[\s\S]*?\];/,
    `const DEFAULT_ROWS: ComparisonRow[] = [
  { feature: 'Transparent package pricing',            us: true,  others: false },
  { feature: 'Satisfaction Re-Detail Guarantee',       us: true,  others: false },
  { feature: 'Product-certified detailers',            us: true,  others: 'Sometimes' },
  { feature: 'No membership lock-in required',         us: true,  others: false },
  { feature: 'Bonded & insured studio',                us: true,  others: true },
  { feature: 'Paint inspection before coating',        us: true,  others: false },
  { feature: 'Ceramic + correction capability',        us: true,  others: 'Sometimes' },
  { feature: 'Aftercare guidance included',            us: true,  others: false },
];`
  );
  write('components/PageComponents/ValueComparison/ValueComparison.tsx', vc);
}

// BlogPreviewGrid
{
  let bp = read('components/PageComponents/BlogPreviewGrid/BlogPreviewGrid.tsx');
  bp = bp.replace(
    /subtitle\s*=\s*['"][^'"]*['"]/,
    `subtitle    = 'Practical advice for Central Texas drivers — ceramic vs wax, detailing schedules, and paint correction explained.'`
  );
  write('components/PageComponents/BlogPreviewGrid/BlogPreviewGrid.tsx', bp);
}

// LocalCitationBlock
{
  let lc = read('components/PageComponents/LocalCitationBlock/LocalCitationBlock.tsx');
  lc = lc
    .replace(/Arctic\+Air\+HVAC\+Waco\+TX/g, 'GlossLab+Auto+Detailing+Waco+TX')
    .replace(/Arctic Air HVAC/g, 'GlossLab Auto Detailing')
    .replace(/contact@glosslabdetail.com/g, 'hello@glosslabdetail.com')
    .replace(/service@glosslabdetail.com/g, 'hello@glosslabdetail.com')
    .replace(/Emergency Only/g, 'By Appointment');
  write('components/PageComponents/LocalCitationBlock/LocalCitationBlock.tsx', lc);
}

// AboutHero / AboutStory
{
  let ah = read('components/PageComponents/AboutHero/AboutHero.tsx');
  ah = ah
    .replace(/keeping homes and businesses comfortable/g, 'keeping vehicles looking their best')
    .replace(/TDLR Licensed/g, 'Bonded & Insured')
    .replace(/Product-Certified-certified/g, 'Product-Certified');
  write('components/PageComponents/AboutHero/AboutHero.tsx', ah);

  let as_ = read('components/PageComponents/AboutStory/AboutStory.tsx');
  as_ = as_
    .replace(/homeowners get ripped off by fly-by-night auto detailing studios/g, 'drivers get sold gimmick coatings and rushed polish jobs')
    .replace(/give homeowners the straight story about their system/g, 'give drivers the straight story about their paint')
    .replace(/Product-Certified-certified, TDLR-licensed technicians/g, 'product-certified detailers')
    .replace(/TDLR-licensed technicians/g, 'product-certified detailers')
    .replace(/TDLR/g, 'insured');
  write('components/PageComponents/AboutStory/AboutStory.tsx', as_);
}

// TechStack brands
{
  let ts = read('components/PageComponents/TechStack/TechStack.tsx');
  ts = ts.replace(/Duct Systems/g, 'Foam Cannons');
  const brandReplacements = [
    ['Carrier', 'Gtechniq'], ['Trane', 'CarPro'], ['Lennox', 'Koch-Chemie'],
    ['Rheem', 'Rupes'], ['Goodman', "Meguiar's"], ['Honeywell', 'IGL'],
    ['Nest', 'Gyeon'], ['Aprilaire', 'P&S'],
  ];
  for (const [a, b] of brandReplacements) ts = ts.split(a).join(b);
  write('components/PageComponents/TechStack/TechStack.tsx', ts);
}

// AdminNav
{
  let an = read('src/app/admin/AdminNav.tsx');
  an = an
    .replace(/ARCTIC AIR detailing/gi, 'GLOSSLAB DETAILING')
    .replace(/ARCTIC AIR/gi, 'GLOSSLAB')
    .replace(/Arctic Air/g, 'GlossLab');
  write('src/app/admin/AdminNav.tsx', an);
}

// robots
{
  let r = read('src/app/robots.ts');
  r = r.replace(/arcticairhvac\.com/g, 'glosslabdetail.com').replace(/summitdoorpros\.com/g, 'glosslabdetail.com');
  write('src/app/robots.ts', r);
}

// ProcessTimeline / WhyChooseUs residual HVAC phrasing
{
  for (const p of [
    'components/PageComponents/ProcessTimeline/ProcessTimeline.tsx',
    'components/PageComponents/WhyChooseUs/WhyChooseUs.tsx',
    'components/PageComponents/FAQ/FAQ.tsx',
    'components/PageComponents/ServiceCardComponent/ServiceCardComponent.tsx',
    'components/PageComponents/TrustBar/TrustBar.tsx',
    'components/PageComponents/CTABanner/CTABanner.tsx',
    'components/GeneralComponents/CookieBanner/CookieBanner.tsx',
    'src/app/about/layout.tsx',
    'src/app/contact/layout.tsx',
    'src/app/service-areas/layout.tsx',
    'src/app/services/layout.tsx',
    'src/app/industries/layout.tsx',
    'src/app/blogs/page.tsx',
    'src/app/privacy-policy/page.tsx',
    'src/app/not-found.tsx',
  ]) {
    if (!fs.existsSync(path.join(ROOT, p))) continue;
    let t = read(p);
    const before = t;
    t = t
      .replace(/Arctic Air/g, 'GlossLab')
      .replace(/arcticairhvac/g, 'glosslabdetail')
      .replace(/contact@glosslabdetail.com/g, 'hello@glosslabdetail.com')
      .replace(/TDLR/g, 'Insured')
      .replace(/homeowners/g, 'drivers')
      .replace(/Homes and businesses/g, 'Vehicles and fleets')
      .replace(/homes and businesses/g, 'vehicles and fleets')
      .replace(/1-Year Parts & Labor Warranty/g, 'Satisfaction Re-Detail Guarantee')
      .replace(/1-year warranty/g, 'Re-Detail Guarantee')
      .replace(/Product-Certified-certified/g, 'Product-Certified')
      .replace(/Scott Applications/g, 'GlossLab')
      .replace(/scottapps\.com/g, 'glosslabdetail.com');
    if (t !== before) write(p, t);
  }
}

// WelcomePage residual stats
{
  let wp = read('components/Pages/Home/WelcomePage/WelcomePage.tsx');
  wp = wp
    .replace(/1-Yr Parts/g, 'Re-Detail')
    .replace(/Systems Serviced/g, 'Vehicles Detailed')
    .replace(/2,400\+/g, '9,000+')
    .replace(/Product-Certified-certified/g, 'Product-Certified');
  write('components/Pages/Home/WelcomePage/WelcomePage.tsx', wp);
}

// Fix GuaranteeSection residual in body if any
console.log('all patches complete');
