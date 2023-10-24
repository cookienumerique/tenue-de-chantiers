import { expect } from '@storybook/jest';
// Meta
import { Meta, StoryObj } from '@storybook/react';
import {
  userEvent,
  within,
} from '@storybook/testing-library';

import LoginForm from './LoginForm';

const meta = {
  title: 'CookUI/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

// Story
type Story = StoryObj<typeof meta>;

export const EmptySubmit: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const submitButton =
      canvas.getByText(/se connecter/i);

    await userEvent.click(submitButton);

    // Error message is displayed
    await expect(
      canvas.getByText(/entrez votre adresse e-mail/i)
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(/entrez votre mot de passe/i)
    ).toBeInTheDocument();

    // Function error was called
    await expect(args.onError).toHaveBeenCalled();
  },
};

export const ValidSubmit: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i);
    const passwordInput =
      canvas.getByLabelText(/mot de passe/i);
    const submitButton =
      canvas.getByText(/se connecter/i);

    await userEvent.type(
      emailInput,
      'example-email@email.com'
    );
    await userEvent.type(passwordInput, 'mypassword');

    await userEvent.click(submitButton);
    await expect(args.onValid).toHaveBeenCalled();
  },
};
