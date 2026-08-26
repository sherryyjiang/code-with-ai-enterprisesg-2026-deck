# Content audit: 31 slides to 12

## Editorial standard

The original deck was designed for a two-day beginner workshop. This version has 120 minutes, of which 70 minutes belong to a live build. Only 25 minutes are slide-led instruction; the remaining post-demo slides conduct debrief, participant transfer, and Q&A rather than adding another lecture. A slide earns its place only if it does one of four jobs: calibrates the room, establishes a decision participants need during the demo, conducts the demo, or helps participants transfer the method to their own work.

Enduring material stays: outcome-first task selection, clear context, bounded access, human accountability, representative testing, traceability, and reversibility. Time-sensitive product lists, capability curves, taxonomies, and multi-agent spectacle leave the main deck.

## Slide-by-slide disposition

| # | Original slide | Decision | V1 treatment and rationale |
| ---: | --- | --- | --- |
| 1 | Code With AI | **Keep + update** | Retains the hero and title treatment; changes the audience, duration, promise, and presenter credit. |
| 2 | What You’ll Leave With | **Keep + update** | Becomes slide 3: three concrete outcomes plus the 120-minute map. |
| 3 | Get Your Credits | **Cut** | Logistics, coupons, and vendor access are event-specific and consume scarce teaching time. |
| 4 | What Is an LLM? | **Cut as a standalone** | A model roster dates quickly. The facilitator can give a 30-second verbal definition if the pulse-check shows it is needed. |
| 5 | What Is an Agent? | **Merge + update** | Becomes part of slide 4: the practical distinction is tools, permissions, and a working loop—not a label. |
| 6 | Context Engineering | **Merge + update** | Its durable lesson moves into slide 6’s four-field brief: outcome, context, access and rules, proof. |
| 7 | The Basic Working Loop | **Keep + update** | The five-step Frame → Inspect → Plan → Build → Prove loop anchors slide 4 and the demo. |
| 8 | You Set the Dials | **Merge** | Human choices become concrete pilot criteria, boundaries, and the autonomy ladder on slides 5–7. |
| 9 | Clear Thinking Beats Perfect Prompting | **Keep + update** | Becomes slide 6. “Magic prompting” is replaced with a reusable work brief. |
| 10 | Not Knowing Is Part of the Process | **Cut** | Encouraging but not decision-critical in a two-hour workshop; coaching happens live during the exercise. |
| 11 | Plan: Control the Path | **Merge** | Planning remains a step in the loop and a facilitator checkpoint in the demo rather than a separate lecture. |
| 12 | Build: Increase Complexity Intentionally | **Keep + update** | Becomes slide 5’s enterprise pilot rings: one owner, human review, measurable outcome, approved data, connected actions later. |
| 13 | Start With Codex | **Cut as a standalone** | The live build identifies Codex. A tool comparison would compete with the transferable method. |
| 14 | Watch the Loop | **Merge + update** | Becomes slide 9’s demo contract and acceptance criteria, then a 70-minute live build. |
| 15 | Day 2: The New Meta | **Cut** | The day transition no longer exists and “new meta” framing adds no practical decision. |
| 16 | From Answers to Coordinated Action | **Merge + update** | Its durable change is expressed through slide 4’s agentic distinction and slide 7’s autonomy ladder. |
| 17 | Inner Loop / Outer Loop | **Merge + update** | Becomes slide 7: the agent can advance work, but a named human owns reach, approval, and consequences. |
| 18 | A Real App Is More Than a Screen | **Merge, then cut the architecture tour** | Slide 7 retains four reach questions—data, identity/access, external action, trace/rollback—without teaching an app stack. |
| 19 | A Model Is Capable—but Unprepared | **Merge** | Its actionable point moves into the context and rules fields on slide 6. |
| 20 | The Harness Prepares the Agent | **Cut as terminology** | “Harness” is unnecessary vocabulary for newcomers; the brief makes the same idea usable immediately. |
| 21 | Rules | **Merge** | Standing instructions become “Access + Rules” on slide 6 and explicit demo boundaries on slide 9. |
| 22 | Skills | **Cut** | Useful for a longer advanced workshop, but the taxonomy does not help participants choose or prove a first pilot. |
| 23 | The Harness Improves Over Time | **Merge** | The learning loop becomes the slide 10 debrief and slide 11 pressure-test rather than a conceptual slide. |
| 24 | Tools, MCPs, and Plugins | **Cut as taxonomy** | Tool connectivity is treated as a trust boundary—what data and actions are reachable—not a catalogue of protocols. |
| 25 | Verify: Proof Beats Vibes | **Keep + update** | Becomes slide 8 with source trace, awkward cases, preview/change review, rollback, and an external-action gate. |
| 26 | Spin Up a Team | **Cut** | Multi-agent spectacle is exciting but nonessential, hard to control, and mismatched to a first enterprise pilot. |
| 27 | The Software Factory | **Cut** | Architecture and orchestration are advanced follow-on material, not prerequisites for one safe workflow. |
| 28 | Subagents Parallelize Independent Work | **Cut** | Kept as a behind-the-scenes production technique, not a participant learning objective. |
| 29 | Long-Running Work Needs Visibility | **Merge** | Traceability, checkpoints, and rollback are retained on slides 7–9 without a separate operations lecture. |
| 30 | A Bigger Product Mission | **Cut + replace** | Replaced with a contained synthetic-sales demo that has visible value, representative edge cases, and no live CRM write. |
| 31 | How Software Gets Built Is Changing | **Keep + update** | Becomes slide 12: four durable principles and one specific next-Monday action. |

## Resulting 12-slide narrative

1. Establish the workshop promise.
2. Calibrate experience, workflow need, and safe access.
3. Set outcomes and the 120-minute contract.
4. Define agentic work through reach and the five-step loop.
5. Select the smallest useful, reversible pilot.
6. Write a clear four-field brief.
7. Inspect reach and place a human approval gate.
8. Define evidence before trusting the result.
9. Run one live build against explicit acceptance criteria.
10. Debrief what actually earned trust.
11. Draft and pressure-test one participant pilot.
12. Commit to one useful, safe next move.

## Changes made during the two critique passes

### Content review

- Removed separate “app layers” and “prepared workspace” explanations because they repeated boundaries and context without advancing the demo.
- Moved pilot selection before the briefing method, so participants first choose the work and then specify it.
- Rebuilt the demo slide as a contract with input, outcome, boundary, acceptance criteria, and stop condition rather than repeating the working loop.
- Added an eight-minute evidence-led debrief and a 10-minute participant exercise; the first version behaved too much like a talk plus demo.
- Tightened safety language from “public or synthetic” to “approved or synthetic,” and explicitly deferred high-impact decisions, money movement, sensitive data, and live external actions.

### Design review

- Replaced runtime Google Font loading with self-hosted `next/font` assets and explicit fallbacks.
- Raised all essential supporting labels and examples to projection-readable sizes.
- Enlarged and rebalanced the pilot rings, then repositioned labels to prevent overlap.
- Removed opacity-based low-contrast states while retaining visual de-emphasis through explicit color and border choices.
- Added intentional headline breaks, a numbered debrief path, and emphasis on the Evidence card.
- Added a true overview dialog, safer keyboard shortcuts, live slide announcements, progress semantics, fullscreen state, larger controls, focus styles, and scroll/reflow recovery for small or zoomed viewports.
