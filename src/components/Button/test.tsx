import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Button } from '.';

describe('<Button />', () => {
  it('should mount', () => {
    renderWithTheme(<Button btnStyle='normal' btnStatus='primary' onClick={jest.fn()}>Lorem ipsum</Button>);
    
    const button = screen.getByRole('button');
    const buttonContent = screen.getByText('Lorem ipsum')

    expect(button).toBeInTheDocument();
    expect(buttonContent).toBeInTheDocument();
  });
});