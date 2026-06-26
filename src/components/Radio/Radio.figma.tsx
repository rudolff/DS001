import figma from '@figma/code-connect';
import { Radio } from './Radio';

figma.connect(
  Radio,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-1412',
  {
    props: {
      checked: figma.enum('Value Type', {
        Checked: true,
        Unchecked: false,
      }),
      disabled: figma.enum('State', {
        Default: false,
        Disabled: true,
      }),
    },
    example: ({ checked, disabled }) => (
      <Radio
        checked={checked}
        disabled={disabled}
        label="Label"
        name="radio-group"
        value="option"
      />
    ),
  }
);
