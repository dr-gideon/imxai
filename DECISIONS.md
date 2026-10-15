# DECISIONS.md

## 2026-05-24 — BART preview-first portfolio addition

- Dr. Wells requested BART be prepared on the IM x AI landing page and as a project page using the existing Tailscale preview.
- Decision: keep the work preview-only and do not deploy to live until Dr. Wells reviews and approves.
- Decision: present BART as `PRIVATE DEMO READY`, not live/public, because the hosted workflow is currently private and mock-safe by default.
- Decision: emphasize workflow safety rather than raw integration novelty: matching, missing-contact pause, targeted BP re-sync, mock/live controls, Jotform exact-value handling, Teams cards, and SQLite audit state.
- Decision: use a dedicated BART workflow partial instead of inline complex HTML in Markdown, matching the established project-page pattern.

## 2026-10-15 — Project screenshot galleries and POC App production status

- Decision: update POC App from customer testing to `Live in production` after customer acceptance.
- Decision: use one data-driven, dependency-free modal for project screenshots rather than separate project pages or a third-party gallery library.
- Decision: enable the gallery only for projects with screenshot data; POC App and World Cup Sweepstake receive galleries in this release.
- Decision: preserve each card's external link as a separate action so `Watch demo` and `View code` do not open the modal.
- Decision: allow vertical scrolling for tall screenshots, reset the scroll position between slides, and support backdrop, close button, Escape, and arrow-key controls.
- Decision: publish all four supplied World Cup Sweepstake images, including the shared results board, as approved by Dr. Wells.
