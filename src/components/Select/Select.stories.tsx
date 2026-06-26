import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  args: {
    options: sampleOptions,
    placeholder: 'Select...',
    label: 'Label',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Select...',
    options: sampleOptions,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Label',
    value: 'option1',
    options: sampleOptions,
  },
};

export const Placeholder: Story = {
  args: {
    label: 'Label',
    placeholder: 'Choose an option',
    options: sampleOptions,
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Select...',
    options: sampleOptions,
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Select...',
    options: sampleOptions,
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    label: 'Label',
    value: 'option2',
    options: sampleOptions,
    disabled: true,
  },
};

export const NoLabel: Story = {
  args: {
    placeholder: 'Select...',
    options: sampleOptions,
  },
};
