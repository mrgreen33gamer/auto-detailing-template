'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faShieldHalved, faSun, faClock, faDollarSign, faCar, faStar } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "If you drive in Waco or anywhere in Central Texas, your paint lives under harsh UV, heat, pollen, and summer storms. Wax still has a place — but ceramic coatings last longer and make decontamination easier when installed correctly. Here is an honest comparison from GlossLab.",
  },
  {
    type: 'cards',
    heading: 'Ceramic Coating vs. Wax — Quick Hits',
    cards: [
      { icon: faShieldHalved, title: 'Durability', body: 'Quality ceramic systems can last years with proper care. Traditional wax often needs reapplication every 1–3 months in Texas heat.' },
      { icon: faSun, title: 'UV & Heat', body: 'Ceramic forms a harder sacrificial layer that holds gloss better under Central Texas sun than soft wax alone.' },
      { icon: faClock, title: 'Maintenance', body: 'Coated paint releases road film easier. Wax can look great for a weekend show but fades quickly on daily drivers.' },
      { icon: faDollarSign, title: 'Upfront Cost', body: 'Ceramic costs more initially, especially when paint correction is included. Wax is cheaper short-term.' },
      { icon: faCar, title: 'Best Use Cases', body: 'Wax: temporary shine before an event. Ceramic: daily drivers, trucks, and anyone tired of constant re-waxing.' },
      { icon: faStar, title: 'Prep Still Matters', body: 'Coating over swirls locks them in. Correction first is what makes ceramic look expensive — not the bottle alone.' },
    ],
  },
  {
    type: 'table',
    heading: 'Side-by-Side for Central Texas Drivers',
    tableHeaders: ['Factor', 'Traditional Wax', 'Professional Ceramic'],
    tableRows: [
      ['Typical longevity', 'Weeks to a few months', 'Multi-year with care'],
      ['Hydrophobics', 'Good when fresh', 'Strong and longer lasting'],
      ['UV resistance', 'Limited', 'Stronger sacrificial layer'],
      ['Wash ease', 'Moderate', 'Easier decontamination'],
      ['Upfront investment', 'Low', 'Higher (prep + install)'],
      ['Best for', 'Short-term shine', 'Daily protection + gloss'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If your paint is swirled, budget correction before ceramic. Coating a flawed finish only makes defects shinier. Call GlossLab at (254) 950-1616 for an honest inspection.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Inspect paint in bright sun or LED light for swirls and haze',
      'Decide daily-driver protection vs one-event shine',
      'Ask for single-stage vs multi-stage correction options',
      'Plan maintenance washes that protect ceramic',
      'Book a GlossLab coating consult in Waco',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Ceramic Coating vs. Wax: What Waco Drivers Should Choose"
        description="Wax still has a place, but ceramic coatings last longer under Central Texas sun and heat. Here is an honest comparison for daily drivers and weekend cars."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Ceramic coating vs wax comparison for Waco TX vehicles"
        category="Protection"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Curious About Ceramic?"
        body="Get an honest paint inspection and package recommendation from GlossLab Auto Detailing in Waco."
        buttonText="Book Ceramic Consult"
        buttonHref="/services/ceramic-coating"
      />
      <NewsletterSignup variant={1} spot="ceramic-coating-vs-wax-blog" />
    </>
  );
}
