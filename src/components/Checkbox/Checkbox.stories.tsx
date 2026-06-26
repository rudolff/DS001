import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    indeterminate: false,
    disabled: false,
    label: 'Checkbox label',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    label: 'Checked checkbox',
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
    label: 'Unchecked checkbox',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Indeterminate checkbox',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Disabled checkbox',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled and checked',
  },
};

export const NoLabel: Story = {
  args: {
    checked: false,
  },
};
