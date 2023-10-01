import type { StoryObj } from '@storybook/react';

import Header from '@/components/header/Header';

// Meta
const meta = {
  title: 'CookUI/Header',
  component: Header,
};

export default meta;

// Story
type Story = StoryObj<typeof meta>;

export const BasicHeader: Story = {
  args: {},
};
