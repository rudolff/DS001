import figma from '@figma/code-connect';
import { Tabs } from './Tabs';

figma.connect(
  Tabs,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=3729-13362',
  {
    props: {},
    example: () => (
      <Tabs
        tabs={[
          { label: 'Tab 1', content: 'Content for Tab 1' },
          { label: 'Tab 2', content: 'Content for Tab 2' },
          { label: 'Tab 3', content: 'Content for Tab 3' },
        ]}
      />
    ),
  }
);
