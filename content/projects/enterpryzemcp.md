---
title: "Enterpryze MCP"
status: "PUBLIC DEMO READY"
summary: "A hosted MCP server for Enterpryze sales-order workflows"
year: "2026"
projectType: "Hosted MCP Server"
role: "Product + Systems Design"
---

<div class="project-v2-intro">
Enterpryze MCP is a hosted MCP server built on top of the Enterpryze Public API. It gives Claude, Codex, and other MCP clients a structured way to read, analyze, preview, and safely create sales orders without putting Enterpryze credentials on the user's machine.
</div>

<div class="project-v2-intro">
The current public demo is live behind a Cloudflare Tunnel at <a href="https://enterpryzemcp.getgideon.uk/setup" target="_blank" rel="noopener noreferrer">enterpryzemcp.getgideon.uk/setup</a>. The setup page is public, while the MCP endpoint itself requires bearer authentication, rate limiting, and guarded write flow controls.
</div>

## 01 - INSPIRATION

Enterpryze MCP came from a practical question: what would a company-facing MCP demo look like if it connected to a real business API, handled credentials safely, and did more than list records?

The goal was not to build a generic API proxy. The useful version had to be opinionated. It needed to expose the right sales-order tools, hide credentials server-side, support analysis workflows, and make writes safe enough for a demo database without pretending writes are harmless.

That made Enterpryze a good fit: real business data, clear sales-order endpoints, and enough structure to show how agent-native business-system tools should behave.

## 02 - MY ROLE & CONTRIBUTION

I shaped the product direction, defined the demo scope, and built the MCP server around a preview-first operating model.

That work included:

- choosing hosted Streamable HTTP MCP rather than local credential-heavy client setup
- implementing server-side Enterpryze authentication and token caching
- building read tools for sales orders and sales-order lines
- adding analysis tools for status summaries, top items, top customers, and salesperson performance
- adding newest-first ordering and safe document-date filters after Inspector testing exposed confusing default ordering
- creating a guarded `create_sales_order` flow with preview validation and explicit confirmation
- adding VAT-code allowlisting, value/quantity guardrails, and append-only audit logging
- deploying a public Cloudflare Tunnel with bearer auth and rate limiting
- preparing a public setup page for Claude Desktop users without exposing the shared token

The project was shaped through live testing in MCP Inspector and Claude Desktop, not just local assumptions.

## 03 - SYSTEM SHAPE

Enterpryze MCP sits between MCP clients and the Enterpryze Public API.

The public setup page explains how to connect. The MCP endpoint itself remains protected. Once connected, clients can call tools that perform structured reads, analysis, previews, and guarded writes against a test Enterpryze organisation.

The important safety pattern is preview before create. The server validates customer and item data, checks guardrails, applies a controlled VAT-code allowlist, returns a proposed payload, and only creates a sales order when `confirmCreate: true` is explicitly supplied.

## 04 - TOOLS USED

Enterpryze MCP uses a modern TypeScript MCP stack with public-demo deployment around it.

- **Node.js / TypeScript** for the MCP service
- **Fastify** for HTTP routing, health, setup pages, and MCP transport
- **Model Context Protocol SDK** for the Streamable HTTP MCP endpoint
- **Zod** for schema validation and tool input discipline
- **Enterpryze Public API** for sales-order reads and writes
- **Cloudflare Tunnel** for public demo access
- **Systemd user services** for the local MCP service and tunnel process

The public endpoint is designed to be easy for clients to reach, while still keeping credentials, tokens, and write authority controlled on the server.

## 05 - CHALLENGES AND HOW I SOLVED THEM

One challenge was sorting and tool clarity. Early Inspector testing showed that `list_sales_orders top=4` returned unexpected-looking documents because the API's default ordering was not useful for demos. I confirmed Enterpryze's working `$orderby` casing and changed the tools to default to newest-created sales orders.

Another challenge was write safety. A create tool is powerful, but risky if it behaves like a raw POST wrapper. I solved that with a preview-first flow, validation, max quantity and value guardrails, VAT-code allowlisting, explicit confirmation, and audit logging.

A third challenge was public access. The service needed to be reachable by Claude Desktop without exposing Enterpryze credentials or leaving `/mcp` open. I solved that with a Cloudflare Tunnel, bearer auth, rate limiting, public setup docs, and verification that unauthenticated MCP calls return 401.

## 06 - WHAT I LEARNED

Enterpryze MCP made the MCP product layer feel concrete.

The strongest lessons:

- business-system MCP tools should be shaped, not raw API mirrors
- tool schemas are UX, because agents and humans both infer behavior from them
- writes need preview, confirmation, validation, and audit from the start
- public setup pages help MCP adoption, but secrets must stay off the page
- Inspector testing is valuable because it reveals what a real user will misunderstand

## 07 - HOW AI SUPPORTED THE WORK

AI supported the project through implementation, schema refinement, test coverage, documentation, and repeated tool UX passes. It helped move quickly from a read-only skeleton to a public, guarded, client-tested MCP service.

The key human judgment was deciding where the server should be strict: credentials server-side, no raw proxy, preview before create, bearer auth on public MCP, and no token exposure in documentation.

## 08 - CURRENT STATE

Enterpryze MCP is public-demo ready.

Current public surfaces:

- setup page: <a href="https://enterpryzemcp.getgideon.uk/setup" target="_blank" rel="noopener noreferrer">enterpryzemcp.getgideon.uk/setup</a>
- MCP endpoint: `https://enterpryzemcp.getgideon.uk/mcp`
- health endpoint: `https://enterpryzemcp.getgideon.uk/health`

The MCP endpoint requires the shared bearer token, stored server-side in the encrypted vault. The setup page intentionally does not expose it.
