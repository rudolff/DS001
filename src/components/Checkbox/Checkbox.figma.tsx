import figma from '@figma/code-connect';
import { Checkbox } from './Checkbox';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-1441',
  {
    props: {
      checked: figma.enum('Value Type', {
        Checked: true,
        Unchecked: false,
        Indeterminate: false,
      }),
      indeterminate: figma.enum('Value Type', {
        Checked: false,
        Unchecked: false,
        Indeterminate: true,
      }),
      disabled: figma.enum('State', {
        Default: false,
        Disabled: true,
      }),
    },
    example: ({ checked, indeterminate, disabled }) => (
      <Checkbox
        checked={checked}
        indeterminate={indeterminate}
        disabled={disabled}
        label="Label"
      />
    ),
  }
);
