import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Text } from '.';

describe('<Text />', () => {
  it('should mount', () => {
    renderWithTheme(<Text>Lorem ipsum</Text>);
    
    const text = screen.getByTestId('TextContent');
    const textContent = screen.getByText('Lorem ipsum')

    expect(text).toBeInTheDocument();
    expect(textContent).toBeInTheDocument();
  });
});