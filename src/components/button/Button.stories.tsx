import type { Meta, StoryObj } from '@storybook/react';

import ButtonConnectGrouped from '@/components/button/ButtonConnectGrouped';

import ButtonConnect from './ButtonConnect';
// Meta
const meta = {
  title: 'CookUI/ButtonConnect',
  component: ButtonConnect,
} satisfies Meta<typeof ButtonConnect>;

export default meta;

// Story
type Story = StoryObj<typeof meta>;

export const ButtonConnectFacebookStory: Story = {
  args: {
    domain: 'facebook',
  },
};
export const ButtonConnectGoogleStory: Story = {
  args: {
    domain: 'google',
  },
};

export const ButtonConnectGroupedStory: Story = {
  render: () => <ButtonConnectGrouped />,
};
