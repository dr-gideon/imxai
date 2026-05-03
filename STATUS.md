# STATUS.md

## 2026-04-13

### Current state
- Homepage preview refined and approved for live deploy.
- Preview-first workflow remained in place throughout iteration, with live deploy held until explicit approval.

### Completed changes
- Widened homepage container on desktop and matched header/nav width to it.
- Simplified header branding treatment and kept `IM x AI` aligned with nav sizing.
- Reordered project cards to:
  1. ARGUS
  2. CULLD
  3. THAWNE
  4. DIBNY
- Updated hero section:
  - retained large original-font name treatment
  - added trust line: `8+ years working across SAP Business One, reporting systems, data workflows, and AI-assisted product development.`
  - removed the extra secondary tagline after it felt disconnected
  - changed availability pill text from `Available to work` to `Open to roles`
  - tuned spacing between hero name, trust line, pills, and ribbon
  - added right-side scroll cue with a subtle animated red running line
- Updated experience and hackathon entries with supporting impact lines and styled those lines italic.
- Tightened footer/contact spacing and fixed the homepage footer gap issue by removing homepage bottom padding that was pushing the footer away from the divider.
- Improved skills ribbon motion by replacing the rough half-width reset with a first-group-width reset and time-based animation for a smoother loop.

### Reference notes
- React Bits (`https://reactbits.dev/`) is a good future inspiration source for portfolio/site motion ideas.
- Best-fit references for restrained web motion were Blur Text and the smoother looping/marquee feel.
- For this project, React Bits should remain inspiration only, not copied or installed directly without explicit approval.

### Deployment
- Approved preview changes were committed as `9ebdb2d` (`Refine homepage layout and motion`) and pushed to `main`.
- Live site confirmed updated successfully at `https://imxai.xyz/`.
- Dr. Wells confirmed the live result looks beautiful.

### Project pages work in progress
- Began building individual project pages, using ARGUS as the first case-study template.
- Stronger portfolio content structure chosen for project pages:
  - Inspiration
  - My Role & Contribution
  - project-specific systems/architecture diagram
  - Tools Used
  - Challenges and How I Solved Them
  - What I Learned
  - How AI Supported the Work
  - Current State
- Project-page hero direction was iterated heavily after using external case-study references.
- Important lesson from this pass: the first hero implementation became too brittle after repeated layout patches, so the correct fix was a clean reset, not more incremental CSS edits.
- Project pages now run through a dedicated template/CSS pair:
  - template: `layouts/_default/single.html`
  - stylesheet: `static/css/project-page-v2.css`
- `baseof.html` now includes `/css/project-page-v2.css` so project pages can evolve separately from homepage styling.

### ARGUS status
- ARGUS is now the polished reference implementation for the IM x AI case-study pages.
- Final ARGUS page decisions in preview:
  - landing hero shows only `ARGUS`, tagline, and metadata facts table
  - facts table sits lower in the hero for a cleaner landing composition
  - body copy is left-positioned with wider measure and balanced side spacing
  - section headers use small uppercase numbered labels like `01 - INSPIRATION`
  - full-width divider lines separate sections
  - project-page scroll cue added on the right with amber accent
  - old `Key Decisions` section removed
  - new `03 - ARGUS FLOW` section added with a minimal engineering-style sequence diagram
- ARGUS flow diagram implementation:
  - content placeholder token in `content/projects/argus.md`
  - rendered via `layouts/_default/single.html`
  - partial lives at `layouts/partials/argus-flow.html`
- Important note: avoid inline raw HTML for complex diagrams inside Markdown. Use the placeholder + template partial path instead.

### CULLD status
- CULLD was brought onto the same overall page pattern as ARGUS.
- CULLD inspiration section was rewritten to reflect the real project motivation more sharply:
  - candidates wasting time tailoring LLM-assisted CVs, browsing poor-fit roles, and chasing recruiters
  - recruiters lacking enough technical judgment for technical screening and wasting hiring-manager time with weak candidates
- Diagram exploration for CULLD:
  - tested ecosystem / interaction map as a standalone preview and rejected it
  - tested layered architecture as a standalone preview and selected it as the correct fit
- CULLD now uses `03 - CULLD ARCHITECTURE` with a layered architecture diagram in the project page.
- CULLD diagram implementation:
  - content placeholder token in `content/projects/culld.md`
  - rendered via `layouts/_default/single.html`
  - partial lives at `layouts/partials/culld-flow.html`
