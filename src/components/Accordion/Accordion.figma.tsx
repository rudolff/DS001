import figma from '@figma/code-connect';
import { Accordion } from './Accordion';

figma.connect(
  Accordion,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=7753-4779',
  {
    props: {},
    example: () => (
      <Accordion title="Accordion title">
        Accordion body content goes here.
      </Accordion>
    ),
  }
);
