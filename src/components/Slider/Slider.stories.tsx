import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    value: { control: 'number' },
    step: { control: 'number' },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    value: 40,
    description: 'Adjust the audio volume.',
  },
}

export const Price: Story = {
  args: {
    label: 'Price range',
    min: 0,
    max: 1000,
    value: 250,
    formatValue: (v) => `$${v}`,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    value: 40,
    disabled: true,
  },
}
