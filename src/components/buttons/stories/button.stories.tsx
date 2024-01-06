import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonVariantsKeys } from '../button';

const meta = {
  component: Button,
  title: 'Components/Buttons/Default',
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
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=812-2397&mode=design&t=iIlPp1yeaxsVAusH-4',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

// const meta = {
//   parameters: {
//     layout: "centered",
//   },
//   tags: ["autodocs"],
//   // title: "Components/Button",
//   component: Button,
//   args: {
//     children: "Button",
//   },
//   argTypes: {
//     children: { control: "text", defaultValue: "Button" },
//     variant: { control: "selected" },
//     onClick: { action: "clicked", type: "function" },
//   },
// } satisfies Meta<typeof Button>;
// export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const Primary: SortedStory = {
  sort: 0,
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: SortedStory = {
  sort: 1,
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Tertiary: SortedStory = {
  sort: 2,
  args: {
    variant: 'tertiary',
    children: 'Tertiary',
  },
};

export const Destructive: SortedStory = {
  sort: 3,
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: SortedStory = {
  sort: 4,
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};
