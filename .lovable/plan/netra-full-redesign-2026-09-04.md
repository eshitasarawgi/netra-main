# NETRA — Full Redesign

A complete rebuild. Everything currently on the site is removed: the shader hero, "You Envision It, We Engineer It", Why NETRA, the stats band, the morphing word list, and the whole obsidian-navy glass palette. What replaces it is a multi-page, substance-first site where the architecture NETRA sells is the design.

Note: Pinterest blocks automated reading, so I could not open your four pins. The direction below is built from your written brief. If a pin differs materially, attach it as a screenshot and I will retune the palette and type before building.

## The new positioning

NETRA builds custom agentic enterprise architecture — end-to-end. Mapped, architected, deployed, and governed by one firm. That claim leads every page instead of adjectives.

## Visual direction

Away from dark flashy glass, toward architectural weight and light.

- Palette: warm off-white paper (#F7F5F2), graphite ink (#16181A), soft stone rules (#DDD8D0), one restrained accent in burnt copper (#B4552D). No navy, no cyan, no violet, no gradient text, no glow, no glass blur.
- Typography: Space Grotesk for headings (bold, modern, technical), DM Sans for body. Large confident heading scale, generous line length limits, real paragraph copy rather than fragments.
- Structure: wide margins, visible hairline rules dividing bands, numbered sections, monospaced eyebrow labels. Density where it signals rigour (spec tables, numbered method), space everywhere else.
- Motion: single register only — a short fade-and-rise on section entry, and underline/arrow shifts on hover. No shaders, no blur-morph text, no pulsing dots, no floating.
- Imagery: premium architectural photography treated to the warm neutral palette (structure, concrete, glass, order) as section anchors — one per solution page, one on the home method band. Generated to match the palette, not stock-flashy.

## Site structure

```text
/                        Home
/solutions               What problems NETRA solves (six categories)
/solutions/workflow-automation
/solutions/executive-dashboards
/solutions/document-intelligence
/solutions/communication-intelligence
/solutions/decision-support
/solutions/process-engineering
/about                   Founder + firm
/contact                 Conversation-first contact
```

Top nav: Solutions (dropdown listing all six), Approach (home band), Industries (home band), About, Contact. Mobile gets a full-screen panel, not a cramped bar.

## Home page

1. Hero — typographic, no shader. "Custom agentic enterprise architecture." plus a three-line statement of what NETRA actually does: maps how the business runs, architects the system it needs, deploys and governs it end to end. Two actions: Explore Solutions, Start a Conversation.
2. The NETRA Method — four numbered stages, each with a one-line promise and a real explanatory paragraph: Map, Architect, Deploy, Govern. Replaces the current bare AUDIT/ARCHITECT/DEPLOY/OPTIMISE labels.
3. What We Solve — the six solution categories as a restrained grid, each linking to its own page.
4. Who We Build For — four industries: SME & Family Businesses, Exporters, Financial Services, Manufacturing & Industrial. Each names the operational reality NETRA meets there.
5. Why End-To-End Matters — three short points: one firm from process mapping to deployment, systems shaped around actual operations, ownership continuing after go-live.
6. Closing — conversation-first CTA with the three "why a conversation" points.

## Solution pages (six, identical skeleton)

Breadcrumb, headline, one-line summary, palette-matched architectural image, then three titled blocks: **The Problem**, **The Impact**, **How NETRA Engineers It** — each a real paragraph, not a fragment. Ends with a talk-to-us action and the shared closing band. Each page carries its own title, description, and social metadata.

## About and Contact

- /about — the firm's operating philosophy in three short paragraphs, plus the founder block reusing your current photo with the same framing and colour treatment already dialled in, retuned to the new light palette.
- /contact — the existing form and its delivery to your inbox is preserved exactly as it works today, re-skinned. Adds the conversation-first framing and direct email/LinkedIn/Instagram links.

## Technical notes

- New routes under `src/routes/`: `solutions.tsx` (layout), `solutions.index.tsx`, six `solutions.<slug>.tsx` leaves, `about.tsx`, `contact.tsx`; `index.tsx` rewritten.
- `src/styles.css` tokens replaced wholesale — light background/foreground, stone borders, copper accent; the `glass`, `glass-strong`, `text-gradient-glow`, `glow-cyan`, `border-glow`, and `noise` utilities are removed along with the components using them. Fonts loaded via `<link>` in `__root.tsx`.
- Deleted: `Hero.tsx` shader usage and `ui/shader-lines`, `MorphingWords.tsx`, `WhyNetra.tsx`, `Stats.tsx`, `PositioningCard.tsx`, `Process.tsx` — replaced by new section components under `src/components/site/`.
- `src/lib/contact.functions.ts` (form delivery) is left untouched; only its UI changes.
- Shared header, footer, and closing CTA become single components used by every route. Every route gets unique head metadata.
- Six solution images plus one method image generated in the palette.

## Not included

No backend, no CMS, no blog. Copy is written to your positioning; you can revise wording after seeing it live.
