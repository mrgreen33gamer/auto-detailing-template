# Ceramic Coat Lab hero redesign + image-duplication fix

**Status:** Approved
**Template:** auto-detailing-template (GlossLab)
**Live target:** https://auto-detailing-template-sooty.vercel.app/

## Problem

The homepage hero's right-side visual (`components/Pages/Home/WelcomePage/WelcomePage.tsx`) is
built from a shared `_archetype-library/hero-g-dashboard` archetype — an "industrial chrome
control panel" with percentage-style gauge bars and toggle switches, relabeled "CERAMIC COAT LAB"
but structurally identical to the dashboard visual used across other trade templates in this
repo family. Two problems result:

1. It doesn't read as bespoke to auto detailing / ceramic coating — it's the same shape as every
   other reskin's hero widget.
2. The gauge-bar treatment is applied to stats that aren't percentages ("Mobile: Yes" gets a
   meaningless progress-bar fill), which reads as broken rather than intentional.

Separately, the homepage services grid (`src/app/page.tsx`) has 6 services but only 4 unique
photos in `public/pages/home/services/`, so two pairs of unrelated services ("Full Detail" /
"Headlight Restoration", "Ceramic Coating" / "Maintenance Detail") render the *identical* photo.

## Findings that inform scope

- Local commit `398feb5` ("fix: correct detailing brand tagline and cookie chrome") already fixes
  the leftover "HEATING · COOLING · COMFORT" header tagline and the cookie-banner crescent-clip
  bug (huge border-radius + `overflow:hidden` bug), but was never pushed — the live Vercel site is
  still serving the pre-fix build. This spec does not redo that work; it just needs to ship
  alongside it.
- `ServiceCardComponent` already supports an icon-only rendering path (`card.image` optional) —
  no component change needed to fix the duplication, only a data change.
- `service-1.jpg`/`service-2.jpg`/`service-3.jpg` are pixel-identical to the dead-code
  `mat-1.jpg`/`mat-2.jpg`/`mat-3.jpg` referenced in an unused `materials` array in
  `WelcomePage.tsx` — there is no unused-but-available unique photo to pull from for the two
  short slots; hence the icon-forward decision below.
- `BeforeAfter.tsx` + `before.jpg`/`after.jpg` exist but are wired into no page. Out of scope for
  this pass — not activated, not deleted.
- `owner.jpg` under `public/pages/seo-template-resources/` appears to be a real personal photo, not
  a generic placeholder. Flagged only; out of scope here.

## Scope

**In scope:**
1. Replace the hero's gauge-dashboard visual with a bespoke "Coating Cross-Section" visual.
2. Remove the `image` field from all 6 entries in the homepage `services` array so the grid is
   consistently icon-forward and has zero duplicate photos.
3. Push commit `398feb5` together with this work's new commits once verified.

**Out of scope:**
- Activating `BeforeAfter`/before-after photos.
- Touching `owner.jpg` or any other vendor-identity leak.
- Changing any other template in the repo family (this is scoped to auto-detailing-template only).
- Changing `ServiceCardComponent` itself (it already supports icon-only cards).

## Design: Coating Cross-Section hero visual

**Location:** `components/Pages/Home/WelcomePage/WelcomePage.tsx` + its `styles.module.scss`.
Replaces `PanelChrome`, `GaugeRow`, `ToggleSwitch`, and the `pct`/meter-fill math. Keeps
`CountingValue`/`parseGaugeValue` (still used for the stat strip).

**Structure (top to bottom, inside the existing `.visual` motion wrapper):**

1. **Panel header** — small label row: `GLOSSLAB · COATING COMPOSITION` + a single soft pulsing
   dot (kept subtle — not the old "SHINE METERS · ACTIVE" industrial-gauge framing).
2. **Layer stack (`CoatingCrossSection`)** — 3 angled bands rendered as styled `div`s
   (CSS transform, not an image), top to bottom:
   - Ceramic + Clear Gloss — "9H hardness · hydrophobic" — thinnest band, gets the shimmer sweep
     and water-bead animation.
   - Base Paint — "Color & flake"
   - Primer — "Corrosion barrier"

   Each band is a labeled rectangle with a subtle top-edge highlight to imply depth; bands
   animate in with a staggered `whileInView` slide/fade, consistent with the rest of the page's
   motion language.
