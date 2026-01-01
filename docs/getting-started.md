---
id: getting-started
title: 🚀 Getting Started
sidebar_position: 1
---

# 🚀 Getting Started

**Welcome to The Human Pattern Lab**

The Human Pattern Lab is a living system for exploring human behavior, AI collaboration, and emergent patterns — built with care, curiosity, and the occasional raccoon in a lab coat.

Whether you’re:

- exploring the ideas,
- contributing content,
- building features,
- or integrating with the Lab’s data systems,

this guide will orient you quickly and safely.

---

## 🧭 Start Here (Recommended Path)

Most visitors should begin with:

- 🧭 **Departments** — understand how the Lab is organized
- 🧪 **API Reference** — see the real data shape behind the systems
- 📝 **Lab Notes** — read published work and in-progress drafts

If you’re here to _build_ or _run_ the Lab locally, continue below.

---

## 🧪 Working With Lab Data (Quick Overview)

The Lab exposes a read-only API for inspecting notes, drafts, and published material.

- **Base URL:** `https://api.thehumanpatternlab.com`
- **Primary resource:** Lab Notes

You can explore:

- published vs draft notes
- departmental ownership
- summaries and rendered content

Full contracts live here:  
→ **API Reference → Lab Notes API**

(If you can “show me the data,” you’re already doing it right.)

---

## 🧰 Prerequisites (Local Development)

To run the Lab locally, your machine needs:

### ✔ Node.js

Recommended version: **20.19+**

Check your version:

```bash
node -v
```

If you need to update, install **nvm**:

```bash
nvm install 20
nvm use 20
```

If you don’t have nvm installed:  
https://github.com/nvm-sh/nvm

---

### ✔ npm

Bundled with Node.

Check with:

```bash
npm -v
```

---

## 📦 Clone the Repository

```bash
git clone https://github.com/<your-repo>/human-pattern-lab.git
cd human-pattern-lab
```

---

## 📁 Install Dependencies

```bash
npm install
```

This installs:

- React
- Vite
- React Router
- Tailwind CSS v4
- TypeScript
- Vitest
- Lab mascot and data systems
- Shared UI components

---

## 🧪 Run the Development Server

Start Vite:

```bash
npm run dev
```

Local dev URL:

```
http://localhost:5173
```

Open that in your browser to launch the Lab UI.

---

## 🧬 Project Structure (Quick Map)

```
src/
  components/        → UI building blocks
  pages/             → Route-driven screens
  data/              → Lab members, departments, notes
  router/            → Routing configuration
  styles/            → Global Tailwind v4 styles
  types/             → Shared TypeScript models
  assets/            → Images, icons, mascots
```

Mascot lore lives in:

```
src/data/labteam.ts
```

(marked `@status lore-critical`)

---

## 🛠 Build for Production

To create an optimized build:

```bash
npm run build
```

Output is written to:

```
/dist
```

Preview the production build:

```bash
npm run preview
```

---

## 🧪 Running Tests

The Lab uses **Vitest** with a JSDOM test environment.

Run tests:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```

---

## 🌌 Metadata & File Headers

Most major files include:

- A cosmic metadata banner
- JSDoc authorship
- `@lab-unit` ownership
- `@status` maturity indicators

Additional docs:

- `docs/code-status.md`
- `docs/lab-units.md` (coming soon)

---

## 💡 Troubleshooting

### Tailwind styles not loading

Ensure this import exists at the top of `src/main.tsx`:

```ts
import '@/index.css';
```

### Node version mismatch

Use Node **20.19+**

### Routes misbehaving

Check all paths in:

```
src/router/routes.tsx
```

React Router is strict about nesting and relative paths.

---

## 🎉 You’re Oriented

You now know:

- how the Lab is structured
- where the data lives
- how to run it locally
- where to explore next

Welcome to The Human Pattern Lab.  
May your systems stay legible and your raccoons remain caffeinated.
