import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button';

const meta = {
  component: Button,
  title: 'Components/Buttons/Classification',
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
  argTypes: {
    onClick: {
      control: false,
      description: 'Click handler',
      type: { name: 'function', required: false },
    },
    disabled: { type: { name: 'boolean' }, description: 'Disables the button' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=812-2931&mode=design&t=iIlPp1yeaxsVAusH-4',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const Business: SortedStory = {
  sort: 0,
  args: {
    variant: 'business',
  },
};

export const Personal: SortedStory = {
  sort: 1,
  args: {
    variant: 'personal',
  },
};

export const BusinessPurposeDropdown: SortedStory = {
  sort: 2,
  args: {
    variant: 'business',
    showArrow: true,
    children: 'Business purpose',
  },
};

export const PersonalPurposeDropdown: SortedStory = {
  sort: 3,
  args: {
    variant: 'personal',
    showArrow: true,
    children: 'Personal purpose',
  },
};
