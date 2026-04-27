---
title: "NORA"
status: "LIVE INTERNAL PILOT"
summary: "An AI-assisted support inbox copilot for service operations"
year: "2026"
projectType: "Workflow Automation System"
role: "Product Direction + Systems Design"
---

<div class="project-v2-intro">
NORA is an AI-assisted support inbox copilot built around a practical service-desk workflow: read incoming Outlook messages, understand whether they need a new service call, an update, a reassignment, manual review, or no action, then prepare the right operational step for human approval.
</div>

<div class="project-v2-intro">
I built it as a realistic internal operations system rather than a chatbot demo. The current demo path uses a live test Outlook mailbox, a live test ERP API, consultant availability rules, a portal approval flow, and controlled execution so the system can create or reassign service calls and move emails only when the right gates are open.
</div>

## 01 - INSPIRATION

NORA came from a very practical support-desk problem: logging service calls was taking a person out of the team.

In a small support team, that matters. When one person is tied up reading incoming emails, creating service calls, checking who should own them, and moving messages into the right Outlook folders, the team loses capacity at exactly the point where customer work is arriving. A lot of that process is important, but not all of it needs to be manual.

The problem was bigger than logging alone. Someone also had to maintain rota context, understand who was working, who was on support, who was unavailable, and who had stepped away for lunch. That information existed, but it was not visible enough in one operational place.

NORA was designed to automate the repeatable parts of that workflow while keeping people in control of the decisions that matter. The goal was to take service-call logging, email movement, assignment visibility, rota awareness, and approval flow out of scattered manual work and bring them into one controlled support operations surface.

## 02 - MY ROLE & CONTRIBUTION

I defined the product shape, narrowed the MVP, and designed the system around approval-first operations.

That work included:

- framing NORA as an internal support workflow copilot instead of a customer-facing agent
- designing the decision schema for create, update, reassign, manual review, and no-action branches
- shaping the portal as the main control surface for Operations, Notifications, Team Status, Consultants, and System Controls
- building the live demo path around Outlook intake, ERP lookup/write actions, consultant mapping, availability policy, and execution audit
- adding hard safety gates for office hours, kill switch state, live execution, ERP writes, and Outlook moves
- integrating an advisory LLM layer while keeping deterministic rules, ERP validation, and policy enforcement in code
- tightening the demo flow so ERP-backed cases execute in the correct order: ERP action first, Outlook move second, audit/notification third

The important design choice was to keep NORA operationally boring in the right ways. It should be useful because it respects the workflow, not because it tries to look clever.

## 03 - NORA SYSTEM

NORA_SYSTEM_DIAGRAM

## 04 - TOOLS USED

NORA combines mailbox intake, ERP integration, availability logic, LLM-assisted interpretation, and an operator portal.

- **Node.js** for the portal server, decision pipeline, mailbox intake, and execution orchestration
- **Microsoft Graph** for Outlook mailbox reads, thread grouping, and folder moves
- **Test ERP API** for service-call lookup, creation, and reassignment in a safe demo database
- **BambooHR-style availability data** for consultant working-state checks and mapping validation
- **OpenRouter / LLM adapter layer** for advisory email interpretation, urgency detection, and structured context
- **Local JSON stores** for review queue, execution log, conversation memory, consultant mappings, and system controls
- **Portal UI** for approval, execution, notifications, team status, consultant mapping, and kill-switch controls

The stack is deliberately practical. NORA is about joining real operational systems together without losing auditability or control.

## 05 - CHALLENGES AND HOW I SOLVED THEM

One challenge was separating understanding from authority. An LLM can help interpret a messy email, but it should not own the business decision. I solved that by making the LLM advisory only. It can propose intent, urgency, and summary, but deterministic code still owns ERP lookup, customer matching, consultant validation, policy gates, assignment logic, and execution safety.

Another challenge was thread context. A follow-up email in the same conversation should not create a duplicate case while the original item is still waiting for review. I solved that by storing conversation memory and merging same-conversation follow-ups into the existing non-terminal review item, including the additional Graph message ids so execution can move the whole thread together.

A third challenge was live execution safety. The demo needed to prove real wiring, but not at the cost of confusing or unsafe actions. I added separate gates for full execution, ERP writes, and Outlook moves, plus an operations kill switch and office-hours enforcement. ERP-backed cases now use the normal Execute flow, which writes to ERP first and only moves the email afterward.

The most subtle challenge was UI honesty. Operators need to see why something is ready, blocked, high priority, or manual review. NORA's portal evolved to expose policy reasons, assignment validation, priority badges, notifications, team status, and system controls instead of hiding the important parts behind one button.

## 06 - WHAT I LEARNED

NORA sharpened how I think about useful AI in business operations.

The strongest lessons so far:

- workflow automation needs policy before autonomy
- inbox intelligence is mostly context management, not text generation
- LLM output is more useful when treated as evidence, not authority
- live integrations need separate gates, explicit ordering, and clear audit records
- operator trust comes from showing constraints, blockers, and decisions plainly

The biggest lesson was that real AI systems often become valuable in the handoff points: between email and ERP, between assignment and availability, between recommendation and execution, between automation and human approval.

## 07 - HOW AI SUPPORTED THE WORK

AI supported the project in two ways.

First, it helped during the build process: shaping architecture, pressure-testing edge cases, accelerating implementation, and refining the portal workflow. Second, it became part of the product through the advisory email-understanding layer.

The boundary stayed clear. AI can help interpret language and surface urgency, but the system still needs deterministic rules, trusted data, and human-controlled execution gates to be credible.

## 08 - CURRENT STATE

NORA is best described as a live internal pilot with production-grade workflow design. The portal is running, mailbox intake is wired, OpenRouter-based email interpretation is enabled for the demo path, live execution gates are on, and the test ERP plus Outlook connectors have been validated.

The current intended demo flow is simple: mailbox intake creates the review item, the operator approves it in the portal, then Execute Live performs the ERP action first, moves the Outlook message second, and records the audit trail. Manual-review items remain operator-controlled and route to the configured review folder without ERP writes.

That makes NORA one of the most practical projects in the portfolio. It shows applied AI in a real support workflow: not replacing judgment, but compressing the messy intake, routing, validation, and execution steps into something an operator can understand and control.
