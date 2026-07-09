// GlossLab Auto Detailing — XML Sitemap
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.glosslabdetail.com';
  const today   = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/industries',     priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas',  priority: '0.85', changefreq: 'monthly' },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  const coreServices = [
    { url: '/services/full-detail',            priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/ceramic-coating',        priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/paint-correction',       priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/interior-detail',        priority: '0.85', changefreq: 'monthly' },
    { url: '/services/headlight-restoration',  priority: '0.85', changefreq: 'monthly' },
    { url: '/services/maintenance-detail',     priority: '0.85', changefreq: 'monthly' },
  ];

  const industries = [
    { url: '/industries/dealerships',       priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/fleet-vehicles',    priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/luxury-collectors', priority: '0.80', changefreq: 'monthly' },
  ];

  const blogPages = getAllPosts().map((post: any) => ({
    url: `/blogs/${post.slug}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...coreServices, ...industries, ...blogPages];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
