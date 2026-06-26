import figma from '@figma/code-connect'
import { SearchInput } from './SearchInput'

figma.connect(
  SearchInput,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2236-14989',
  {
    props: {
      value: figma.string('Value'),
    },
    example: ({ value }) => (
      <SearchInput value={value} />
    ),
  }
)
