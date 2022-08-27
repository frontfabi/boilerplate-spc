import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';

import { FormField } from '.';

describe('<FormField />', () => {
  it('should mount', () => {
    renderWithTheme(
        <FormField helperText="Este é um texto auxiliar">Lorem ipsum</FormField>,
    );

    const formfieldContent = screen.getByText('Lorem ipsum');

    expect(formfieldContent).toBeInTheDocument();
  });
});
