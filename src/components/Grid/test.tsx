import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';

import { Grid } from '.';

describe('<Grid />', () => {
  it('should mount', () => {
    renderWithTheme(<Grid>Lorem ipsum</Grid>);

    const grid = screen.getByText('Lorem ipsum');

    expect(grid).toBeInTheDocument();
  });
});
