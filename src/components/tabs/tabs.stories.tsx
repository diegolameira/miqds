import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const Template = (args) => (
  <Tabs defaultValue="account" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      Make changes to your account here.
    </TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
  </Tabs>
);

const meta: Meta = {
  title: 'Preview/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    // Add argTypes based on the properties in @tabs.tsx
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;
type SortedStory = Story & { sort?: number };

export const Default: SortedStory = {
  args: {},
};

export const WithCustomContent: SortedStory = {
  args: {},
};

export const WithIcons: SortedStory = {
  args: {},
};
