---
name: Farhaan Beeharry — The Runtime
description: A portfolio built as a running application — flat matte ink, one vermilion accent, hairline structure, and real telemetry instead of decoration.
colors:
  ink-900: "#0a0e13"
  ink-800: "#0e141b"
  ink-700: "#131a23"
  ink-600: "#18212c"
  ink-500: "#1f2937"
  ink-400: "#2a3746"
  line: "rgba(255, 255, 255, 0.07)"
  line-2: "rgba(255, 255, 255, 0.12)"
  line-3: "rgba(255, 255, 255, 0.2)"
  fg: "#e7ecf3"
  fg-2: "#9dabbb"
  fg-3: "#7b8896"
  accent: "#ff4d23"
  accent-ink: "#1a0803"
  accent-dim: "rgba(255, 77, 35, 0.14)"
  accent-line: "rgba(255, 77, 35, 0.42)"
  plate: "#f4f6f8"
typography:
  display:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.1rem, 6.2vw, 5.1rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.017em"
  body:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  lead:
    fontFamily: "Schibsted Grotesk, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  mono:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
    fontFeature: "tabular-nums"
  label:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.66rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  chip: "3px"
  sm: "4px"
  md: "7px"
  lg: "11px"
  pill: "999px"
spacing:
  hair: "1px"
  tight: "6px"
  grid: "8px"
  stack: "10px"
  inset: "13px"
  view-x: "clamp(18px, 3.4vw, 40px)"
  view-y: "clamp(30px, 5vw, 62px)"
  head-gap: "clamp(22px, 3vw, 34px)"
components:
  button:
    backgroundColor: "{colors.ink-600}"
    textColor: "{colors.fg}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-hover:
    backgroundColor: "{colors.ink-500}"
    textColor: "{colors.fg}"
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "#ff6540"
    textColor: "{colors.accent-ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.sm}"
    padding: "0 16px"
    height: "40px"
  button-sm:
    height: "32px"
    padding: "0 12px"
  chip:
    backgroundColor: "{colors.ink-600}"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.sm}"
    padding: "0 10px"
    height: "26px"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.fg-3}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "30px"
  filter-pressed:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  card:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.fg}"
    rounded: "{rounded.lg}"
    padding: "10px"
  card-hover:
    backgroundColor: "{colors.ink-600}"
  route:
    backgroundColor: "transparent"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.sm}"
    padding: "0 9px"
    height: "34px"
  route-active:
    backgroundColor: "{colors.ink-600}"
    textColor: "{colors.fg}"
  tab:
    backgroundColor: "{colors.ink-800}"
    textColor: "{colors.fg-3}"
    height: "64px"
  tab-active:
    textColor: "{colors.accent}"
  kbd:
    backgroundColor: "{colors.ink-600}"
    textColor: "{colors.fg-2}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "0 5px"
    height: "20px"
  omni:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.fg-3}"
    rounded: "{rounded.sm}"
    padding: "0 8px 0 11px"
    height: "32px"
  palette:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.fg}"
    rounded: "{rounded.lg}"
    width: "min(620px, calc(100vw - 32px))"
  palette-item:
    backgroundColor: "transparent"
    textColor: "{colors.fg-2}"
    rounded: "{rounded.sm}"
    padding: "8px 10px"
  palette-item-selected:
    backgroundColor: "{colors.ink-500}"
    textColor: "{colors.fg}"
  award-badge:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.chip}"
    padding: "0 7px"
    height: "20px"
---

# Design System: Farhaan Beeharry — The Runtime

## Overview

**Creative North Star: "The Runtime"**

The portfolio is a running application, not a page about one. Everything in the
visual system exists to hold that up: the chrome is real application chrome (a
sticky rail with badged counts, a status bar reporting measured telemetry, a
bottom tab bar when the viewport becomes a phone), the navigation is a ⌘K command
palette over 67 indexed targets, and the surfaces behave like a product's
surfaces — flat, matte, structured by hairlines, quiet enough that data and
controls are the only things with visual voice. The visitor operating the thing
*is* the argument that the person who built it builds applications.