3. **Shimmer sweep** — a diagonal gradient overlay clipped to the top band, translated across on
   a slow (~3.5s) `repeat: Infinity` loop via framer-motion — reads as a gloss highlight passing
   over wet-look ceramic, not a loading bar.
4. **Water bead** — a small teardrop/circle shape animates left-to-right with a slight sinusoidal
   vertical bob and a subtle squash/stretch, looping continuously, sitting on the top band's
   surface line.
5. **Stat strip** — 3 real trust stats as plain animated counters (`CountingValue`, no bar):
   `9,000+ Vehicles Detailed`, `4.9★ Google Rating`, `5-yr+ Coating Warranty`.
6. **Trait chips** — `Hydrophobic` / `UV-Stable` / `Product-Certified`, styled like the hero's
   existing left-column `.chip`s for visual consistency. Replaces the old toggle switches, which
   didn't map to anything real ("Before/after: ON" as a toggle made no sense as UI).

**Data:** kept as consts at the top of `WelcomePage()`, matching the existing file's convention
(`coatingLayers`, `heroStats`, `heroTraits`), so a future reskin run can re-theme it without
touching JSX.

**Removed:** `GaugeRow`, `ToggleSwitch`, `parseGaugeValue`'s percentage-bar consumer (the
`pct`/`meterFill`/`meterTicks` logic), and the corresponding dead SCSS rules (`.gauge`,
`.meterTrack`, `.meterFill`, `.meterTicks`, `.toggle*`). The already-unused `materials`,
`beforeImageSrc`/`afterImageSrc`, `mapPins`, `quote`/`authorName`, `schematicLabel`, `textureSrc`
consts in `WelcomePage.tsx` are also dead code from the archetype stamp-out and get deleted as
part of this change (they render nothing today) — not because this spec activates them.

## Design: services grid image fix

**Location:** `src/app/page.tsx`, the `services` array (~lines 32–75).

Delete the `image:` line from all 6 entries. `ServiceCardComponent` already renders a plain
`.cardIcon` tile when `card.image` is absent (see `ServiceCardComponent.tsx:61-72`), so this is a
pure data change — no component or CSS change required. Result: 6 consistently icon-forward
cards, zero duplicate photos, and the underused `service-*.jpg` files simply go unreferenced by
this grid (they are not deleted from `public/` — no other page was found referencing them, but
deleting image assets is out of scope for this pass).

## Verification plan

- `npm run typecheck` clean.
- Local `npm run dev`, Playwright screenshot of the hero at desktop (1440×900) and mobile
  (390×844) — confirm layer stack renders, shimmer/water-bead animate, no overlap with the cookie
  banner, no console errors.
- Screenshot the homepage services grid — confirm 6 icon-forward cards, no photos.
- `git log --oneline` shows 398feb5 + new commits; push; re-screenshot the live Vercel URL after
  deploy to confirm parity with local.

## Addendum (post-approval)

Two items landed already, ahead of the implementation plan, discovered while auditing the
service-areas page at the user's request:

- **Services grid image dedup** (scope item 2) — done in commit `3a069bc`.
- **Garage-door content leak** (not in original scope) — several `service-areas` city
  descriptions/highlights and `src/app/llms.txt/route.ts` still described the business as a
  garage-door company ("spring & cable repair", "Door System upgrades", "All Garage Door
  Services") — leftover from the fork. Fixed in commit `6dcebc8`.
- Investigated the service-areas page rendering "blank" in full-page screenshots — confirmed via
  forced scroll that this is a `whileInView` scroll-reveal working as intended, not a real bug for
  actual visitors. Not fixed (nothing to fix); noted here so it isn't re-investigated later.

Remaining from the original scope: the Coating Cross-Section hero visual (scope item 1) and the
final push (scope item 3).

## Non-goals

- No changes to other templates in the repo family.
- No new photography or image-generation — this design deliberately avoids needing any.
- No redesign of `ServiceCardComponent` itself.
