import type { Meta, StoryObj } from '@storybook/react';

import { ButtonVariantsKeys, FilterButton } from '..';

const meta = {
  component: FilterButton,
  title: 'Components/Buttons/Filter',
  args: {
    children: 'Filter',
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

export const FilterDefault: SortedStory = {
  sort: 0,
  args: {},
};

export const FilterWithBadge: SortedStory = {
  sort: 0,
  args: {
    badge: 2,
  },
};

export const FilterHiddenArrow: SortedStory = {
  sort: 0,
  args: {
    badge: 2,
    hideArrow: true,
  },
};

export const FilterHiddenLabel: SortedStory = {
  sort: 0,
  args: {
    badge: 2,
    hideLabel: true,
  },
};

export const FilterHiddenBadge: SortedStory = {
  sort: 0,
  args: {
    badge: 2,
    hideBadge: true,
  },
};

export const FilterHiddenIcon: SortedStory = {
  sort: 0,
  args: {
    badge: 2,
    hideIcon: true,
  },
};

export const FilterCustomIcon: SortedStory = {
  sort: 0,
  args: {},
};
