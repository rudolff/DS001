import figma from '@figma/code-connect'
import { Button } from './Button'

/**
 * Code Connect for Simple-DS Button component.
 * Figma file: osjbFR32m0tSBqUeRabMD8 (Simple-DS)
 * Component node: 4185:3779
 *
 * Sync: ask Claude "sync the Button component from Figma"
 * Publish: npm run figma:publish
 */
figma.connect(
  Button,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=4185-3778',
  {
    props: {
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Neutral: 'neutral',
        Subtle: 'subtle',
      }),
      size: figma.enum('Size', {
        Medium: 'medium',
        Small: 'small',
      }),
      disabled: figma.enum('State', {
        Disabled: true,
        Default: false,
        Hover: false,
      }),
      label: figma.string('Label'),
      hasIconStart: figma.boolean('Has Icon Start'),
      hasIconEnd: figma.boolean('Has Icon End'),
    },
    example: ({ variant, size, disabled, label, hasIconStart, hasIconEnd }) => (
      <Button
        variant={variant}
        size={size}
        disabled={disabled}
        label={label}
        hasIconStart={hasIconStart}
        hasIconEnd={hasIconEnd}
      />
    ),
  }
)
