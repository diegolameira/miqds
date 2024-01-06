import type { Meta, StoryObj } from '@storybook/react';

import CarICON from '@/icons/car.svg?react';
import ReportsICON from '@/icons/reports.svg?react';
import SettingsICON from '@/icons/settings.svg?react';
import SubscriptionICON from '@/icons/subscription.svg?react';
import { Button, ButtonVariantsKeys } from '../button';

const meta = {
  component: Button,
  title: 'Components/Buttons/Full',
  tags: ['autodocs'],
  args: {
    children: 'Full Button',
    full: true,
  },
  argTypes: {
    ...Object.entries(ButtonVariantsKeys).reduce(
      (acc, [key, val]) => ({
        ...acc,
        [key]: {
          options: val,
          control: {
            type: 'select',
          },
        },
      }),
      {}
    ),
    disabled: { control: 'boolean' },
    iconOnly: { control: 'boolean', defaultValue: true },
    loading: { control: 'boolean' },
  },
  render: (args) => (
    <div className="w-full max-w-[600px]">
      <div className="border border-2 border-[#7f7f7f]/20 border-dashed p-1">
        <Button {...args} />
      </div>
      <p className="text-[#7f7f7f]/40">max-width: 600px</p>
    </div>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=841-2409&mode=design&t=iIlPp1yeaxsVAusH-4',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const Primary: SortedStory = {
  sort: 0,
  args: {
    variant: 'primary',
  },
};

export const ButtonGroup: SortedStory = {
  sort: 1,
  args: {
    variant: 'primary',
    iconOnly: false,
    children: 'Button',
  },
  render: (args) => (
    <div className="w-full flex flex-col gap-20 items-center justify-center">
      <div className="w-full max-w-[220px]">
        <div className="border border-2 border-[#7f7f7f]/20 border-dashed flex flex-col gap-space40 p-space20">
          <div className="flex gap-space8">
            <Button {...args} variant="secondary" />
            <Button {...args} variant="primary" />
          </div>
          <div className="flex flex-col gap-space8">
            <Button {...args} variant="secondary" />
            <Button {...args} variant="primary" />
          </div>
        </div>
        <p className="text-[#7f7f7f]/40">max-width: 220px</p>
      </div>
      <div className="w-full max-w-[440px]">
        <div className="border border-2 border-[#7f7f7f]/20 border-dashed flex flex-col gap-space40 p-space20">
          <div className="flex gap-space8">
            <Button {...args} variant="secondary" />
            <Button {...args} variant="primary" />
          </div>
          <div className="flex flex-col gap-space8">
            <Button {...args} variant="secondary" />
            <Button {...args} variant="primary" />
          </div>
        </div>
        <p className="text-[#7f7f7f]/40">max-width: 440px</p>
      </div>
    </div>
  ),
};

export const Navigation: SortedStory = {
  sort: 0,
  args: {
    variant: 'tertiary',
    align: 'left',
  },
  render: (args) => (
    <div className="w-full max-w-[220px]">
      <div className="border border-2 border-[#7f7f7f]/20 border-dashed flex flex-col gap-space2 p-space4">
        <Button {...args} isActive leftIcon={<CarICON />}>
          Drives
        </Button>
        <Button {...args} leftIcon={<ReportsICON />}>
          Reports
        </Button>
        <Button {...args} leftIcon={<SubscriptionICON />}>
          Subscription
        </Button>
        <Button {...args} leftIcon={<SettingsICON />}>
          Settings
        </Button>
      </div>
      <p className="text-[#7f7f7f]/40">max-width: 220px gap-space2</p>
    </div>
  ),
};
