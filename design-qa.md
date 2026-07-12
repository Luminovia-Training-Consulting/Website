**Design QA**

- Source visual truth: `C:/Users/Carina/AppData/Local/Temp/codex-clipboard-8e880e42-341b-44f9-bc02-e20da3c081ce.png`, `C:/Users/Carina/AppData/Local/Temp/codex-clipboard-4ded2e9a-9304-44fd-8e68-ce8e2f9d41fa.png`, and `C:/Users/Carina/AppData/Local/Temp/codex-clipboard-8564d877-5c1e-44f4-98f4-07d79a942f49.png`
- Implementation screenshot: unavailable after the local browser rejected the post-change reload
- Intended viewports: desktop and 390 x 844 mobile
- State: home page, dark theme, capability visual, consulting process, and section jump navigation

**Full-view comparison evidence**

The supplied screenshots show overlapping absolute-positioned capability nodes, a mobile process whose headings and descriptions do not share a coherent alignment, and a clipped section navigation without an obvious horizontal-scroll affordance. The implementation replaces those structures with bounded grids and a focusable scroll track. A post-change browser capture could not be produced in the available browser session.

**Focused region comparison evidence**

- Capability visual: changed from six independently positioned cards to a two-column bounded grid below the brand lockup.
- Consulting process: changed to one compact card per step on mobile, with a shared number/title/copy grid and aligned vertical guide.
- Section navigation: constrained to the viewport, supports touch momentum, keyboard focus, and a visible thin scrollbar.

**Findings**

- P1: Post-change visual comparison is unavailable because the local browser blocked the reload. Build and component verification passed, but final pixel-level QA remains unverified.

**Comparison history**

- Initial P1 overlap: removed absolute node positioning and fixed node dimensions.
- Initial P1 mobile process alignment: replaced the loose timeline layout with bounded step cards.
- Initial P2 navigation clipping: added shared overflow constraints, keyboard focus, and visible scrollbar styling.
- Post-fix visual evidence: blocked by browser policy.

**Implementation checklist**

- [x] Remove capability-node overlap at narrow desktop and tablet widths.
- [x] Reduce visual glow and card decoration for a more restrained B2B presentation.
- [x] Rebuild the mobile consulting process layout.
- [x] Make every shared section jump navigation horizontally scrollable.
- [x] Verify lint, tests, production build, and dependency audit.
- [ ] Capture a post-change desktop/mobile browser comparison.

final result: blocked
