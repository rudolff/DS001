import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Toggle feature',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Feature enabled',
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Feature disabled',
  },
};

export const DisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Unavailable option',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Locked setting',
  },
};

export const NoLabel: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};
