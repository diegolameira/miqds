import type { Meta, StoryObj } from '@storybook/react';

import { LoginScreen } from './login-screen';

const meta = {
  component: LoginScreen,
  title: 'Screens/Auth/LoginScreen',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=1379-2562&mode=design&t=3i3pZV2mFRl3cbjR-4',
    },
  },
} satisfies Meta<typeof LoginScreen>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const EmailStep: SortedStory = {
  sort: 0,
  args: {},
};

export const PasswordStep: SortedStory = {
  sort: 1,
  args: {
    step: 'password',
    email: 'user@mileiq.com',
  },
};
