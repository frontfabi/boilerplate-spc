import {NamedAvatar, Text} from 'components';
import {useState} from 'react';
import {AvatarDropdownProps} from 'types';

import {
  Icon,
  IconTitle,
  LabelContainer,
  MenuItem,
  MenuList,
  StyledAvatarDropdown,
} from './styles';

const AvatarDropdown = ({title, subtitle, menu}: AvatarDropdownProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <StyledAvatarDropdown>
      <NamedAvatar name={title} />
      <LabelContainer
        id="menuButton"
        role="button"
        aria-haspopup="true"
        aria-controls="menu"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <IconTitle>
          <Text size={1} lineHeight={1}>
            {title}
          </Text>
          <Icon isFlip={toggleMenu} />
        </IconTitle>
        <Text>{subtitle}</Text>
      </LabelContainer>
      {(menu != null) && toggleMenu && (
        <MenuList
          id="menu"
          aria-labelledby="menuButton"
          aria-orientation="vertical"
          role="menu"
        >
          {menu.map((item, index) => (
            <MenuItem
              key={index}
              role="presentation"
              onClick={() => setToggleMenu(false)}
            >
              <a href={item.url} role="menuitem">
                <Text>{item.label}</Text>
              </a>
            </MenuItem>
          ))}
          <MenuItem role="presentation" onClick={() => setToggleMenu(false)}>
            <a onClick={() => console.log('blah')} role="menuitem">
              <Text>Sair</Text>
            </a>
          </MenuItem>
        </MenuList>
      )}
    </StyledAvatarDropdown>
  );
};

export {AvatarDropdown};
