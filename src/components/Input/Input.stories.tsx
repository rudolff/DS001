import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    state: 'default',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Email',
    value: 'user@example.com',
    state: 'default',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Username',
    description: 'Must be 3–20 characters.',
    placeholder: 'Enter username',
    state: 'default',
  },
}

export const Error: Story = {
  args: {
    label: 'Email',
    value: 'not-an-email',
    state: 'error',
    error: 'Please enter a valid email address.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email',
    placeholder: 'Placeholder',
    state: 'disabled',
  },
}
