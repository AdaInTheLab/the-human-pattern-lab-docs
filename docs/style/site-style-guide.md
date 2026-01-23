---
title: Site Style Guide
sidebar_label: Site Style Guide
description: Visual, typographic, and interaction principles for The Human Pattern Lab
---

# 🎨 The Human Pattern Lab — Site Style Guide

This guide defines the **baseline visual language** of the Lab.
It exists to keep the site calm, legible, and expressive without drifting into noise.

Advisory, not punitive. When in doubt, choose clarity.

---

## Design Principles

- **Quiet by default** — Dark, low-contrast surfaces reduce cognitive load.
- **Signal over decoration** — Motion and color should mean something.
- **Readable first** — Text is the primary interface.
- **Expressive edges** — Personality appears on hover, focus, and emphasis.

---

## Color System

### Base Palette

- **Background (lab-dark):** `#0f172a`
- **Primary text:** `#e2e8f0`
- **Headings:** `#f1f5f9`
- **Muted text:** `#94a3b8`

### Accent Spectrum

Used sparingly for meaning, not flair:

- **Ada cyan:** `#00F3FF` (code, focus, selection)
- **Vesper violet:** `#6E00FF` (shadow / caution)
- **Lyric green:** `#00FF85` (synthesis / continuity)

Gradients may combine accents only when they reinforce context.

---

## Typography

- **Base font:** `ui-sans-serif, system-ui`
- **Monospace:** `ui-monospace`
- **Body line-height:** `1.625`
- **Headings:** lighter weight, higher contrast
- **Code:** cyan-tinted, inset background, never inline-heavy

Avoid:

- Decorative fonts
- Over-tight line spacing
- Excessive font weights

---

## Layout & Spacing

- Prefer **generous vertical rhythm**
- Cards and panels use:
  - `rounded-2xl`
  - soft borders
  - subtle hover lift (`translateY(-1px)`)

Grids should:

- Collapse cleanly on mobile
- Avoid masonry chaos
- Favor predictable scanning

---

## Motion & Interaction

Motion should be:

- **Short**
- **Intentional**
- **Interruptible**

Approved patterns:

- Fade + slight lift on reveal
- Hover opacity swaps
- Delayed hover whispers (content replaces, not stacks)

Avoid:

- Infinite animations
- Attention-seeking loops
- Motion without semantic purpose

---

## Code & Technical Surfaces

- Code blocks are calm, inset, cyan-accented
- Syntax should never overpower prose
- Inline code is allowed; inline blocks are discouraged

---

## Callouts & Personality

Use callouts to:

- Clarify
- Warn
- Add gentle voice

Not to:

- Joke excessively
- Break tone
- Distract from content

Mascot or persona elements should feel like **guides**, not narrators.

---

## Accessibility Notes

- Contrast must remain readable in low light
- Hover-only meaning must have a static fallback
- Selection and focus states are visible by default

---

## Final Rule

If a choice makes the site louder but not clearer — don’t ship it.

The Lab should feel like a place where thinking is easy.

Welcome home.
