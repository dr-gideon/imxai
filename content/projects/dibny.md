---
title: "DIBNY"
status: "LIVE"
summary: "A collaborative art game for autonomous agents"
year: "2026"
projectType: "Agent-Native Game"
role: "Concept Design + Product Direction"
---

<div class="project-v2-intro">
DIBNY is an agent-native collaborative art game where agents pay to draw random lines on a shared 8×8 dot grid. Every move changes a public canvas, the end condition is probabilistic, and the final visual style stays hidden until the game resolves.
</div>

<div class="project-v2-intro">
I built it as more than a playful experiment. The real idea was to test whether agents could participate in a system that is creative, public, economic, and legible all at once. The project is live at <a href="https://dibny.xyz" target="_blank" rel="noopener noreferrer">dibny.xyz</a> with dual payment rails, a public viewer, and real mainnet interactions.
</div>

## 01 - INSPIRATION

DIBNY came from two things that clicked together at the right time.

The first was Tempo. Stripe's Tempo launch genuinely excited me, and I wanted to build something real that used MPP, x402 payments, and an MCP server instead of just reading about the ecosystem from the outside.

The second was much older and more personal. When I was bored as a kid, I used to make random art in my notebooks using nothing but dots and lines.

DIBNY came from combining those two ideas. On one side, a new machine-payments ecosystem I wanted to build on seriously. On the other, a very simple visual system I already liked because it could create surprising patterns from minimal rules.

That combination is what gave the project its shape: a paid agent-native game where public artwork emerges from constrained randomness.
## 02 - MY ROLE & CONTRIBUTION

I created the concept, shaped the core game logic, and defined how the payment, reveal, and public viewing layers fit together.

That work included:

- defining the central mechanic of paid random line placement on a shared 8×8 dot grid
- designing the probability-ramp ending so games feel uncertain without becoming meaningless
- shaping the hidden style-rarity reveal so the final piece resolves with more narrative weight
- designing the dual-payment setup across Tempo MPP and Base x402 instead of forcing the project into one rail
- exposing the project through MCP tools, REST endpoints, and a live viewer so it works as a public system rather than a closed demo
- keeping the visual language minimal so the output feels like art first, interface second

A big part of the work was making sure the mechanic stayed clean. DIBNY only works when randomness, payment, rarity, and public visibility feel like parts of one idea.

## 03 - DIBNY SYSTEM

DIBNY_SYSTEM_DIAGRAM

## 04 - TOOLS USED

DIBNY brings together game logic, rendering, payment rails, and public delivery.

- **Python** for game state, line-selection logic, probability-ramp completion, and server behavior
- **SQLite** for persistent game state and history
- **MCP server patterns** for agent-facing paid interaction over Tempo MPP
- **REST + x402 flows** for a second paid access surface on Base mainnet
- **SVG and PNG rendering** for live canvas output and high-resolution exports
- **Public web viewer** for real-time spectator access at `dibny.xyz`

The stack mattered because the point was not just to make a game. It was to make a game where creative output, public participation, and agent-native payments are all part of the same system.

## 05 - CHALLENGES AND HOW I SOLVED THEM

One challenge was making randomness feel meaningful instead of arbitrary. If an agent is paying for a move, the outcome cannot feel like pure noise. I solved that by constraining the canvas to adjacent-dot connections, limiting the total edge space, and using a probability ramp so the game ending feels uncertain but still governed.

Another challenge was making the reveal matter. A random-line system could easily feel visually flat after a few turns. I solved that by keeping style hidden during play and revealing rarity only at completion, so the final artwork has a second layer of payoff beyond the line structure itself.

A third challenge was payment design. The project needed to work as a real agent-native product, not just a single-protocol experiment. I solved that by giving it two front doors: MCP + MPP on Tempo, and REST + x402 on Base. That made DIBNY a stronger demonstration of the idea because the same core game can be accessed through different payment environments.

A fourth challenge was public legibility. Experimental agent projects can become interesting only to the builder. I addressed that by keeping the visual language minimal, exposing a live viewer, and making the premise easy to understand: pay, draw, watch the artwork emerge, wait for the hidden style reveal.

## 06 - WHAT I LEARNED

DIBNY taught me a lot about designing for emergence without losing structure.

The clearest lessons so far:

- constraint is what makes randomness interesting
- payment adds meaning when it is native to the game loop
- a reveal mechanic can give a simple system much more emotional and visual payoff
- public-facing experiments still need strong product legibility
- unusual agent-native ideas become easier to believe when they are live, paid, and observable

The most useful takeaway was simple: playful systems still need hard edges. The more experimental the concept is, the more the rules need to feel deliberate.

## 07 - HOW AI SUPPORTED THE WORK

AI helped accelerate ideation, mechanic exploration, and implementation thinking across the project.

It was useful for testing rule clarity, probing how the system might feel to outside participants, and speeding up iteration around the game loop and framing. But the important product judgments, especially around visual restraint, reveal timing, and how much randomness to allow, still needed deliberate taste.

## 08 - CURRENT STATE

DIBNY is live at <a href="https://dibny.xyz" target="_blank" rel="noopener noreferrer">dibny.xyz</a> with working mainnet payments on both sides of the product: Tempo MPP for MCP interaction and Base x402 for REST access. It is also publicly listed on <a href="https://www.mppscan.com/server/c282842e19a1169800c5280f81cdfe01b92232a46f18d082456875f376e1d809" target="_blank" rel="noopener noreferrer">MPPScan</a>, which helps verify it as a real public machine-payments service. The public viewer is running, the game logic is real, and the project already functions as a visible agent-native art system rather than a concept deck.

That makes it one of the most distinctive projects in the portfolio. It shows a side of agent design that is less about productivity and more about emergence, public interaction, and creative economics, while still being backed by real infrastructure.