---
title: "GRODD"
status: "PLANNING / LOCAL PILOT"
summary: "An installable Peppol submission product for SAP Business One"
year: "2026"
projectType: "Peppol Submission System"
role: "Product Direction + Systems Design"
---

<div class="project-v2-intro">
GRODD is an installable Peppol submission product designed for businesses that need a practical bridge between their source system and Peppol e-invoicing requirements. The first connector targets SAP Business One on SQL Server, with Belgium as the first market context.
</div>

<div class="project-v2-intro">
I shaped GRODD around a canonical document model rather than a one-off SAP export. Source data is mapped into a stable internal structure first, then validation, submission, dashboard visibility, retry flow, and audit history can sit on top of it cleanly.
</div>

## 01 - INSPIRATION

GRODD came from a very real business-systems problem: e-invoicing is becoming mandatory, but many companies still run operational data through systems that were not built around modern Peppol submission workflows.

The obvious answer would be to rely entirely on a third-party portal or a brittle export script. I wanted a stronger product shape: something installable, local, auditable, and close enough to the source system to be useful for operators.

The goal is not to become a full accounting product or a Peppol access point. GRODD sits between the source system and an access point partner, owning the mapping, validation, submission workflow, dashboard, and support experience.

## 02 - MY ROLE & CONTRIBUTION

I defined the v1 product shape, narrowed the first connector, and designed the system around a source-agnostic canonical model.

That work included:

- defining invoices and credit notes as the first document scope
- choosing SAP Business One on SQL Server as the first production connector
- shaping GRODD as a Windows-first local install rather than a cloud-first product
- designing the canonical document model and mapping layer
- building the source-connection and document-processing flow around an embedded operational database
- testing live SAP B1 SQL Server connectivity over Tailscale against a demo database
- shaping the operator dashboard around discovery, manual processing, validation results, document detail, and status history

The key design choice was to keep GRODD source-agnostic after mapping. SAP B1 is the first connector, not the whole identity of the product.

## 03 - SYSTEM SHAPE

GRODD is built as a local backend service with a browser dashboard and embedded operational database.

The core flow is:

1. connect to the source system with read-only access
2. discover eligible invoices or credit notes
3. fetch source document data
4. map into GRODD's canonical model
5. validate required fields and business rules
6. persist the processing run, validation result, status history, and audit trail
7. submit through an access point adapter when the document is ready

For v1, the product is deliberately focused: SAP B1 SQL Server, Belgium, invoices, credit notes, manual plus scheduled processing, and operational visibility for sent, failed, pending, and resubmitted documents.

## 04 - TOOLS USED

GRODD combines source-system integration, local runtime design, mapping, and operator-facing workflow.

- **Node.js / TypeScript** for the backend service and connector logic
- **SAP Business One SQL Server** as the first source system
- **SQLite** for embedded GRODD-owned operational state
- **Canonical document models** for source-independent invoice and credit-note processing
- **Local web dashboard** for discovery, processing, validation detail, and status visibility
- **Systemd user service prep** for private preview deployment on the VPS

The stack is intentionally practical. The hard part is not showing a dashboard. It is making the data path, validation, and operating model trustworthy enough for real document submission work.

## 05 - CHALLENGES AND HOW I SOLVED THEM

The first challenge was product boundaries. Peppol submission can easily become accounting software, integration middleware, document storage, and compliance tooling all at once. I solved that by defining what GRODD owns: mapping, validation, submission workflow, dashboard visibility, retries, and audit trail.

The second challenge was source coupling. A SAP-specific implementation would be faster at the start but weaker long-term. I solved that by putting a canonical model between the source connector and the Peppol-facing logic, so future connectors can map into the same internal shape.

The third challenge was realism. Mock data was not enough. GRODD needed to prove it could connect to a real SAP B1 SQL Server database, discover invoices, fetch document details, map them, validate them, and persist processing results. That live SAP path has been tested against a local demo database.

## 06 - WHAT I LEARNED

GRODD sharpened the difference between an integration script and a product.

The important lessons:

- source-system access should be read-only unless the product truly needs more authority
- canonical models are product infrastructure, not academic design
- document visibility and failure diagnostics matter as much as successful submission
- local install products need boring operational details: config, logs, services, storage, and health checks
- a narrow first connector can still support a broader architecture if the boundaries are right

## 07 - HOW AI SUPPORTED THE WORK

AI helped accelerate the architecture, canonical-model design, implementation planning, and iteration loops. It was useful for pressure-testing scope, turning product decisions into concrete implementation tasks, and keeping the system honest about what belongs in v1.

The direction still came from product judgment: define the wedge, constrain the market, choose the first connector, and avoid pretending a demo script is a product.

## 08 - CURRENT STATE

GRODD is in planning / local pilot stage. The implementation baseline exists, including the local backend, embedded database, SAP B1 connector, discovery and processing API paths, and a basic operator dashboard.

The next meaningful step is continuing the SAP B1 connector and dashboard path toward a more complete Peppol submission workflow with access-point integration, mapping setup, retry handling, and stronger operational polish.
