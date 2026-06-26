import figma from '@figma/code-connect';
import { Menu } from './Menu';

figma.connect(
  Menu,
  'https://www.figma.com/design/osjbFR32m0tSBqUeRabMD8/Simple-DS?node-id=9762-720',
  {
    props: {},
    example: () => (
      <Menu
        open={true}
        onClose={() => {}}
        items={[
          { label: 'Option 1', onClick: () => {} },
          { label: 'Option 2', onClick: () => {} },
          { label: 'Option 3', disabled: true, onClick: () => {} },
        ]}
      />
    ),
  }
);
