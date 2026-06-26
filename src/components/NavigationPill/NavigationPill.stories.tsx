import type { Meta, StoryObj } from '@storybook/react'
import { NavigationPill } from './NavigationPill'

const meta = {
  title: 'Components/NavigationPill',
  component: NavigationPill,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'active'] },
  },
} satisfies Meta<typeof NavigationPill>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Home',
    state: 'default',
  },
}

export const Active: Story = {
  args: {
    label: 'Home',
    state: 'active',
  },
}

export const PillRow: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 4 }}>
      <NavigationPill label="Home" state="active" />
      <NavigationPill label="Products" />
      <NavigationPill label="Pricing" />
      <NavigationPill label="About" />
    </div>
  ),
}
