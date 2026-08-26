"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Braces,
  Check,
  ChevronRight,
  CircleHelp,
  Code2,
  Database,
  Eye,
  Fingerprint,
  Gauge,
  Maximize2,
  Menu,
  Minimize2,
  PlugZap,
  Rocket,
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
  const items = ["Context", "Clarify", "Plan", "Build", "Review"];

  return (
    <div className="loop-row">
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

function OrbitVisual() {
  return (
    <div className="orbit" aria-label="A model surrounded by the context it needs">
      <div className="orbit-ring ring-a" />
      <div className="orbit-ring ring-b" />
      <div className="orbit-core">MODEL</div>
      <span className="orbit-item oi-1">project files</span>
      <span className="orbit-item oi-2">user needs</span>
      <span className="orbit-item oi-3">constraints</span>
      <span className="orbit-item oi-4">examples</span>
      <span className="orbit-item oi-5">references</span>
    </div>
  );
}

function AppStack() {
  const rows = [
    [Eye, "Interface", "what people see"],
    [Braces, "Logic", "what the app decides"],
    [Database, "Database", "what the app remembers"],
    [PlugZap, "APIs", "what the app connects to"],
    [Fingerprint, "Authentication", "who can do what"],
    [Rocket, "Deployment", "where the app lives"],
    [Gauge, "Logs", "how we know what happened"],
  ] as const;

  return (
    <div className="app-stack">
      {rows.map(([Icon, label, detail], index) => (
        <div className={`stack-layer ${index < 3 ? "live-layer" : ""}`} key={label} style={{ "--i": index } as React.CSSProperties}>
          <Icon />
          <strong>{label}</strong>
          <span>{detail}</span>
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
      <SimpleFrame eyebrow="Before we build · let’s hear from the room" className="pulse-slide" title={<>Let’s find the room’s <Accent>starting point.</Accent></>}>
        <div className="pulse-list concise open-questions">
          <div><b>01</b><span>Where do you already use AI at work — if at all?</span></div>
          <div><b>02</b><span>Which workflow would you most like to improve?</span></div>
          <div><b>03</b><span>What would make an AI-built result feel trustworthy to you?</span></div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Foundations",
    title: "What makes work agentic",
    render: () => (
      <SimpleFrame eyebrow="The useful distinction" className="agent-system-slide agent-system-clean" title={<>The difference is instructions, tools, permissions,<br />and <Accent>constrained action.</Accent></>}>
        <div className="agent-formula">
          <div className="formula-muted"><CircleHelp /><span>CHAT</span><strong>model + conversation</strong></div>
          <div className="formula-arrow">→</div>
          <div className="formula-live"><Wrench /><span>AGENTIC WORK</span><strong>model + instructions + tools + permissions</strong></div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "The working loop",
    title: "The basic working loop",
    render: () => (
      <SimpleFrame eyebrow="How to work with coding agents" title={<>Most of the work is <Accent>a loop.</Accent></>}>
        <WorkingLoop />
        <p className="center-note">The loop stays. The project gets more ambitious.</p>
      </SimpleFrame>
    ),
  },
  {
    section: "Foundations",
    title: "Context Engineering",
    render: () => (
      <SimpleFrame eyebrow="The model needs your situation" className="context-slide" title={<>Context engineering makes the model <Accent>more capable.</Accent></>}>
        <div className="split orbit-layout">
          <div>
            <p className="lead">Without the right context, even a powerful model is guessing about your project, preferences, users, and definition of done.</p>
            <div className="context-callout">Better context → better decisions → better work.</div>
          </div>
          <OrbitVisual />
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
          <div><b>OUTCOME</b><strong>What useful result should exist?</strong><span>profile → matches → application receipt</span></div>
          <div><b>CONTEXT</b><strong>What does it need to understand?</strong><span>young users · job data · 10 match factors · examples</span></div>
          <div><b>ACCESS + RULES</b><strong>What may it read, change, or never touch?</strong><span>synthetic profiles · no real application sent</span></div>
          <div><b>PROOF</b><strong>What evidence would earn trust?</strong><span>time the flow · explain matches · save · submit test</span></div>
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
            <span>PROOF CHECKLIST</span>
            <p><Check /> safe test data</p>
            <p><Check /> source-backed claims</p>
            <p><Check /> main + edge cases pass</p>
            <p><Check /> preview + diff reviewed</p>
            <p><Check /> rollback ready; actions gated</p>
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
    section: "Quality bar",
    title: "Define what good means",
    render: () => (
      <SimpleFrame eyebrow="Example · a job-finding app for young people" className="good-example-slide" title={<>“Good” means the app passes <Accent>specific tests.</Accent></>}>
        <div className="quality-example">
          <div className="quality-context">
            <span>PRODUCT</span>
            <strong>A job-finding app for young people</strong>
            <p>Turn the ambition into checks the agent can build and verify.</p>
          </div>
          <div className="quality-checks">
            <div><b>01</b><span>Complete onboarding in ≤10 minutes.</span></div>
            <div><b>02</b><span>Use all 10 non-sensitive matching factors.</span></div>
            <div><b>03</b><span>Explain every match and any missing information.</span></div>
            <div><b>04</b><span>Save progress and resume later.</span></div>
            <div><b>05</b><span>Validate the form and return a mocked receipt.</span></div>
          </div>
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "App anatomy",
    title: "A Real App Is More Than a Screen",
    render: () => (
      <SimpleFrame eyebrow="What the agent is actually building" className="app-anatomy-slide" title={<>A real app is <Accent>more than a screen.</Accent></>}>
        <div className="split app-layout">
          <div>
            <p className="lead">More layers create more capability — and more consequences.</p>
            <p className="subtle">You do not need to master every layer today. You need a map.</p>
          </div>
          <AppStack />
        </div>
      </SimpleFrame>
    ),
  },
  {
    section: "Demo",
    title: "Build the app with AI",
    render: () => (
      <SimpleFrame eyebrow="Now let’s build" className="demo-tools-slide" title={<>I’ll demo the same build loop in <Accent>Codex and Cursor.</Accent></>}>
        <div className="tool-stage demo-tool-stage">
          <div className="tool-primary"><Code2 /><h2>Codex</h2><p>Build with an agent working across the project.</p></div>
          <div className="tool-bridge">same brief · same loop</div>
          <div className="tool-secondary"><Braces /><h2>Cursor</h2><p>Build with AI inside the code editor.</p></div>
        </div>
        <p className="demo-tools-line">One app. Two tools. One standard of proof.</p>
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
      setOverview(false);
      overviewRef.current?.close();
      router.push(`/slides/${destination}`);
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
              <a
                key={`${item.section}-${item.title}`}
                href={`/slides/${index + 1}`}
                className={index + 1 === current ? "active" : ""}
                onClick={() => {
                  setOverview(false);
                  overviewRef.current?.close();
                }}
                aria-current={index + 1 === current ? "page" : undefined}
              >
                <span>{String(index + 1).padStart(2, "0")} · {item.section}</span>
                <strong>{item.title}</strong>
              </a>
            ))}
          </div>
      </dialog>
    </main>
  );
}
