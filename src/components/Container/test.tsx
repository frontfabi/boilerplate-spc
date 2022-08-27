import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';

import { Container } from '.';

describe('<Container />', () => {
  it('should mount', () => {
    renderWithTheme(<Container>Lorem ipsum</Container>);

    const container = screen.getByText('Lorem ipsum');

    expect(container).toBeInTheDocument();
  });
});
