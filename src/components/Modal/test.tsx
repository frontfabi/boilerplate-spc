import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Modal } from '.';

describe('<Modal />', () => {
  it('should mount', () => {
    renderWithTheme(<Modal>Lorem ipsum</Modal>);
    
    const modal = screen.getByTestId('ModalContent');
    const modalContent = screen.getByText('Lorem ipsum')

    expect(modal).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
  });
});