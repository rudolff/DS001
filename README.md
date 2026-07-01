# Simple-DS — React Design System

A React component library built from the [Simple-DS Figma library](https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS), with Storybook documentation and Figma Code Connect integration.

**Stack:** React 19 · TypeScript · Vite · Storybook 10 · CSS Modules · Figma Code Connect

---

## Install in your project

```bash
npm install github:rudolff/DS001
```

Then import components and styles:

```tsx
import { Button, Input, Tag } from '@simple-ds/ui'
import '@simple-ds/ui/dist/ui.css'        // component styles (required)
import '@simple-ds/ui/tokens/colors.css'   // optional: raw CSS token variables
```

Pin to a specific version using a tag:

```bash
npm install github:rudolff/DS001#v1.0.0
```

---

## Contributing / local development

```bash
npm install
npm run storybook       # component docs at http://localhost:6006
npm run dev             # Vite dev server
```

---

## How it works

### The pipeline

```
Figma (Simple-DS library)
        ↓
  Design tokens (CSS variables)
        ↓
  React components (TypeScript + CSS Modules)
        ↓
  Storybook (interactive documentation)
        ↓
  Code Connect (code snippets in Figma Dev Mode)
```

### 1. Design tokens — `src/tokens/`

CSS custom properties extracted from Figma variables. Every component references them instead of hardcoded values.

```css
--sds-color-text-default-default: #1e1e1e;
--sds-size-space-300: 12px;
--sds-typography-body-font-family: 'Inter', system-ui, sans-serif;
```

All three token files (`colors.css`, `typography.css`, `spacing.css`) are imported once in `.storybook/preview.tsx` so every story automatically gets the real design values.

### 2. React components — `src/components/[Name]/`

Each component folder has five files:

| File | Purpose |
|------|---------|
| `Button.tsx` | React component — props, logic, JSX |
| `Button.module.css` | Scoped styles using CSS Modules, referencing `--sds-*` tokens |
| `Button.stories.tsx` | Storybook stories — one per Figma variant |
| `Button.figma.tsx` | Code Connect mapping — ties the Figma node to this component |
| `index.ts` | Public re-exports |

All components are barrel-exported from `src/index.ts`:

```ts
import { Button, Tag, Avatar, Card } from './src'
```

### 3. Storybook

Run with `npm run storybook`. Each story matches a Figma variant — the Controls panel lets you toggle props interactively. Stories use real `--sds-*` tokens so they look identical to Figma.

### 4. Figma Code Connect

The `*.figma.tsx` files map Figma component properties to React props. When a developer selects a component in Figma Dev Mode, they see the correct React snippet for exactly that variant.

```tsx
// Button.figma.tsx
figma.connect(Button, 'figma.com/.../node-id=4185-3778', {
  props: {
    variant: figma.enum('Variant', { Primary: 'primary', Neutral: 'neutral' }),
    size: figma.enum('Size', { Medium: 'medium', Small: 'small' }),
  },
  example: ({ variant, size }) => (
    <Button variant={variant} size={size} label="Button" />
  ),
})
```

Publish to Figma with:

```bash
FIGMA_ACCESS_TOKEN=your_token npm run figma:publish
```

Generate a token at Figma → Account Settings → Security → Personal access tokens (requires "Files: Read" and "Code Connect: Read & write" scopes).

---

## Components

| Component | Figma node | Variants |
|-----------|-----------|---------|
| Accordion | `7753:4779` | Open / Closed |
| Avatar | `9762:1103` | Initial/Image · Large/Medium/Small · Circle/Square |
| Button | `4185:3778` | Primary/Neutral/Subtle/Danger · Medium/Small |
| Card | `2142:11380` | Default/Stroke · Vertical/Horizontal · Icon/Image asset |
| Checkbox | `9762:1441` | Checked/Unchecked/Indeterminate · Default/Disabled |
| Dialog | `9762:696` | Card / Sheet |
| IconButton | `11:11508` | Primary/Neutral/Subtle · Medium/Small |
| Input | `2136:2263` | Default/Error/Disabled |
| Menu | `9762:720` | Items with Default/Hover/Disabled states |
| NavigationButton | `515:5459` | Default/Hover/Active · Row/Column · Small/Medium |
| NavigationPill | `7768:19970` | Default / Active |
| Notification | `124:8256` | Message / Alert |
| Pagination | `9762:899` | With prev/next/gap logic |
| Radio | `9762:1412` | Default/Disabled · Checked/Unchecked |
| SearchInput | `2236:14989` | Default / Disabled |
| Select | `2136:2336` | Default/Error/Disabled |
| Slider | `589:17676` | Default / Disabled |
| Switch | `9762:1902` | Default/Disabled · Checked/Unchecked |
| Tabs | `3729:13362` | Active/inactive tab panels |
| Tag | `56:8830` | Brand/Danger/Positive/Warning · Primary/Secondary |
| Text | `2087:8484` | Heading/Subheading/Body/Small/Code/Link variants |
| Textarea | `9762:3088` | Default/Error/Disabled |
| Tooltip | `315:32700` | Top/Bottom/Left/Right |

---

## Syncing a component from Figma

When a Figma component changes:

1. Tell Claude: **"sync the Button component from Figma"**
2. Claude reads the updated spec via the remote Figma MCP server (`https://mcp.figma.com/mcp`)
3. Claude updates `Button.tsx`, `Button.module.css`, `Button.stories.tsx`, and `Button.figma.tsx`
4. Republish: `FIGMA_ACCESS_TOKEN=your_token npm run figma:publish`

The remote Figma MCP server requires a one-time OAuth authorization (`/mcp` in an interactive Claude Code session) — no need for Figma desktop to be running.

---

## Scripts

```bash
npm run dev              # Vite dev server
npm run build            # production build
npm run storybook        # Storybook at :6006
npm run build-storybook  # static Storybook build
npm run figma:publish    # publish Code Connect to Figma (needs FIGMA_ACCESS_TOKEN)
npm run figma:unpublish  # remove Code Connect from Figma
```

---

## Project structure

```
DS001/
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.module.css
│   │       ├── Button.stories.tsx
│   │       ├── Button.figma.tsx
│   │       └── index.ts
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   └── spacing.css
│   └── index.ts
├── .storybook/
│   ├── main.ts
│   └── preview.tsx
└── figma.config.json
```
