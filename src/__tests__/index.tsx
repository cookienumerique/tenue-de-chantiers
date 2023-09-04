import { HomePage } from '@/pages';
import { appRender, screen } from '@/testing/test-utils';
import '@testing-library/jest-dom';

describe('HomePage', () => {
  it('Should', () => {
    appRender(<HomePage />);

    // await waitForLoadingToFinish();
    //
    const title = screen.getByRole('heading', {
      level: 1,
    });
    console.log(title);
    //
    //
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Page Accueil');
  });
});
