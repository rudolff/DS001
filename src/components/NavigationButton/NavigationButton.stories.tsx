import type { Meta, StoryObj } from '@storybook/react';
import { NavigationButton } from './NavigationButton';

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 9.5L10 3L17 9.5V17H12.5V13H7.5V17H3V9.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const meta = {
  title: 'Components/NavigationButton',
  component: NavigationButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['row', 'column'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium'],
    },
  },
} satisfies Meta<typeof NavigationButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Home',
    icon: <HomeIcon />,
  },
};

export const Active: Story = {
  args: {
    label: 'Home',
    icon: <HomeIcon />,
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Home',
    icon: <HomeIcon />,
    disabled: true,
  },
};

export const ColumnDirection: Story = {
  args: {
    label: 'Home',
    icon: <HomeIcon />,
    direction: 'column',
  },
};

export const ColumnActive: Story = {
  args: {
    label: 'Home',
    icon: <HomeIcon />,
    direction: 'column',
    active: true,
  },
};

export const SmallSize: Story = {
  args: {
    label: 'Home',
    icon: <HomeIcon />,
    size: 'small',
  },
};

export const NoIcon: Story = {
  args: {
    label: 'Home',
  },
};

export const RowMediumActive: Story = {
  name: 'Row / Medium / Active',
  args: {
    label: 'Dashboard',
    icon: <HomeIcon />,
    direction: 'row',
    size: 'medium',
    active: true,
  },
};
