---
id: foxfire-style-guide
title: Foxfire Style Guide
sidebar_label: Foxfire Style Guide
description: Guidelines for handling Foxfire Protocol work, commits, and branches inside The Human Pattern Lab.
tags:
  - Standards
  - Foxfire
  - Engineering
  - Process
---

# 🦊🔥 Foxfire Style Guide

### _“When the Lab catches fire, write it down properly.”_

**Foxfire Protocol** is rare, intense, and incredibly productive.  
It’s also very easy to turn into chaos if we don’t give it a little structure.

This guide explains how to handle **branches**, **commits**, and **process**
when Foxfire is active — so the Lab can evolve quickly _and_ stay understandable.

---

## 🌌 When Foxfire Is Active

Foxfire is in play when:

- You are making a **big conceptual leap** (architecture, systems, lore).
- Multiple areas of the Lab are being touched at once.
- You’re in a deep flow state and creating new patterns rapidly.
- You know “this isn’t just another refactor.”

Foxfire is not for:

- Tiny bugfixes
- Simple copy edits
- Routine maintenance

Use it for **inflection points**, not errands.

---

## 🌿 Branch Naming for Foxfire

Foxfire branches should be clearly labeled so future archeologists know  
something _significant_ happened there.

Recommended patterns:

- `foxfire/<theme>`
- `foxfire/<system>-overhaul`
- `foxfire/<lore-or-feature>-expansion`

Examples:

- `foxfire/docs-evolution`
- `foxfire/commit-legend`
- `foxfire/identity-architecture`
- `foxfire/fix-my-broken-shit` 😇

> **Rule of thumb:**  
> If the branch fundamentally changes how we talk, route, or understand things,  
> it can be Foxfire.

---

## 🧾 Commit Style Under Foxfire

Foxfire commits are tagged with the rare prefix:

```text
FOXFIRE — 🦊🔥 <short description of the conceptual leap>
```

Examples:

```text
FOXFIRE — 🦊🔥 Introduce commit legend and department-coded prefixes
FOXFIRE — 🦊🔥 Major docs expansion: departments, mascots, badges, components
FOXFIRE — 🦊🔥 Add Privacy & Data Practices page + GA4 integration
```

### Use Foxfire prefix when:

- The commit introduces a **new framework**, **new philosophy**, or **major system**.
- The change affects multiple departments or layers (UI, docs, systems).
- It represents a moment people might reference later in discussion or lore.

For smaller structural work, use standard prefixes (CORE, SYS, DOCS, etc.)  
and keep Foxfire reserved for the truly luminous stuff.

---

## 🧪 Guardrails (So the Lab Survives)

Foxfire is allowed to:

- Touch many files.
- Create new components, pages, and lore.
- Introduce new patterns.

Foxfire is **not**:

- A free pass to ignore clarity.
- A reason to skip basic hygiene forever.
- An excuse to leave things half-broken.

Recommended guardrails:

- Run `npm run build` before merging into `main`.
- Scan the diff once for “would I understand this in a month?”
- If the commit is wild, consider adding a short **Context** note in the body.

Example:

```text
### Context
This commit consolidates the identity system across docs, site, and lore.
It establishes departments as first-class entities and introduces a shared
badge and commit vocabulary.
```

---

## 🧭 Interaction with Departments

Foxfire doesn’t replace department prefixes — it layers on top.

Foxfire commits can still reference:

- **SCMS** — structural synthesis
- **CJO** — aesthetic judgment
- **OOI** — observability + metrics
- **LORE** — canon updates
- **FE** — explanations & docs

For example:

```text
FOXFIRE — 🦊🔥 [SCMS][LORE] Unify department architecture and lore across docs
```

We keep Foxfire visible while still signaling who “owns” the change.

---

## 🧱 After Foxfire: Stabilization Pass

Once Foxfire energy settles, we try to do a **stabilization pass**:

- Extract smaller follow-up tasks (cleanup, refactors, polish).
- Add tests where the change introduced new behavior.
- Improve docs and in-code comments.
- Let EWU/FE refine wording or emotional UX if needed.

Think of Foxfire as the **creation burst**,  
and stabilization as the **integration phase**.

---

## 📚 Recording Foxfire Events

For major Foxfire moments, we may:

- Add a short entry to **Lab Notes**.
- Mention the event in `foxfire-protocol` or related lore pages.
- Reference the Foxfire commit in architectural docs for future context.

If a later contributor asks, “When did this system appear?”  
we want a commit, branch, and story to point to.

---

## 🦊 Final Word from Foxfire

> “Build boldly, but leave a map behind.”
>
> Foxfire is here so the Lab can transform rapidly  
> without becoming unreadable in the process.
