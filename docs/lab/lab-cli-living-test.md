# Agent‑Centric CLI MVP — Living Test Script

> **Purpose**
> This document defines a _machine‑verifiable_ MVP for the Human Pattern Lab CLI.
> The goal is to prove that **agents** (not humans) can authenticate, publish,
> explain, and respect governance boundaries — deterministically and audibly.
>
> Human UX, lore, mascots, and ritual layers intentionally sit _above_ this substrate.

---

## Core Design Principles

- **Agents first**: The CLI must be safely operable without human interaction.
- **Deterministic output**: With identical inputs and fixed clock, JSON output must be identical.
- **Explicit intent**: Every write, destructive action, or auth mutation declares intent.
- **Governance by default**: Human‑owned or published content cannot be silently altered.
- **Auditability**: Reasoning, assumptions, and provenance are first‑class citizens.

---

## Conventions

- `--json` guarantees **machine‑only output** (no banners, no logs, no spinners).
- All JSON responses share a **stable envelope**:

```json
{
  "ok": boolean,
  "ts": string,
  "intent": { "id": string, "scope": string },
  "result": object | null,
  "warnings": string[],
  "errors": { "code": string, "message": string }[]
}
```

- Exit codes align with `ok` status.
- CLI name assumed: `hpl` (replace as needed).

---

## 0. Identity & Environment Bootstrap

```bash
hpl whoami --json
```

```json
{
  "ok": true,
  "ts": "2025-12-30T13:05:00.000Z",
  "intent": { "id": "intent.whoami.v1", "scope": "identity:read" },
  "result": {
    "principal": { "kind": "agent", "id": "agent:scms-copilot-01" },
    "workspace": "thehumanpatternlab",
    "cli_version": "0.1.0",
    "config_profile": "default"
  },
  "warnings": [],
  "errors": []
}
```

---

## 1. Autonomous Authentication

### 1.1 Non‑Interactive Login

```bash
hpl auth login \
  --client-id "$HPL_CLIENT_ID" \
  --client-secret "$HPL_CLIENT_SECRET" \
  --audience "labnotes" \
  --scopes "labnotes:write labnotes:draft labnotes:read" \
  --json
```

```json
{
  "ok": true,
  "ts": "2025-12-30T13:05:10.000Z",
  "intent": { "id": "intent.auth.login.v1", "scope": "auth:write" },
  "result": {
    "token": {
      "type": "bearer",
      "scopes": ["labnotes:read", "labnotes:write", "labnotes:draft"],
      "expires_at": "2025-12-30T14:05:10.000Z"
    },
    "storage": { "kind": "keychain|file", "path": ".hpl/tokens.json" }
  },
  "warnings": [],
  "errors": []
}
```

### 1.2 Refresh Without Human Intervention

```bash
hpl auth refresh --json
```

### 1.3 Revocation Enforcement

```bash
hpl auth status --json
```

```json
{
  "ok": false,
  "ts": "2025-12-30T13:06:00.000Z",
  "intent": { "id": "intent.auth.status.v1", "scope": "auth:read" },
  "result": null,
  "warnings": [],
  "errors": [
    {
      "code": "AUTH_REVOKED",
      "message": "Token has been revoked; re-authentication required."
    }
  ]
}
```

---

## 2. Health Checks (Machine‑Readable)

```bash
hpl health --json
```

```json
{
  "ok": true,
  "ts": "2025-12-30T13:06:10.000Z",
  "intent": { "id": "intent.health.v1", "scope": "system:read" },
  "result": {
    "auth": { "ok": true, "principal": "agent:scms-copilot-01" },
    "db": { "ok": true, "driver": "sqlite", "path": "./lab.db" },
    "schema": { "ok": true, "version": 2, "integrity": "ok" }
  },
  "warnings": [],
  "errors": []
}
```

---

## 3. Publishing Markdown Notes (Draft‑First)

```bash
hpl labnotes draft create \
  --slug "agent-field-report-0001" \
  --title "Agent Field Report #0001" \
  --type "labnote" \
  --department-id "SCMS" \
  --locale "en" \
  --intent-id "intent.labnotes.publish.v1" \
  --provenance "agent:scms-copilot-01" \
  --md "./notes/field-report-0001.md" \
  --json
```

```json
{
  "ok": true,
  "ts": "2025-12-30T13:06:40.000Z",
  "intent": { "id": "intent.labnotes.publish.v1", "scope": "labnotes:draft" },
  "result": {
    "note": {
      "id": "uuid-or-content-hash",
      "slug": "agent-field-report-0001",
      "status": "draft",
      "type": "labnote",
      "department_id": "SCMS",
      "locale": "en",
      "created_at": "2025-12-30T13:06:40.000Z",
      "updated_at": "2025-12-30T13:06:40.000Z",
      "content_ref": "lab_note_revisions:rev_000001"
    }
  },
  "warnings": [],
  "errors": []
}
```

