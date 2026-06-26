import figma from '@figma/code-connect';
import { Dialog } from './Dialog';

figma.connect(
  Dialog,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-696',
  {
    props: {
      type: figma.enum('Type', {
        Card: 'card',
        Sheet: 'sheet',
      }),
    },
    example: ({ type }) => (
      <Dialog
        open={true}
        onClose={() => {}}
        type={type}
        title="Dialog title"
      >
        Dialog content goes here.
      </Dialog>
    ),
  }
);
