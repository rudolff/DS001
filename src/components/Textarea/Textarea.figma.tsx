import figma from '@figma/code-connect'
import { Textarea } from './Textarea'

figma.connect(
  Textarea,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-3088',
  {
    props: {
      state: figma.enum('State', { Default: 'default', Error: 'error', Disabled: 'disabled' }),
      label: figma.boolean('Has Label', { true: 'Label', false: undefined }),
      description: figma.boolean('Has Description', { true: 'Description', false: undefined }),
      error: figma.boolean('Has Error', { true: 'Error message', false: undefined }),
    },
    example: ({ state, label, description, error }) => (
      <Textarea state={state} label={label} description={description} error={error} />
    ),
  }
)
