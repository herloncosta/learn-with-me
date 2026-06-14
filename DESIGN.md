<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

---
name: Learn With Me
description: A software engineering blog — technical, minimal, content-first
---

# Design System: Learn With Me

## 1. Overview

**Creative North Star: "The Developer's Desk"**

A blog that reads like a well-lit terminal session: mono-forward typography carries the voice, a committed blue-cyan accent gives it pulse, and choreographed motion adds the feeling of a living notebook — not a template. The interface steps back and lets the code and prose lead. Anti-references from PRODUCT.md carry forward: no generic SaaS cards, no gradient text, no glassmorphism, no uppercase kickers above every section. This is engineered simplicity, not designed decoration.

**Key Characteristics:**
- Mono-forward as the primary reading voice (not just code blocks)
- Blue-cyan committed color, carrying 30–60% of the surface
- Choreographed scroll-driven motion — deliberate, not decorative
- Content-first whitespace hierarchy
- WCAG AA throughout

## 2. Colors

A committed blue-cyan palette where the accent color is not an afterthought but a structural layer. Neutrals are clean and cool-toned to match the technical register.

**The Committed Color Rule.** The primary blue-cyan carries 30–60% of visible surface area. Its rarity is not the point — its presence is. This is not a restrained accent; it is a structural color.

### Primary
- **Technical Blue** `[to be resolved during implementation]`: Primary interactive color, dominant surface on nav and key containers, link color in body text. Cool-leaning, saturated but not piercing.

### Neutral
- **Off-white** `[to be resolved during implementation]`: Page background. Cool-leaning, near-white.
- **Slate** `[to be resolved during implementation]`: Card/surface backgrounds, code block fills.
- **Ink** `[to be resolved during implementation]`: Body text. Near-black with a hint of blue.
- **Muted Ink** `[to be resolved during implementation]`: Secondary text, metadata, dates.

## 3. Typography

**Voice:** Mono-forward — monospace is not reserved for code blocks. It is the primary typographic voice for headings, body, and interface labels. The family is chosen for readability at body size, not just for code.

**Display/Headings:** `[monospace family to be chosen during implementation]`
**Body:** Same monospace family (single-family system)
**Label/Mono:** The same — the entire system is monospace

**Character:** Honest, unadorned, technical. No decorative serifs or humanist warmth. Each character occupies its natural width; the rhythm is the texture.

### Hierarchy
- **Display** (`[weight]`, `clamp(2.5rem, 6vw, 4.5rem)`, `[line-height]`): Hero and section title headlines. Used sparingly.
- **Headline** (`[weight]`, `clamp(1.5rem, 4vw, 2.5rem)`, `[line-height]`): Post titles, major section headers.
- **Title** (`[weight]`, `[size]`, `[line-height]`): Subheadings, card titles.
- **Body** (`[weight]`, `1rem–1.125rem`, `1.6–1.8`): Article reading text. Max line length 70ch.
- **Label** (`[weight]`, `0.75rem–0.875rem`, `[letter-spacing]`): Tags, dates, metadata, secondary UI.

## 4. Elevation

Flat by default. Depth is conveyed through tonal layering (surface colors shifting against the page background), not through shadows. Motion handles the sense of hierarchy during transitions.

**The Flat-By-Default Rule.** Surfaces are flat at rest. No box-shadows on cards, nav, or containers. Layers stack by color, not by y-axis offset.

## 5. Components

*Omitted in seed mode. Re-run `/impeccable document` once there's code.*

## 6. Do's and Don'ts

### Do:
- **Do** let whitespace lead — generous padding around content blocks, wide gutters.
- **Do** use the blue-cyan accent structurally (backgrounds, containers), not just for links and buttons.
- **Do** keep the layout simple: header, content, footer. No sidebar unless truly needed.
- **Do** use motion to guide reading flow (scroll-triggered reveals, staggered entries).

### Don't:
- **Don't** use glassmorphism, gradient text, or side-stripe borders (from PRODUCT.md anti-references).
- **Don't** use identical card grids with icon + heading + text repeated endlessly.
- **Don't** place an uppercase kicker (EYEBROW) above every section.
- **Don't** use card shadows — use tonal layering.
- **Don't** gate content visibility behind animation (motion enhances, it doesn't deliver).
- **Don't** pair monospace with a second typeface — the system is mono-forward, not mono-something-else.
