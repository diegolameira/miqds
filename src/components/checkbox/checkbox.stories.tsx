import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Preview/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort?: number };

export const Default: SortedStory = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: SortedStory = {
  args: {
    checked: true,
    disabled: false,
  },
};
export const Disabled: SortedStory = {
  args: {
    checked: false,
    disabled: true,
  },
};
