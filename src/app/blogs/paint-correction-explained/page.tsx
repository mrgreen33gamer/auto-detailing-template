'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faSearch, faLayerGroup, faShieldHalved, faExclamationTriangle, faStar, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Paint correction is machine polishing that refines clear coat to reduce swirls, haze, and light scratches. It is not magic, and it is not the same as a quick polish-and-go wash. Understanding stages helps you set realistic expectations before ceramic coating.",
  },
  {
    type: 'cards',
    heading: 'Paint Correction Essentials',
    cards: [
      { icon: faSearch, title: 'Inspect First', body: 'Defects look different under LED vs sunlight. A good shop shows you what is actually there before quoting stages.' },
      { icon: faLayerGroup, title: 'Stages Mean Cut + Refine', body: 'Multi-stage uses more aggressive compounds first, then refining polish. Single-stage is lighter refinement for milder defects.' },
      { icon: faExclamationTriangle, title: 'Depth Has Limits', body: 'Scratches that catch a fingernail may not fully disappear without risking clear coat. Honesty beats overpromise.' },
      { icon: faShieldHalved, title: 'Protect After', body: 'Corrected paint needs sealant or ceramic. Otherwise wash marring returns quickly.' },
      { icon: faStar, title: 'Dark Paint Shows Everything', body: 'Black and dark colors need careful technique — holograms from poor polishing are real.' },
      { icon: faCheck, title: 'Coating Is Optional Timing', body: 'Many clients correct then ceramic coat in one project plan for maximum lasting gloss.' },
    ],
  },
  {
    type: 'table',
    heading: 'Single-Stage vs Multi-Stage',
    tableHeaders: ['Situation', 'Likely Approach', 'Notes'],
    tableRows: [
      ['Light wash marring', 'Single-stage', 'Faster, lower cost'],
      ['Moderate swirls / haze', 'One or two stages', 'Depends on paint hardness'],
      ['Neglected daily driver', 'Multi-stage', 'More time, bigger visual jump'],
      ['Deep isolated scratches', 'Spot assessment', 'May not fully remove'],
      ['Pre-ceramic prep', 'As needed stages', 'Do not coat over defects'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Ask your detailer what percentage of defect reduction is realistic — not whether the paint will be 'perfect.' GlossLab sets expectations after inspection. Call (254) 950-1616.",
  },
  {
    type: 'tips',
    heading: 'Before You Book Correction',
    items: [
      'Wash the car so inspection is honest',
      'Share photos of problem panels in sunlight',
      'Ask whether ceramic is recommended after',
      'Plan enough shop time — correction is not a 1-hour wash',
      'Budget protection so results last',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Paint Correction Explained: Swirls, Oxidation & Real Results"
        description="What multi-stage paint correction actually fixes, when a single-stage polish is enough, and how to set realistic expectations before ceramic coating."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Paint correction explained for swirl removal and gloss"
        category="Paint Care"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready for Real Paint Clarity?"
        body="Book a paint correction inspection with GlossLab — honest stages, measured results, coating options."
        buttonText="Book Paint Correction"
        buttonHref="/services/paint-correction"
      />
      <NewsletterSignup variant={1} spot="paint-correction-explained-blog" />
    </>
  );
}
