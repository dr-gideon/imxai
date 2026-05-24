---
title: "BART"
status: "PRIVATE DEMO READY"
summary: "A hosted marketing lead intake automation for Enterpryze workflows"
year: "2026"
projectType: "Workflow Automation System"
role: "Product + Systems Design"
---

<div class="project-v2-intro">
BART is a marketing lead intake automation built around a real sales operations workflow: receive a web enquiry, decide whether the company is already known, create or reuse the right Business Partner context, generate an Enterpryze sales opportunity, create the matching Jotform record, and notify the team in Microsoft Teams within seconds.
</div>

<div class="project-v2-intro">
The hosted preview is running privately on the trusted network. The current demo state is deliberately safe by default: mock mode is active until demo-day approval, but the live path has already been proven against the demo organisation with new-prospect creation, existing-customer review, Jotform writeback, and Teams notifications.
</div>

## 01 - INSPIRATION

BART came from a common business-systems gap: web leads arrive with useful information, but turning that enquiry into clean CRM work still takes manual checking.

In the current intake workflow, a new-prospect web enquiry can take 15 to 20 minutes before it reaches the right salesperson. That delay matters. The prospect has already raised their hand, and the first response window is where the company can feel sharp, attentive, and easy to deal with.

BART compresses that handoff to about five seconds for the clean new-prospect path. The salesperson can receive the Teams card almost immediately, open the lead and Jotform, and call the prospect within roughly ten seconds of the enquiry being submitted. That is the kind of response speed a new prospect notices.

The manual version is also easy to get wrong. Someone has to decide whether the company already exists, whether the submitted contact is already on the account, whether a new prospect should be created, which salesperson should own the lead, where the enquiry evidence should live, and who needs to be notified.

The useful product shape was not a chatbot. It was a controlled intake workflow that joins the public form, CRM data, review decisions, and team notifications without guessing when the data is incomplete.

## 02 - MY ROLE & CONTRIBUTION

I shaped BART as a production-shaped demo rather than a throwaway form integration.

That work included:

- defining the intake workflow around deterministic matching, not blind lead creation
- building local and webhook intake paths that normalize into one canonical payload
- replacing early JSON state with SQLite-backed migrations, workflow events, idempotency, match candidates, Jotform records, Enterpryze operations, and notification events
- adding Business Partner/contact indexing so BART can distinguish new prospects, existing customers, and existing customers with missing contacts
- designing a manual-review pause for existing customers when the submitted contact is not present yet
- adding targeted Business Partner re-sync on review resume so the reviewer can add a contact in Enterpryze, then let BART continue safely
- wiring Jotform creation and Enterpryze lead UDF update so the lead and submitted form stay linked
- implementing proactive Teams cards for successful leads and missing-contact reviews
- adding mock/live runtime mode controls so the hosted preview can stay safe until live testing is explicitly approved

The important decision was to make uncertainty visible. If the customer exists but the contact does not, BART stops and asks for a human review instead of inventing the missing relationship.

## 03 - BART WORKFLOW

BART_WORKFLOW_DIAGRAM

## 04 - WORKFLOW STATES

<div class="project-v2-roadmap project-v2-roadmap-bart" aria-label="BART workflow states">
  <section class="project-v2-roadmap-phase">
    <div class="project-v2-roadmap-step">Path 1</div>
    <h3>New prospect</h3>
    <p>BART creates the prospect Business Partner, creates the lead, creates the Jotform submission, updates the lead with the form link, and sends the Teams lead card in about five seconds, so the salesperson can contact the prospect almost immediately.</p>
  </section>
  <section class="project-v2-roadmap-phase">
    <div class="project-v2-roadmap-step">Path 2</div>
    <h3>Existing customer + known contact</h3>
    <p>BART reuses the matched account and contact, then creates the lead and downstream records without adding duplicate customer data.</p>
  </section>
  <section class="project-v2-roadmap-phase">
    <div class="project-v2-roadmap-step">Path 3</div>
    <h3>Existing customer + missing contact</h3>
    <p>BART pauses before writes, sends a review card, waits for the contact to be added or verified, target-syncs the account, then resumes only if the contact can be found.</p>
  </section>
  <section class="project-v2-roadmap-phase project-v2-roadmap-phase-target">
    <div class="project-v2-roadmap-step">Safety</div>
    <h3>Mock by default</h3>
    <p>The hosted demo stays in mock mode until live writes are approved. Live mode has separate health checks, readbacks, and a switch-back-to-mock handoff.</p>
  </section>
