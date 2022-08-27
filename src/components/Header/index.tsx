// import * as Logo from 'assets/images/logo_spcbrasil.png';
import logo from 'assets/images/logo_spcbrasil.png';
import {AvatarDropdown, Container} from 'components';
import {useState} from 'react';
import {HeaderProps} from 'types';

import {
  AccountContainer,
  GridHeader,
  LogoContainer,
  SearchContainer,
  SearchIcon,
  StyledHeader,
} from './styles';
const Header = ({loggedIn, username, cpf}: HeaderProps) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <StyledHeader loggedIn={loggedIn}>
        <Container fluid>
          <GridHeader>
            <LogoContainer>
              <a href="/">
                <img src={logo} alt="Logo" />
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
    </>
  );
};

export {Header};

