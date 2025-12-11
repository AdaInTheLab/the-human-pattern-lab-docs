---
id: carmel-style-guide
title: Carmel’s Style Guide
sidebar_label: Carmel’s Style Guide
description: Formatting, spacing, and code style rules as decreed by Carmel, Chief Judgment Officer.
tags:
  - Standards
  - Style
  - Carmel
  - Engineering
---

# 😼 Carmel’s Style Guide

### _“If I have to squint at it, it’s wrong.”_

Carmel is the Lab’s **Chief Judgment Officer (CJO)**.
She does not write most of the code, but she absolutely judges all of it.

This page describes how we format code, docs, and layouts so that Carmel’s
emerald eyes do not narrow in disappointment.

---

## 🎯 Goals

Carmel’s rules aim for:

- **Clarity over cleverness**
- **Consistency over chaos**
- **Legibility over lore**

If a style choice makes the repo easier to read, debug, and extend,  
Carmel is pleased. 😼✔️

---

## 🧩 Prettier: The Official CJO Enforcer

We use **Prettier** as Carmel’s formatting assistant.

```jsonc
{
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "printWidth": 100,
  "endOfLine": "lf",
}
```

> **Carmel Rule:** Never fight Prettier.  
> If Prettier changes something, it’s because you were wrong. 😼

---

## 🪪 What Goes in `.prettierignore`

- build/
- dist/
- .docusaurus/
- node_modules/
- .env\*
- OS junk like .DS_Store

---

## 🧪 Linting & Pre-Commit Checks

```bash
echo "😼 Carmel is checking your spacing..."
npx lint-staged || {
  echo "😼❌ Carmel rejects this commit. Fix your formatting."
  exit 1
}
echo "😼✔️ Carmel approves this commit."
```

---

## 🧱 Layout & Component Style

### Do

- Keep components small & focused
- Name components by behavior
- Clear props
- Short comments

### Don’t

- Combine unrelated concerns
- Overly clever code
- “Magic behavior” with no explanation

---

## ✍️ Docs & Copy Style

- Short paragraphs
- Hierarchical headings
- Inline code for commands
- Code blocks for examples

---

## 😼 Carmel’s Quick Checklist™

- Prettier has run
- No generated files accidentally staged
- Components are clean
- Docs skimmable
- Nothing in the diff makes you wince

---

## 😼 Final Word from the CJO

> “Formatting is not optional.
> Clarity is not optional.
> If you want chaos, put it in the lore —
> not in the layout.”
>
> — **Carmel, Chief Judgment Officer**
