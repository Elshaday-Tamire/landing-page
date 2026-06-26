# AgentChat Design System

AgentChat is an AI agent platform — a workspace where teams build, configure, and chat with custom AI agents wired to their own data sources, tools, and provider keys. The product is operator-focused: it should feel inhabited by people who already know what they're doing.

The design language sits in the lineage of **Linear**, **Vercel Dashboard**, and **Raycast** — quiet surfaces, large confident typography, ultra-thin borders, restrained accent color, keyboard-first interactions. Decidedly *not* a generic admin SaaS look.

## Sources

This system was built without a codebase or Figma reference — the brief itself was the source of truth. There are no external links to preserve. If a codebase or Figma file is later attached, the foundations here should be cross-referenced and reconciled.

## Index

- `README.md` — this file
- `colors_and_type.css` — all design tokens (color, type, spacing, radii, motion, elevation)
- `SKILL.md` — Agent Skill manifest, makes this folder portable to Claude Code
- `assets/` — logo, brand mark, illustrations
- `fonts/` — webfont references (loaded via Google Fonts CDN)
- `preview/` — design system cards rendered in the Design System tab
- `ui_kits/agentchat/` — full UI kit recreating all 8 product screens as a click-through prototype
  - `index.html` — interactive prototype, switch between screens via the icon rail
  - `components/` — modular JSX components (Sidebar, AgentRow, Drawer, ChatList, etc.)

---

## Content Fundamentals

**Tone.** Direct, lowercase-friendly, never marketing-y. Sentences are short. Labels are nouns, buttons are verbs. We don't apologize, we don't oversell, we don't call the user "you" more than necessary.

**Voice.** First-person plural is rare; we mostly speak in product nouns. "12 agents", not "You have 12 agents". "Last edited 2h ago", not "You last edited this 2 hours ago".

**Casing.** Sentence case everywhere. **No Title Case in UI.** "New agent" not "New Agent". "Sign in" not "Sign In". Headings, buttons, menu items — all sentence case. The only uppercase is the tiny mono `.label` style used for category labels, set in `tracking-widest`.

**Numbers and units.** Always tabular-nums in tables and stats. Use `K`/`M` not `,000`. Times are relative when recent ("3m ago", "2h ago"), absolute when older ("Apr 12"). Currencies and tokens use the mono font.

**Punctuation.** No exclamation marks. Periods only when a sentence is a full sentence — fragments don't get them. Em-dash for breaks, never " - ".

**Emoji.** Never. Status is communicated by 6px colored dots, not 🟢. The single exception is the success notice on the API Keys page, which uses a checkmark glyph (✓) — not the emoji ✅.

**Examples.**
- ✅ "12 agents" / ❌ "You have 12 agents in this workspace"
- ✅ "Generate new key" / ❌ "+ Create New API Key"
- ✅ "Last used 4h ago" / ❌ "🕐 Last Active: 4 hours ago"
- ✅ "elshaday deleted agent Support Bot" / ❌ "User Deletion Event 🗑️"
- ✅ "Not set" / ❌ "⚠️ This provider is not configured!"

---

## Visual Foundations

### Color
A warm-leaning neutral grayscale carries 95% of the UI. The accent — a single warm amber, `oklch(74% 0.16 68)` — is used **once per screen**: the primary CTA, the active rail icon, the unread indicator. Never as a background panel, never as a gradient, never on more than one element at a time.

Status uses **6px colored dots**, never pill badges. Green = active, yellow = idle, red = error. Avatars use a fixed 8-color palette of muted, desaturated tones (no rainbow primaries).

**No gradients. Anywhere.**

### Type
- **Inter Tight** — display, UI, body. Weights 400/500/600/700.
- **JetBrains Mono** — labels, code, key prefixes, timestamps in some contexts.

The system relies on **type doing the visual work**. Headings are large and tight (`-0.04em` tracking on hero stats). Body is small (14px) and precise. The mono "label" at 11px with 0.12em tracking and uppercase is the only place uppercase appears.

