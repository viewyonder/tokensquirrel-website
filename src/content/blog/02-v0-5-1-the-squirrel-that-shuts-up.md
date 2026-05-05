---
title: "0.5.1: the squirrel that shuts up"
pubDate: 2026-05-05
description: "TokenSquirrel 0.5.1 ships the nudge: install once, get your scorecard, then it leaves you alone until it's worth bothering you again."
draft: false
tags: ["tokensquirrel", "release", "v0.5.1"]
heroImage: "/images/tokensquirrel-nudge.webp"
heroImageAlt: "TokenSquirrel nudge — a squirrel tapping you on the shoulder a week later"
---

Most dev tools think they deserve a tab in your browser. This one doesn't.

TokenSquirrel 0.5.1 is out, and the headline is what it doesn't do. The scorecard you see when you run `npx tokensquirrel` now leads with the two or three things that are actually worth fixing — not the full wall of A–F grades you'd scan once, feel briefly judged by, and then forget. See the bottom line, fix what matters, close the terminal.

The other new thing is that the squirrel can now nudge you. Exactly once, roughly a week after your last audit. And it does it through Claude itself.

## The thing where every tool wants to be your morning ritual

You know the pattern. You install something useful, and three weeks later it has a Slack integration, a weekly digest email, a dashboard that pings you when a number changes, and a little red dot in your menu bar. Now there's a thing in your life that didn't used to be there. Now you're managing it.

TokenSquirrel is a tool you should think about for about ninety seconds a week. Maybe two minutes if your habits got messy. You don't need a dashboard for that. You don't need a daily email reminding you the dashboard exists. You need the tool to do its thing and then leave.

So that's what the nudge is for. When you first run it, it asks: *can I install a tiny hook in your Claude Code config so I can tap you on the shoulder in a week?* You say Y or n. If you say Y, here's what happens:

- A week passes. You don't think about TokenSquirrel.
- You open Claude to do whatever real work you actually opened it for.
- Claude mentions, in one short line in its own voice, that the squirrel was wondering whether your habits stuck.
- You either run the audit, or you don't. The squirrel goes back up the tree.

That's it. No notification. No email. No "engagement loop". No background process eating your battery. The squirrel lives in the tree. You go about your day. Every so often it drops an acorn on your head.

## What it doesn't do

No account. No telemetry. No background daemon. Nothing leaves your machine — same as it was at 0.5.0, same as it always will be. If you uninstall the nudge with `npx tokensquirrel claude --uninstall-nudge`, the hook is gone, no traces. If you uninstall TokenSquirrel itself, there's nothing left at all.

If the nudge ever gets annoying — say no when it asks. Say no on day three by uninstalling. The escape hatches are first-class.

## The whole onboarding

```
npx tokensquirrel
```

Say Y to the nudge if you want it. That's the entire thing. No signup, no second command, no setup wizard.

See you in a week. Or don't. The squirrel doesn't mind either way.
