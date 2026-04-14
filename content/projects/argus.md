---
title: "ARGUS"
status: "WORK IN PROGRESS"
summary: "A retrieval-augmented support assistant"
year: "2026"
projectType: "RAG System"
role: "Product + Systems Design"
keyPoints:
  - "Built to produce <strong>grounded support answers</strong> instead of generic chatbot responses."
  - "Designed around an <strong>inspectable ingestion pipeline</strong> across raw, extracted, canonical, chunked, and embedded stages."
  - "Treats <strong>trust, citations, and uncertainty handling</strong> as product requirements, not polish."
stack:
  - Python
  - FastAPI
  - Postgres
  - pgvector
  - RAG
---

<div class="project-v2-intro">
ARGUS is a retrieval-augmented support assistant focused on business systems troubleshooting. I shaped it as a grounded support workflow rather than a generic chatbot, because the real goal was never just to answer questions. It was to answer them in a way that stayed close to evidence.
</div>

<div class="project-v2-intro">
The project also serves a second purpose. It is one of the clearest technical learning vehicles in the portfolio, built to deepen my hands-on understanding of ingestion design, canonicalization, chunking, vector storage, retrieval quality, and citation-backed answer generation.
</div>

## 01 - INSPIRATION

ARGUS came from a simple overlap between domain experience and a technical direction I wanted to grow into more seriously.

On one side, I already understood the reality of support-style work in business systems: answers are often buried across documentation, troubleshooting notes, process knowledge, and lived operational experience. On the other, I wanted to build something that forced me to learn retrieval systems properly instead of staying at the level of generic AI experimentation.

That made ARGUS the right kind of project. Narrow enough to build honestly, but deep enough to teach real lessons about grounded AI.

## 02 - MY ROLE & CONTRIBUTION

I defined the project direction, narrowed the scope, and shaped the system around a practical question: what would make this useful and trustworthy in a real support context?

My role has covered product framing, information architecture, and system design. That meant deciding what ARGUS should be, what it should not be, and how the underlying retrieval pipeline needed to behave if the answers were going to be credible.

My contribution has focused on turning ARGUS into a disciplined retrieval system rather than a vague assistant concept.

That included:

- defining ARGUS as a focused retrieval project instead of a broad ERP copilot
- choosing Postgres plus pgvector as the retrieval core
- designing the document pipeline across raw, extracted, canonical, chunked, and embedded stages
- setting document identity and metadata rules
- shaping the first answer loop around citations, support structure, and uncertainty handling
- moving the project from CLI-only interaction toward a browser-accessible UI

A key part of the work was resisting shortcuts. I wanted each stage of the system to stay inspectable, because that is what makes retrieval systems easier to debug, evaluate, and improve over time.


## 03 - ARGUS FLOW

ARGUS_FLOW_DIAGRAM

## 04 - TOOLS USED

ARGUS is built with a stack chosen for practical learning and long-term usefulness.

- **Python** for the control layer across ingestion, parsing, canonicalization, retrieval, and orchestration
- **FastAPI** for the application layer and browser-facing question flow
- **Postgres + pgvector** for vector storage and nearest-neighbor retrieval
- **Markdown and structured metadata** for keeping the corpus editable, inspectable, and grounded
- **Embedding and answer models** to handle semantic retrieval and citation-backed responses

The important thing was not just using these tools, but understanding how they fit together in a system where retrieval quality, evidence structure, and answer discipline matter.

## 05 - CHALLENGES AND HOW I SOLVED THEM

One of the first design tensions was document identity. There was a temptation to encode source type into the document ID itself. I decided against that and kept the internal ID simple, with semantics handled through metadata instead. That made the system cleaner, easier to extend, and less fragile.

Another challenge was testing honesty. A Markdown sample could prove the pipeline worked, but not whether document extraction worked well across formats. I separated those concerns intentionally, so the project could validate workflow logic without pretending parser quality had already been solved.

A third challenge was interface realism. The CLI was fine for early pipeline work, but it was obviously not the right long-term interaction model. I pushed the project toward a browser-based entry point so it could behave more like a real product while keeping the backend strict and retrieval-first.

More broadly, the recurring challenge in ARGUS has been the same one that appears in most RAG systems: a technically functioning pipeline does not automatically produce a trustworthy answer. I treated that as both a design and systems problem, not just a model problem.

## 06 - WHAT I LEARNED

ARGUS has been one of the strongest learning projects in the portfolio because it made the hidden parts of retrieval systems visible.

The clearest lessons so far:

- a good ingestion pipeline is not just one that works, but one that is easy to run consistently
- retrieval quality is limited by corpus quality, not just vector math
- staged transformations matter, because raw, extracted, canonical, and chunked text each solve different problems
- support-style AI needs to be comfortable saying when evidence is weak, partial, or missing
- grounded systems become more trustworthy when their failure modes are visible instead of hidden behind polished language

This project also sharpened how I think about practical AI systems. The right constraints often do more for system quality than the biggest feature set.

## 07 - HOW AI SUPPORTED THE WORK

AI was part of the working process, but not the source of direction.

It supported the project by helping speed up exploration, implementation, iteration, and pressure-testing. That included using AI to challenge assumptions, help reason through technical structure, refine workflow decisions, and move faster through design and coding loops.

The important boundary was that I treated AI as a collaborator inside the process, not as a substitute for judgment. Project framing, scope decisions, architecture choices, and quality direction still needed to be owned deliberately.

## 08 - CURRENT STATE

ARGUS is still in progress, but the direction is strong. It already reads as more than a coding exercise. It is becoming a case study in how to design a narrower, more operationally useful AI system where retrieval, evidence handling, and trust are treated as first-class concerns.

That matters to me because it reflects the kind of systems work I want to be doing more of: not AI for spectacle, but AI that behaves with more discipline.