- Updated CULLD case-study content to explicitly mention the live public site at `https://culld.xyz` and frame the project more clearly as a hackathon submission for the AI Agent Olympics in Milan.
- Re-read HUNTER status and strengthened the CULLD challenges section to cover the real matching-quality problem: wrong candidates surfacing under naive matching, then solving it with staged matching and confidence-aware scoring across actual experience, inferred experience, and skills. Also surfaced the stronger privacy/access-control angle.
- Ran a final CULLD polish pass so the page reads less like a generic case study and more like a real system built under hackathon constraints, with stronger emphasis on verification, persisted matches, recruiter portal scope, and evidence-based matching.
- Dr. Wells previewed the updated CULLD page and confirmed the result is great.

### THAWNE status
- Re-read `labs/projects/thawne/STATUS.md` and tightened the THAWNE IM x AI project page so it reflects the actual live system, not an abstract concept.
- Brought the THAWNE page back into the same IM x AI case-study structure used by ARGUS and CULLD:
  - two intro blocks before sectioned content
  - numbered section headings in the same format
  - dedicated `03 - THAWNE SYSTEM` placeholder section for a diagram
  - removed the off-pattern `Overview` and trailing `Key Decisions` sections
- Updated the page to emphasize:
  - live public surface at `https://thawne.xyz`
  - MCP + REST + MPP as current product surface, not future ambition
  - daily sweep ingestion and structured knowledge model
  - chain/intelligence infrastructure instead of generic ecosystem-monitoring language
  - explicit autonomy guardrails and the first real paid outbound Brave call under policy control
  - a short current-state mention of the Notion MCP hackathon bridge/submission thread, including the dev.to submission link

- Built a standalone THAWNE system-diagram preview and published it as `static/thawne-flow-01.html` for review.
- Dr. Wells approved the THAWNE diagram direction and tooltip style.
- Final integration completed:
  - added `layouts/partials/thawne-flow.html`
  - wired `THAWNE_SYSTEM_DIAGRAM` through `layouts/_default/single.html`
  - extended `static/css/project-page-v2.css` for the THAWNE 5-column architecture layer and tooltip styling used for `MCP Server` and `MPP Access`
  - adjusted spacing so the divider below the THAWNE diagram no longer overlaps the diagram area

### DIBNY status
- Re-read `labs/projects/dibny/STATUS.md` and tightened the DIBNY IM x AI project page so it reflects the actual live system instead of a concept-only framing.
- Brought the DIBNY page into the same IM x AI case-study structure used by ARGUS, CULLD, and THAWNE:
  - two intro blocks before sectioned content
  - matching numbered section headings
  - dedicated `03 - DIBNY SYSTEM` placeholder section for a future diagram
  - removed the off-pattern `Overview` and trailing `Key Decisions` sections
- Updated the page to emphasize:
  - live public surface at `https://dibny.xyz`
  - dual payment rails: Tempo MPP for MCP and Base x402 for REST
  - the real game mechanics: 8×8 grid, constrained randomness, probability-ramp ending, hidden style reveal
  - public viewer and real mainnet participation instead of abstract game concept language
- Rewrote the inspiration section to reflect the actual origin story: excitement around Tempo / MPP / x402 / MCP combined with childhood dots-and-lines notebook art.
- Added the DIBNY MPPScan listing link to the current-state section as secondary proof of the live public machine-payments surface.
- Added a per-project page class in the shared project template and used it to switch DIBNY's scroll cue accent to green without affecting ARGUS, CULLD, or THAWNE.

- Built a standalone DIBNY system-diagram preview and published it as `static/dibny-flow-01.html` for review before wiring it into the page.
- Final integration completed:
  - added `layouts/partials/dibny-flow.html`
  - wired `DIBNY_SYSTEM_DIAGRAM` through `layouts/_default/single.html`
  - extended `static/css/project-page-v2.css` for DIBNY's green-accent architecture layers

### Homepage status
- Updated homepage project-card data and styling so THAWNE now shows `PHASE 4 PLANNED` in blue and DIBNY shows `LIVE` in green.
- Changed THAWNE's project-page scroll cue accent to blue so its page state matches the homepage card signal.
- Switched the homepage scroll cue from flow-based spacing to project-page-style absolute positioning inside `.hero-copy`, so it can align with the trust line cleanly without moving the ribbon.
- Moved the homepage skills ribbon slightly downward on its own after the cue-positioning change pulled it upward visually.