</div>

## 05 - TOOLS USED

BART combines a private hosted intake app, Enterpryze integration, form generation, review workflow, and team notifications.

- **Node.js / TypeScript** for the hosted intake server and workflow orchestration
- **SQLite** for workflow state, review decisions, match candidates, events, operations, Jotform records, and notification history
- **Enterpryze Public API + Outlook sales opportunity API** for Business Partner lookup, prospect creation, contact readback, lead creation, and UDF update
- **Jotform API** for creating the lead-form record and preserving an editable form link
- **Microsoft Teams Bot Framework** for proactive lead and review cards
- **Express UI** for the hosted intake form, review page, admin read endpoints, and demo polish
- **Encrypted runtime config** for API credentials, webhook secrets, Teams notification token, and mock/live controls

The stack is practical because the workflow has to bridge a public lead form, CRM account truth, review decisions, and team notification without turning every submission into an unsafe write.

## 06 - CHALLENGES AND HOW I SOLVED THEM

One challenge was matching quality. A lead form gives names, domains, email addresses, and company text, but none of those alone are enough to safely decide whether a record is new or existing. I solved that with normalized matching, scored candidates, indexed Business Partner/contact data, and explicit classifications for new prospect, existing customer, and review-required cases.

Another challenge was missing contacts on existing customers. Creating a lead against the account without the correct contact would make the record less useful, but creating a new prospect would duplicate the company. I solved that by pausing before writes, sending a Teams review card, letting the reviewer add or verify the contact in Enterpryze, then target-syncing the selected Business Partner before resume.

A third challenge was live-demo safety. The system had to prove real Enterpryze, Jotform, and Teams wiring, but not stay dangerous between demos. I added mock/live mode separation, health checks that expose the current mode, safe hosted mock mode by default, and a demo-day cutover checklist for switching live only when approved.

The most subtle challenge was exact external values. A single mismatched Jotform dropdown value can store but render blank. BART now maps currency-driven country/region values to the exact form options and verifies payloads before treating the flow as polished.

## 07 - WHAT I LEARNED

BART reinforced that lead automation is mostly about respecting system boundaries.

The strongest lessons:

- a clean intake form is not enough; the hard part is account/contact truth
- matching workflows need a pause state, not just confidence scores
- external systems punish almost-correct values
- demo systems need obvious mock/live state and a fast way back to safe mode
- speed is part of customer experience when a prospect has just asked to be contacted
- notifications are product surfaces, not afterthoughts
- readbacks matter because create responses are not always complete enough for downstream UI

The project is a strong example of controlled automation: fast when the path is known, deliberately slow when the data is ambiguous.

## 08 - HOW AI SUPPORTED THE WORK

AI supported architecture, implementation, API exploration, test coverage, UI polish, card copy, and repeated edge-case passes. It helped move quickly across the TypeScript workflow, Enterpryze payloads, Jotform payloads, Teams card structure, review states, and verification scripts.

The human judgment stayed in the operational boundaries: when to stop, when to resume, what should be reviewed, which fields must match exactly, and when live writes are allowed.

## 09 - CURRENT STATE

BART is private-demo ready and currently hosted on the trusted network in mock-safe mode. The hosted intake form, review path, admin read endpoints, Teams bot notification path, Jotform integration, and Enterpryze live-write path have all been exercised through controlled tests.

The verified demo behavior covers both important paths: a new-prospect enquiry can create the Business Partner, lead, Jotform submission, lead UDF link, and Teams notification in about five seconds; an existing-customer enquiry with a missing contact can pause for review, notify the reviewer, target-sync after the contact is added, resume, and create the downstream records without duplicating the customer.

For review and demos, the key safety rule is simple: hosted BART remains mock by default. Live mode is a deliberate cutover, not the resting state.
