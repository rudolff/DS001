# Simple-DS — Claude context

## Project overview

React 19 + TypeScript design system built from the [Simple-DS Figma library](https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS).

- **Figma file key**: `osjbFR32m0tSBqUeRabMD8`
- **Figma MCP server**: remote, `https://mcp.figma.com/mcp` (OAuth-authorized via `/mcp`; no Figma desktop required)
- **Token prefix**: `--sds-*` (CSS custom properties, never hardcode values)
- **Package name**: `@simple-ds/ui`

## Directory structure

```
DS001/                          ← workspace root AND @simple-ds/ui package
├── src/
│   ├── components/[Name]/
│   │   ├── [Name].tsx          ← component + props
│   │   ├── [Name].module.css   ← scoped styles (only --sds-* tokens)
│   │   ├── [Name].stories.tsx  ← Storybook CSF3
│   │   ├── [Name].figma.tsx    ← Code Connect mapping
│   │   └── index.ts
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   └── spacing.css
│   └── index.ts                ← barrel export
├── apps/
│   └── example-app/            ← sample consumer app
├── .claude/skills/ds-sync.md   ← /ds-sync slash command
├── figma.config.json
└── CLAUDE.md
```

## Key rules

- Always use `--sds-*` CSS custom properties in `.module.css`. If a value doesn't exist as a token yet, add it to `src/tokens/colors.css`, `spacing.css`, or `typography.css` first.
- Never store the Figma access token in committed files. It is passed as `FIGMA_ACCESS_TOKEN=<token>` in the shell only.
- Code Connect (`*.figma.tsx`) parser constraints: no ternary expressions, no `??`, no computed values in `example` functions. Use `props: {}` with static examples when a clean mapping isn't possible.
- Figma property names use spaces: `'Value Type'`, `'Value State'` — not camelCase.

## All 23 components with Figma node IDs

| Component | Node ID | Figma property notes |
|-----------|---------|----------------------|
| Accordion | `7753:4779` | No direct prop mapping; use static example |
| Avatar | `9762:1103` | Type, Size, Shape |
| Button | `4185:3778` | Variant, Size, State |
| Card | `2142:11380` | Variant, Direction, Asset Type |
| Checkbox | `9762:1441` | `Value Type` (spaces), State |
| Dialog | `9762:696` | Type (Card/Sheet) |
| IconButton | `11:11508` | Variant, Size |
| Input | `2136:2263` | State |
| Menu | `9762:720` | No clean prop mapping; use static example |
| NavigationButton | `515:5459` | State, Direction, Size |
| NavigationPill | `7768:19970` | State |
| Notification | `124:8256` | Variant |
| Pagination | `9762:899` | No clean prop mapping; use static example |
| Radio | `9762:1412` | `Value Type` (spaces), State |
| SearchInput | `2236:14989` | State |
| Select | `2136:2336` | State |
| Slider | `589:17676` | State |
| Switch | `9762:1902` | `Value Type` (spaces), State |
| Tabs | `3729:13362` | No clean prop mapping; use static example |
| Tag | `56:8830` | Scheme, Variant |
| Text | `2087:8484` | 7 connections (one per text style); use static examples |
| Textarea | `9762:3088` | State |
| Tooltip | `315:32700` | Position |

## Workflow: sync a component from Figma

Use `/ds-sync [ComponentName]` — see `.claude/skills/ds-sync.md` for the full procedure.

Manual steps:
1. Open Simple-DS in Figma desktop
2. Run `/ds-sync [ComponentName]`
3. Claude reads the Figma design, diffs against code, updates the four component files
4. `npx tsc --noEmit` to verify
5. `FIGMA_ACCESS_TOKEN=<token> npm run figma:publish` to push Code Connect

## Scripts

```bash
npm run dev              # Vite dev server
npm run storybook        # Storybook at :6006
npm run build-storybook  # static Storybook
npm run figma:publish    # publish Code Connect (needs FIGMA_ACCESS_TOKEN env var)
npm run figma:unpublish  # remove Code Connect
```

## Workspace: using the DS in another project

`apps/example-app` demonstrates importing from `@simple-ds/ui` inside the workspace. For external projects, install with:

```bash
# (once published to npm)
npm install @simple-ds/ui
```

Until published, copy the `src/` directory or reference it via relative path in `vite.config.ts`:

```ts
resolve: {
  alias: { '@simple-ds/ui': '/path/to/DS001/src/index.ts' }
}
```
