---
id: notes-ledger-write-contract
type: standard
title: Lab Notes Ledger Write Contract
subtitle: One source of truth, predictable pointers, and auditability across Web + CLI + Agents
tags:
  - lab-notes
  - ledger
  - api
  - database
  - audit
status: stable
version: 1
created: 2026-01-06
updated: 2026-01-06
---

# Lab Notes Ledger Write Contract

This standard defines how **any writer** (Web Admin UI, CLI, API clients, AI agents, imports) must create and update Lab Notes so the system remains deterministic and non-haunted.

## Core Model (v2)

**`lab_notes`** = identity + metadata + pointers  
**`lab_note_revisions`** = append-only truth for content + canonical frontmatter

### Key invariants

- Content truth lives in **`lab_note_revisions`**.
- `lab_notes.current_revision_id` points at the latest draft content.
- `lab_notes.published_revision_id` points at the published content snapshot.
- Publishing is explicit; drafts do not silently become public.

---

## Identity Rules

### Two identities, one truth

- **Public identity**: `(slug, locale)`
- **DB identity**: `id`

#### Required uniqueness

- `(slug, locale)` must be unique (enforced by DB index).

#### Client state key

- Use `${slug}:${locale}` for editor caches.
- After first save, store `id` and use it for subsequent updates.

---

## Write Contract: What a “Save” Must Do

A writer performing a **save** MUST:

1. **Create exactly one new revision** in `lab_note_revisions`.
2. **Update exactly one pointer** in `lab_notes`:
   - `current_revision_id = <new revision id>`
3. **Never** modify `published_revision_id` as part of a normal save.
4. **Always** bump `lab_notes.updated_at`.

### Required revision fields (minimum meaningful set)

`lab_note_revisions` must include:

- `id` (uuid)
- `note_id` (lab_notes.id)
- `revision_num` = `MAX(revision_num)+1` per note
- `supersedes_revision_id` = previous `lab_notes.current_revision_id` (or `NULL` for first)
- `frontmatter_json` (stringified JSON; canonicalized frontmatter)
- `content_markdown` (markdown body)
- `content_hash` (sha256 of canonical representation)
- `schema_version` (e.g. `"0.1"`)
- `source` (see **Source Semantics**)
- `intent`, `intent_version` (see **Intent Semantics**)
- `auth_type`, `scopes_json` (see **Auth Semantics**)
- `created_at` (db default ok)

### Canonical hash input

To ensure stable dedupe and diffs, `content_hash` should be computed from:

1. `frontmatter_json` (stringified JSON)
2. delimiter line `\n---\n`
3. `content_markdown`

---

## Publish Contract

Publishing is the only operation that changes published pointers.

A writer performing a **publish** MUST:

1. Set:
   - `status = 'published'`
   - `published_revision_id = current_revision_id`
2. Ensure `published_at` is set (auto-fill if missing).
3. Bump `updated_at`.

---

## Unpublish Contract

A writer performing an **unpublish** MUST:

- Set `status='draft'`
- Clear `published_revision_id`
- Clear `published_at`
- Bump `updated_at`

---

## Source Semantics

`source` describes the channel of origin:

- `cli`
- `web`
- `api`
- `import`

Human vs AI is represented via audit events, not `source`.

---

## Auth Semantics

`auth_type`:

- `human_session`
- `lab_token`

Scopes should always be recorded.

---

## Intent Semantics

Use stable, action-shaped intents:

- `admin_save`, `admin_publish`
- `cli_save_draft`, `cli_publish`
- `api_save`
- `seed_marker_note`

---

## Audit Semantics

Every revision SHOULD emit a `lab_events` row with:

- `actor_type`: `human | ai | system`
- `actor_id`
- `revision_id`, `note_id`
- `intent`, `auth_type`, `scopes_json`

---

## Regression Tests

1. Draft nulls publish metadata
2. Publish pins content
3. Slug+locale uniqueness

---

## Definition of Done

When this contract is followed:

- Drafts are safe
- Published content is stable
- Audits are complete
- The database becomes boring (highest compliment)
