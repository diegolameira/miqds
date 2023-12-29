import type { Meta, StoryObj } from '@storybook/react';

import AddICON from '@/icons/add.svg?react';
import TrashICON from '@/icons/trash-alt.svg?react';

import { Button, ButtonVariantsKeys } from '../button';

const meta = {
  component: Button,
  title: 'Components/Buttons/Icon',
  args: {
    children: 'Add',
    leftIcon: <AddICON />,
    iconOnly: true,
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1005%3A2974&t=8pzYUq8GyzmMGjJ2-4',
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

export const Secondary: SortedStory = {
  sort: 1,
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: SortedStory = {
  sort: 2,
  args: {
    variant: 'tertiary',
  },
};

export const Destructive: SortedStory = {
  sort: 3,
  args: {
    variant: 'destructive',
    leftIcon: <TrashICON />,
    children: 'Remove',
  },
};

export const Business: SortedStory = {
  sort: 4,
  args: {
    variant: 'business',
  },
};

export const Personal: SortedStory = {
  sort: 5,
  args: {
    variant: 'personal',
  },
};

export const Outline: SortedStory = {
  sort: 6,
  args: {
    variant: 'outline',
  },
};
