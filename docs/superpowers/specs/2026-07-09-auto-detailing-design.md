# Auto Detailing Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `auto-detailing-template` into `auto-detailing-template`, sibling-cloned patterns from `garage-door-template` / `automotive-shop-template`. Per-city SEO subpages deleted. `/services` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | GlossLab Auto Detailing |
| **Tagline** | Ceramic Coatings · Interior Detail · Paint Correction |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2015 |
| **Owner** | Jade Nguyen |
| **License** | Bonded & Insured · Product-Certified Detailers |
| **Guarantee** | Satisfaction Re-Detail Guarantee |
| **Social proof** | 4.9★, 1,600+ reviews, 9,000+ vehicles detailed |
| **Accent hex** | `#6366f1` (indigo) — `$orange` token |
| **Phone** | (254) 950-1616 / `tel:+12549501616` |
| **Email** | hello@glosslabdetail.com |
| **Domain** | glosslabdetail.com |
| **Address** | 2701 Franklin Ave, Waco, TX 76710 |

## Services (6)

| Old detailing | New slug | Title |
|----------|----------|--------|
| ac-repair | `full-detail` | Full Detail |
| heating | `ceramic-coating` | Ceramic Coating |
| installation | `paint-correction` | Paint Correction |
| duct-cleaning | `interior-detail` | Interior Detail |
| indoor-air-quality | `headlight-restoration` | Headlight Restoration |
| maintenance | `maintenance-detail` | Maintenance Detail |

## Industries (3)

| Old | New slug | Title |
|-----|----------|--------|
| automotive | `dealerships` | Dealerships |
| manufacturing | `fleet-vehicles` | Fleet Vehicles |
| oil-gas | `luxury-collectors` | Luxury & Collectors |

## Blogs (3)

1. `ceramic-coating-vs-wax`
2. `how-often-detail-your-car-texas`
3. `paint-correction-explained`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #6366f1`, `$lightorange: #818cf8`, `$darkorange: #4338ca`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles, admin charts → `#6366f1`

## Done criteria

- `npm run typecheck` passes
- Grep clean of detailing/GlossLab/old phone/Mapbox pk tokens
- Identity consistent: GlossLab Auto Detailing throughout
