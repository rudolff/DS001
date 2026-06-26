# ds-sync

Sync a single Simple-DS component from Figma into the codebase.

## Usage

```
/ds-sync [ComponentName]
```

Example: `/ds-sync Button`, `/ds-sync NavigationPill`, `/ds-sync Input`

## What this does

Reads the current Figma design for one component via the Dev Mode MCP, compares it against the existing implementation, and updates the four component files if anything has changed.

## Prerequisites

- Figma desktop must be open with the Simple-DS file
- The Dev Mode MCP server must be running (Figma → Preferences → Enable Dev Mode MCP Server)

## Steps to follow

### 1. Identify the component

Extract `[ComponentName]` from the slash command argument. Look up its Figma node ID in CLAUDE.md (the "Component node IDs" table).

### 2. Fetch the Figma design context

Call `mcp__figma-devmode__get_design_context` with:
- `node_id`: the node ID from the table (format: `XXXX-YYYY`)
- `file_key`: `osjbFR32m0tSBqUeRabMD8`

Read the response carefully: variant names, prop names (including exact spacing), colors, spacing values, typography.

### 3. Read the current component files

Read all four files from `src/components/[ComponentName]/`:
- `[ComponentName].tsx` — props interface, types, JSX
- `[ComponentName].module.css` — all style rules
- `[ComponentName].stories.tsx` — story coverage
- `[ComponentName].figma.tsx` — Code Connect mapping

### 4. Diff and update

Compare what Figma shows against what's in code. Update only what changed:

**`.tsx`** — update if:
- A variant was added/removed (update the union type)
- A prop was renamed or retyped
- New props exist in Figma that aren't in code

**`.module.css`** — update if:
- Spacing, border-radius, font size, or color changed
- Always reference `--sds-*` CSS custom properties; never hardcode raw values
- New token? Add it to the appropriate `src/tokens/*.css` file first

**`.stories.tsx`** — update if:
- New variants need coverage
- Existing story args no longer match updated props

**`.figma.tsx`** — update if:
- Figma property names changed (note: Figma uses spaces, e.g. `'Value Type'`)
- A new variant exists in Figma
- Prop mapping was wrong
- Constraints: no ternary expressions, no `??`, no computed values in `example` functions

### 5. Verify TypeScript

```bash
cd /Users/vitalii.pyshnyi/Claude/DS001 && npx tsc --noEmit
```

Fix any type errors before proceeding.

### 6. Republish Code Connect (if `.figma.tsx` changed)

Tell the user:

> Run this to push the updated Code Connect snippet to Figma Dev Mode:
> ```bash
> FIGMA_ACCESS_TOKEN=<your_token> npm run figma:publish
> ```
> The token is your Figma personal access token — never store it in committed files.

## Component node IDs

| Component | Node ID |
|-----------|---------|
| Accordion | `7753:4779` |
| Avatar | `9762:1103` |
| Button | `4185:3778` |
| Card | `2142:11380` |
| Checkbox | `9762:1441` |
| Dialog | `9762:696` |
| IconButton | `11:11508` |
| Input | `2136:2263` |
| Menu | `9762:720` |
| NavigationButton | `515:5459` |
| NavigationPill | `7768:19970` |
| Notification | `124:8256` |
| Pagination | `9762:899` |
| Radio | `9762:1412` |
| SearchInput | `2236:14989` |
| Select | `2136:2336` |
| Slider | `589:17676` |
| Switch | `9762:1902` |
| Tabs | `3729:13362` |
| Tag | `56:8830` |
| Text | `2087:8484` |
| Textarea | `9762:3088` |
| Tooltip | `315:32700` |

## Code Connect constraints (known parser limitations)

- No ternary expressions in `example`: `disabled ? true : false` → use `figma.enum()`
- No nullish coalescing `??` in `example`
- No computed values — props must be passed directly
- If a Figma property doesn't map cleanly, use `props: {}` with a static example
- Figma property names use spaces: `'Value Type'` not `'ValueType'`