### Deployment
- Dr. Wells approved the IM x AI preview state as deploy-ready and gave the magic phrase.
- Deployed the latest IM x AI changes by committing `4f77a7f` (`Refine project pages and homepage signals`) and pushing `main` to `dr-gideon/imxai`.
- Cloudflare Pages build failed because the shared project-page template referenced `argus-flow.html` and `culld-flow.html`, but those two partials had not been committed yet.
- Fixed by committing `e03d1c5` (`Add missing project diagram partials`) and pushing `main` again.
- After the build succeeded, the homepage rendered correctly but the live project pages still did not visually match preview, so I hardened `static/css/project-page-v2.css` and pushed `cb1261b` (`Harden project page styling`).
- Found the real remaining issue: `content/projects/argus.md` and `layouts/_default/baseof.html` were still only local, so ARGUS stayed on old content and the project-page base layout changes never reached production.
- Fixed by committing `1968882` (`Publish project page base template updates`) and pushing `main` again.

### Deployment result
- Cloudflare Pages rebuilt successfully from `1968882` and the live site now reflects the homepage and project-page changes correctly.

### Lesson
- Before future site deploys, explicitly verify `git status` for missing tracked files in templates, partials, content pages, and shared base/layout files. The main failure here was not the push itself, but leaving required local files uncommitted.

## 2026-04-27 — NORA portfolio preview

### Current state
- Added NORA to the local IM x AI portfolio preview only; no commit, push, or live deploy was performed.
- Preview server is running from `labs/projects/imxai` at `http://100.86.180.12:1314/`.
- NORA page preview is available at `http://100.86.180.12:1314/projects/nora/`.

### Completed changes
- Added NORA to `data/projects.yaml` as a homepage project card with status `LIVE DEMO READY`.
- Added `content/projects/nora.md` using the same project-page case-study template as ARGUS, CULLD, THAWNE, and DIBNY:
  - Inspiration
  - My Role & Contribution
  - NORA System
  - Tools Used
  - Challenges and How I Solved Them
  - What I Learned
  - How AI Supported the Work
  - Current State
- Added `layouts/partials/nora-flow.html` with a layered workflow/system diagram covering intake, decision, control, execution, and operator surface layers.
- Updated `layouts/_default/single.html` to render the `NORA_SYSTEM_DIAGRAM` placeholder through the new partial.
- Added purple accent styling for NORA's project-page scroll cue, diagram core layers, and homepage `LIVE DEMO READY` status badge.

### Verification
- Ran `hugo --minify` successfully. Hugo built 6 pages with the existing section-layout warning only.
- Started local Hugo preview on port `1314` with `hugo server --bind 0.0.0.0 --baseURL http://100.86.180.12:1314/ --port 1314 --disableFastRender`.
- Verified via local curl that the homepage contains the NORA card and the NORA project page renders with `LIVE DEMO READY` and the integrated architecture diagram.

### Deployment
- Not deployed. Waiting for Dr. Wells' review and explicit approval before live deployment.

## 2026-04-27 — NORA portfolio inspiration refinement

### Completed changes
- Rewrote NORA's Inspiration section to reflect Dr. Wells' real motivation: automating repetitive service-call logging so a small support team does not lose a person to inbox logging and folder movement.
- Added the rota/visibility problem explicitly: operators need one place to see who is working, who is on support, who is unavailable, and who is on lunch.
- Updated NORA's preview status from `LIVE DEMO READY` to `LIVE INTERNAL PILOT` so the page stays strong but honest.
- Updated the homepage NORA summary and impact copy to mention service-call logging, rota visibility, consultant availability, approval, and controlled execution.

### Verification
- Ran `hugo --minify` successfully.
- Verified generated preview contains `LIVE INTERNAL PILOT` and the revised inspiration wording.
- Still preview-only; no commit, push, or live deploy performed.

## 2026-04-27 — NORA card moved first

### Completed changes
- Reordered `data/projects.yaml` so NORA is the first project card on the landing page.
- Existing order after NORA is ARGUS, CULLD, THAWNE, DIBNY.

### Verification
- Ran `hugo --minify` successfully.
- Verified generated homepage ordering puts NORA before ARGUS, CULLD, THAWNE, and DIBNY.
- Still preview-only; no commit, push, or live deploy performed.

## 2026-04-27 — ARGUS status updated

