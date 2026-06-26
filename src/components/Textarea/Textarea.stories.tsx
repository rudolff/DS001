import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'error', 'disabled'] },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message here...',
    state: 'default',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Bio',
    value: 'I am a designer who loves clean interfaces and thoughtful typography.',
    state: 'default',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Description',
    description: 'Max 500 characters.',
    placeholder: 'Describe your project...',
    state: 'default',
  },
}

export const Error: Story = {
  args: {
    label: 'Message',
    value: 'Hi',
    state: 'error',
    error: 'Message must be at least 10 characters.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write your message here...',
    state: 'disabled',
  },
}
