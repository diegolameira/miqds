import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariantsKeys } from '../button';

const meta = {
  title: 'Components/Buttons/Default/States/Tertiary',
  component: Button,
  args: {
    children: 'Tertiary',
    variant: 'tertiary',
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
      {},
    ),
    disabled: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const Default: SortedStory = {
  sort: 0,
};

export const Hover: SortedStory = {
  sort: 1,

  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Pressed: SortedStory = {
  sort: 2,
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Loading: SortedStory = {
  sort: 3,
  args: {
    loading: true,
  },
};

export const Focus: SortedStory = {
  sort: 4,
  parameters: {
    pseudo: {
      focusVisible: true,
    },
  },
};

export const Disabled: SortedStory = {
  sort: 5,
  args: {
    disabled: true,
  },
};