### Completed changes
- Updated ARGUS status from `WORK IN PROGRESS` to `PRE-LAUNCH` in the homepage project data and ARGUS project page frontmatter.
- Added homepage status styling for `PRE-LAUNCH` with an amber accent.

### Verification
- Ran `hugo --minify` successfully.
- Verified generated homepage and ARGUS project page both contain `PRE-LAUNCH`.
- Still preview-only; no commit, push, or live deploy performed.

## 2026-04-27 — ARGUS status revised to final build

### Completed changes
- Revised ARGUS status from `PRE-LAUNCH` to `FINAL BUILD STAGE` in the homepage project data and ARGUS project page frontmatter.
- Updated homepage status styling class from prelaunch naming to final-build naming while keeping the amber accent.

### Verification
- Ran `hugo --minify` successfully.
- Verified generated homepage and ARGUS project page both contain `FINAL BUILD STAGE`.
- Still preview-only; no commit, push, or live deploy performed.

## 2026-04-27 — NORA portfolio live deployment

### Deployment
- Dr. Wells approved the preview and gave the magic phrase.
- Ran final `hugo --minify` before deployment; build succeeded with the existing section-layout warning only.
- Committed and pushed the approved changes to `main`.
- Commit: `c675d08` (`Add NORA portfolio case study`).

### Live result
- Cloudflare Pages picked up the push and the live site updated successfully.
- Verified live homepage contains NORA with `LIVE INTERNAL PILOT`.
- Verified live NORA page contains the revised inspiration wording about service-call logging taking a person out of the support team.

### Included changes
- NORA added as the first landing-page project card.
- NORA full case-study page added with system diagram and purple accent styling.
- ARGUS status updated to `FINAL BUILD STAGE`.
- Preview-first workflow completed before live deploy.

## 2026-04-27 — Project status pill color fix

### Completed changes
- Fixed landing-page project status pills so non-default statuses have visible colored borders/backgrounds, not just subtle text color.
- Covered `LIVE INTERNAL PILOT` / demo styling, `FINAL BUILD STAGE`, `PHASE 4 PLANNED`, and `LIVE` for consistency.

### Verification
- Ran `hugo --minify` successfully.
- Verified generated homepage still contains `project-status-demo` and `project-status-final-build` classes.

## 2026-04-27 — Live portfolio update confirmed

### Confirmation
- Dr. Wells checked the live IM x AI landing page after the status-pill styling fix and confirmed everything looks good.
- Final live state for this pass:
  - NORA is first on the landing-page project cards.
  - NORA status is `LIVE INTERNAL PILOT` with visible purple pill styling.
  - NORA has a full project page and system diagram.
  - ARGUS status is `FINAL BUILD STAGE` with visible amber pill styling.
  - Status pill styling is consistent across project cards.

### Resume point
- No further live changes are pending from this portfolio pass.
- Existing untracked preview artifacts remain local and were not included in the deployment.

## 2026-05-03 — Experiments section preview

### Current state
- Created a preview-only concept for a new portfolio section called `Experiments`.
- Preview file: `tmp/experiments-preview.html`.
- Hosted webchat preview copy: `/home/giddy/.openclaw/canvas/documents/imxai-experiments-preview/index.html`.
- No commit, push, or live deployment was performed.

### Preview content
- The section is framed as a scratch archive, not a graveyard.
- Included scratched/archived projects:
  - TURTLE — Hyperliquid perps trading bot that never went live.
  - WALLY — iPhone arbitrage deal finder MVP that was archived before deploy.
  - zOOm — stopped early after existing tools covered enough of the use case.
  - IRIS — older SAP B1 MCP-first direction superseded by ARGUS.
  - THE MONITOR — human-AI collaboration portfolio/platform concept archived from active projects.
- Suggested placement: after `Selected work` and before `About` so the main projects still carry the page.

### Verification
- Generated standalone HTML preview successfully and copied it into the Control UI canvas preview directory.
- Confirmed the preview file contains the experiments section and expected archived project names.

### Deployment
- Not deployed. Waiting for Dr. Wells' review and explicit approval before any live integration.

## 2026-05-03 — Experiments Tailscale preview hosting

### Current state
- Hosted the standalone `Experiments` preview on Tailscale for review.
- URL: `http://100.86.180.12:1315/`
- Served from: `tmp/experiments-preview-host/index.html`
- Server PID file: `tmp/experiments-preview-host/server.pid`
- Server log: `tmp/experiments-preview-host/server.log`

