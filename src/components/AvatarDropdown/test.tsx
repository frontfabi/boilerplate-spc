import '@testing-library/jest-dom/extend-expect';
import {fireEvent, screen, within} from '@testing-library/react';
import {renderWithTheme} from 'utils/renderWithTemplate';

import {AvatarDropdown} from '.';

describe('<AvatarDropdown />', () => {
  it('should mount', () => {
    renderWithTheme(
        <AvatarDropdown
          title="Paulo Gonçalves"
          subtitle="764.235.853-14"
          menu={[]}
        />,
    );

    const avatarTitle = screen.getByText('Paulo Gonçalves');
    const avatarLetters = screen.getByText('PG');
    const avatarSubtitle = screen.getByText('764.235.853-14');
    expect(avatarTitle).toBeInTheDocument();
    expect(avatarLetters).toHaveTextContent('PG');
    expect(avatarTitle).toHaveTextContent('Paulo Gonçalves');
    expect(avatarLetters).not.toHaveTextContent('FR');
    expect(avatarTitle).not.toHaveTextContent('Fabio Ribeiro');
    expect(avatarSubtitle).toHaveTextContent('764.235.853-14');
    expect(avatarSubtitle).not.toHaveTextContent('123.235.853-14');
  });

  it('should click to show menu', () => {
    renderWithTheme(
        <AvatarDropdown
          title="Paulo Gonçalves"
          subtitle="764.235.853-14"
          menu={[]}
        />,
    );

    const avatarDropdown = screen.getByRole('button');
    fireEvent.click(avatarDropdown);

    const avatarMenu = screen.getByText('Sair');
    expect(avatarMenu).toBeInTheDocument();

    fireEvent.click(avatarDropdown);
    expect(avatarMenu).not.toBeInTheDocument();
  });

  it('should have a menu list', () => {
    renderWithTheme(
        <AvatarDropdown
          title="Paulo Gonçalves"
          subtitle="764.235.853-14"
          menu={[{url: '/', label: 'home'}]}
        />,
    );

    const avatarDropdown = screen.getByRole('button');
    fireEvent.click(avatarDropdown);

    const avatarMenu = screen.getByRole('menu');
    expect(avatarMenu).toBeInTheDocument();

    const {getAllByRole} = within(avatarMenu);
    const items = getAllByRole('menuitem');
    expect(items.length).toBe(2);
  });
});
