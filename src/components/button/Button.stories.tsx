import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/button/Button';
import ButtonConnectGrouped from '@/components/button/ButtonConnectGrouped';

import ButtonConnect from './ButtonConnect';
// Meta
const meta = {
  title: 'CookUI/ButtonConnect',
  component: ButtonConnect,
} satisfies Meta<typeof Button>;

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
