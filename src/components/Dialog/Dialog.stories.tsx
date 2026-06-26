import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Dialog } from './Dialog';

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

function DialogDemo(props: Omit<React.ComponentProps<typeof Dialog>, 'open' | 'onClose'>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>
      <Dialog {...props} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export const Default: Story = {
  render: (args) => (
    <DialogDemo
      type={args.type}
      title={args.title}
      actions={args.actions}
    >
      {args.children}
    </DialogDemo>
  ),
  args: {
    type: 'card',
    title: 'Dialog Title',
    children: 'This is the dialog body content. It provides more detail about the action or information.',
    actions: undefined,
  },
};

export const CardType: Story = {
  render: () => (
    <DialogDemo
      type="card"
      title="Card Dialog"
      actions={
        <>
          <button>Cancel</button>
          <button>Confirm</button>
        </>
      }
    >
      This is a card-type dialog centered on the screen with a backdrop overlay.
    </DialogDemo>
  ),
  args: {
    open: false,
    onClose: () => {},
    type: 'card',
    title: 'Card Dialog',
    children: 'Card content',
  },
};

export const SheetType: Story = {
  render: () => (
    <DialogDemo
      type="sheet"
      title="Sheet Dialog"
      actions={
        <>
          <button>Dismiss</button>
          <button>Apply</button>
        </>
      }
    >
      This is a sheet-type dialog that slides up from the bottom of the screen.
    </DialogDemo>
  ),
  args: {
    open: false,
    onClose: () => {},
    type: 'sheet',
    title: 'Sheet Dialog',
    children: 'Sheet content',
  },
};

export const WithoutTitle: Story = {
  render: () => (
    <DialogDemo type="card">
      A dialog without a title, showing only body content and no heading.
    </DialogDemo>
  ),
  args: {
    open: false,
    onClose: () => {},
    type: 'card',
    children: 'No title content',
  },
};

export const WithActions: Story = {
  render: () => (
    <DialogDemo
      type="card"
      title="Confirm Action"
      actions={
        <>
          <button>Cancel</button>
          <button>Delete</button>
        </>
      }
    >
      Are you sure you want to delete this item? This action cannot be undone.
    </DialogDemo>
  ),
  args: {
    open: false,
    onClose: () => {},
    type: 'card',
    title: 'Confirm Action',
    children: 'Confirmation message',
  },
};
