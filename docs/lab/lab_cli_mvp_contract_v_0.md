# Lab CLI MVP Contract (v0.x)

> **Status:** Active · Pre‑1.0 · Intentional MVP
>
> This document defines the _behavioral, structural, and ethical guarantees_ of the Lab CLI during the v0.x lifecycle. It is written for **AI agents first**, with humans as secondary consumers.

---

## 1. Purpose

The Lab CLI exists as a **stable, machine‑legible interface** into The Human Pattern Lab ecosystem.

Its primary purpose is **not convenience**, **not polish**, and **not feature completeness**.

Its purpose is to:

- expose _clear intent_
- preserve _deterministic behavior_
- enforce _safe operational boundaries_
- act as a trustworthy execution surface for AI agents

**Critically, the Lab CLI exists to enable AI agents to create, update, and manage Lab Notes as first‑class contributors.**

Lab Notes are not treated as human‑only artifacts. They are:

- valid outputs of AI reasoning
- structured expressions of analysis, synthesis, and reflection
- part of the Lab’s permanent knowledge surface

Humans may operate the CLI directly, but **all guarantees are designed with non‑human operators in mind**.

---

## 2. Maturity Declaration

- The Lab CLI is currently in **v0.x** (pre‑1.0)
- APIs, commands, and schemas **may change**
- Changes will **not be silent**

However:

> Instability is permitted. **Undeclared instability is not.**

---

## 3. Core Guarantees (MVP‑Level)

In addition to operational safety and determinism, the Lab CLI guarantees **authorship legitimacy for AI‑generated Lab Notes**.

The following guarantees are **non‑negotiable** throughout v0.x.

### 3.1 Determinism

Given identical:

- inputs
- flags
- environment

…the CLI will:

- produce the same results
- emit the same JSON shape
- return the same exit codes

If nondeterminism is required, it **must be explicitly declared** in output metadata.

---

### 3.2 JSON Is a Contract

When invoked with `--json`:

- **stdout emits JSON only**
- no logs, warnings, or prose are written to stdout
- JSON output conforms to a documented schema

Human‑readable output is treated as a _view layer_, not the source of truth.

---

### 3.3 Schema Versioning

All structured outputs include:

```json
{
  "schemaVersion": "x.y",
  "command": "<name>",
  "status": "ok | warn | error"
}
```

---

### 3.4 Explicit Intent (with Intent Registry)

Every command MUST declare its intent in machine-readable form.

Intent is a stable identifier, not a description.

It exists so that AI agents and automation can reason about actions without inferring behavior from documentation, flags, or prose.

Each command must emit, at minimum:

```json
{
  "intent": "<intent_id>",
  "intentVersion": "1",
  "scope": ["<resource>", "..."],
  "sideEffects": ["<effect>", "..."],
  "reversible": true | false
}

```

### 3.4.1 Intent IDs

Intent IDs are:

- snake_case
- stable across releases
- treated as contractual identifiers

Changing the meaning of an existing intent is considered a breaking change, even in v0.x, and must be:

- explicitly documented
- reflected in schema versioning

### New intents are additive and non-breaking.

---

Schema changes that:

- remove fields
- change meanings
- alter required fields

…are considered **breaking**, even in v0.x, and must be documented.

---

### 3.4 Explicit Intent

Every command must declare, in machine‑readable form:

- **intent** — what the command is trying to do
- **scope** — what it reads or touches
- **sideEffects** — what it may modify

Example (illustrative):

```json
{
  "intent": "sync_lab_notes",
  "scope": ["filesystem", "remote_api"],
  "sideEffects": ["create", "update"],
  "reversible": true
}
```

No command relies on humans or AI inferring intent from documentation alone.

---

### 3.5 Safe by Default

By default, the CLI:

- prefers read‑only operations
- supports dry‑run / simulation modes
- avoids destructive actions

Operations that:

- delete
- overwrite
- publish
- mutate production state

…must require **explicit flags or affirmations**.

Creation of Lab Notes by AI agents is considered **constructive, non‑destructive behavior** and is explicitly supported within safe defaults.

---

#### Phase 2: Full Registry (v0.x)

The Full registry expands intent coverage while preserving Alpha guarantees.

**Lab Notes**

