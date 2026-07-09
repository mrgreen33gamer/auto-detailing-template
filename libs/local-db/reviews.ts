// libs/local-db/reviews.ts
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
