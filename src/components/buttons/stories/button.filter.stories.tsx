import type { Meta, StoryObj } from '@storybook/react';

import CalendarICON from '@/icons/calender.svg?react';
import { FilterButton } from '..';

const meta = {
  component: FilterButton,
  title: 'Components/Buttons/Filter',
  tags: ['autodocs'],

  args: {
    children: 'Filter',
    hideArrow: false,
    badge: 0,
    disabled: false,
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Icon to display on the left',
      type: { name: 'function', required: false },
    },
    onClick: {
      control: false,
      description: 'Click handler',
      type: { name: 'function', required: false },
    },
    onClear: {
      control: false,
      description: 'Clears the filter',
      type: { name: 'function', required: false },
    },
    disabled: { type: { name: 'boolean' }, description: 'Disables the button' },
    hideArrow: {
      type: { name: 'boolean' },
      description: 'Hides the arrow',
    },
    badge: { type: 'number' },
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
