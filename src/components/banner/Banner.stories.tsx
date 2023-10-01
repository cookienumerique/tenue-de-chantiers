import type { StoryObj } from '@storybook/react';

import Banner from '@/components/banner/Banner';

// Meta
const meta = {
  title: 'CookUI/Banner',
  component: Banner,
};

export default meta;

// Story
type Story = StoryObj<typeof meta>;

export const BasicBanner: Story = {
  args: {
    height: '80vh',
  },
};
