import figma from '@figma/code-connect';
import { Switch } from './Switch';

figma.connect(
  Switch,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-1902',
  {
    props: {
      checked: figma.enum('Value Type', {
        Checked: true,
        Unchecked: false,
      }),
      disabled: figma.enum('State', {
        Disabled: true,
        Default: false,
      }),
    },
    example: ({ checked, disabled }) => (
      <Switch
        checked={checked}
        disabled={disabled}
        label="Label"
        onChange={(value) => console.log(value)}
      />
    ),
  }
);
