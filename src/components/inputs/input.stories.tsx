import type { Meta, StoryObj } from '@storybook/react';

import { CreditCardInput, Input, InputType } from '.';

const meta = {
  component: Input,
  title: 'Components/Inputs',
  tags: ['autodocs'],
  args: {},
  argTypes: {
    value: { defaultValue: '', control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=1379-2562&mode=design&t=3i3pZV2mFRl3cbjR-4',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const Default: SortedStory = {
  sort: 0,
  args: {
    placeholder: 'Placeholder',
  },
};

export const CreditCard: SortedStory = {
  sort: 1,
  render: (args) => <CreditCardInput {...args} />,
  args: {
    type: InputType.CreditCard,
  },
};

export const Search: SortedStory = {
  sort: 2,
  args: {
    type: InputType.Search,
    placeholder: 'Placeholder',
  },
};

export const Price: SortedStory = {
  sort: 3,
  args: {
    type: InputType.Price,
  },
};

export const Email: SortedStory = {
  sort: 4,
  args: {
    type: InputType.Email,
  },
};

export const Password: SortedStory = {
  sort: 5,
  args: {
    type: InputType.Password,
  },
};

export const Distance: SortedStory = {
  sort: 6,
  args: {
    type: InputType.Distance,
  },
};

export const Tel: SortedStory = {
  sort: 7,
  args: {
    type: InputType.Tel,
  },
};

export const Number: SortedStory = {
  sort: 9,
  args: {
    type: InputType.Number,
  },
};

export const PricePerDistance: SortedStory = {
  sort: 10,
  args: {
    type: InputType.PricePerDistance,
  },
};
