import type { Meta, StoryObj } from '@storybook/react';

import ButtonShortCut from '@/components/button/ButtonShortCut';

const meta: Meta<typeof ButtonShortCut> = {
  component: ButtonShortCut,
  title: 'Button/ShortCut',
};

export default meta;
type Story = StoryObj<typeof ButtonShortCut>;

export const ButtonShortCutStory: Story = {
  render: () => <ButtonShortCut />,
};
