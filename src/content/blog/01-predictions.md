---
title: "I'm running a 5-day experiment on my own AI coding habits. Here's the design."
pubDate: 2026-05-04
description: "Day 1 of a comparative experiment. Control, mindfulness, tool, leverage — across three live repos. The category I think this points to gets named on Friday."
draft: true
tags: ["tokensquirrel", "experiment", "claude-code"]
---

I built a CLI called `tokensquirrel` that scores how I use Claude Code — 15 habits across discipline, hygiene, and setup weight, A–F grades, and a daily cost estimate. It's the kind of tool you build because something nags at you that you can't quite measure.

This week I'm going to actually use it on myself, hard, every day. Mon–Fri. Three repos. One post a day. But the design isn't "run the tool and see what happens" — that would be uninteresting. Each day is a different *condition*, and the comparison between days is the point.

## The four-condition arc

| Day | Condition | What I do |
|-----|-----------|-----------|
| Mon | **Control** | Normal work. No squirrel. No special awareness. Captures my real habits. |
| Tue | **Manual awareness** | Try hard from memory of best practices. Plan mode, model switching, terse prompts. **Still no squirrel.** |
| Wed | **Squirrel-nudged** | Use the tool's recommendations actively. |
| Thu | **Leverage** | Push more work through. Question: can output grow faster than cost? |
| Fri | **Synthesis** | The arc, the numbers, and one more thing. |

So three deltas to measure: how much did *mindfulness alone* move things (Mon→Tue)? How much did *the tool add on top* of mindfulness (Tue→Wed)? And on Thursday, did *productivity-per-dollar* improve when I tried to do more?

## Why this design

Most "I tried a dev tool" posts can't tell you whether the tool helped or whether you just paid more attention. By splitting awareness from tool, this experiment can.

The leverage day matters most to me. Naively, doing more work means spending more — more sessions, more tokens. But if a measurement tool actually helps, the relationship should bend: more output, same or lower cost, ratios that improve. That's the headline I'm hoping to write Friday. If I can't, I'll say so.

## Predictions (no peeking)

- **Real baseline:** probably C-range overall. Worst habits: skills hygiene, model selection.
- **Mindfulness lift:** maybe +3 points. Easy stuff (skills pruning) without measurement.
- **Tool lift on top:** maybe another +5. The tool sees things I won't.
- **Leverage day:** I think I can do ~50% more work for the same cost. Big "I think" though.
- **Hardest to shift:** cost-checking per session. I never look. I doubt I'll start just because the tool tells me to.

## What I think this points to

Cloud spend has a discipline around it: **FinOps**. People, practices, dashboards, a body of vocabulary, conferences, the works. AI coding tools — agentic tools like Claude Code, Codex, Copilot — generate spend that behaves like cloud spend. Per-session, hard to attribute, easy to ignore until the bill hurts. But there's no equivalent discipline yet. No name for the practice. No standard playbook.

I think there should be. I have a name in mind. I'll tell you what it is on Friday — once the data has earned the right to use it.

## What you'll see this week

- A daily post Tue–Thu, each ~400 words, covering the previous day's results and framing the next day's condition.
- A long Friday post: the full arc, charts, a public TODO list of things this experiment surfaced about my own product, services notes for if anyone wants help with this, and the framing reveal.

The experiment "succeeds" if Friday is honest, specific, and gives you something to point at. A null result on any one dimension ("mindfulness alone moved everything; the tool added little") is the more publishable finding. I'd rather earn the framing than oversell it.

See you tomorrow with the control-day numbers.
