import imgWorkflow from "@/assets/tech/workflow-premium-v2.jpg";
import imgDashboards from "@/assets/tech/dashboards-premium.jpg";
import imgDocuments from "@/assets/tech/documents-premium.jpg";
import imgCommunication from "@/assets/tech/communication-premium.jpg";
import imgDecision from "@/assets/tech/decision-premium.jpg";
import imgProcess from "@/assets/tech/process-premium-v2.jpg";
import imgSme from "@/assets/tech/industry-sme.jpg";
import imgExporters from "@/assets/tech/industry-exporters.jpg";
import imgFinance from "@/assets/tech/industry-finance.jpg";
import imgManufacturing from "@/assets/tech/industry-manufacturing.jpg";

export type Solution = {
  slug: string;
  n: string;
  name: string;
  headline: string;
  summary: string;
  problem: string;
  impact: string;
  engineering: string;
  image: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "workflow-automation",
    n: "01",
    name: "Enterprise Workflow Automation",
    headline: "Workflows that run themselves.",
    summary:
      "End-to-end workflows engineered around how your operations actually run — never retrofitted from a generic template.",
    problem:
      "Work moves through your business as a chain of manual hand-offs. A file is emailed, an approval is chased on WhatsApp, a status lives in someone's head. Every hand-off adds delay, invites error and destroys traceability, so when something slips nobody can say where or why.",
    impact:
      "Cycle times shrink because the system moves work forward without being asked. Ownership becomes explicit at every step, exceptions surface while they are still small, and the operational record is complete enough to stand up to an audit.",
    engineering:
      "We map the real operating flow first — the one your teams use, not the one in the manual. We then design agentic workflows around that reality, orchestrating people, data and tools in one system, with rules, escalations and an auditable trail built in from the first release.",
    image: imgWorkflow,
  },
  {
    slug: "executive-dashboards",
    n: "02",
    name: "Executive Dashboards",
    headline: "The business, visible in real time.",
    summary:
      "Live visibility into the operations and numbers leadership actually decides on.",
    problem:
      "Leadership reviews the business through spreadsheets assembled after the fact. By the time a report lands the number has changed, the definitions differ between teams, and half the meeting is spent arguing about whose figure is right.",
    impact:
      "One shared, live view of the operation. Reviews become decisions instead of reconciliations, deviations are caught in the week they happen, and every number traces back to the system that produced it.",
    engineering:
      "We define the metrics that actually govern the business, wire them directly to source systems, and build a cockpit that reflects your operating rhythm — daily for operations, monthly for the board — with drill-through from any figure to the underlying records.",
    image: imgDashboards,
  },
  {
    slug: "document-intelligence",
    n: "03",
    name: "Document Intelligence",
    headline: "Every document structured and accountable.",
    summary:
      "Contracts, invoices, filings and correspondence turned into structured, searchable, governed data.",
    problem:
      "Your most important information is trapped in PDFs, scans and email attachments across drives and inboxes. Finding it takes hours, extracting it takes people, and there is no reliable way to know which version governs.",
    impact:
      "Documents become data. Obligations, dates, amounts and parties are extracted and monitored, retrieval takes seconds, and version and access control turn a liability into an asset.",
    engineering:
      "We build ingestion for every channel documents arrive on, apply agentic extraction tuned to your document families, validate against your own master data, and route anything ambiguous to a human — so accuracy is provable rather than assumed.",
    image: imgDocuments,
  },
  {
    slug: "communication-intelligence",
    n: "04",
    name: "Communication Intelligence",
    headline: "Stakeholder communication, structured and traceable.",
    summary:
      "Client, vendor and internal communication captured as part of the operating record.",
    problem:
      "Commitments are made in email threads, calls and chat groups that no system sees. Context walks out with whoever handled it, follow-ups depend on memory, and disputes come down to whose recollection is louder.",
    impact:
      "Every commitment is captured, owned and followed up automatically. Handovers stop losing context, response times become measurable, and there is one authoritative history for every relationship.",
    engineering:
      "We connect your real communication channels, use agents to extract commitments, deadlines and sentiment, attach them to the right entity in your system, and drive reminders and escalations from that record rather than from inboxes.",
    image: imgCommunication,
  },
  {
    slug: "decision-support",
    n: "05",
    name: "Decision Support Systems",
    headline: "Decisions made on live, trusted data.",
    summary:
      "Analysis, scenarios and recommendations built on the operating system rather than stale extracts.",
    problem:
      "Consequential decisions — pricing, credit, capacity, capital — are taken on partial information, assembled manually, understood by one person. The reasoning is never recorded, so the same debate repeats every quarter.",
    impact:
      "Options are modelled against live data in minutes, assumptions are explicit, and the reasoning behind each decision is preserved. Judgement stays with leadership; the preparation stops consuming it.",
    engineering:
      "We encode your decision logic and constraints into the system, build agents that assemble the evidence and surface the trade-offs, and keep every recommendation explainable back to the data and rules that produced it.",
    image: imgDecision,
  },
  {
    slug: "process-engineering",
    n: "06",
    name: "Business Process Engineering",
    headline: "Processes that scale with you.",
    summary:
      "The operating architecture itself — redesigned before a single system is built.",
    problem:
      "Processes grew around individuals and workarounds. They hold at current volume and break at twice it. Automating them as they stand would only make the wrong shape faster.",
    impact:
      "A documented, deliberate operating architecture: clear ownership, defined controls, measurable throughput, and a structure that absorbs growth instead of buckling under it.",
    engineering:
      "We map the process as it truly operates, identify where value, control and time are lost, redesign the target state with your operators, and only then engineer the systems and agents that carry it — so the technology follows the architecture.",
    image: imgProcess,
  },
];

