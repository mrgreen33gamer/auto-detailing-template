/**
 * Overwrite key pages/components with GlossLab Auto Detailing content.
 * Run after rebrand-glosslab.mjs.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const w = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  console.log('wrote', rel);
};

// ─── reviews ─────────────────────────────────────────────────────────────────
w('libs/local-db/reviews.ts', `// libs/local-db/reviews.ts
// Static testimonials for GlossLab Auto Detailing

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Ceramic Coating',
    text:     "GlossLab ceramic-coated my truck after a full paint correction. The depth of gloss is unreal and water still beads months later. Jade and the team explained every step and the car looks better than the day I bought it.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Full Detail',
    text:     'Booked a full detail before a family trip. Interior was vacuumed, steamed, and treated; exterior looked showroom-clean. Fair pricing, on time, and they texted progress photos. Instant favorite shop in Central Texas.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Paint Correction',
    text:     'Swirl marks and wash marring covered my dark paint. GlossLab multi-stage corrected it and sealed with ceramic. Honest about what was realistic for my paint condition — not just upselling the biggest package.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Interior Detail',
    text:     'Kids, dogs, and Texas heat wrecked the cabin. Interior detail removed stains, odor, and sticky residue. Seats feel fresh again and the cabin smells clean — not masked with heavy perfume.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Fleet Vehicles',
    text:     'We run a small service fleet. GlossLab keeps our vans presentable for client visits on a rotating maintenance-detail schedule. Professional, consistent, and easy to book around our ops calendar.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Headlight Restoration',
    text:     'Headlights were yellow and dim. Restoration brought clarity back and they sealed them properly so haze does not return in a month. Night driving feels safer already.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Maintenance Detail',
    text:     'Signed up for maintenance details after ceramic. They keep the coating healthy, wheels clean, and interior topped off without a full redo every time. Worth it for anyone who wants lasting results.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Full Detail',
    text:     'Dropped off a dusty ranch truck. Full exterior + interior detail made it look like a different vehicle. Satisfaction Re-Detail Guarantee gave me total confidence. Highly recommend GlossLab.',
  },
];

export default reviews;
`);

// ─── blog-posts ──────────────────────────────────────────────────────────────
w('libs/blog-posts.ts', `// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'ceramic-coating-vs-wax',
    title:    'Ceramic Coating vs. Wax: What Waco Drivers Should Choose',
    excerpt:  'Wax still has a place, but ceramic coatings last longer under Central Texas sun and heat. Here is an honest comparison for daily drivers and weekend cars.',
    category: 'Protection',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Ceramic coating vs wax comparison for Waco TX vehicles',
    featured: true,
  },
  {
    slug:     'how-often-detail-your-car-texas',
    title:    'How Often Should You Detail Your Car in Texas Heat?',
    excerpt:  'UV, pollen, road film, and summer storms beat up paint and interiors fast. A practical detailing schedule for Central Texas drivers.',
    category: 'Maintenance',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'How often to detail your car in Texas heat guide',
  },
  {
    slug:     'paint-correction-explained',
    title:    'Paint Correction Explained: Swirls, Oxidation & Real Results',
    excerpt:  'What multi-stage paint correction actually fixes, when a single-stage polish is enough, and how to set realistic expectations before ceramic coating.',
    category: 'Paint Care',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Paint correction explained for swirl removal and gloss',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
`);

// ─── globalVariables ─────────────────────────────────────────────────────────
w('src/app/globalVariables.scss', `// src/app/globalVariables.scss
// GlossLab Auto Detailing — Brand Tokens
//
// THREE DISTINCT FONTS:
//   $titleFont  → Barlow Condensed
//   $headerFont → Outfit
//   $textFont   → Inter

$titleFont:  var(--font-barlow-condensed), 'Barlow Condensed', sans-serif;
$headerFont: var(--font-outfit),           'Outfit',           sans-serif;
$textFont:   var(--font-inter),            'Inter',            sans-serif;

$black:      #000000;
$obsidian:   #0d1b2a;
$blackflat:  #1a2a3a;
$white:      #FFFFFF;
$offwhite:   #f8fafc;

$darkgrey:   #7a9bb5;
$grey:       #4a6a85;
$lightgrey:  #c8d8e8;

// Brand Accent — indigo
$orange:     #6366f1;
$lightorange:#818cf8;
$darkorange: #4338ca;

$green:      $orange;
$lightgreen: $lightorange;
$darkgreen:  $darkorange;
$blue:       #1e6fa8;

$danger-red: #ef4444;
`);

console.log('base libs written');
