import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/renderWithTemplate';

import { Header } from '.';

describe('<Header />', () => {
  it('should mount', () => {
    renderWithTheme(<Header />);

    const header = screen.getByAltText('Logo');

    expect(header).toBeInTheDocument();
  });
});