### Verification
- Confirmed the Tailscale URL returns the Experiments preview HTML.

### Deployment
- Not deployed to live.
- No commit or push performed.
- Awaiting Dr. Wells' review and approval before integrating into the Hugo site.

## 2026-05-03 — Experiments integrated into Hugo preview

### Current state
- Dr. Wells clarified the `Experiments` section should be placed into the existing IM x AI Hugo preview rather than served as a separate standalone page.
- Integrated `Experiments` into the homepage preview only.
- Preview URL: `http://100.86.180.12:1314/#experiments`
- Stopped the separate `1315` standalone preview server.

### Changed files
- Added `data/experiments.yaml` for scratched-project content.
- Updated `layouts/index.html` to render the `Experiments` section after `Selected work` and before `About`.
- Updated `hugo.toml` to add the `Experiments` nav item.
- Updated `static/css/style.css` with experiment-card layout, responsive behavior, and archive styling.

### Included experiments
- TURTLE
- WALLY
- zOOm
- IRIS
- THE MONITOR

### Verification
- Ran `hugo --minify` successfully. The existing Hugo section-layout warning remains unchanged.
- Started Hugo preview on Tailscale port `1314`.
- Verified via curl that the preview homepage contains `id="experiments"`, `THE MONITOR`, and the `/#experiments` nav anchor.

### Deployment
- Not deployed to live.
- No commit or push performed.
- Awaiting Dr. Wells' review and approval before any live deployment.

## 2026-05-03 — Experiments moved to separate preview page

### Current state
- Dr. Wells asked to remove `Experiments` from the landing page body, keep it in the navigation, move it to a separate page, and include suspended projects.
- Preview URL: `http://100.86.180.12:1314/experiments/`
- The landing page nav now links to `/experiments/`.
- The landing page body no longer contains the Experiments section.

### Changed files
- Added `content/experiments.md` with layout `experiments`.
- Added `layouts/_default/experiments.html` for the standalone archive page.
- Reworked `data/experiments.yaml` into grouped content:
  - Scratched experiments
  - Suspended or paused projects
- Updated `layouts/index.html` to remove the landing-page Experiments section.
- Updated `hugo.toml` so the nav points to `/experiments/`.
- Updated `static/css/style.css` for the standalone Experiments page layout.

### Included projects
- Scratched: TURTLE, WALLY, zOOm, IRIS, THE MONITOR.
- Suspended/paused: HUNTER / CULLD, CISCO, VIBE.

### Verification
- Ran `hugo --minify` successfully. The existing Hugo section-layout warning remains unchanged.
- Restarted the Tailscale Hugo preview on port `1314`.
- Verified via curl:
  - Homepage nav contains `/experiments/`.
  - Homepage no longer contains `id="experiments"`.
  - `/experiments/` contains `HUNTER / CULLD`, `CISCO`, and `THE MONITOR`.

### Deployment
- Not deployed to live.
- No commit or push performed.
- Awaiting Dr. Wells' review and approval before any live deployment.

## 2026-05-03 — CULLD removed, GRODD and EnterpryzeMCP added to preview

### Current state
- Dr. Wells approved the Experiments preview direction and asked to update the main project portfolio set.
- Removed CULLD from the homepage project cards and removed its project page from the preview source.
- Added GRODD and EnterpryzeMCP to the homepage project cards and project pages.
- Preview URL: `http://100.86.180.12:1314/`

### Changed files
- Updated `data/projects.yaml`:
  - removed `culld`
  - added `grodd`
  - added `enterpryzemcp`
- Added `content/projects/grodd.md`.
- Added `content/projects/enterpryzemcp.md`.
- Moved `content/projects/culld.md` to `.trash/2026-05-03-culld-portfolio-removal/culld.md` instead of deleting it outright.
- Updated `layouts/index.html` with status classes for the new project states.
- Updated `static/css/style.css` with styling for:
  - `PLANNING / LOCAL PILOT`
  - `PUBLIC DEMO READY`

### Project summaries added
- GRODD: installable Peppol submission product for SAP Business One invoices and credit notes, built around a canonical document model, local backend, dashboard, SAP B1 SQL connector, validation, and persisted processing runs.
- EnterpryzeMCP: hosted MCP server for Enterpryze sales-order workflows, with public setup docs, bearer-protected MCP endpoint, read/analysis tools, guarded create flow, VAT allowlist, audit logging, and Cloudflare Tunnel.

