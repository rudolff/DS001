import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { currentPage: 1, totalPages: 10, onPageChange: () => {} },
}

export const MiddlePage: Story = {
  args: { currentPage: 5, totalPages: 10, onPageChange: () => {} },
}

export const LastPage: Story = {
  args: { currentPage: 10, totalPages: 10, onPageChange: () => {} },
}

export const FewPages: Story = {
  args: { currentPage: 2, totalPages: 5, onPageChange: () => {} },
}

export const Interactive: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return <Pagination currentPage={page} totalPages={12} onPageChange={setPage} />
  },
}
