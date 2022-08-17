import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Button } from '.';

describe('<Button />', () => {
  it('should mount', () => {
    renderWithTheme(<Button>Lorem ipsum</Button>);
    
    const button = screen.getByTestId('ButtonContent');
    const buttonContent = screen.getByText('Lorem ipsum')

    expect(button).toBeInTheDocument();
    expect(buttonContent).toBeInTheDocument();
  });
});