### Verification
- Ran `hugo --minify --cleanDestinationDir` successfully. The existing Hugo section-layout warning remains unchanged.
- Restarted the Tailscale Hugo preview on port `1314`.
- Verified via curl:
  - Homepage links `/projects/grodd/`.
  - Homepage links `/projects/enterpryzemcp/`.
  - Homepage no longer links `/projects/culld/`.
  - `/projects/grodd/` renders.
  - `/projects/enterpryzemcp/` renders.
  - `/projects/culld/` returns 404 after stale generated output was cleaned.

### Deployment
- Not deployed to live.
- No commit or push performed.
- Awaiting Dr. Wells' review and explicit approval before live deployment.

## 2026-05-03 — GRODD and Enterpryze MCP preview polish

### Current state
- Applied Dr. Wells' requested visual fixes to the preview only.
- Preview URL: `http://100.86.180.12:1314/`
- Enterpryze MCP page URL is now `http://100.86.180.12:1314/projects/enterpryze-mcp/`.

### Completed changes
- Changed `EnterpryzeMCP` to `Enterpryze MCP` on:
  - homepage project card
  - project page title
  - project page body references where appropriate
- Updated the homepage card slug/link from `/projects/enterpryzemcp/` to `/projects/enterpryze-mcp/` to match the spaced page title.
- Added extra hero spacing between the Enterpryze MCP title and support/tagline line.
- Matched new project-page scroll cue colors to homepage status pills:
  - GRODD: blue, matching `PLANNING / LOCAL PILOT`
  - Enterpryze MCP: purple, matching `PUBLIC DEMO READY`

### Verification
- Ran `hugo --minify --cleanDestinationDir` successfully. Existing Hugo section-layout warning remains unchanged.
- Restarted the Tailscale Hugo preview on port `1314`.
- Verified via curl:
  - Homepage shows `Enterpryze MCP`.
  - Homepage links `/projects/enterpryze-mcp/`.
  - Homepage no longer contains `EnterpryzeMCP`.
  - Enterpryze MCP project page renders with `<h1 class="project-v2-title">Enterpryze MCP</h1>`.
  - GRODD and Enterpryze MCP project pages have the expected page classes for scroll-cue styling.

### Deployment
- Not deployed to live.
- No commit or push performed.

## 2026-05-03 — Enterpryze MCP hero spacing and scroll cue correction

### Current state
- Dr. Wells reported that only the Enterpryze MCP name spacing was visibly fixed; the hero support-line spacing and scroll cue colors were still wrong.

### Completed changes
- Increased Enterpryze MCP hero title/support-line separation more aggressively:
  - project-specific title/tagline gap set to `86px`
  - title size reduced slightly on that page to prevent overlap
  - title layer nudged upward
- Matched the full scroll cue treatment, not only the animated line:
  - GRODD cue text/track/animated line now uses the blue status color family
  - Enterpryze MCP cue text/track/animated line now uses the purple status color family
- Added a cache-busting query string to `project-page-v2.css` in `baseof.html` so the preview browser loads the updated CSS.

### Verification
- Rebuilt with `hugo --minify --cleanDestinationDir` successfully. Existing section-layout warning remains unchanged.
- Restarted the Tailscale Hugo preview.
- Verified the Enterpryze MCP page includes the cache-busted project stylesheet and the served CSS includes the updated spacing and scroll cue rules.

### Deployment
- Not deployed to live.
- No commit or push performed.

## 2026-05-03 — Scroll cue neutral text correction

### Current state
- Dr. Wells clarified the scroll cue label/track should remain neutral like the other project pages; only the running animated line should use the project status color.

### Completed changes
- Removed project-specific scroll cue text/track color overrides for:
  - GRODD
  - Enterpryze MCP
- Kept only the project-specific animated running-line color overrides:
  - GRODD blue
  - Enterpryze MCP purple

### Verification
- Rebuilt with `hugo --minify --cleanDestinationDir` successfully. Existing section-layout warning remains unchanged.
- Restarted the Tailscale Hugo preview.
- Verified served CSS still includes the project-specific `scroll-cue-line::after` colors and no longer includes project-specific `.project-v2-scroll-cue` text/track overrides for GRODD or Enterpryze MCP.

### Deployment
- Not deployed to live.
- No commit or push performed.
