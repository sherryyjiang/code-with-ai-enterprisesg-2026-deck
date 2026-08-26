# Code With AI — Enterprise Singapore

A 10-slide, two-hour practical workshop deck for an Enterprise Singapore audience. This is a separate iteration of the original two-day `code-with-ai` deck, with its own repository and Vercel project.

The workshop is demo-first: about 30 minutes of slides establish agentic work, the working loop, context, proof, a concrete quality bar, and app anatomy. The remaining 90 minutes are reserved for building and testing an app across Codex and Cursor.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/slides/1`.

## Presenting controls

- `→`, `←`, or `Space`: move through slides
- `O`: open the slide overview
- `Esc`: close the overview
- Bottom-right controls: previous, next, and enter/exit fullscreen
- Any slide is directly addressable at `/slides/{number}`

## Workshop arc

| Time | Segment | Slides |
| --- | --- | --- |
| 0–5 min | Opening and audience pulse | 1–2 |
| 5–30 min | Agentic work, working loop, context, brief, proof, quality bar, and app anatomy | 3–9 |
| 30–120 min | Live app build demonstrated in Codex and Cursor; Q&A throughout | 10 |

Only the first 30 minutes are slide-led. Slide 10 is the handoff into the live build, not another teaching segment.

## Editorial record

- [CONTENT_AUDIT.md](./CONTENT_AUDIT.md) records the 31-slide source audit and every keep/cut/merge/update decision.
- [SPEAKER_NOTES.md](./SPEAKER_NOTES.md) contains timing, facilitation prompts, the demo runbook, and primary sources.

## Quality checks

```bash
npm run lint
npm run build
npm audit --omit=dev
```
