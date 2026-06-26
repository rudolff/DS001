import figma from '@figma/code-connect';
import { Select } from './Select';

figma.connect(
  Select,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=2136-2336',
  {
    props: {
      disabled: figma.enum('State', {
        Disabled: true,
        Default: false,
        Error: false,
      }),
    },
    example: ({ disabled }) => (
      <Select
        label="Label"
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
        disabled={disabled}
        onChange={(value) => console.log(value)}
      />
    ),
  }
);
