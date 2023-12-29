import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariantsKeys } from '../button';

const meta = {
  component: Button,
  title: 'Components/Buttons/Classification',
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
