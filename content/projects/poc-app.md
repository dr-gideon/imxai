---
title: "POC App"
status: "LIVE PRIVATE PILOT"
summary: "A warehouse proof-of-collection app for SAP Business One supplier returns"
year: "2026"
projectType: "Workflow App"
role: "Product + Systems Design"
---

<div class="project-v2-intro">
POC App is a private warehouse proof-of-collection tool for SAP Business One supplier returns. It lets warehouse staff look up an A/P Credit Note, capture a courier signature on a warehouse device, generate a signed PDF, and write the proof reference back to SAP.
</div>

<div class="project-v2-intro">
The app is live on a private internal URL and connected to a real SAP B1 demo environment. It is intentionally narrow: one operational problem, one document flow, one clean handoff back into SAP.
</div>

## 01 - INSPIRATION

POC App came from a practical paperwork problem: supplier returns still needed signed collection evidence, but the proof lived outside the system that operators actually use.

The manual version was fragile. A courier signs paper, someone keeps track of the document, and SAP only knows the proof exists if a person updates it correctly later. That is exactly the kind of small operational gap that becomes annoying at volume.

The useful product shape was not a big warehouse platform. It was a lightweight app that sits beside SAP, captures the proof at the moment of collection, generates a clean PDF, and writes the right reference back to the A/P Credit Note.

## 02 - MY ROLE & CONTRIBUTION

I defined the MVP around the smallest flow that could be useful in a real warehouse.

That work included:

- choosing A/P Credit Note lookup on demand as the first workflow
- designing the flow around warehouse-owned devices and a shared PIN rather than courier accounts
- connecting the app to SAP B1 Service Layer for document lookup and UDF writeback
- adding SQL Server persistence for local document state, lines, signed timestamps, and generated proof links
- generating proof-of-collection PDFs with supplier, document, returned-item, totals, driver, and signature details
- hardening the private deployment behind the trusted network with a user-level service and encrypted runtime config
- iterating the UI into a warmer Spark Palette direction after the functional flow was proven

The project stayed deliberately focused. It does one job and makes the evidence easy to see from SAP.

## 03 - POC APP SYSTEM

POC_APP_SYSTEM_DIAGRAM

## 04 - PRODUCT SCREENS

<div class="project-v2-screenshot-grid project-v2-screenshot-grid-poc-app">
  <figure class="project-v2-screenshot-card">
    <img src="/images/poc-app/fetch-document.png" alt="POC App fetch document screen showing A/P Credit Note lookup and document summary" loading="lazy">
    <figcaption><strong>Fetch Document</strong><span>Warehouse staff enter an A/P Credit Note number, fetch the SAP document, and confirm the supplier return details before collection.</span></figcaption>
  </figure>
  <figure class="project-v2-screenshot-card">
    <img src="/images/poc-app/sign-document.png" alt="POC App signing screen showing returned items, courier details, and signature capture" loading="lazy">
    <figcaption><strong>Signing Flow</strong><span>The courier signs directly on the warehouse device, with returned items and document totals visible at the point of handoff.</span></figcaption>
  </figure>
  <figure class="project-v2-screenshot-card project-v2-screenshot-card-portrait">
    <img src="/images/poc-app/pdf-proof.png" alt="Generated POC App proof of collection PDF with supplier, document, item, driver, and signature details" loading="lazy">
    <figcaption><strong>Proof PDF</strong><span>The generated proof is clean enough to attach back to the operational record: supplier, document, returned items, driver, timestamp, and signature.</span></figcaption>
  </figure>
</div>

## 05 - TOOLS USED

POC App combines a small web app, SAP integration, document generation, and private deployment.

- **Node.js / TypeScript** for the Fastify application and domain logic
- **SAP Business One Service Layer** for A/P Credit Note lookup and UDF writeback
- **SQL Server** for app-owned proof records and returned-item snapshots
- **PDFKit** for proof-of-collection PDF generation
- **EJS + browser JavaScript** for the warehouse signing interface
- **Trusted-network systemd service** for private internal access
- **Encrypted runtime vault** for SAP, SQL, auth, and deployment secrets

The stack is practical because the app has to bridge physical workflow, SAP data, proof storage, and operator trust without becoming a heavy product.

## 06 - CHALLENGES AND HOW I SOLVED THEM

The first challenge was SAP access. SQL showed A/P Credit Notes existed, but Service Layer initially returned no rows and blocked direct access. I treated that as an authorization problem rather than guessing around the API, then retested once the SAP user permissions were corrected.

The second challenge was proof ownership. The app needed to store enough local state to render and audit signed proofs, but SAP still had to remain the operational source where users find the final reference. I solved that by storing local documents and PDFs while writing only the driver, signed date, and proof URL back to SAP UDFs.

The third challenge was making a small app feel trustworthy. A plain form would technically work, but warehouse users need clear status, obvious actions, and a readable signed state. The UI was redesigned around warm command panels, tactile buttons, a clear top bar, explicit status pages, and a signature-first document flow.

The fourth challenge was PDF quality. Early generated proofs had layout issues and a blank trailing page. I tightened spacing, aligned columns, simplified footer handling, and kept the normal proof on one page.

## 07 - WHAT I LEARNED

POC App reinforced that small internal tools still need product discipline.

The strongest lessons:

- a narrow workflow can be more valuable than a broad platform when it closes a real operational gap
- SAP integrations need permission and entity checks before UI assumptions
- signed evidence should be easy to find from the system users already trust
- private tools still need good interaction design because bad UI creates bad operational data
- PDF generation is product work, not just output formatting

The project is a good example of pragmatic automation: capture the proof once, store it safely, and make SAP point to the result.

## 08 - HOW AI SUPPORTED THE WORK

AI helped accelerate the build, test planning, UI iteration, PDF layout passes, and deployment checks. It was useful for turning a rough workflow into implementation steps quickly, then tightening edge cases as they appeared.

The important decisions still came from operational judgment: keep the MVP narrow, avoid unnecessary courier accounts, write only the required UDFs back to SAP, keep secrets encrypted, and make the UI warehouse-friendly rather than flashy.

## 09 - CURRENT STATE

POC App is live as a private internal pilot behind the trusted network. It runs as `poc-app.service`, uses encrypted runtime config, requires a shared warehouse PIN, and exposes health/status checks for SQL, SAP Service Layer, A/P Credit Note access, and PDF storage.

The end-to-end flow has been proven against SAP demo data: lookup an A/P Credit Note, capture a courier signature, generate a one-page proof PDF, store the local record, serve the proof URL, and write the proof fields back to SAP.

That makes it a strong portfolio project because it shows applied AI-era product building in a very grounded environment: not a chatbot, not a demo page, but a small operational app that joins SAP, warehouse work, and signed evidence into one usable flow.
