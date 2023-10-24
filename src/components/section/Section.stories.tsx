import { Text } from '@chakra-ui/react';
import type { StoryObj } from '@storybook/react';

import Section from '@/components/section/Section';

// Meta
const meta = {
  title: 'CookUI/Section',
  component: Section,
};

export default meta;

// Story
type Story = StoryObj<typeof meta>;

export const BasicSection: Story = {
  args: {
    backgroundColor: 'gray.200',
    children: <Text>This is a basic section</Text>,
  },
};
