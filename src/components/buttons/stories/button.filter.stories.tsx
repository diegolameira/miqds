import type { Meta, StoryObj } from '@storybook/react';

import { ButtonVariantsKeys, FilterButton } from '..';

const meta = {
  component: FilterButton,
  title: 'Components/Buttons/Filter',
  tags: ['autodocs'],

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
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=813-4975&mode=design&t=iIlPp1yeaxsVAusH-4',
    },
  },
} satisfies Meta<typeof FilterButton>;

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
