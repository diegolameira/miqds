import type { Meta, StoryObj } from '@storybook/react';

import { DrivesScreen } from './drives-screen';

const meta = {
  component: DrivesScreen,
  title: 'Screens/Driver Dashboard/DrivesScreen',

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gDafe4G9bGWh24cn1MEetU/MileIQ-Design-System-(NEW)?type=design&node-id=1379-2562&mode=design&t=3i3pZV2mFRl3cbjR-4',
    },
  },
} satisfies Meta<typeof DrivesScreen>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort: number };

export const Default: SortedStory = {
  sort: 0,
  args: {},
};
