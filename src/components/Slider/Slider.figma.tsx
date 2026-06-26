import figma from '@figma/code-connect'
import { Slider } from './Slider'

figma.connect(
  Slider,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=589-17676',
  {
    props: {
      label: figma.boolean('Has Label', { true: 'Label', false: undefined }),
    },
    example: ({ label }) => (
      <Slider label={label} min={0} max={100} value={50} />
    ),
  }
)
