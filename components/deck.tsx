"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  CircleHelp,
  Maximize2,
  Menu,
  Minimize2,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";

type Slide = {
  section: string;
  title: string;
  render: () => React.ReactNode;
};

const Accent = ({ children }: { children: React.ReactNode }) => (
  <span className="accent">{children}</span>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="eyebrow">{children}</div>
);

const SimpleFrame = ({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`slide-inner ${className}`}>
    <Eyebrow>{eyebrow}</Eyebrow>
    <h1 className="slide-title">{title}</h1>
    {children}
  </div>
);

function WorkingLoop() {
  const items = ["Frame", "Inspect", "Plan", "Build", "Prove"];

  return (
    <div className="loop-row compact-loop">
      {items.map((item, index) => (
        <div className="loop-step" key={item}>
          <div className="loop-number">0{index + 1}</div>
          <strong>{item}</strong>
          {index < items.length - 1 && <ChevronRight className="loop-arrow" />}
        </div>
      ))}
    </div>
  );
}

const slides: Slide[] = [
  {
    section: "Opening",
    title: "Code With AI",
    render: () => (
      <div className="hero-slide">
        <Image
          src="/hero.png"
          alt="Humans and small agents assembling a luminous software system"
          fill
          priority
          className="hero-image"
        />
        <div className="hero-copy">
          <Eyebrow>Enterprise Singapore · 2-hour practical workshop · 2026</Eyebrow>
          <h1>Code<br />With <Accent>AI</Accent></h1>
          <p>From rough workflow to proven prototype.</p>
          <div className="presenters">Sherry Jiang</div>
        </div>
      </div>
    ),
  },
  {
    section: "Opening",
    title: "Audience pulse",
    render: () => (
      <SimpleFrame eyebrow="Before we build · 3 quick show-of-hands" title={<>Let’s find the room’s <Accent>starting point.</Accent></>}>
        <div className="pulse-list concise">
          <div><b>01</b><span>How often do you use AI at work?</span><small>never · tried it · weekly · daily</small></div>
          <div><b>02</b><span>Which workflow would save your team the most time?</span><small>sales · service · operations · finance · product</small></div>
          <div><b>03</b><span>What may a pilot safely access and do today?</span><small>approved data · draft · internal use · connected action · not sure</small></div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Outcomes",
    title: "Today’s outcome",
    render: () => (
      <SimpleFrame eyebrow="The 120-minute build map" className="outcomes-slide" title={<>One loop. One demo. <Accent>One next move.</Accent></>}>
        <div className="outcome-list">
          <div><b>01</b><h2>Frame the right task</h2><p>Choose a useful workflow with a clear outcome and safe boundaries.</p></div>
          <div><b>02</b><h2>Direct an agent</h2><p>Give context, review the plan, and keep the first build intentionally small.</p></div>
          <div><b>03</b><h2>Judge the result</h2><p>Ask for evidence, test representative cases, and keep a human accountable.</p></div>
        </div>
        <div className="session-map">
          <span><b>5</b> open</span><span><b>20</b> framing</span><span className="session-main"><b>70</b> live build</span><span><b>8</b> debrief</span><span><b>10</b> your turn</span><span><b>7</b> Q&amp;A</span>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Foundations",
    title: "What makes work agentic",
    render: () => (
      <SimpleFrame eyebrow="The useful distinction" className="agent-system-slide" title={<>The difference is the tools, permissions,<br />and <Accent>working loop.</Accent></>}>
        <div className="agent-formula">
          <div className="formula-muted"><CircleHelp /><span>CHAT</span><strong>model + conversation</strong></div>
          <div className="formula-arrow">→</div>
          <div className="formula-live"><Wrench /><span>AGENTIC WORK</span><strong>model + instructions + tools + permissions</strong></div>
        </div>
        <WorkingLoop />
      </SimpleFrame>
    ),
  },
  {
    section: "Choose the task",
    title: "Start with the smallest useful slice",
    render: () => (
      <SimpleFrame eyebrow="Your first pilot" className="pilot-slide" title={<>Start where mistakes are cheap and <Accent>feedback is fast.</Accent></>}>
        <div className="split pilot-layout">
          <div className="complexity-rings">
            <div className="complexity-core">ONE USEFUL<br />FLOW</div>
            <div className="complexity-ring cr-1"><span>one owner</span></div>
            <div className="complexity-ring cr-2"><span>human-reviewed</span></div>
            <div className="complexity-ring cr-3"><span>one measurable outcome</span></div>
            <div className="complexity-ring cr-4"><span>approved or synthetic data</span></div>
            <div className="complexity-ring cr-5"><span>connected actions later</span></div>
          </div>
          <div className="pilot-copy">
            <p><Check /> Repetitive or painful</p>
            <p><Check /> Easy to inspect</p>
            <p><Check /> Reversible if wrong</p>
            <p><Check /> Valuable before full automation</p>
            <div className="pilot-caution"><ShieldCheck /> Do not automate high-impact customer decisions, money movement, or sensitive-data workflows in a first pilot.</div>
          </div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "The brief",
    title: "Give the agent a clear job",
    render: () => (
      <SimpleFrame eyebrow="Clear thinking beats magic prompting" title={<>Give the agent a clear job —<br /><Accent>not a clever prompt.</Accent></>}>
        <div className="brief-board">
          <div><b>OUTCOME</b><strong>What useful result should exist?</strong><span>“A prioritised follow-up brief”</span></div>
          <div><b>CONTEXT</b><strong>What does it need to understand?</strong><span>users · examples · files · terminology</span></div>
          <div><b>ACCESS + RULES</b><strong>What may it read, change, or never touch?</strong><span>approved data · safe preview · preserve scope</span></div>
          <div><b>PROOF</b><strong>What evidence would earn trust?</strong><span>tests · source trace · change summary · rollback</span></div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Control the reach",
    title: "Know its reach; place the human gate",
    render: () => (
      <SimpleFrame eyebrow="Human judgment does not disappear" className="reach-slide" title={<>Know its reach. Place the <Accent>human gate.</Accent></>}>
        <div className="accountability-line reach-strip">
          <span>CHECK ITS REACH</span>
          <strong>data</strong><strong>identity + access</strong><strong>external actions</strong><strong>trace + rollback</strong>
        </div>
        <div className="autonomy-ladder">
          <div><b>01</b><strong>Draft</strong><span>human uses or discards it</span></div>
          <div><b>02</b><strong>Grounded answer</strong><span>shows its source</span></div>
          <div><b>03</b><strong>Proposed action</strong><span>prepares the next step</span></div>
          <div className="approval-step"><b>04</b><strong>Approved action</strong><span>human checkpoint</span></div>
          <div className="later-step"><b>05</b><strong>Autonomous action</strong><span>only after controls earn it</span></div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Verification",
    title: "Test before trust",
    render: () => (
      <SimpleFrame eyebrow="Proof beats vibes" title={<>Do not ask “does it work?”<br />Ask <Accent>“what proves it?”</Accent></>}>
        <div className="proof-layout">
          <div className="proof-terminal">
            <span>VERIFICATION RUN</span>
            <p><Check /> approved or synthetic data</p>
            <p><Check /> claims trace back to the source</p>
            <p><Check /> representative + awkward cases pass</p>
            <p><Check /> preview and change summary reviewed</p>
            <p><Check /> rollback ready; external action gated</p>
          </div>
          <div className="proof-copy">
            <h2>Test the main flow — and the failure you most care about.</h2>
            <p>The agent should show evidence, changes, and remaining unknowns.</p>
          </div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Demo",
    title: "Demo brief and acceptance criteria",
    render: () => (
      <SimpleFrame eyebrow="Live build · 70 minutes in Codex" className="demo-brief-slide" title={<>Build a source-linked <Accent>sales follow-up brief.</Accent></>}>
        <div className="brief-board demo-brief">
          <div><b>INPUT</b><strong>A synthetic sales CSV</strong><span>messy rows · missing fields · mixed priorities</span></div>
          <div><b>OUTCOME</b><strong>A prioritised follow-up brief</strong><span>recommendations link back to source rows</span></div>
          <div><b>BOUNDARY</b><strong>Safe preview; no live CRM write</strong><span>no credentials · no customer contact</span></div>
          <div><b>ACCEPTANCE</b><strong>Traceable, robust, honest</strong><span>awkward rows handled · uncertainty explicit</span></div>
        </div>
        <div className="demo-prompt"><span>STOP CONDITION</span><strong>Human approval before any external action</strong></div>
      </SimpleFrame>
    ),
  },
  {
    section: "Debrief",
    title: "What earned trust",
    render: () => (
      <SimpleFrame eyebrow="After the demo" title={<>What made the result <Accent>more trustworthy?</Accent></>}>
        <div className="debrief-grid">
          <div><b>01 · INSPECTED</b><strong>What did the agent read?</strong></div>
          <div><b>02 · REACH</b><strong>What could it change?</strong></div>
          <div><b>03 · INTERVENTION</b><strong>Where did the human redirect it?</strong></div>
          <div className="evidence-card"><b>04 · EVIDENCE</b><strong>What actually proved the result?</strong></div>
          <div><b>05 · UNKNOWN</b><strong>What remained unproven?</strong></div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Your turn",
    title: "Draft one pilot brief",
    render: () => (
      <SimpleFrame eyebrow="6 min draft · 4 min pair-check" className="exercise-slide" title={<>Draft one pilot. Then <Accent>pressure-test it.</Accent></>}>
        <div className="brief-board exercise-board">
          <div><b>OUTCOME</b><strong>What useful result?</strong><span>one owner · one measurable change</span></div>
          <div><b>CONTEXT</b><strong>What does it need?</strong><span>approved files · examples · terminology</span></div>
          <div><b>BOUNDARIES</b><strong>What stays untouched?</strong><span>data · access · external actions</span></div>
          <div><b>PROOF</b><strong>What would convince you?</strong><span>happy path · awkward case · human review</span></div>
        </div>
        <div className="peer-check"><span>PAIR-CHECK</span><strong>Useful?</strong><strong>Reversible?</strong><strong>Approved data?</strong><strong>Named approver?</strong></div>
      </SimpleFrame>
    ),
  },
  {
    section: "Closing",
    title: "Your next move",
    render: () => (
      <SimpleFrame eyebrow="Take it back to work · then Q&A" title={<>Choose one useful, safe workflow<br /><Accent>for next Monday.</Accent></>}>
        <div className="future-principles">
          <div><b>01</b><strong>Start with the task, not the tool.</strong></div>
          <div><b>02</b><strong>Keep the first slice small and reversible.</strong></div>
          <div><b>03</b><strong>Match autonomy with boundaries.</strong></div>
          <div><b>04</b><strong>Ask for evidence before trust.</strong></div>
        </div>
        <p className="future-line">Start small. Show evidence. Earn more autonomy.</p>
      </SimpleFrame>
    ),
  },
];

export default function Deck({ initialSlide }: { initialSlide: number }) {
  const router = useRouter();
  const [overview, setOverview] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const overviewRef = useRef<HTMLDialogElement>(null);
  const overviewButtonRef = useRef<HTMLButtonElement>(null);
  const closeOverviewRef = useRef<HTMLButtonElement>(null);
  const total = slides.length;
  const current = Math.min(Math.max(initialSlide, 1), total);

  const go = useCallback(
    (next: number) => {
      const destination = Math.min(Math.max(next, 1), total);
      router.push(`/slides/${destination}`);
      setOverview(false);
    },
    [router, total],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.repeat || overview) return;

      const target = event.target as HTMLElement | null;
      const isInteractive = target?.closest("button, a, input, textarea, select, [contenteditable='true']");
      if (isInteractive) return;

      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        go(current + 1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(current - 1);
      }
      if (event.key.toLowerCase() === "o") setOverview(true);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go, overview]);

  useEffect(() => {
    const dialog = overviewRef.current;
    if (!dialog) return;

    if (overview && !dialog.open) {
      dialog.showModal();
      window.requestAnimationFrame(() => closeOverviewRef.current?.focus());
    } else if (!overview && dialog.open) {
      dialog.close();
      overviewButtonRef.current?.focus();
    }
  }, [overview]);

  useEffect(() => {
    const onFullscreenChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen?.();
    } else {
      await document.documentElement.requestFullscreen?.();
    }
  };

  const slide = slides[current - 1];

  return (
    <main className="deck-shell">
      <div
        className="deck-progress"
        role="progressbar"
        aria-label="Workshop slide progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
      ><span style={{ transform: `scaleX(${current / total})` }} /></div>
      <header className="deck-header">
        <div><span className="day-label">ENTERPRISESG</span><span>{slide.section}</span></div>
        <button
          ref={overviewButtonRef}
          onClick={() => setOverview(true)}
          aria-label="Open slide overview"
          aria-expanded={overview}
          aria-controls="slide-overview"
        ><Menu /></button>
      </header>
      <section className="slide-canvas" aria-label={`Slide ${current}: ${slide.title}`}>{slide.render()}</section>
      <div className="sr-only" aria-live="polite">Slide {current} of {total}: {slide.title}</div>
      <footer className="deck-footer">
        <div className="slide-count">{String(current).padStart(2, "0")} <span>/ {total}</span></div>
        <div className="deck-controls">
          <button onClick={() => go(current - 1)} disabled={current === 1} aria-label="Previous slide"><ArrowLeft /></button>
          <button onClick={() => go(current + 1)} disabled={current === total} aria-label="Next slide"><ArrowRight /></button>
          <button onClick={toggleFullscreen} aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}>
            {fullscreen ? <Minimize2 /> : <Maximize2 />}
          </button>
        </div>
      </footer>
      <dialog
        ref={overviewRef}
        id="slide-overview"
        className="overview"
        aria-labelledby="overview-title"
        onCancel={(event) => {
          event.preventDefault();
          setOverview(false);
        }}
      >
          <div className="overview-head">
            <div><Eyebrow>Deck overview</Eyebrow><h2 id="overview-title">{total} slides · 2-hour workshop</h2></div>
            <button ref={closeOverviewRef} onClick={() => setOverview(false)} aria-label="Close overview"><X /></button>
          </div>
          <div className="overview-grid">
            {slides.map((item, index) => (
              <button
                key={`${item.section}-${item.title}`}
                className={index + 1 === current ? "active" : ""}
                onClick={() => go(index + 1)}
                aria-current={index + 1 === current ? "page" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")} · {item.section}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
      </dialog>
    </main>
  );
}
