import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: 'Tooltip text',
    placement: 'top',
    children: <button>Hover me</button>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip text',
    placement: 'bottom',
    children: <button>Hover me</button>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip text',
    placement: 'left',
    children: <button>Hover me</button>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip text',
    placement: 'right',
    children: <button>Hover me</button>,
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, auto)',
        gap: '80px',
        padding: '60px',
        alignItems: 'center',
        justifyItems: 'center',
      }}
    >
      <Tooltip content="Top tooltip" placement="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" placement="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip content="Left tooltip" placement="left">
        <button>Left</button>
      </Tooltip>
      <Tooltip content="Right tooltip" placement="right">
        <button>Right</button>
      </Tooltip>
    </div>
  ),
};
