import type { Meta, StoryObj } from '@storybook/react';

import CalendarICON from '@/icons/calender.svg?react';
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

export const FilterHideArrow: SortedStory = {
  sort: 1,
  args: {
    hideArrow: true,
  },
};

export const FilterWithIcon: SortedStory = {
  sort: 1,
  args: {
    icon: <CalendarICON />,
  },
};

export const FilterHiddenArrowWithIcon: SortedStory = {
  sort: 2,
  args: {
    hideArrow: true,
    icon: <CalendarICON />,
  },
};

export const FilterWithIconAndBadge: SortedStory = {
  sort: 3,
  args: {
    badge: 2,
    icon: <CalendarICON />,
  },
};