export const METHOD = [
  {
    n: "01",
    title: "Map",
    promise: "See the business exactly as it operates.",
    body: "We go beneath the org chart and into the work — every workflow, hand-off, approval, dependency and exception. This is where most software projects fail, so it is where we begin. The output is an accurate architecture of how your business actually runs today.",
  },
  {
    n: "02",
    title: "Architect",
    promise: "Design the system the business needs to become.",
    body: "We translate that map into a target-state architecture: what should be automated, what should stay human, where agents create leverage, what controls the business needs, and what measurable outcome each decision serves. You approve the blueprint before anything is built.",
  },
  {
    n: "03",
    title: "Deploy",
    promise: "Build it, ship it, and put it into real use.",
    body: "We engineer and deploy the system end to end — product design, implementation, integration and rollout — with your team adopting it in stages. No handing you a specification and disappearing. NETRA builds what NETRA designs.",
  },
  {
    n: "04",
    title: "Govern",
    promise: "Stay accountable long after go-live.",
    body: "A system that is not maintained decays. We stay engaged: measuring performance against the outcomes we set, refining the architecture as the business changes, and extending it as new operations come into scope.",
  },
];

export const INDUSTRIES = [
  {
    n: "01",
    slug: "sme-family-businesses",
    name: "SME & Family Businesses",
    body: "Decades of operating knowledge held in a few people's heads. We turn it into architecture the next generation can run and scale.",
    image: imgSme,
  },
  {
    n: "02",
    slug: "exporters",
    name: "Exporters",
    body: "Documentation, compliance, logistics and buyer communication across borders — orchestrated in one system instead of twelve spreadsheets.",
    image: imgExporters,
  },
  {
    n: "03",
    slug: "financial-services",
    name: "Financial Services",
    body: "Onboarding, diligence, monitoring and reporting where controls and audit trails are not optional but structural.",
    image: imgFinance,
  },
  {
    n: "04",
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    body: "Planning, procurement, quality and dispatch connected end to end, so the plant floor and the P&L finally describe the same day.",
    image: imgManufacturing,
  },
];
