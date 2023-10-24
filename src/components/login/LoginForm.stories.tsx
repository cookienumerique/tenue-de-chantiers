import { expect } from '@storybook/jest';
// Meta
import { Meta, StoryObj } from '@storybook/react';
import {
  userEvent,
  waitFor,
  within,
} from '@storybook/testing-library';
import { fn } from 'jest-mock';

import LoginForm from '@/components/login/LoginForm';

const meta = {
  title: 'CookUI/LoginForm',
  component: LoginForm,
  argTypes: {
    onError: { action: 'onError' },
    onValid: { action: 'onValid' },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

// Story
type Story = StoryObj<typeof meta>;

export const EmptySubmit: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const submitButton =
      canvas.getByText(/se connecter/i);

    await waitFor(() => userEvent.click(submitButton));

    // // Error message is displayed
    // await expect(
    //   canvas.getByText(/entrez votre adresse e-mail/i)
    // ).toBeInTheDocument();
    //
    // await expect(
    //   canvas.getByText(/entrez votre mot de passe/i)
    // ).toBeInTheDocument();

    // Function error was called
    await expect(args.onError).toHaveBeenCalled();
  },
};

export const ValidSubmit: Story = {
  args: {
    onValid: fn((values) => console.log(values)),
  },
  play: async ({ canvasElement, args }) => {
    const email = 'example-email@email.com';
    const password = 'mypassword';
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i);
    const passwordInput =
      canvas.getByLabelText(/mot de passe/i);
    const submitButton =
      canvas.getByText(/se connecter/i);

    await waitFor(() =>
      userEvent.type(emailInput, email)
    );
    await waitFor(() =>
      userEvent.type(passwordInput, password)
    );
    await waitFor(() => userEvent.click(submitButton));

    await expect(args.onValid).toHaveBeenCalledWith({
      email,
      password,
    });
  },
};
