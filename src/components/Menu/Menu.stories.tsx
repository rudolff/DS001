import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Menu } from './Menu';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  { label: 'Edit', onClick: () => console.log('Edit clicked') },
  { label: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
  { label: 'Archive', onClick: () => console.log('Archive clicked') },
  { label: 'Delete', disabled: true, onClick: () => console.log('Delete clicked') },
];

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <Menu
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <button onClick={() => setOpen(!open)}>Open Menu</button>
        }
      />
    );
  },
  args: {
    items: defaultItems,
    open: true,
    onClose: () => {},
  },
};

export const WithHeader: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <Menu
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <button onClick={() => setOpen(!open)}>Open Menu</button>
        }
      />
    );
  },
  args: {
    items: defaultItems,
    open: true,
    onClose: () => {},
    header: 'Actions',
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    const itemsWithIcons = [
      {
        label: 'Edit',
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.333 2a1.885 1.885 0 0 1 2.667 2.667L4.667 14H2v-2.667L11.333 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        onClick: () => console.log('Edit clicked'),
      },
      {
        label: 'Duplicate',
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M11 5V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        ),
        onClick: () => console.log('Duplicate clicked'),
      },
      {
        label: 'Delete',
        disabled: true,
        icon: (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4h12M5.333 4V2.667h5.334V4M6.667 7.333v4M9.333 7.333v4M3.333 4l.667 9.333h8L12.667 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        onClick: () => console.log('Delete clicked'),
      },
    ];
    return (
      <Menu
        {...args}
        items={itemsWithIcons}
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <button onClick={() => setOpen(!open)}>Open Menu with Icons</button>
        }
      />
    );
  },
  args: {
    items: [],
    open: true,
    onClose: () => {},
    header: 'Actions',
  },
};

export const AllDisabled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <Menu
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <button onClick={() => setOpen(!open)}>Open Menu</button>
        }
      />
    );
  },
  args: {
    items: [
      { label: 'Edit', disabled: true },
      { label: 'Duplicate', disabled: true },
      { label: 'Delete', disabled: true },
    ],
    open: true,
    onClose: () => {},
    header: 'Disabled Actions',
  },
};

export const Closed: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <Menu
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        trigger={
          <button onClick={() => setOpen(!open)}>Open Menu</button>
        }
      />
    );
  },
  args: {
    items: defaultItems,
    open: false,
    onClose: () => {},
  },
};
