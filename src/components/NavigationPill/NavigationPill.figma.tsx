import figma from '@figma/code-connect'
import { NavigationPill } from './NavigationPill'

figma.connect(
  NavigationPill,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=7768-19970',
  {
    props: {
      state: figma.enum('State', { Default: 'default', Active: 'active' }),
      label: figma.string('Label'),
    },
    example: ({ state, label }) => (
      <NavigationPill state={state} label={label} />
    ),
  }
)
