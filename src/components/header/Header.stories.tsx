import { Meta, StoryObj } from '@storybook/react';

import Header from '@/components/header/Header';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'CookUI/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

export const HeaderStory: Story = {};
