// import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReactElement } from 'react';

import { AppProvider } from '@/providers/app';

// renders the app within the app provider
export const appRender = (ui: ReactElement) => {
  return render(ui, {
    wrapper: AppProvider,
  });
};

// waits for all loading spinners to disappear
export const waitForLoadingToFinish = () => {
  // return waitFor(
  //   () => {
  //     const loaders = [
  //       ...screen.queryAllByTestId(/loading/i),
  //       ...screen.queryAllByText(/loading/i),
  //     ];
  //
  //     loaders.forEach((loader) => expect(loader).toBet);
  //   },
  //   {
  //     timeout: 4000,
  //   }
  // );
};

export * from '@testing-library/react';
