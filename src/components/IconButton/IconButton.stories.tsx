import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 2l2.39 4.84L18 7.64l-4 3.9.94 5.5L10 14.4l-4.94 2.64.94-5.5L2 7.64l5.61-.8L10 2z"
      fill="currentColor"
    />
  </svg>
);

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: <StarIcon />,
    label: 'Star',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton {...args} variant="primary" label="Primary" />
      <IconButton {...args} variant="neutral" label="Neutral" />
      <IconButton {...args} variant="subtle" label="Subtle" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <IconButton {...args} size="medium" label="Medium" />
      <IconButton {...args} size="small" label="Small" />
    </div>
  ),
};
