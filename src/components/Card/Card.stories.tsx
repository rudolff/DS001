import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    assetType: { control: 'select', options: ['none', 'icon', 'image'] },
    variant: { control: 'select', options: ['default', 'stroke'] },
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'A short description of this card content.',
    variant: 'default',
    direction: 'vertical',
  },
}

export const Stroke: Story = {
  args: {
    title: 'Card Title',
    description: 'A short description of this card content.',
    variant: 'stroke',
    direction: 'vertical',
  },
}

export const WithImage: Story = {
  args: {
    assetType: 'image',
    imageSrc: 'https://picsum.photos/seed/card/400/200',
    title: 'Card with Image',
    description: 'Card using an image asset in vertical direction.',
    variant: 'stroke',
    direction: 'vertical',
  },
}

export const Horizontal: Story = {
  args: {
    assetType: 'image',
    imageSrc: 'https://picsum.photos/seed/card2/200/200',
    title: 'Horizontal Card',
    description: 'Image and content side by side.',
    variant: 'stroke',
    direction: 'horizontal',
  },
}
