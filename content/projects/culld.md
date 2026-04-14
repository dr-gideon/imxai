---
title: "CULLD"
status: "WORK IN PROGRESS"
summary: "An agent-native recruiting infrastructure project"
year: "2026"
projectType: "Recruiting MCP Server"
role: "Product Strategy + Systems Design"
---

<div class="project-v2-intro">
CULLD is an agent-native recruiting infrastructure project built around a simple bet: if agents are going to search talent, evaluate fit, and help with outreach, they need something better than a scraped job board or a thin AI wrapper on top of old recruiting workflows.
</div>

<div class="project-v2-intro">
I treated it as a trust and matching system first. That meant building around verification, scoped access, structured candidate data, and stronger match quality instead of just profile pages and keyword search. The public product site is live at <a href="https://culld.xyz" target="_blank" rel="noopener noreferrer">culld.xyz</a>.
</div>

## 01 - INSPIRATION

CULLD came from a hiring process that is already breaking on both sides.

Candidates are now using LLMs to rewrite resumes, tailor CVs for every job description, and spend hours chasing roles that may never have been a real fit. The same person gets repackaged again and again, while time disappears into browsing, editing, applying, and following up.

Recruiters face the opposite version of the same problem. They are often asked to screen technical talent without fully understanding what strong technical fit actually looks like. The result is weak filtering, irrelevant candidate pipelines, and hiring managers wasting time on people who were never truly eligible for the role.

CULLD was born to remove that waste. The project is built on a simple belief: hiring should be structured, evidence-based, and agent-assisted, so both sides spend less time performing the process and more time reaching actual fit.

## 02 - MY ROLE & CONTRIBUTION

I defined the product direction, narrowed the operating model, and shaped the system into an agent-first recruiting platform instead of a generic hiring marketplace.

That work included:

- defining the four-user model across candidates, recruiters, companies, and academic institutions
- designing the trust layer around company verification, academic verification, and ownership checks
- structuring the matching system around staged filtering and LLM-assisted scoring instead of vague recommendation logic
- introducing confidence-aware evaluation so actual experience, inferred experience, and claimed skills do not all count the same way
- shaping the recruiter portal as a support surface for trust, billing, settings, and analytics rather than a place that bypasses the core agent workflow
- designing the early credits model so monetization aligns with successful value delivery rather than empty activity

A big part of the project was deciding what *not* to build. That mattered, because recruiting products get messy fast when every workflow is allowed to leak into every other surface.

It is also being built as a hackathon submission for the AI Agent Olympics in Milan, which forced the product to prove something specific under time pressure: that agent-native recruiting can be more structured, more credible, and more useful than a generic AI layer on top of broken hiring workflows.

## 03 - CULLD ARCHITECTURE

CULLD_FLOW_DIAGRAM

## 04 - TOOLS USED

CULLD combines application logic, structured data, and AI-assisted evaluation into one system.

- **Python** for backend logic and workflow orchestration
- **MCP server patterns** for agent-facing tool access
- **Structured database models** for candidates, recruiters, companies, verification state, credits, and persisted matches
- **LLM classification and scoring flows** to support resume import, skill interpretation, confidence weighting, and fit ranking
- **Cloudflare Pages and worker infrastructure** for the public site and recruiter portal surfaces

The stack mattered less than the discipline behind it. The goal was to support a product where trust, access control, matching quality, and recruiter utility all reinforce each other.

## 05 - CHALLENGES AND HOW I SOLVED THEM

One major challenge was scope control. A hiring platform can easily expand into job posting, applicant tracking, messaging, scheduling, and a dozen other surfaces. I solved that by keeping the center of gravity on agent-native search and trust infrastructure.

Another major challenge was match quality. Early on, it was too easy for the system to surface the wrong candidates because keyword overlap alone is not a reliable signal of fit. I solved that by designing a staged matching system that combines code-based filtering with LLM-assisted scoring, then tightening the scoring logic around actual experience, inferred experience, and skill confidence instead of treating every claimed term as equally meaningful.

Verification design was another challenge. The system needed ways to increase credibility without making onboarding too slow or expensive. That led to a layered approach, with instant signals where possible and slower, stronger verification paths where needed.

Monetization was also a product challenge. Charging for the wrong actions would push the platform toward spammy recruiter behavior. I solved that by anchoring the early credits model around successful contact reveal actions instead of superficial activity.

Privacy and access control turned out to be just as important as ranking. If a system helps agents act on people data, it has to be strict about who can see what, when identity is revealed, and how passive candidates are protected. That became a design problem as much as a technical one, and it pushed the product toward persisted opportunity-specific matches, controlled recruiter visibility, and stronger ownership boundaries.

## 06 - WHAT I LEARNED

CULLD sharpened how I think about multi-sided systems under real constraints.

The clearest lessons so far:

- agent-first products need tighter boundaries than human-first products, not looser ones
- better matching depends on evidence quality, not just more ranking logic
- verification is product design, not just compliance overhead
- trust signals only matter when they change access and workflow behavior
- monetization should reward real outcomes, not platform motion
- a portal can support the system without becoming the system

The most useful takeaway was simple: in a crowded market, the leverage often comes from choosing a stricter operating model, not from shipping more features.

## 07 - HOW AI SUPPORTED THE WORK

AI supported exploration, iteration, and implementation speed, especially when shaping product structure, testing framing, and pressure-testing workflow boundaries.

It was useful for helping me reason through tradeoffs, refine product language, and move faster through architecture and UX decisions. But the key product judgments still needed to stay deliberate, especially around trust models, pricing logic, and system scope.

## 08 - CURRENT STATE

CULLD is still in progress, but it is already past the idea stage. The public surface is live at <a href="https://culld.xyz" target="_blank" rel="noopener noreferrer">culld.xyz</a>, the core MCP flow is real, and the underlying product logic around verification, matching, privacy, and recruiter monetization is now coherent.

It is being prepared as a hackathon submission for the AI Agent Olympics in Milan, which makes the current version useful in a specific way. It is not trying to solve all of hiring. It is proving a tighter thesis: that agent-native recruiting works better when trust, visibility, and matching are designed together from the start.

That is what makes it one of the strongest product-thinking projects in the portfolio.
