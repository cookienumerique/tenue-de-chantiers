import { Text } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

import Layout from '@/components/layout/Layout';

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: 'Layout/Layout',
};

export default meta;
type Story = StoryObj<typeof Layout>;

export const LayoutStory: Story = {
  render: () => (
    <Layout>
      <Text color="red">My layout</Text>
    </Layout>
  ),
};