> **Substitution flag:** Inter Tight and JetBrains Mono are loaded from Google Fonts CDN. If a custom AgentChat typeface is later commissioned, it should drop into `fonts/` and replace the `@import` in `colors_and_type.css`.

### Spacing
The system breathes. Default page gutters are **64px** (`--space-16`), section padding is 48–96px, the gap between a list item's icon and label is 12–16px. List rows are 64px tall to feel like *items*, not table rows.

### Backgrounds
Almost always the page background (`--n-50`, near-white). Surfaces (cards, drawers) are `--n-0` (pure white) — distinguished from page only by a 1-2% lightness shift, no border. Full-bleed imagery, patterns, illustrations, gradients are **not used**. The login page is the only exception: its left half is a single, large, abstract typographic statement on a near-black surface.

### Borders
Almost absent. When present, they are 1px in `--border-faint` or `--border-subtle` — within 5% lightness of the surface. We prefer **spacing or background shifts** over borders to separate content.

### Shadows
Reserved for floating elements only — drawers, dialogs, tooltips, dropdown menus. Cards and rows never carry shadow. The shadow scale is soft and short — see `--shadow-sm/md/lg/xl`.

### Radii
6px is default. 10px for drawer/dialog. Avatars are 4px squares (`--radius-sm`), never circles. Buttons share the standard 6px radius. No pill / fully-rounded shapes anywhere except the optional `--radius-full` reserved for the rare avatar dot.

### Motion
- **Fast (120ms)** — hover state changes, button press
- **Base (180ms)** — drawer slide, dialog fade
- **Slow (280ms)** — only for major transitions
- **Easing:** `cubic-bezier(0.2, 0, 0, 1)` (ease-out, Linear-style — quick start, slow finish)

No bounces, no springs, no parallax. Animations are functional, not decorative.

### Hover & press
- **Hover:** background lightens to `--bg-hover` (a 2% lightness shift). Action icons fade in from `opacity: 0` over 120ms. Color changes use `--accent-hover` (slightly darker accent).
- **Press:** background goes to `--bg-active`; the accent button uses `--accent-press`. No scale transforms.
- **Focus:** 2px accent ring offset by 2px page background — clean, keyboard-first.

### Transparency & blur
Used only for the dialog scrim (`oklch(0% 0 0 / 0.4)` — no blur, just dim) and for the API key success notice's inset top edge. Otherwise opaque.

### Imagery
The brand uses **typography as imagery**. The login screen left panel is a giant typographic statement — no photos, no stock illustration. If iconographic accent imagery is needed, it's geometric (circles, rules, dots), monochrome, on the neutral palette.

### Layout rules
- **Icon rail** is fixed 48px on the left.
- **Right drawer** is fixed 480px, slides in from the right edge.
- **Settings** is two-column: 220px nav + flex content. Never horizontal tabs.
- **Page gutter** is 64px on the main content area.
- **Max content width** is generally not constrained — content uses the available space, with whitespace doing the framing.

---

## Iconography

We use **Lucide** (https://lucide.dev) — 1.5px stroke, 20px default size, rounded line-caps. Icons are loaded inline as SVG strings (see `assets/icons.js`) so they inherit `currentColor`. We never use icon fonts, never emoji, and never colored / filled icons.

- **Default size:** 16px in dense rows, 20px on the rail, 24px in empty states
- **Stroke weight:** always 1.5px (`stroke-width="1.5"`)
- **Color:** `currentColor` — usually `--fg-tertiary` at rest, `--fg-primary` on hover
- **Active state:** color shifts to `--accent` for the active rail item only

> **Substitution flag:** Lucide is a stand-in for an AgentChat custom icon set. Its stroke style and rounded geometry match the brand's restrained tone, but if a custom set is later commissioned the icon registry in `assets/icons.js` is the single point of replacement.

---

## How to use this system

If you're a designer or engineer building a new screen:
1. Load `colors_and_type.css` first.
2. Pull components from `ui_kits/agentchat/components/`.
3. Open `ui_kits/agentchat/index.html` to see the components composed into real screens.
4. When in doubt, the rule is: **more whitespace, less ornament**. Borders are a last resort.
