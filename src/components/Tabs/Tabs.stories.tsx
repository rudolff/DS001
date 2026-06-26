import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Overview', content: 'Overview content goes here. This is the first tab.' },
      { label: 'Details', content: 'Details content goes here. This is the second tab.' },
      { label: 'Settings', content: 'Settings content goes here. This is the third tab.' },
    ],
    defaultTab: 0,
  },
};

export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
      { label: 'Profile', content: 'Profile content goes here.' },
      { label: 'Account', content: 'Account content goes here.' },
      { label: 'Notifications', content: 'Notifications content goes here.' },
    ];
    return (
      <div>
        <p style={{ marginBottom: '16px', fontSize: '14px', color: '#757575' }}>
          Active tab index: {activeTab}
        </p>
        <Tabs tabs={tabs} defaultTab={activeTab} onChange={setActiveTab} />
      </div>
    );
  },
};
