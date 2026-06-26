import figma from '@figma/code-connect'
import { Tag } from './Tag'

figma.connect(
  Tag,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=56-8830',
  {
    props: {
      scheme: figma.enum('Scheme', {
        Brand: 'brand',
        Danger: 'danger',
        Positive: 'positive',
        Warning: 'warning',
      }),
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
      }),
      label: figma.string('Label'),
    },
    example: ({ scheme, variant, label }) => (
      <Tag scheme={scheme} variant={variant} label={label} />
    ),
  }
)
