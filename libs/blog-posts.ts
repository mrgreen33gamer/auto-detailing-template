// libs/blog-posts.ts
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
