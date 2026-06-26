import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'neutral', 'subtle'] },
    size: { control: 'select', options: ['medium', 'small'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', size: 'medium', label: 'Button' },
}

export const Neutral: Story = {
  args: { variant: 'neutral', size: 'medium', label: 'Button' },
}

export const Subtle: Story = {
  args: { variant: 'subtle', size: 'medium', label: 'Button' },
}

export const Small: Story = {
  args: { variant: 'primary', size: 'small', label: 'Button' },
}

export const Disabled: Story = {
  args: { variant: 'primary', size: 'medium', disabled: true, label: 'Button' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary" label="Primary" />
      <Button variant="neutral" label="Neutral" />
      <Button variant="subtle" label="Subtle" />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button variant="primary" size="medium" label="Medium" />
      <Button variant="primary" size="small" label="Small" />
    </div>
  ),
}
