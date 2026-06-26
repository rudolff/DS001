import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta = {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Message: Story = {
  args: {
    variant: 'message',
    message: 'Your changes have been saved successfully.',
  },
};

export const Alert: Story = {
  args: {
    variant: 'alert',
    message: 'Please review the highlighted fields before proceeding.',
  },
};

export const WithTitle: Story = {
  args: {
    variant: 'message',
    title: 'Notification',
    message: 'You have a new message waiting for you.',
  },
};

export const WithClose: Story = {
  args: {
    variant: 'alert',
    title: 'Warning',
    message: 'This action cannot be undone.',
    onClose: () => {},
  },
};
