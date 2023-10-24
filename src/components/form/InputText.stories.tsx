// Meta
import { Meta, StoryObj } from '@storybook/react';

import InputText from './InputText';

const meta = {
  title: 'CookUI/Form/InputText',
  component: InputText,
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;

// Story
type Story = StoryObj<typeof meta>;

export const InputTextWithoutLabel: Story = {
  args: {
    name: 'name',
    placeholder: 'Doe',
  },
};

export const InputTextWithLabel: Story = {
  args: {
    name: 'name',
    placeholder: 'Doe',
    label: 'Name',
  },
};

export const InputTextRequired: Story = {
  args: {
    name: 'name',
    placeholder: 'Doe',
    label: 'Name',
    rules: {
      required: true,
    },
  },
};

export const InputPassword: Story = {
  args: {
    name: 'name',
    type: 'password',
    placeholder: '********',
    label: 'Password',
    rules: {
      required: true,
    },
  },
};
