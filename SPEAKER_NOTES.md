# Speaker notes and run of show

## Facilitation premise

The slides should take about 30 minutes. The app build is the workshop: participants should see the same Context → Clarify → Plan → Build → Review loop repeatedly, including when the first attempt is imperfect.

Use approved or synthetic information. Do not paste customer, employee, financial, confidential, or personal data into an unapproved tool. This workshop is practical guidance, not legal advice; organisation and sector policies still apply.

## Slides · 0–30 min

### Slide 1 — Code With AI · 0–1 min

- Promise: “We will spend less time talking about AI and more time building with it.”
- Preview that the build will be demonstrated in both Codex and Cursor.
- Learning contract: participants are not expected to master every tool or layer; they will see one complete, reviewable build loop.

### Slide 2 — Audience pulse · 1–5 min

- Ask the three questions openly; do not turn them into a multiple-choice poll.
- Take two or three short responses total. Listen for experience, a useful workflow, and what the room needs to see before trusting a result.
- End at five minutes even if the answers invite longer stories. Use them to tune examples during the build.

### Slide 3 — What makes work agentic · 5–7 min

- The useful distinction is not a product label. It is whether the model has instructions, tools, and permission to do work beyond the conversation.
- The ability to take constrained action is what changes the stakes.

### Slide 4 — The working loop · 7–11 min

- Context: give the agent the situation.
- Clarify: resolve the decisions that change the work.
- Plan: make the path reviewable before building.
- Build: create the smallest coherent version.
- Review: inspect the result and feed what you learn back into the loop.
- Ask participants to watch for every step during the demo.

### Slide 5 — Context engineering · 11–14 min

- A capable model still guesses when it lacks project files, user needs, constraints, examples, and references.
- Context is not one giant prompt. It is the relevant situation, made available at the moment the agent needs it.
- Better context improves decisions; it does not remove the need to review them.
- Bridge: “The brief is how we package the relevant context, rules, and proof for this task.”

### Slide 6 — The four-field brief · 14–18 min

- Outcome prevents activity without value.
- Context reduces guessing.
- Access + Rules bounds what the agent may read or change.
- Proof makes “done” observable before work starts.
- Treat the brief as a reviewable work contract, not a prompt-writing trick.

### Slide 7 — Test before trust · 18–21 min

- “Does it work?” is too broad. Define representative cases and the failure you most care about.
- Evidence should show the behavior, source or change, remaining unknowns, and a path to recover.

### Slide 8 — Define what good means · 21–26 min

- Use the youth job-finding app to turn an ambition into five observable checks.
- Separate product criteria from implementation: “use 10 matching factors” is a requirement; the database or model choice is an implementation decision.
- Point out that each criterion can be demonstrated or tested during the live build.
- The 10 non-sensitive factors are defined for this synthetic workshop dataset; they are not a validated hiring model.
- “Submit” means returning a mocked receipt. The demo does not send a real job application.

### Slide 9 — A real app is more than a screen · 26–30 min

- Use the app’s acceptance checks to reveal what must exist behind the visible screens.
- Quickly name the seven layers: interface, logic, database, APIs, authentication, deployment, and logs.
- The audience does not need to master every layer. They need a map for what the demo is actually changing.
- Scope boundary: the interface and local state will be real today. APIs, authentication, deployment, logs, and external submission stay mapped or safely mocked unless an approved integration already exists.

## Live build · 30–120 min

### Mission

Build a simple app that helps young people find suitable jobs. Prioritise one complete, testable path over a broad but disconnected set of screens.

### 30–38 min — Orient the room and the tools

- Open the same codebase in Codex and Cursor.
- State the four-field brief and the five quality checks from slide 8.
- Explain that the brief, context, and review standard stay consistent across both tools.

### 38–48 min — Context and inspection

- Inspect the repo, data shape, existing components, and constraints before changing anything.
- Ask the agent to state what it knows, what it inferred, and what could change the plan.

### 48–58 min — Clarify and plan

- Decide the smallest complete flow: onboarding → matched jobs → explanation → saved progress → application form.
- Ask for a short plan that maps work to the seven app layers on slide 9 and the five acceptance checks on slide 8.
- Correct at least one assumption in front of the room so human direction remains visible.

### 58–82 min — Build the core flow

- Create the onboarding and matching experience.
- Capture the 10 agreed factors in a structured form rather than burying them in prose.
- Show why a complete flow matters more than adding another decorative screen.

### 82–100 min — Add state and submission

- Save progress and restore it on return.
- Add validation and a successful application-form submission path using synthetic data.
- Keep any external write mocked or safely contained unless an approved integration already exists.

### 100–112 min — Review, test, and repair

- Run the five checks from slide 8 plus one awkward case: missing information, an invalid field, or a weak match.
- Inspect the app in the browser, not only the code or the agent’s summary.
- Fix the highest-impact failure and rerun the check. Make the repair loop explicit.

### 112–116 min — Continue the loop in the second tool

- Switch between Codex and Cursor to demonstrate how the brief, project context, and verification standard carry over.
- Avoid a feature-by-feature tool comparison. The transferable method is the point.

### 116–120 min — Close inside the demo

- Ask: which part of the result earned trust, and what remains unproven?
- Take final questions while the working app remains visible.

If the build runs behind, protect the complete onboarding-to-submission path and the final browser verification. Cut breadth before cutting proof.

## Primary sources retained from the update

- Enterprise Singapore, practical AI workshop themes: <https://www.enterprisesg.gov.sg/grow-your-business/boost-capabilities/productivity-and-digitalisation/driving-entrepreneurship-with-ai>
- IMDA, Model AI Governance Framework for Agentic AI: <https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/factsheets/2026/updated-model-ai-governance-framework-for-agentic-ai>
- IMDA, Starter Kit for testing LLM applications: <https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/starter-kit-for-testing-llm-based-applications-for-safety-and-reliability.pdf>
- PDPC, advisory guidelines on personal data in AI systems: <https://www.pdpc.gov.sg/guidelines-and-consultation/2024/02/advisory-guidelines-on-use-of-personal-data-in-ai-recommendation-and-decision-systems>
- CSA Singapore, Guidelines on Securing AI Systems: <https://www.csa.gov.sg/news-events/press-releases/launch-of-guidelines-and-companion-guide-on-securing-artificial-intelligence-systems/>

The youth job-finding app and its five quality checks are illustrative workshop criteria, not empirical claims about young job seekers.
