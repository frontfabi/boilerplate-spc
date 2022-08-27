import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/renderWithTemplate';

import { Input } from '.';

describe('<Input />', () => {
  it('should mount', () => {
    renderWithTheme(<Input />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });

  it('should be a password field', () => {
    renderWithTheme(<Input hasPassword />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'password');
    expect(input).not.toHaveAttribute('type', 'text');
  });

  it('should have a status icon', () => {
    renderWithTheme(<Input hasPassword hasStatusIcon status='success' />);

    const input = screen.getByRole('img');

    expect(input).toBeInTheDocument();
  });

  it('should be changed', () => {
    const handleChange = jest.fn();
    renderWithTheme(<Input onChange={handleChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '24/05/2020' }});

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
