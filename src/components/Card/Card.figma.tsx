import figma from '@figma/code-connect'
import { Card } from './Card'

figma.connect(
  Card,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2142-11380',
  {
    props: {
      assetType: figma.enum('Asset Type', { Icon: 'icon', Image: 'image' }),
      variant: figma.enum('Variant', { Default: 'default', Stroke: 'stroke' }),
      direction: figma.enum('Direction', { Horizontal: 'horizontal', Vertical: 'vertical' }),
    },
    example: ({ assetType, variant, direction }) => (
      <Card assetType={assetType} variant={variant} direction={direction} />
    ),
  }
)
