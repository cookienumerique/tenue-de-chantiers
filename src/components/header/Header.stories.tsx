// import type { StoryObj } from '@storybook/react';
//
// import Header from '@/components/header/Header';
//
// // Meta
// const meta = {
//   title: 'CookUI/Header',
//   component: Header,
// };
//
// export default meta;
//
// // Story
// type Story = StoryObj<typeof meta>;
//
// export const BasicHeader: Story = {
//   args: {},
// };
// export default {};
import { Meta, StoryObj } from '@storybook/react';

import Header from '@/components/header/Header';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'CookUI/Header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

export const HeaderStory: Story = {};