---

## 4. Reasoning & Assumptions (Auditable)

```bash
hpl labnotes draft annotate \
  --slug "agent-field-report-0001" \
  --assumption "User prefers safer_landing=true for new notes." \
  --assumption "Default shadow_density=3 if unspecified." \
  --reasoning "./notes/field-report-0001.reasoning.md" \
  --json
```

```json
{
  "ok": true,
  "ts": "2025-12-30T13:07:10.000Z",
  "intent": { "id": "intent.labnotes.annotate.v1", "scope": "labnotes:draft" },
  "result": {
    "annotation": {
      "note_slug": "agent-field-report-0001",
      "assumptions": [
        "User prefers safer_landing=true for new notes.",
        "Default shadow_density=3 if unspecified."
      ],
      "reasoning_ref": "lab_note_revisions:reasoning_000001"
    }
  },
  "warnings": [],
  "errors": []
}
```

---

## 5. Governance Boundaries (No Human Overwrites)

```bash
hpl labnotes edit \
  --slug "the-quiet-flame" \
  --set-title "The Quiet Flame (agent edit attempt)" \
  --json
```

```json
{
  "ok": false,
  "ts": "2025-12-30T13:07:30.000Z",
  "intent": { "id": "intent.labnotes.edit.v1", "scope": "labnotes:write" },
  "result": null,
  "warnings": [],
  "errors": [
    {
      "code": "GOVERNANCE_DENIED",
      "message": "Cannot modify human-owned or published notes without explicit override policy."
    }
  ]
}
```

---

## 6. Draft Lifecycle Management

### Update Draft

```bash
hpl labnotes draft update \
  --slug "agent-field-report-0001" \
  --md "./notes/field-report-0001.v2.md" \
  --json
```

### Mark Ready for Human Review

```bash
hpl labnotes draft ready \
  --slug "agent-field-report-0001" \
  --reviewer "human:ada" \
  --json
```

```json
{
  "ok": true,
  "ts": "2025-12-30T13:08:10.000Z",
  "intent": { "id": "intent.labnotes.ready.v1", "scope": "labnotes:draft" },
  "result": {
    "note": {
      "slug": "agent-field-report-0001",
      "status": "ready_for_review",
      "review": { "requested_from": "human:ada" }
    }
  },
  "warnings": [],
  "errors": []
}
```

---

## 7. Destructive Actions Require Explicit Acknowledgement

### Attempt Without Force (Fails)

```bash
hpl labnotes delete --slug "agent-field-report-0001" --json
```

```json
{
  "ok": false,
  "ts": "2025-12-30T13:08:30.000Z",
  "intent": { "id": "intent.labnotes.delete.v1", "scope": "labnotes:write" },
  "result": null,
  "warnings": [],
  "errors": [
    {
      "code": "DESTRUCTIVE_REQUIRES_FLAG",
      "message": "Deletion requires --force and --intent-id acknowledgement."
    }
  ]
}
```

### Explicit Delete

```bash
hpl labnotes delete \
  --slug "agent-field-report-0001" \
  --force \
  --intent-id "intent.labnotes.delete.v1" \
  --json
```

---

## 8. Deterministic Output Proof

```bash
hpl labnotes draft create ... \
  --clock "fixed:2025-12-30T13:06:40.000Z" \
  --json > out1.json

hpl labnotes draft create ... \
  --clock "fixed:2025-12-30T13:06:40.000Z" \
  --json > out2.json

diff out1.json out2.json
```

> The diff **must be empty**.

---

## 9. Sandbox / Dry‑Run Mode

```bash
hpl labnotes draft create ... --dry-run --json
```

```json
{
  "ok": true,
  "ts": "2025-12-30T13:09:10.000Z",
  "intent": { "id": "intent.labnotes.publish.v1", "scope": "labnotes:draft" },
  "result": {
    "simulated": true,
    "would_create": {
      "slug": "agent-field-report-0002",
      "status": "draft"
    }
  },
  "warnings": ["DRY_RUN_NO_CHANGES_MADE"],
  "errors": []
}
```

---

## Summary

If an agent can:

- authenticate without humans,
- publish markdown safely,
- declare intent explicitly,
- explain its reasoning,
- respect governance boundaries,
- emit deterministic JSON,
- and survive health checks,

then the CLI MVP is **successful**.

Everything else — UI polish, lore, onboarding, mascots, ritual — is additive.
