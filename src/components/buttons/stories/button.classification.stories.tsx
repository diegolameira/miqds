import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariantsKeys } from '../button';

const meta = {
  component: Button,
  title: 'Components/Buttons/Classification',
  tags: ['autodocs'],
  args: {
    children: 'Button',
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
    iconOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
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
    children: 'Business',
  },
};

export const Personal: SortedStory = {
  sort: 1,
  args: {
    variant: 'personal',
    children: false,
  },
};
