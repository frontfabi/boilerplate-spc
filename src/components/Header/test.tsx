import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { AiOutlineHome } from 'react-icons/ai';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Header } from '.';

describe('<Header />', () => {
  const menuItems = [
    {
      url: '/',
      label: 'Home',
      icon: <AiOutlineHome />,
    },
  ];
  it('should mount', () => {
    renderWithTheme(<Header menu={menuItems} />);

    const header = screen.getByAltText('Logo');

    expect(header).toBeInTheDocument();
  });
});
