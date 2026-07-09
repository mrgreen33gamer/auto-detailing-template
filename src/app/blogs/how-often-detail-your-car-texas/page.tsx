'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSun, faCar, faCalendarCheck, faWater, faBug, faRoad } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Central Texas is hard on vehicles. UV cooks clear coat, pollen rains down every spring, summer storms leave mineral spots, and farm/highway miles stack road film fast. How often you should detail depends on how you drive — not a one-size internet answer.",
  },
  {
    type: 'cards',
    heading: 'What Drives Detailing Frequency in Texas',
    cards: [
      { icon: faSun, title: 'UV Exposure', body: 'Cars parked outside need more frequent protection top-ups than garage-kept vehicles.' },
      { icon: faBug, title: 'Pollen & Bugs', body: 'Spring pollen and summer bug guts etch if left sitting — rinse and safe wash matter between full details.' },
      { icon: faRoad, title: 'Highway Miles', body: 'Commuters pick up film and iron fallout faster than short neighborhood drivers.' },
      { icon: faWater, title: 'Hard Water Spots', body: 'Irrigation overspray and storm water can spot paint — do not let spots bake in the sun.' },
      { icon: faCar, title: 'Dark Paint', body: 'Black and dark colors show swirls sooner — maintenance details protect previous correction work.' },
      { icon: faCalendarCheck, title: 'Ceramic Status', body: 'Coated cars can stretch intervals, but still need ceramic-safe maintenance washes.' },
    ],
  },
  {
    type: 'table',
    heading: 'Practical Schedule Guidelines',
    tableHeaders: ['Driver Profile', 'Maintenance Detail', 'Full Detail / Deeper Work'],
    tableRows: [
      ['Daily driver, outdoor parking', 'Every 4–6 weeks', '2–4× per year'],
      ['Garage-kept weekend car', 'Every 8–12 weeks', '1–2× per year'],
      ['Ceramic-coated daily driver', 'Every 6–8 weeks', 'As needed + annual check'],
      ['Fleet / client-facing van', 'Every 3–6 weeks', 'Quarterly deep reset'],
      ['Collector / show car', 'Before shows + seasonal', 'Correction as needed'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Maintenance details exist to protect previous correction and coating work. Waiting until the car looks neglected usually means paying for a full redo. Call (254) 950-1616 to set a cadence.",
  },
  {
    type: 'tips',
    heading: 'Between Studio Visits',
    items: [
      'Use pH-balanced soap and soft wash media',
      'Avoid automatic brush washes on corrected or coated paint',
      'Remove bird droppings and bugs ASAP',
      'Dry with clean microfiber — do not air-dry in the sun',
      'Book GlossLab maintenance before summer pollen peaks',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Often Should You Detail Your Car in Texas Heat?"
        description="UV, pollen, road film, and summer storms beat up paint and interiors fast. A practical detailing schedule for Central Texas drivers."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="How often to detail your car in Texas heat guide"
        category="Maintenance"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Maintenance Cadence?"
        body="GlossLab builds flexible maintenance details for daily drivers, fleets, and ceramic-coated vehicles."
        buttonText="Book Maintenance Detail"
        buttonHref="/services/maintenance-detail"
      />
      <NewsletterSignup variant={1} spot="how-often-detail-texas-blog" />
    </>
  );
}
