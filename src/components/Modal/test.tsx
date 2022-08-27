import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/renderWithTemplate';

import { Modal } from '.';

describe('<Modal />', () => {
  it('should mount', () => {
    renderWithTheme(<Modal isOpen>Lorem ipsum</Modal>);

    const modal = screen.getByRole('dialog');
    const content = screen.getByText('Lorem ipsum');

    expect(modal).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('should close modal', () => {
    renderWithTheme(<Modal isOpen>Lorem ipsum</Modal>);

    const modal = screen.getByLabelText('Fechar modal');

    expect(modal).toBeInTheDocument();

    fireEvent.click(modal);
    expect(modal).not.toBeInTheDocument();
  });

  it('should click Confirm button', () => {
    const handlePrimaryClick = jest.fn();
    renderWithTheme(<Modal isOpen primaryActionButton={{ action: handlePrimaryClick }}>Lorem ipsum</Modal>);

    const modal = screen.getByText('Confirmar');

    expect(modal).toBeInTheDocument();

    fireEvent.click(modal);
    expect(handlePrimaryClick).toHaveBeenCalled();
  });

  it('should click Cancel button', () => {
    const handlePrimaryClick = jest.fn();
    renderWithTheme(<Modal isOpen secondaryActionButton={{ action: handlePrimaryClick }}>Lorem ipsum</Modal>);

    const modal = screen.getByText('Cancelar');

    expect(modal).toBeInTheDocument();

    fireEvent.click(modal);
    expect(handlePrimaryClick).toHaveBeenCalled();
  });
});
