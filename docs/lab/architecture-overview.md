---
id: architecture-overview
title: 🧠 Architecture Overview
sidebar_position: 3
---
# 🧠 Architecture Overview

This document is the high-level map of how **The Human Pattern Lab** fits together — structurally, not emotionally. (That would be a different, much longer doc.)

## Core Pieces

- **Main Site**  
  The public-facing React/Vite application that lives at `https://thehumanpatternlab.com`.  
  It handles:
    - Landing pages
    - Mascot & Lab Team presentation
    - Links into the docs and external content

- **Docs Site**  
  A Docusaurus instance living under `https://thehumanpatternlab.com/docs/`.  
  It contains:
    - Reference documentation
    - Lore & internal systems
    - Blog-style updates and essays

- **Hosting**  
  Both are currently deployed as static builds to **DreamHost**.

## Data Flow (Conceptual)

1. **Content & Lore** → written in Markdown/MDX (docs, blog, lore pages).
2. **Components & Layouts** → React components rendering that content with Lab theming.
3. **Build Step** → Vite or Docusaurus compiles everything into static assets.
4. **Deployment** → Built assets are uploaded to DreamHost.
5. **Humans & Gremlins** → hit the site, click around, and generate new questions.

## Future Architecture Goals

- Automated deploys via GitHub Actions (`git push` → site updates).
- Shared design tokens between main site and docs.
- Search that spans both:
    - documentation (systems, design, processes)
    - lore (mascots, Lab history, concepts)
- Clear boundaries between:
    - **Content** (Markdown / copy)
    - **Presentation** (components / CSS)
    - **Logic** (utilities, data fetching, integrations)

As the Lab grows, this page becomes the place where we document new subsystems, services, and integrations.
cture doc goes here)