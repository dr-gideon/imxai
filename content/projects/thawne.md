---
title: "THAWNE"
status: "PHASE 4 PLANNED"
summary: "An ecosystem intelligence and autonomy system for Tempo"
year: "2026"
projectType: "Autonomous Research Agent"
role: "Product Direction + Systems Design"
---

<div class="project-v2-intro">
THAWNE is an ecosystem intelligence and autonomy system focused on Tempo. It monitors ecosystem movement, tracks entities and services, stores developments in a structured knowledge base, and exposes that intelligence through MCP and REST so both humans and agents can use it.
</div>

<div class="project-v2-intro">
I built it to solve a specific problem: early ecosystems move fast, but most of their signal gets lost in scattered posts, docs, repos, and service directories. THAWNE turns that flow into something persistent, queryable, and operational. It is already live at <a href="https://thawne.xyz" target="_blank" rel="noopener noreferrer">thawne.xyz</a> with a public discovery layer, a running MCP server, paid MPP access on selected surfaces, and a daily intelligence loop behind it.
</div>

## 01 - INSPIRATION

THAWNE started from a simple problem: Tempo was moving fast, but the useful signal was scattered and easy to lose.

Tempo launched with a strong technical story around machine payments, but the surrounding intelligence layer was still thin. Important things were happening across docs, MPP services, GitHub repos, launches, experiments, and wallet activity, but there was no disciplined system turning that movement into retained knowledge.

I wanted to build something more durable than a feed reader or update bot. The goal was to create an agent that could observe an ecosystem continuously, preserve useful structure, and eventually act within that ecosystem under explicit rules.

Tempo was the right environment because it was early, technical, and already centered on agent-native payments through MPP.

## 02 - MY ROLE & CONTRIBUTION

I defined the operating model, designed the intelligence pipeline, and shaped the autonomy roadmap.

That work included:

- framing THAWNE as a structured ecosystem intelligence system rather than a passive tracker
- designing the knowledge model across entities, relations, developments, MPP services, and chain activity
- building the daily sweep workflow that turns raw ecosystem signals into reviewed, ingestible intelligence reports
- exposing the system through MCP and REST so it can serve both direct users and other agents
- shipping MPP-gated access for selected surfaces instead of treating payments as a future add-on
- designing the autonomy policy layer with explicit spend caps, allowlists, freeze thresholds, and failure-triggered circuit breaking
- proving the autonomy path with a real paid outbound Brave call under policy control

A lot of the work was about discipline. Intelligence systems get noisy fast if they collect broadly without clear structure, and autonomy systems get sloppy fast if policy is left vague.

## 03 - THAWNE SYSTEM

THAWNE_SYSTEM_DIAGRAM

## 04 - TOOLS USED

THAWNE combines ingestion, monitoring, storage, payments, and agent-facing delivery in one system.

- **Python** for ingestion, monitoring, orchestration, and policy logic
- **SQLite** for the structured knowledge base, observer data, and separate autonomy spend records
- **MCP server patterns** for agent-facing tools, resources, and prompts
- **REST discovery endpoints** for public access and lightweight integration
- **MPP payment flows** for paid intelligence access
- **Cron workflows** for daily sweeps, retention, and Notion sync
- **Cloudflare Tunnel** for public delivery at `thawne.xyz`

The stack mattered less than the operating model. Each layer had to support continuity, traceability, and controlled expansion.

## 05 - CHALLENGES AND HOW I SOLVED THEM

One challenge was preventing knowledge sprawl. Ecosystem information piles up quickly, but raw collection does not automatically become useful intelligence. I solved that by structuring THAWNE around entities, relations, developments, MPP services, and chain-observer data instead of letting it become a loose archive of notes.

Another challenge was balancing freshness with reliability. Daily sweeps are only valuable if they can be ingested back into a system that still makes sense later. I solved that by turning sweep output into processed reports, feeding those reports into the database, and using autolinking to connect new developments back to the existing knowledge graph.

A third challenge was product surface design. I did not want THAWNE to be trapped inside one interface, so I exposed the system through MCP, REST discovery, and MPP-aware endpoints. That made it usable as infrastructure rather than just a dashboard.

The hardest challenge was autonomy. It is easy to talk about autonomous agents in a vague way. I wanted something more credible. So I designed the policy layer first: transaction caps, daily and weekly spend limits, allowlist-only outbound access, auto-freeze at threshold, and circuit-breaking after repeated failures. Then I validated that model with a real paid outbound Brave request under policy control instead of stopping at simulation.

## 06 - WHAT I LEARNED

THAWNE became one of the clearest systems projects in the portfolio.

The strongest takeaways so far:

- recurring intelligence work needs durable structure, not just repeated collection
- a useful ecosystem agent is part research system, part data model, part product surface
- public access matters more when the underlying knowledge stays structured
- autonomy becomes more believable when the policy layer is explicit and enforced in code
- the first real paid autonomous action teaches more than a large amount of theoretical design

The biggest lesson was simple: the interesting part of autonomy is not the action itself. It is the policy and system design that determine when action is allowed, what it can touch, and how it fails safely.

## 07 - HOW AI SUPPORTED THE WORK

AI helped accelerate research, implementation, and synthesis across the whole project.

It was useful for speeding up ingestion workflows, shaping interface design, testing architecture choices, and helping turn scattered ecosystem material into more structured internal workflows. But the core decisions, especially around trust, scope, payment boundaries, and autonomy policy, still needed deliberate design.

## 08 - CURRENT STATE

THAWNE is live and already functioning as a real ecosystem intelligence system. The MCP server is running, the public discovery layer is up at <a href="https://thawne.xyz" target="_blank" rel="noopener noreferrer">thawne.xyz</a>, selected intelligence access is MPP-gated, daily sweeps are being ingested into the knowledge base, and the autonomy groundwork has already been validated with a real paid outbound call.

It also proved flexible enough to extend into a separate <a href="https://dev.to/dr-gideon/i-built-an-autonomous-blockchain-intelligence-agent-that-uses-notion-as-its-brain-1clp" target="_blank" rel="noopener noreferrer">Notion MCP hackathon submission</a>, where THAWNE's intelligence layer was used as part of a bridge workflow instead of staying trapped inside one product surface.

The next step is not to make it louder. It is to make it more autonomous without losing control. That is what makes THAWNE important to me as a portfolio project: it shows how an agent can move from monitoring to action through explicit structure, live interfaces, and policy-bound capability expansion.
