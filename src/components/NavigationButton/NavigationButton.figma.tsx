import figma from '@figma/code-connect'
import { NavigationButton } from './NavigationButton'

figma.connect(
  NavigationButton,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=515-5459',
  {
    props: {
      active: figma.enum('State', { Active: true, Default: false, Hover: false }),
      direction: figma.enum('Direction', { Row: 'row', Column: 'column' }),
      size: figma.enum('Type', { Small: 'small', Medium: 'medium' }),
      label: figma.string('Label'),
    },
    example: ({ active, direction, size, label }) => (
      <NavigationButton active={active} direction={direction} size={size} label={label} />
    ),
  }
)
