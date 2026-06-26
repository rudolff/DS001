import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    scheme: { control: 'select', options: ['brand', 'danger', 'positive', 'warning'] },
    variant: { control: 'select', options: ['primary', 'secondary'] },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Brand: Story = { args: { label: 'Brand', scheme: 'brand', variant: 'primary' } }
export const Danger: Story = { args: { label: 'Danger', scheme: 'danger', variant: 'primary' } }
export const Positive: Story = { args: { label: 'Positive', scheme: 'positive', variant: 'primary' } }
export const Warning: Story = { args: { label: 'Warning', scheme: 'warning', variant: 'primary' } }

export const AllSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['brand', 'danger', 'positive', 'warning'] as const).map(scheme =>
        (['primary', 'secondary'] as const).map(variant => (
          <Tag key={`${scheme}-${variant}`} scheme={scheme} variant={variant} label={scheme} />
        ))
      )}
    </div>
  ),
}
