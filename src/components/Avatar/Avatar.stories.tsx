import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['initial', 'image'] },
    size: { control: 'select', options: ['large', 'medium', 'small'] },
    shape: { control: 'select', options: ['circle', 'square'] },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Initial: Story = {
  args: { type: 'initial', size: 'large', shape: 'circle', initials: 'AB' },
}

export const Image: Story = {
  args: { type: 'image', size: 'large', shape: 'circle', src: 'https://i.pravatar.cc/80', alt: 'User' },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar type="initial" size="large"  shape="circle" initials="AB" />
      <Avatar type="initial" size="medium" shape="circle" initials="AB" />
      <Avatar type="initial" size="small"  shape="circle" initials="AB" />
    </div>
  ),
}

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Avatar type="initial" size="large" shape="circle" initials="AB" />
      <Avatar type="initial" size="large" shape="square" initials="AB" />
    </div>
  ),
}
