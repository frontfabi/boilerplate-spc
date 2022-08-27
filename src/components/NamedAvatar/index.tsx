import { Text } from 'components';
import { NamedAvatarProps } from 'types';

import { StyledNamedAvatar } from './styles';

const NamedAvatar = ({ name }: NamedAvatarProps) => {
  const arrName = name.split(' ');
  const getFirstChars = (arr: string[]) =>
    arr
        .map((item, index) => {
          if (index == 0 || index == arr.length - 1) return item.slice(0, 1);
        })
        .join('')
        .toUpperCase();

  return (
    <StyledNamedAvatar>
      <Text weight={3}>{getFirstChars(arrName)}</Text>
    </StyledNamedAvatar>
  );
};

export { NamedAvatar };
