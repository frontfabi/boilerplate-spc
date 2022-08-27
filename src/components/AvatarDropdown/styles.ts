import {FiChevronDown} from 'react-icons/fi';
import styled from 'styled-components';

export const StyledAvatarDropdown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
`;

export const LabelContainer = styled.div`
  margin-left: 24px;
  cursor: pointer;
`;

export const IconTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > * {
    user-select: none;
  }
`;

export const Icon = styled(FiChevronDown)<{ isFlip?: boolean }>`
  width: 20px;
  ${({isFlip}) => isFlip && 'transform: scaleY(-1);'}
`;

export const MenuList = styled.ul`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.16);
  list-style: none;
  padding: 12px 10px;
  position: absolute;
  right: 0;
  top: 30%;
  width: 170px;
  z-index: 10;
`;

export const MenuItem = styled.li`
  & {
    padding: 8px 0;
    cursor: pointer;
    :not(:last-child) {
      border-bottom: 1px solid
        ${({theme}) => `${theme.color.lightGray.EAEAEA}`};
    }
  }

  a {
    text-decoration: none;
    ${({theme}) => `color: ${theme.font.color.default}`}
  }
`;
