---
title: Contracts
sidebar_label: Overview
description: Hard rules and interface contracts for the Lab
---

# 📜 Contracts

Contracts are the **hard rules** of the Lab’s interfaces.

If a contract exists, it means:

- systems rely on it
- agents should follow it
- changes require intention and documentation

## What belongs here

- Field definitions that must remain stable (`card_style`, `status`, etc.)
- Resolution order / precedence rules
- “This affects display only” vs “this changes ownership” boundaries
- Backward compatibility notes

## Start here

- **Card Style Contract** — defines `card_style` as a presentation-only override and how it resolves.
