import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'What is Simple-DS?',
    children: 'Simple-DS is a design system built for modern web applications. It provides a set of reusable components and design tokens.',
    defaultOpen: false,
  },
};

export const Open: Story = {
  args: {
    title: 'Getting Started',
    children: 'To get started with Simple-DS, install the package and import the components you need. All components are fully typed with TypeScript.',
    defaultOpen: true,
  },
};

export const Closed: Story = {
  args: {
    title: 'Frequently Asked Questions',
    children: 'This section contains answers to frequently asked questions about Simple-DS.',
    defaultOpen: false,
  },
};

export const MultipleItems: Story = {
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <Accordion title="Section One" defaultOpen={true}>
        This is the content for section one. It is open by default.
      </Accordion>
      <Accordion title="Section Two">
        This is the content for section two. Click to expand.
      </Accordion>
      <Accordion title="Section Three">
        This is the content for section three. Each item manages its own state.
      </Accordion>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    title: 'Terms and Conditions',
    children: (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    ),
    defaultOpen: true,
  },
};
