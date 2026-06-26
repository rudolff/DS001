import figma from '@figma/code-connect';
import { Notification } from './Notification';

figma.connect(
  Notification,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=124-8256',
  {
    props: {
      variant: figma.enum('Variant', {
        Message: 'message',
        Alert: 'alert',
      }),
    },
    example: ({ variant }) => (
      <Notification variant={variant} message="Notification message" title="Title" />
    ),
  }
);
