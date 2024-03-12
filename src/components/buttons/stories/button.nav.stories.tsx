import type { Meta, StoryObj } from '@storybook/react';

import CarICON from '$icons/car.svg?react';
import ReportsICON from '$icons/reports.svg?react';
import SettingsICON from '$icons/settings.svg?react';
import SubscriptionICON from '$icons/subscription.svg?react';

import { NavButton } from '..';

const meta = {
  component: NavButton,
  title: 'Components/Buttons/NavButton',
  tags: ['autodocs'],
  args: {},
  argTypes: {
    onClick: { control: false },
    leftIcon: { control: false },
    isActive: {
      control: false,
      type: { name: 'boolean' },
      description: 'Active navigation style',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=813-4975&mode=design&t=iIlPp1yeaxsVAusH-4',
    },
  },
} satisfies Meta<typeof NavButton>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const Navigation: SortedStory = {
  sort: 0,
  args: {},
  render: (args) => (
    <div className="w-full max-w-[220px]">
      <div className="flex flex-col gap-space2 p-space4">
        <NavButton {...args} isActive leftIcon={<CarICON />}>
          Drives
        </NavButton>
        <NavButton {...args} leftIcon={<ReportsICON />}>
          Reports
        </NavButton>
        <NavButton {...args} leftIcon={<SubscriptionICON />}>
          Subscription
        </NavButton>
        <NavButton {...args} leftIcon={<SettingsICON />}>
          Settings
        </NavButton>
      </div>
    </div>
  ),
};
