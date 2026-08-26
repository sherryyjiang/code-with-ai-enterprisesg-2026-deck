# Speaker notes and run of show

## Facilitation premise

This is not an AI survey or a prompt-writing lecture. The audience should leave with one contained workflow they can pilot safely, one method for directing an agent, and one method for deciding whether the result earned trust.

Use only approved or synthetic information in the live build. Do not paste customer, employee, financial, confidential, or personal data into an unapproved tool. The workshop is practical guidance, not legal advice; organisation and sector policies still apply.

## 120-minute run of show

The slide-led portion is 25 minutes total. Slides 9–12 are working surfaces for the live build and audience interaction, not another 95 minutes of presentation.

### Slides 1–2 · Open and calibrate · 0–5 min

**Slide 1 — Code With AI (1 min)**

- Promise: “We will not try to cover every AI tool. We will build one useful workflow and examine why we should—or should not—trust it.”
- Set the live-demo expectation early: questions are welcome, and imperfect intermediate results are part of the lesson.

**Slide 2 — Audience pulse (4 min)**

- Run three fast show-of-hands questions in order.
- Use the answers to tune the room:
  - If most are new, define an agent as “AI that can inspect information, use tools, and take bounded steps.”
  - If approved access is unclear, state that the entire demo remains synthetic.
  - Ask one or two people to name the workflow behind their vote; do not troubleshoot it yet.

### Slides 3–8 · Concepts participants need during the demo · 5–25 min

**Slide 3 — Outcome and map (2 min)**

- Name the contract: 20 minutes of framing, 70 minutes of live work, then debrief and adaptation.
- The demo is the centre of the workshop, not an illustration after a lecture.

**Slide 4 — Agentic work and the loop (4 min)**

- The durable distinction is not “chat versus a magic agent.” It is the combination of instructions, reachable tools, permissions, and a repeatable working loop.
- Read the five verbs once. Tell participants to watch for each during the demo.

**Slide 5 — Smallest useful pilot (4 min)**

- Walk from the centre outward. The outermost action comes later, after evidence and controls.
- Strong first pilots create a useful draft, analysis, or preview before they ever send, publish, approve, pay, or contact someone.
- Say explicitly: high-impact customer decisions, money movement, and sensitive-data workflows are poor first pilots.

**Slide 6 — The four-field brief (4 min)**

- Outcome prevents activity without value.
- Context reduces guessing.
- Access + Rules bounds reach.
- Proof makes “done” observable before work starts.
- A long prompt is not the goal; a reviewable work contract is.

**Slide 7 — Reach and human gate (3 min)**

- Ask four questions: What data can it see? Whose identity and access does it use? What can it do outside the workspace? Can we trace and reverse the action?
- Point to the orange gate. In a first pilot, stop there.
- Autonomy is earned by evidence and controls, not granted because the output looked fluent once.

**Slide 8 — Test before trust (3 min)**

- “Does it work?” is too broad. Define a small set of representative and awkward examples.
- Evidence should connect claims to sources, show intended changes, reveal unknowns, and keep rollback ready.

### Slide 9 · Live build · 25–95 min

**Mission:** turn a synthetic sales CSV into a prioritised, source-linked follow-up brief. Produce a safe preview only; do not connect a CRM or contact a customer.

**25–32 min — Inspect**

- Open the synthetic CSV.
- Ask the agent to describe columns, data quality problems, missing values, and assumptions before proposing work.
- Show why inspection comes before prompting for a polished answer.

**32–40 min — Frame**

- Give the four-field brief on the slide.
- Define a lightweight prioritisation policy and explicitly mark it as a workshop assumption, not business truth.
- Confirm the stop condition: no credentials, no customer contact, no live CRM write.

**40–47 min — Plan**

- Ask for a short, reviewable plan.
- Challenge one step or assumption in front of the room. This makes human direction visible.
- Approve only the smallest coherent slice.

**47–72 min — Build**

- Generate a repeatable transformation and a readable follow-up brief.
- Require every recommendation to retain a source-row identifier.
- Prefer a file or rendered preview the room can inspect over an answer that exists only in chat.

**72–87 min — Prove**

- Run representative cases and at least two awkward cases: a missing field, contradictory signals, a duplicate, or an invalid value.
- Check that the output is traceable, does not invent contact details, and states uncertainty.
- Review the change summary or diff and rerun after any correction.

**87–95 min — Human gate**

- Show the preview as the proposed action.
- Ask the room whether it has earned an internal human review—not autonomous execution.
- Stop before any external action. Name what would need to exist before a real integration: approved data handling, least privilege, logging, named accountability, testing, and rollback.

If the live build fails, keep the failure visible. Inspect the error, narrow the task, and rerun the proof. Recovery is part of the working loop.

### Slide 10 · Debrief · 95–103 min

- Move left to right. Spend the most time on Evidence.
- Ask the room for one concrete observation per card.
- Separate “the agent said it worked” from evidence the room actually saw.
- End with Unknown: what would still need production, policy, security, or domain review?

### Slide 11 · Participant exercise · 103–113 min

**6 minutes — individual draft**

- Choose one real workflow, but describe data categories rather than sharing confidential details.
- Write one sentence per field. Keep the outcome small enough to review manually.

**4 minutes — pair-check**

- Partner challenges four things: useful, reversible, approved data, named approver.
- If any answer is uncertain, shrink the pilot or turn the external action into a preview.

### Slide 12 · Shareback, next move, Q&A · 113–120 min

- Invite two 30-second pilot briefs.
- Close each with one sharpening question, not a full solution.
- Ask everyone to name the smallest action they can take next Monday: identify an owner, secure an approved dataset, write the brief, or define five test cases.
- Use remaining time for Q&A.

## Primary sources used for the update

### Singapore enterprise context and governance

- Enterprise Singapore, practical AI workshop themes: <https://www.enterprisesg.gov.sg/grow-your-business/boost-capabilities/productivity-and-digitalisation/driving-entrepreneurship-with-ai>
- IMDA, Singapore Digital Economy Report 2025 and enterprise AI adoption: <https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2025/singapore-digital-economy>
- IMDA, Model AI Governance Framework for Agentic AI: <https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/factsheets/2026/updated-model-ai-governance-framework-for-agentic-ai>
- IMDA, Starter Kit for testing LLM applications: <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/starter-kit-for-testing-llm-based-applications-for-safety-and-reliability.pdf>
- PDPC, advisory guidelines on personal data in AI systems: <https://www.pdpc.gov.sg/guidelines-and-consultation/2024/02/advisory-guidelines-on-use-of-personal-data-in-ai-recommendation-and-decision-systems>
- CSA Singapore, Guidelines on Securing AI Systems: <https://www.csa.gov.sg/news-events/press-releases/launch-of-guidelines-and-companion-guide-on-securing-artificial-intelligence-systems/>

### Agent workflows and evaluation

- Anthropic, Claude Code best practices: <https://www.anthropic.com/engineering/claude-code-best-practices>
- Anthropic, effective context engineering for AI agents: <https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents>
- Anthropic, demystifying evals for AI agents: <https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents>
- Anthropic, sandboxing and safer agent execution: <https://www.anthropic.com/engineering/claude-code-sandboxing>
- OpenAI, AGENTS.md guidance: <https://learn.chatgpt.com/docs/agent-configuration/agents-md>
- OpenAI, MCP and connector safety: <https://developers.openai.com/api/docs/guides/tools-connectors-mcp>
- OpenAI, evaluation best practices: <https://developers.openai.com/api/docs/guides/evaluation-best-practices>