Density is high but never crowded. Deep ink carries the ground (`--ink-900`
#0a0e13) and every surface above it is one small step lighter on the same flat
ramp; there is no gradient anywhere, no glow, no neon, no glass. Structure comes
from 1px hairlines at three opacities and from four real shadow steps that all
carry both an offset and a blur, so depth reads as light falling on stacked
surfaces rather than as a coloured halo. Exactly one chromatic voice exists — a
vermilion (`--accent` #ff4d23) — and it is rationed: primary action, active
route, live state. Nothing else gets it.

This world is the second replacement on this project. It refuses the three
category defaults explicitly: the gradient-glass dark portfolio, the white
editorial one, and the retro-skeuomorphic instrument-console world that
immediately preceded it (rejected by the owner on the grounds that hardware is
not technology). Every device those worlds relied on — brushed metal, grain
overlays, engraved bevels, phosphor screens, amber/green/red signal lamps,
inset/raised edge pairs — is absent from this system and must not return.
`PRODUCT.md` establishes that no colour or typeface commitment binds this project;
that remains true, and the visual world has now changed twice under it, so treat
this file as the only current record of the visual system.

**Key Characteristics:**

- Flat matte deep-ink ramp; no gradient, glow, neon or glass on any surface.
- Exactly one accent (vermilion), spent only on primary action, active route and live state.
- Structure by 1px hairline, never by a filled divider or a coloured rule.
- Application chrome that changes platform at 900px: rail + status bar → bottom tab bar.
- Azeret Mono strictly on machine data; Schibsted Grotesk for everything a person reads as prose.
- Authored SVG icons at one stroke weight; no icon font, no emoji.
- Real depth: four shadow steps with offset *and* blur, plus two true CSS perspective containers.
- Everything measured is measured; nothing telemetric is faked.

## Colors

A two-family palette: a six-step flat ink ramp for everything structural, and a
single vermilion accent that carries all meaning. There is no secondary or
tertiary hue — where a second colour would normally be reached for, this system
reaches for weight or spacing instead.

### Primary

- **Vermilion** (`--accent`): the only chromatic voice. Fills the primary button
  (`.btn-primary`), the brand mark, the pressed filter, the award badge, the
  2px active-route marker in the rail (`.route.active::before`, the only accent
  bar in the system), the active tab label, the live dot, the current timeline
  node, the `won` certificate border, and the hover state of every secondary
  link and icon-button. It is never a large surface fill and never decoration.
- **Vermilion Ink** (`--accent-ink`): the near-black brown-red used for type and
  icons placed *on* the accent. Nothing else uses it.
- **Vermilion Wash** (`--accent-dim`) and **Vermilion Hairline** (`--accent-line`):
  the 14% fill and 42% stroke used only by the availability status pill and by
  the accent hover state on underlined links. Both are transparent overlays on
  ink, never opaque surfaces.

### Neutral

- **Ink Ground** (`--ink-900`): `html` and `body` background, the app's floor.
  Also the inside of a card's media well and the halo ring punched around
  timeline nodes.
- **Ink Chrome** (`--ink-800`): top bar, rail, status bar, tab bar. The chrome is
  one step above the ground so it reads as attached furniture, not as a card.
- **Ink Surface** (`--ink-700`): the default panel — cards at rest, the NOW panel,
  spec rows, stack rows, certificates, quotes, the command palette body, case
  steps.
- **Ink Raised** (`--ink-600`): a surface lifted by state or nesting — default
  button face, chip, keycap, the NOW panel's title bar, an active rail route, a
  hovered card.
- **Ink Hover** (`--ink-500`): pointer/keyboard hover on a button, and the
  selected row in the command palette.
- **Ink Edge** (`--ink-400`): the strongest neutral. Scrollbar thumb, inactive
  capability dot, dormant timeline node. Used as a fill, not as text.
- **Hairline / Hairline-2 / Hairline-3** (`--line`, `--line-2`, `--line-3`):
  white at 7%, 12% and 20%. 7% is every structural divider and resting border;
  12% is a control's own border and a dashed empty-state; 20% is a hover border
  and the underline under an inline link.
- **Foreground** (`--fg`): primary text, headings, and any value the reader is
  meant to take away.
- **Foreground-2** (`--fg-2`): prose, leads, descriptions, resting rail labels
  (5.9:1 on the ground).
- **Foreground-3** (`--fg-3`): mono metadata, uppercase labels, timestamps,
  resting icon colour. 4.6:1 on `--ink-900` — the documented floor for real text.
- **Plate** (`plate` #f4f6f8): the single light surface in the system, used only
  as the 38px tile behind an issuer's logo on a certificate, because those marks
  are supplied for white grounds. It never becomes a content surface.

### Legacy bridge

`src/styles/case-file.css` opens with a `:root` block that maps the old token
names (`--bg-0`, `--bg-1`, `--bg-2`, `--card`, `--card-2`, `--glass`, `--indigo`,
`--violet`, `--cyan`, `--grad`, `--grad-2`, `--text`, `--muted`, `--faint`,
`--radius`, `--shadow`, `--brand`, `--brand-ink`, `--ok` #4ea86f, `--warn`
#c99a3a) onto the runtime palette, because `css/project.css` and
`css/showcase.css` still consume them for the 22 legacy article bodies and the
device mockups.

**The Bridge Is Load-Bearing Rule.** Do not delete or "clean up" the `:root`
bridge in `case-file.css`. `--indigo` and `--cyan` both resolve to `--accent` and
`--grad` resolves to `none` deliberately — the old world's two-hue gradient is
collapsed into this world's single accent on purpose, not by oversight. Removing
the bridge strips every colour out of the case-study bodies and the device frames.

**Legacy typefaces.** The 22 files under `portfolio/<slug>/` are the pre-runtime
source pages the write-ups are extracted from. They are authored against
`css/portfolio.css`, which predates this system and sets **Inter** for body,
**Sora** for display and **JetBrains Mono** for mono; each page loads that trio
from one `css2` request in its own `<head>`. None of them reaches the runtime —
`vite.config.js` excludes `portfolio/<slug>/index.html` from the build and
overwrites the path with the app shell — so Schibsted Grotesk and Azeret Mono
remain the only faces a visitor sees. Treat those three as *the legacy page's*
typography, not as a second UI face in this system, and do not introduce them
anywhere under `src/`.

**Per-project mockup palettes.** A device frame inside a write-up sets `--brand`,
`--bg`, `--surface`, `--text` and friends on its own `.pf-wrap` to the palette of
the product it depicts — NexStock teal, Lokal orange, Perfect Garment navy. Those
literals are the subject of the screenshot, not this system's colours, and they
belong on the wrap where `showcase.css` can theme from them. Everything *around*
a mockup — including the closing note under one — uses the bridge tokens above.

### Named Rules

**The One Accent Rule.** Exactly one accent exists. It marks the primary action,
the active route, and live state. It is never decoration and never a surface fill
at size. If a second colour feels needed, the answer is weight or spacing.
Precedent: an employer name in the service log (`.entry .org`) and the proof link
on a profile row (`.does-row .proof`) were both accent-coloured; ten accent org
names made the accent read as "heading" rather than "primary action or live
state", so both were changed to `--fg` at weight 600 with the accent arriving
only on hover. Reach for weight the same way.

**The Flat Matte Rule.** Surfaces are flat and matte. No gradients, no glows, no
neon, no glass — except where a modal genuinely needs to separate from what it
covers. The command palette's scrim is the single `backdrop-filter` in the
system (`blur(3px)` over `rgba(4,7,10,0.72)`), and it earns it by being a modal,
not by being pretty.

**The Hairline Rule.** Structure is carried by 1px hairlines and real
offset-plus-blur shadows. A divider is `--line` at 1px; it is never a filled bar,
never a coloured rule, never two-tone. Where a list needs internal rules, the
container is given a `--line` background with `gap: 1px` between `--ink-700`
children (`.spec`, `.contact-spec`) so the rules are literally the gaps.

## Typography

**Display Font:** Schibsted Grotesk (variable 400..900, with `-apple-system`,
`BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`)
**Body Font:** Schibsted Grotesk — the same family; one variable face covers a
5.1rem headline and an 11px control label, which is why there is no second UI face.
**Mono Font:** Azeret Mono (variable 300..700, with `ui-monospace`,
`SFMono-Regular`, `Menlo`, `monospace`)

Both are loaded as variable Google Fonts from a single `css2` request in
`index.html` with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`.

**Character:** Schibsted Grotesk is a neutral product grotesque that tightens
convincingly under negative tracking, so headings can be set heavy and tight
(-0.03em to -0.045em) without turning display-y. Azeret Mono is squarer and more
mechanical than a code font needs to be, which is exactly why it reads as
instrumentation the moment it appears next to the grotesque.

### Hierarchy

- **Display** (800, `clamp(2.1rem, 6.2vw, 5.1rem)`, line-height 0.94,
  -0.045em, `text-wrap: balance`): the name on the Overview route. One
  occurrence per site.
- **Headline** (800, `clamp(1.4rem, 2.6vw, 2rem)`, 1.1, -0.03em): `.view-title` —
  the single h2 that opens each route. The case-file route uses a larger sibling
  (`.case-title`, `clamp(1.7rem, 4vw, 2.9rem)`, -0.04em, 1.04) because there the
  title is the page.
- **Title** (650, 0.94rem, -0.017em): card and entry headings — `.card-body h3`,
  `.entry h4`, `.case-step .nm` (620), `.cert h4` (620), `.does-row h3` (650).
  A tight band on purpose: these are labels on objects, not headings in a document.
- **Sub-head** (700, 0.82rem, +0.02em): `.sub-head h3`, the only place a heading
  gets *positive* tracking, marking a subdivision inside a route rather than a
  new route.
- **Body** (400, 15.5px, 1.6): the document default. `<b>`/`<strong>` inside
  prose lifts to `--fg` at 600 rather than changing colour.
- **Lead** (400, 1rem, `--fg-2`, max-width 72ch): `.view-lead` under a route
  heading. `.prose` holds 70ch, `.ident .thesis` 58ch, article paragraphs 74ch,
  list items 72ch.
- **Mono** (400, 0.72rem, -0.01em, tabular figures): `.mono` — the readout class.
- **Label** (500, 0.66rem, +0.08em, uppercase, `--fg-3`): `.label` — group
  legends in the rail and palette, panel titles.

Mono sits in a narrow **0.61–0.72rem band** across the whole system: `.mono`
0.72rem, `.route .count` and `.chip` 0.68rem, `.label` / `.statusbar` /
`.palette-item .pi-sub` / mono metadata 0.66rem, `dt` keys 0.64–0.65rem,
`.pi-kind` 0.62rem, `.award` 0.61rem. Nothing mono is set larger than 0.72rem,
which is what keeps it reading as instrumentation next to 15.5px prose.

### Named Rules

**The Machine Data Rule.** Azeret Mono appears only on machine data: counts,
keys, telemetry, timestamps, route paths, categories, code. Never on prose,
never on a sentence, never on a heading a person reads for meaning. If it is
language, it is Schibsted Grotesk.

**The One Heading Per View Rule.** Each route carries exactly one heading, inside
`.view-head`, paired on the same baseline with a mono data readout pushed right
(`.view-head .meta`). There is deliberately no small label above a heading — no
kickers, no eyebrows, no `LABEL / Heading` stack anywhere in this system.

**The Weight-Not-Colour Rule.** Emphasis inside text is weight (600–650) and a
step up the foreground ramp to `--fg`. Colour is not an emphasis tool here,
because the only colour available means something else.

## Layout

A fixed application frame with a centred document inside it. Four structural
tokens define the frame: `--topbar-h` 52px, `--rail-w` 250px, `--status-h` 30px,
`--tabbar-h` 64px. The content column is capped at `--maxw` 1180px and centred.

**Desktop (>900px).** `.topbar` is fixed to the top edge (brand, `/` separator,
current route in mono, the ⌘K `.omni` control pushed right by `margin-left:auto`,
then the CV button). `.rail` is fixed between the top bar and the status bar at
250px, scrolls independently with `overscroll-behavior: contain`, and holds the
route list plus a `margin-top: auto` footer of social icon buttons. `.statusbar`
is fixed to the bottom edge at 30px. `.main` is inset by `margin-left:
var(--rail-w)` and padded top and bottom by the two bars.

**Routes.** Each `.view` is `max-width: var(--maxw)`, auto-margined, padded
`clamp(30px, 5vw, 62px) clamp(18px, 3.4vw, 40px)`, with `scroll-margin-top:
var(--topbar-h)` so anchor navigation never lands under the chrome. `html` sets
`scroll-padding-top: calc(var(--topbar-h) + 20px)` for the same reason.
The Overview route is instead `min-height: calc(100svh - var(--topbar-h) -
var(--status-h))` and vertically centres its content.

**Grids.** Overview is `minmax(0, 1.55fr) / minmax(280px, 0.95fr)` (identity
block / NOW panel). Profile is `1.35fr / 0.85fr`, Log `1.2fr / 0.8fr`, Contact
`1.1fr / 0.9fr`. Collections auto-fill: work deck `minmax(268px, 1fr)`,
capability rows `minmax(232px, 1fr)`, certificates `minmax(296px, 1fr)`.
Gutters are `clamp(12px, 1.5vw, 18px)` for the deck and a flat 8px for the
denser row/tile collections.

**Rhythm.** Recurring gaps are 6px (chip and filter runs), 8px (tile
collections), 10px (action rows, quote stacks), 13px inset padding on a row or
tile, and `clamp(22px, 3vw, 34px)` between a route's head and its body. Panels
use 15px internal padding; the chrome uses 14–16px.

**Breakpoints.** 1080px collapses the two-column Overview, Log and Contact grids
to one column and caps the NOW panel at 460px. **900px is the platform
boundary**: the rail and status bar go `display: none`, `.tabbar` becomes
`display: flex`, `.main` loses its left margin and pads its bottom by
`calc(var(--tabbar-h) + env(safe-area-inset-bottom, 0px))`, the `.omni` collapses
to its icon, and the brand's route crumb and the CV button drop out. 700px
stacks profile rows and case-file navigation. 620px makes the deck and tile
grids single-column and takes the command palette full-screen
(`100vw`/`100dvh`, no radius, no border).

**The Platform Chrome Rule.** Desktop wears desktop-app chrome; mobile wears
mobile-app chrome. A mobile engineer's site adapting its own chrome to the
platform it is running on is the thesis stated in the interface rather than in a
paragraph. Never ship a hamburger drawer here, and never let the rail become a
tab bar's cousin — they are two different chromes for two different platforms.

## Elevation & Depth

This system uses shadows, and it uses them literally. Four steps are defined and
every one carries an **offset and a blur** — no flat hard-offset shadow exists
anywhere, and no shadow is tinted. Tonal layering on the ink ramp does the
*grouping*; shadow does the *lifting*; hairlines do the *edging*. All three are
present at once on a card at rest: `--ink-700` fill, `--line` border, `--lift-1`.

Depth is also geometric, not only tonal. Two containers are real CSS perspective
containers: `.overview` (`perspective: 1000px`, `perspective-origin: 42% 46%`)
and `.deck` (`perspective: 900px`). Inside the Overview, `useDepthScroll` writes
`--p` (0 at rest → 1 fully departed) onto every `[data-depth]` element from a
single rAF-batched read/write pass, and the layers translate in Z at different
rates — `.layer-near` by `calc(var(--p) * -150px)`, `.layer-far` by
`calc(var(--p) * -62px)` — so the identity block, the NOW panel and the WebGL
lattice separate in space instead of sliding away as one flat sheet. On the deck,
`useCardTilt` writes `--rx`/`--ry` from the pointer (max 7deg, one delegated
`pointermove` per deck, cleared on leave or on moving to another card) and hover
sets `--cz: 26px`.

### Shadow Vocabulary

- **Lift 1** (`box-shadow: 0 1px 2px rgba(0,0,0,0.4)`): a card at rest. Enough to
  detach it from the ground, not enough to read as floating.
- **Lift 2** (`0 4px 12px -2px rgba(0,0,0,0.5)`): a small raised element —
  currently the normalised callout boxes inside legacy article bodies.
- **Lift 3** (`0 14px 34px -8px rgba(0,0,0,0.62)`): a genuinely raised panel —
  the NOW panel, a hovered work card, the case-file cover.
- **Lift 4** (`0 30px 70px -16px rgba(0,0,0,0.75)`): modal only. The command
  palette is the sole user.

### Named Rules

**The Real Depth Rule.** Every shadow has an offset and a blur. A shadow with
zero blur (a hard offset block) and a shadow with zero offset (a centred halo)
are both banned — the first belongs to a neobrutalist world this is not, the
second is a glow, which the Flat Matte Rule already forbids.

**The Reduced Motion Rule.** `prefers-reduced-motion: reduce` disables the WebGL
field entirely (it returns before creating a renderer), sets `.overview
{ perspective: none }`, forces every `.layer` transform off, forces `.card`
transform off and zeroes `--cz`, stops the `ping` on `.live::after` and the
`nudge` on the scroll hint, drops the palette's `fade`/`pop` animations, removes
smooth scroll, and clamps every remaining animation to 0.01ms. Both motion hooks
and the frame sampler check the same query in JS. A new moving thing must be
added to that block in the same commit that adds it.

## Shapes

Rectilinear with small, consistent softening. Three radii carry almost
everything: 4px (`--r-sm`) for controls — buttons, chips, filters, rail routes,
icon buttons, social tiles, logo plates; 7px (`--r`) for a content surface — spec
groups, stack rows, certificates, quotes, case steps, a card's media well; 11px
(`--r-lg`) for the largest containers — the card itself, the NOW panel, the
command palette, the case cover, the dashed empty state. Two exceptions exist and
are deliberate: 3px on the keycap and the award badge (the two smallest objects,
where 4px looks slack), and full pills — `999px` on the availability status,
`50%` on dots, timeline nodes and testimonial portraits.

Borders are always 1px and always a hairline token; the only thickness variations
in the system are the keycap's 2px bottom border (a physical keycap tell), the
2px active-route marker, and the 3px left border normalised on legacy callouts.
Media is clipped by its container with `overflow: hidden` and holds a fixed
ratio: 16/10 for a card's media well, 1/1 for the NOW panel's recent thumbnails.
Focus is a 2px `--accent` outline at 2px offset with `--r-sm` corners, applied
globally to `:focus-visible`, and is never removed.

## Components

### Buttons

- **Shape:** 4px corners (`--r-sm`), 40px tall, 16px side padding, 9px gap to an
  icon, `white-space: nowrap`.
- **Primary:** accent fill, `--accent-ink` type at weight 700. One per view at
  most — Overview's "View the work", the top bar's CV button, the certificates'
  "show all".
- **Default:** `--ink-600` fill, `--line-2` border, `--fg` type at 600.
- **Ghost:** transparent fill, `--line-2` border, `--fg-2` type; fills to
  `--ink-600` and lifts to `--fg` on hover.
- **Hover / Active:** default steps to `--ink-500` with a `--line-3` border;
  primary lightens to #ff6540; all press with `transform: translateY(1px)`.
  Transitions are 0.12–0.15s on `--ease` (`cubic-bezier(0.2, 0.8, 0.2, 1)`).
- **Small:** 32px tall, 12px padding, 0.8rem — used in chrome only.

### Chips

- **Style:** mono 0.68rem, `--fg-2` on `--ink-600`, 1px `--line`, 26px tall, 4px
  corners. Used for stack tags and case-file tags — a chip is a label, never a
  control.
- **State:** on hover of the chip or its wrapping link, type goes `--fg` and the
  border to `--line-3`. There is no selected chip; selection belongs to filters.

### Filters (segmented control)

- **Style:** transparent, 1px `--line`, 30px tall, mono 0.7rem, `--fg-3`.
- **State:** `aria-pressed="true"` fills with the accent and switches type to
  `--accent-ink` at 600 — one of the four places a large-ish accent fill is
  permitted, because it is a selected control state. The filter set is derived
  from the categories actually present in the data, so no filter can return an
  empty result.

### Cards / Containers

- **Corner Style:** 11px outer (`--r-lg`), 7px on the inner media well.
- **Background:** `--ink-700` at rest → `--ink-600` on hover.
- **Shadow Strategy:** `--lift-1` at rest → `--lift-3` on hover (see Elevation).
- **Border:** 1px `--line` → `--line-3` on hover.
- **Internal Padding:** 10px around the media, then 11px above the body row.
- **Distinctive behaviour:** the card is a `transform-style: preserve-3d`
  surface that composes pointer tilt (`--rx`/`--ry`) with a hover Z-lift
  (`--cz: 26px`); its image scales to 1.04; the `.go` affordance flips to an
  accent fill with `--accent-ink` glyph. Transition durations shorten on hover
  (0.08s for transform) so tracking feels immediate and release feels settled.

### Inputs / Fields

The only text input in the system is the command palette's. It is chromeless by
design: no border, no background, no outline, inheriting the UI font at 0.98rem,
with `--fg-3` placeholder text. The 52px row that holds it carries the field
affordances instead — a 17px search icon, a bottom hairline, and an `esc` keycap
on the right. The `.omni` control in the top bar is the resting-state stand-in
for it: 32px, `--ink-700` on `--line-2`, "Jump to…" plus two keycaps, brightening
its border to `--line-3` on hover.

### Navigation

- **Rail (desktop):** a mono uppercase "Routes" label, then 34px rows at 0.865rem
  weight 500, `--fg-2`, with a 16px icon at 0.75 opacity and a right-aligned mono
  count. Hover fills `--ink-700` and lifts type to `--fg`. Active fills
  `--ink-600`, sets weight 600, turns the icon accent, and draws a 2px accent bar
  at `left: -10px` — the only accent bar in the system. Rows are real anchors
  (`<a href="#id">`) on the home route and react-router `<Link to="/#id">` from a
  case page, so every route is addressable, middle-clickable and
  keyboard-reachable. Only the command palette navigates by script.
- **Tab bar (≤900px):** five of the seven routes (`overview`, `work`, `log`,
  `certs`, `contact` — a tab bar holds five comfortably; Profile and Capability
  stay reachable by scroll and by ⌘K), 64px tall plus
  `env(safe-area-inset-bottom)`, icon over a 0.62rem weight-600 label,
  `--fg-3` at rest, whole tab going accent when active.
- **Single source:** `src/data/routes.js` exports `ROUTES`, `ROUTE_IDS` and
  `TABS`. The rail, the tab bar, the scroll-spy and the palette all read it, so a
  route cannot exist in one navigator and not another. `count` is the real length
  of the thing the route leads to, with capability counts derived in
  `src/data/capabilities.js` from project tags at load.

### Command Palette (signature component)

⌘K / Ctrl+K, and the clearest single demonstration on the site that its author
builds applications. It indexes **67 real targets** — 7 routes, 21 case files, 9
roles, 4 qualifications, 16 certificates, 10 actions (both CVs, email, WhatsApp,
six profiles) — none invented, all built once with `useMemo`.

- **Form:** 620px wide (or `100vw` below 620px), pinned at `top: 14vh`,
  `max-height: 68vh`, `--ink-700` on a `--line-2` hairline at 11px radius with
  `--lift-4`. Three flex rows: a 52px input, a scrolling grouped list, and a
  0.64rem mono footer showing the hint keys and a live `{shown} of {total}`.
- **Scrim:** `rgba(4,7,10,0.72)` with `backdrop-filter: blur(3px)` — the one
  sanctioned blur in the system.
- **Matching:** prefix (3) > substring (2) > subsequence (1), scored against
  title and against subtitle at a 0.5 penalty, so "nxs" finds NexStock and
  "flut" finds every Flutter build. Results cap at 40 when searching, 60 at rest.
- **Rows:** 8px/10px padding, 4px radius, a 16px icon at 0.7 opacity, a block
  title in `--fg` at 500, a mono `--fg-3` subtitle, and a right-aligned mono
  uppercase kind (`open` / `external` / `go`). The selected row —
  `[aria-selected="true"]` — fills `--ink-500` and turns its icon and kind
  accent. Both title and subtitle must stay `display: block`; left inline they
  ran through the kind label.
- **Behaviour:** results are grouped in a fixed order (Route, Case file, Role,
  Education, Certificate, Action); the input is a real `role="combobox"` with
  `aria-expanded`, `aria-controls` and `aria-activedescendant`, over a
  `role="listbox"` of `role="option"` buttons; ↑/↓ wrap, Home/End jump, Enter
  runs, Esc closes, Tab is swallowed because the palette is the whole
  interaction while open; body scroll is locked and focus is restored to whatever
  opened it; the cursor row is kept in view with `scrollIntoView({ block:
  "nearest" })`; the pointer moves the cursor rather than maintaining a second
  hover state.

### Status Bar (signature component)

30px of real instrumentation across the bottom of the desktop chrome, set
entirely in 0.66rem mono with tabular figures and `--fg-3` type, keys lifted to
`--fg-2` via `<b>`. Cells: a live dot plus `ready`; the active route as
`/{id}`; the actual `innerWidth×innerHeight`, re-read on resize; frame rate
sampled once per second and re-rendered only when the integer changes; a
`margin-left: auto` stack line; and Port-Louis local time via
`Intl.DateTimeFormat` on `Indian/Mauritius`.

**The Real Telemetry Rule.** Everything on the status bar is measured live. If a
value cannot be read, its cell is not rendered — there is no placeholder, no
fake CPU meter, no invented uptime. The frame sampler does not run at all under
reduced motion, and the bar costs nothing measurable.

### Field (signature component)

The WebGL ground behind the Overview: a custom GLSL lattice (three.js, lazily
imported and code-split, ~117 kB gzip, never in front of first paint) drawing
grid lines and a node at each crossing, with pointer attention falling off as
`exp(-distance * 2.3)`, one slow ripple travelling out from the pointer, scroll
velocity feeding an `uEnergy` term that decays at 0.94 per frame, and a vignette
so the lattice never competes with the type at centre-left. It renders with
`alpha: true` and a transparent clear colour, so the CSS ink ground remains the
actual background; cell count drops from 26 to 15 below 760px; it pauses via
`IntersectionObserver` when off-screen, survives `webglcontextlost`, and
disposes geometry, material and renderer on unmount.

**It carries no accent colour and no bloom.** Its two colours are a slate
(`vec3(0.180, 0.235, 0.298)`) lifting to a cool steel (`vec3(0.396, 0.510,
0.612)`) near the pointer, alpha clamped to 0.5, with no additive blending. That
is the One Accent Rule and the Flat Matte Rule holding at the one place where
breaking them would be easiest: vermilion in a background would make the accent
decoration, and glow would make a matte world glossy. Energy is expressed as
density and contrast instead. If WebGL is unavailable or motion is reduced, the
route is a flat ink field and is complete.

### Icons

Authored SVG only, from a single `Icon` component. Line marks sit on a 24 grid at
`stroke-width: 1.9` with `stroke-linecap: square` and `stroke-linejoin: miter`;
brand marks are the real logos as filled paths at the same 24 viewBox, because a
recruiter has to recognise them instantly. Every icon is `aria-hidden="true"`,
`focusable="false"` and inherits `currentColor`, so it re-colours with its row's
state for free. Font Awesome is still loaded in `index.html` and is for the
legacy project article bodies *only*.

**The Authored Icon Rule.** No icon font, no icon package, and no emoji in the
shell or in any route. One stroke weight (1.9) and one geometry (square caps,
miter joins) across the whole set — a stock icon set inside a committed form is
the tell that breaks it. A new pictogram is added to `LINE` in `Icon.jsx`, drawn
on the 24 grid, or it does not ship.

### Evidence rows (Capability)

Rows, not meters. Each is a three-column grid — a 6px dot (accent when builds
exist, `--ink-400` when the evidence is a role rather than a build count), the
name at 0.87rem weight 550, and right-aligned mono evidence like "6 builds ·
XEFI · App Store". `src/data/capabilities.js` derives the build counts from the
published case-study tags at load, so a number cannot drift from the work.

**The Evidence Rule.** No self-rated meter, percentage, star rating or
proficiency bar may appear in this system. Every claim resolves to something a
visitor can open — a case file, a certificate, a role in the log. A number that
cannot be counted on the page does not get rendered.

## Do's and Don'ts

### Do:

- **Do** build a new surface from the ink ramp: `--ink-700` fill, 1px `--line`
  border, `--r` or `--r-lg` corners, `--lift-1` if it needs to detach.
- **Do** spend the accent only on the primary action, the active route, or live
  state — and at most once per view.
- **Do** reach for weight (600–650) and a step up the foreground ramp when you
  want emphasis, following the `.entry .org` and `.does-row .proof` precedent.
- **Do** keep every text colour at or above `--fg-3` (4.6:1 on `--ink-900`); it
  is the floor, not a starting point.
- **Do** set counts, keys, timestamps, telemetry and route paths in Azeret Mono,
  and keep them inside the 0.61–0.72rem band.
- **Do** open a route with exactly one `.view-head` heading, pairing it with a
  mono readout on the same baseline if it needs a number.
- **Do** render content visible by default and let `.reveal` add only a settle —
  it is `opacity: 1` outside `prefers-reduced-motion: no-preference`.
- **Do** make new navigation a real anchor or `<Link>`, and register the route in
  `src/data/routes.js` so the rail, tab bar, scroll-spy and palette all learn it
  at once.
- **Do** draw new icons into `Icon.jsx` on the 24 grid at 1.9 stroke with square
  caps and miter joins.
- **Do** add any new motion to the `prefers-reduced-motion: reduce` block in the
  same commit.
- **Do** give a new shadow both an offset and a blur, or use one of
  `--lift-1..--lift-4`.

### Don't:

- **Don't** introduce a gradient, a glow, a neon edge, or a glass panel. The
  palette scrim's `backdrop-filter` is the one sanctioned exception and it is a
  modal, not a decoration.
- **Don't** add a second accent, a semantic colour set, or a status palette. If a
  second colour feels needed, the answer is weight or spacing.
- **Don't** fill a large surface with the accent, put it behind body text, or use
  it to mean "heading".
- **Don't** set prose, a heading, or a sentence in Azeret Mono, and don't set mono
  above 0.72rem.
- **Don't** put a small label, kicker or eyebrow above a heading.
- **Don't** gate content behind scroll or animation, or ship a reveal that leaves
  content hidden when JS or motion is unavailable.
- **Don't** use Font Awesome, any icon package, or an emoji in the shell or in a
  route; Font Awesome exists solely for the legacy article bodies.
- **Don't** ship a self-rated meter, percentage bar or vanity counter, or a
  number that cannot be counted on the page.
- **Don't** fake telemetry. If a value cannot be measured, omit the cell.
- **Don't** ship a hard offset shadow with no blur, or a coloured/centred halo.
- **Don't** collapse the platform chromes into one — no hamburger drawer on
  desktop, no rail on a phone.
- **Don't** delete the `:root` legacy bridge in `src/styles/case-file.css`.
  `--indigo` and `--cyan` resolving to `--accent` and `--grad` resolving to
  `none` are deliberate.
- **Don't** simplify `.pp-article ul li`, `.pp-article ol li` and `.pp-article
  li:not(ol li)` down to a bare `.pp-article li`: `css/project.css`
  out-specifies the bare selector, and several legacy bodies use bare `<li>`
  outside any `<ul>`. (`.pp-tags` needs no override in this world.)
- **Don't** reintroduce anything from the two replaced worlds — brushed-metal or
  grain textures, engraved bevels, raised/inset edge pairs, phosphor screens,
  paper surfaces, amber/green/red signal lamps, or gradient-glass cards.
