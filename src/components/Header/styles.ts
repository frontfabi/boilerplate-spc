import { GoSearch } from 'react-icons/go';
import styled, { css } from 'styled-components';
import { HeaderProps } from 'types';
import { NavLink } from 'react-router-dom';
export const StyledHeader = styled.header<HeaderProps>`
  position: relative;
  margin: 0;
  padding: 0;
  height: 152px;
  border-bottom: 1px solid transparent;
  display: flex;
  align-items: center;

  ${({ loggedIn, theme }) =>
    loggedIn &&
    css`
      background: ${theme.color.white.FFFFFF};
      border-color: ${theme.color.lightGray.E5E5E5};
    `}
`;

export const LogoContainer = styled.div``;
export const SearchContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.white.F3F8FE};
    width: 494px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;

    input {
      background: transparent;
      border: none;
      outline: transparent;
      height: 100%;
      padding-left: 24px;
      width: calc(100% - 64px);
      ::placeholder {
        font-size: ${theme.font.size[0]};
      }
    }
  `}
`;

export const SearchIcon = styled(GoSearch)`
  ${({ theme }) => css`
    color: ${theme.color.darkGray['4E5157']};
    width: 20px;
    height: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  `}
`;
export const AccountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > * {
    &:last-of-type {
      margin-left: 24px;
    }
  }
`;

export const GridHeader = styled.div`
  display: grid;
  gap: 24px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledMenu = styled.nav`
  ${({ theme }) => css`
    background: ${theme.color.white['FFFFFF']};
    height: 128px;

    > * {
      align-items: stretch;
      height: 100%;
    }
  `}
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 46px;
  width: 230px;

  svg {
    height: 32px;
    width: 32px;
    margin-right: 16px;
    ${({ theme }) => `stroke: ${theme.color.blue['007BFF']};`}
    &[fill="currentColor"] {
      ${({ theme }) => `fill: ${theme.color.blue['007BFF']};`}
    }
  }
`;

export const StyledLinkItem = styled(NavLink)`
  ${({ theme }) => `
  
    text-decoration: none;
    border-bottom: 4px solid transparent;
    &.active {
      border-bottom-color: ${theme.color.blue['007BFF']};
    }
  `}
`;
