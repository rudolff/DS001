import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option A',
    checked: false,
    disabled: false,
    name: 'group',
    value: 'a',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option A',
    checked: true,
    disabled: false,
    name: 'group',
    value: 'a',
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Option B',
    checked: false,
    disabled: false,
    name: 'group',
    value: 'b',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    checked: false,
    disabled: true,
    name: 'group',
    value: 'c',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked option',
    checked: true,
    disabled: true,
    name: 'group',
    value: 'd',
  },
};

export const NoLabel: Story = {
  args: {
    checked: false,
    disabled: false,
    name: 'group',
    value: 'e',
  },
};