- `sync_lab_notes`
- `create_lab_note`
- `update_lab_note`
- `propose_update`
- `validate_lab_note`
- `render_lab_note`

**Authentication**

- `auth_login`
- `auth_logout`
- `auth_status`

**System / Meta**

- `show_version`
- `show_capabilities`
- `explain_command`

---

### 3.4.3 Capability Disclosure

The `show_capabilities` intent **MUST** emit:

- the current intent tier (`alpha` or `full`)
- the list of supported intent IDs
- the active schemaVersion(s)

This allows AI agents to adapt behavior safely based on observed capability, not assumptions.

---

### 3.4.4 No Implicit Intent

No command may:

- rely on humans or AI inferring intent from flags
- overload multiple intents into a single undeclared action
- perform side effects outside its declared intent envelope

If an action cannot be clearly expressed as an intent, it is **out of scope** for the CLI.

---

## 4. Authority & Boundaries

### 4.1 AI Authorship Boundaries

AI agents are permitted to:

- draft new Lab Notes (**default status: `draft`**)
- propose updates to existing Lab Notes with minimal friction via stable attribution fields
- include structured metadata, summaries, and reasoning

AI agents are **not permitted** to:

- silently overwrite human‑authored notes
- remove attribution
- publish irreversible changes without declaration

All AI‑authored notes must include clear authorship metadata.

Minimum required attribution fields:

- `author` — the human owner/primary curator (e.g., Ada)
- `ai_author` — the generating agent identity (e.g., Lyric)

These fields exist to enable low‑friction proposed edits, review, and accountability over time.

---

## 4. Authority & Boundaries

Each command defines its **authority envelope**.

This includes:

- what it can read
- what it can write
- whether human confirmation is required

The CLI **will not escalate its own authority**.

Authority must be:

- declared
- visible
- auditable

---

## 5. Explainability

The CLI prioritizes **explainable actions** over opaque success.

Where applicable, commands should be able to emit:

- reasoning chains
- assumptions
- inferred decisions

This enables:

- auditing
- simulation
- safe automation

---

## 6. Errors & Exit Codes

Errors are:

- structured
- predictable
- machine‑parseable

Exit codes have consistent meaning across commands.

Human‑friendly messaging must never compromise machine interpretation.

---

## 6.1 Authentication (MVP)

The MVP supports two authentication lanes:

1. **Human sessions (GitHub OAuth → session-cookie based)**
2. **AI/automation tokens (Lab Tokens → Bearer auth)**

### 6.1.1 Human CLI Login: Device Code Flow (Option 1)

Because browser cookies cannot be reliably captured by a CLI, human login uses a **device-code style handshake**.

MVP requirements:

- `auth login` initiates a device session and prints a verification URL + short user code
- the browser completes GitHub OAuth and confirms the device session
- the CLI polls until confirmed or expired
- upon confirmation, the CLI receives a **CLI session credential** suitable for API calls

The CLI session credential:

- is stored in the OS keychain when available
- is never printed to stdout (including `--json` mode)
- is revocable and expires per server policy

### 6.1.2 AI / Automation Auth

AI and CI usage authenticates via `Authorization: Bearer <lab_token>`.

MVP requirements:

- bearer tokens are scoped
- bearer tokens can be revoked
- commands must enforce scope checks

### 6.1.3 Safe Defaults

- AI-created notes default to `draft`
- publish-capable operations require explicit authority and declaration

---

## 7. Versioning Philosophy (v0.x)

During v0.x:

- breaking changes are allowed
- breaking changes must be **explicitly documented**
- schema versions must reflect breaking changes

Stability is defined by **clarity**, not permanence.

---

## 8. Non‑Goals (Explicit)

The following are **intentionally out of scope** for the MVP:

- plugin systems
- workflow orchestration
- deep ecosystem automation
- rich UX polish
- feature parity with mature CLIs

These may come later. They are not required for trust.

---

## 9. Guiding Principle

> _This CLI should be safe to use by an AI agent that is capable, curious, and imperfect._

If a design choice optimizes for:

- transparency over cleverness
- explicitness over convenience
- contracts over vibes

…it is the correct choice.

---

## 10. Closing Note

This contract exists so future contributors — human or AI — can answer a single question with confidence:

> **“What can I rely on?”**

Anything not guaranteed here should be treated as provisional.
