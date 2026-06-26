import figma from '@figma/code-connect';
import { Tooltip } from './Tooltip';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=315-32700',
  {
    props: {
      placement: figma.enum('Placement', {
        Top: 'top',
        Bottom: 'bottom',
        Left: 'left',
        Right: 'right',
      }),
    },
    example: ({ placement }) => (
      <Tooltip content="Tooltip text" placement={placement}>
        <button>Hover me</button>
      </Tooltip>
    ),
  }
);
