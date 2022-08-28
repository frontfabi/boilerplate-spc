// import * as Logo from 'assets/images/logo_spcbrasil.png';
import { AvatarDropdown, Container, Text } from 'components';
import { useState } from 'react';
import { HeaderProps } from 'types';

import {
  AccountContainer,
  GridHeader,
  LogoContainer,
  SearchContainer,
  SearchIcon,
  StyledHeader, StyledLinkItem, StyledListItem, StyledMenu,
  StyledNavList,
} from './styles';
const Header = ({ loggedIn, username, cpf, menu }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <StyledHeader loggedIn={loggedIn}>
        <Container fluid>
          <GridHeader>
            <LogoContainer>
              <a href="/">
                <img src="/images/logo_spcbrasil.png" alt="Logo" />
              </a>
            </LogoContainer>
            {loggedIn && (
              <>
                <SearchContainer>
                  <input
                    type="text"
                    value={searchValue}
                    placeholder="Estou procurando por..."
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <SearchIcon
                    onClick={() => alert(`Você buscou por "${searchValue}"`)}
                  />
                </SearchContainer>
                <AccountContainer>
                  <AvatarDropdown
                    title={username ?? 'Convidado'}
                    subtitle={cpf ?? ' '}
                    menu={[]}
                  />
                </AccountContainer>
              </>
            )}
          </GridHeader>
        </Container>
      </StyledHeader>
      <StyledMenu>
        <Container fluid>
          <StyledNavList>
            {
              menu && menu.map((item, index) => (
                <StyledLinkItem to={item.url} key={index}>
                  <StyledListItem >
                    {item.icon}
                    <Text size={1}>{item.label}</Text>
                  </StyledListItem>
                </StyledLinkItem>
              ))
            }
          </StyledNavList>
        </Container>
      </StyledMenu>
    </>
  );
};

export { Header };

