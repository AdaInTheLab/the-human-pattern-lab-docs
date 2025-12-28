# Carmel Judgment Protocol™ (CJP)

> Lightweight CI policy with feline authority.  
> If the contract breaks, Carmel breaks the build.

## Purpose

Carmel Judgment Protocol™ (CJP) is the repository’s CI “truth layer”:

- Runs objective checks (tests/build/lint as defined)
- Posts a human‑readable judgment stamp on PRs
- Fails loudly when the offering is unacceptable
- Stays automation‑safe and deterministic

CJP is intentionally minimal: it should be easy to trust, easy to maintain, and hard to misinterpret.

---

## Core Principles

### 1) Determinism over vibes

Carmel’s judgment must be derived from machine outcomes (e.g., test conclusion), not heuristics.

### 2) PR comments are optional; correctness is not

If commenting is not permitted (forks, permissions), CJP still must enforce pass/fail behavior.

### 3) Least privilege

CJP should request only the GitHub permissions it needs:

- `contents: read`
- `pull-requests: write` (only if posting PR comments)
- `issues: write` (only if posting issue/PR comments)

### 4) Output is a contract

If the CI contract changes, it should change loudly:

- update this spec
- update tests/workflows
- bump version where appropriate

---

## What CJP Evaluates

CJP’s decision should be based on one or more of these canonical checks:

- **Tests**: `npm run test:run`
- **Build**: `npm run build` (optional; recommended for publish gates)
- **Lint / typecheck**: repo-defined (optional)

**Canonical rule:** CJP uses the step **conclusion** (not “outcome”) as the source of truth.

Example:

- `steps.tests.conclusion === "success"` → tests passed
- `steps.tests.conclusion !== "success"` → tests failed/cancelled → rejection

---

## Judgment Stamps

### Approval Stamp™ 😼✨

Used when required checks pass.

> _Adequate work, human._

### Chaos Stamp™ 😼🔥

Used when required checks fail.

> _I sense weakness in these tests._

_(Optional future stamps may be added, but must remain deterministic.)_

---

## Workflow Behavior

### Triggers

Recommended triggers:

- `pull_request` — posts stamp comment (when permitted)
- `push` — enforces checks on branch pushes (commenting optional)

### Fork behavior

For security:

- CJP MUST NOT attempt to comment on forked PRs unless explicitly allowed.
- CJP SHOULD still run tests and report status for fork PRs.

Recommended guard:

- Only comment when `github.event.pull_request.head.repo.fork == false`

### Failure semantics

- If required checks fail, CJP MUST fail the job (`core.setFailed`).
- If checks pass, CJP MUST succeed.
- Comment failures should NOT cause false rejections. (Commenting is a side quest.)

---

## Reference Implementation Notes

### Getting the test verdict

Because tests may be set to `continue-on-error: true`, CJP must use:

- `${{ steps.tests.conclusion }}`

Example mapping into the stamp step:

- `TESTS_OUTCOME: ${{ steps.tests.conclusion }}`

In script:

- `const passed = process.env.TESTS_OUTCOME === "success";`

### Why conclusion (not outcome)?

- `conclusion` reflects the actual result: success/failure/cancelled.
- `outcome` can be misleading with `continue-on-error` or conditional steps.

---

## Permissions Model

Minimum for checks only:

```yaml
permissions:
  contents: read
```

To post PR comments using `github-script`:

```yaml
permissions:
  contents: read
  pull-requests: write
  issues: write
```

If you see `Resource not accessible by integration`, it’s almost always permissions or fork context.

---

## Change Control

Changes to CJP must be treated as policy changes.

When modifying:

- stamps/wording (minor)
- pass/fail criteria (major)
- triggers/permissions (security-sensitive)
- comment behavior (minor/medium)

…update this spec and verify workflow behavior with a PR.

---

## Future Extensions (Optional)

Allowed only if they remain deterministic:

- Draft PR leniency (stamp but don’t fail for drafts)
- Docs-only exemptions (skip heavy checks when only docs change)
- Multi-stamp mode (separate stamps for tests/build/lint)
- Release gate (require Approval Stamp before npm publish tags)

---

## Summary

**If the offering passes the agreed checks, Carmel approves.  
If not, Carmel rejects — loudly, deterministically, and with style.**
