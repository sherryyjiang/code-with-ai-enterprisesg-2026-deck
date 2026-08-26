# Code With AI — Enterprise Singapore

A 12-slide, two-hour practical workshop deck for an Enterprise Singapore audience. This is a separate iteration of the original two-day `code-with-ai` deck, with its own repository and Vercel project.

The workshop is designed around one outcome: help a participant choose and frame one useful, safe AI workflow they can pilot next Monday. Slides establish the working loop and its controls; the 70-minute live build supplies the depth.

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
| 5–25 min | Mental model, pilot choice, brief, controls, proof | 3–8 |
| 25–95 min | Live build: synthetic sales data to a source-linked brief | 9 |
| 95–103 min | Demo debrief | 10 |
| 103–113 min | Participant pilot exercise | 11 |
| 113–120 min | Shareback, next move, and Q&A | 12 |

Only the first 25 minutes are slide-led instruction. Slides 9–12 stay visible as demo, debrief, exercise, and closing prompts; they are not an additional lecture block.

## Editorial record

- [CONTENT_AUDIT.md](./CONTENT_AUDIT.md) records the 31-slide source audit and every keep/cut/merge/update decision.
- [SPEAKER_NOTES.md](./SPEAKER_NOTES.md) contains timing, facilitation prompts, the demo runbook, and primary sources.

## Quality checks

```bash
npm run lint
npm run build
npm audit --omit=dev
```
