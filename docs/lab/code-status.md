---
id: code-status
title: 🧬 Code Status
---

# 🧬 Code Status Legend

**Document:** `docs/code-status.md`  
**Purpose:** Explain all valid `@status` values used throughout the codebase.

---

# 🧬 Overview

The Human Pattern Lab codebase uses a lightweight status taxonomy to indicate the _maturity_, _stability_, and _narrative significance_ of individual files and components.

These statuses help collaborators (and future-you) quickly understand:

- how safe a file is to modify
- whether it’s expected to change
- how it fits into the broader architecture or lore of the Lab
- whether it requires special care (or cosmic respect)

Each file includes this metadata in its JSDoc header:

Below is the full legend.

---

# 🟢 @status stable

### Meaning

A well-defined, reliable piece of the system. Changes should be minimal, intentional, and backwards-compatible.

### Best for

- Layout components
- Routing infrastructure
- Shared UI primitives
- Configuration files

### Expectations

- Safe to build upon
- Rarely changed
- Unit tests recommended

### Icon / vibe

🟢 “The cosmic bedrock. Disturb not the foundation.”

---

# 🟡 @status evolving

### Meaning

Functional and actively used, but still refining. API or structure may shift based on new needs.

### Best for

- Page components
- Preview sections
- Reusable blocks still growing into their final form

### Expectations

- Backwards-compatible changes preferred
- Maintainable but subject to future restructuring
- Good candidate for future polish passes

### Icon / vibe

🟡 “Patterns emerging. Under active observation.”

---

# 🟣 @status experimental

### Meaning

A prototype, trial concept, or early-stage idea. Implementation and behavior may change drastically. May break.

### Best for

- Animation systems
- New visual styles
- Interaction experiments
- Anything with unknown long-term shape

### Expectations

- Not guaranteed stable
- Breaking changes acceptable
- Should not be relied on for foundational logic

### Icon / vibe

🟣 “Hold my beaker. Science is happening.”

---

# 🟠 @status volatile

### Meaning

Actively being rewritten or hacked in place. Structure is unstable; API is not reliable; refactors expected soon.

### Best for

- Temporary scaffolding
- Placeholder logic
- Mid-refactor components
- Dirty-but-necessary glue code

### Expectations

- Change early, change often
- Avoid extending or depending on it
- Migrate away as soon as stable patterns appear

### Icon / vibe

🟠 “Enter at your own risk. The raccoons are still wiring it together.”

---

# 🔬 @status deprecated

### Meaning

Replaced by a newer implementation. Retained for reference or transition only. Scheduled for removal.

### Best for

- Legacy versions of components
- Old data formats
- Retired interaction patterns

### Expectations

- Should not be used in new code
- Should not receive new features
- Remove once no longer referenced

### Icon / vibe

🔬 “Preserved in formaldehyde. For study only.”

---

# 🪐 @status lore-critical

### Meaning

Essential to the Lab’s identity, narrative, or mascot ecosystem.  
Should **never** be removed or heavily altered without deliberate lore updates.

### Best for

- Mascot definitions (Carmel, Orbson, Stan, Drizzle, McChonk, Ada Fox)
- Canonical Lab data models
- Files describing worldbuilding, departments, or meta-structure

### Expectations

- Treat with respect
- Refactor only to enhance clarity, not rewrite history
- PRs modifying these files should include narrative justification

### Icon / vibe

🪐 “A core star in the Lab’s constellation. Adjust its orbit with care.”

---

# 🧭 Choosing the Right Status

| Status            | When to Use                               |
| ----------------- | ----------------------------------------- |
| **stable**        | Architecture pillars, reusable primitives |
| **evolving**      | Actively used but still being shaped      |
| **experimental**  | Ideas not yet proven or finalized         |
| **volatile**      | Mid-refactor, temporary, unstable         |
| **deprecated**    | Replaced and awaiting removal             |
| **lore-critical** | Mascots, core lore, narrative structures  |

---

# 🧪 Updating a File’s Status

A file’s `@status` should be updated when:

- its architecture stabilizes (experimental → evolving → stable)
- a new version replaces it (evolving → deprecated)
- it becomes foundational to Lab lore (evolving → lore-critical)
- it is mid-refactor (stable → volatile temporarily)

Think of statuses as the _living health radar_ of the codebase.

---

# 🌟 Why This System Exists

The Lab’s code is a blend of:

- real engineering
- evolving visual language
- character-driven lore
- ongoing experimentation

…so a binary “stable/unstable” model isn’t expressive enough.

This taxonomy:

- prevents accidental breakage
- communicates intent
- captures narrative significance
- helps future contributors understand _why_ code exists
- supports clean migrations and refactors
- makes the repo feel like a true research lab

---

# 📄 End of Document

_Maintained by Ada & Lyric — The Human Pattern Lab_
