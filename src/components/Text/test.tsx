import '@testing-library/jest-dom/extend-expect';
import {screen} from '@testing-library/react';
import {renderWithTheme} from 'utils/renderWithTemplate';
import Standard from 'utils/theme';

import {Text} from '.';

describe('<Text />', () => {
  it('should mount', () => {
    renderWithTheme(<Text>Lorem ipsum</Text>);

    const textContent = screen.getByText('Lorem ipsum');

    expect(textContent).toBeInTheDocument();
  });

  Standard.font.size.forEach((testCase, index) => {
    it(`should work correctly for ${testCase}`, () => {
      renderWithTheme(<Text size={index}>Lorem ipsum {index}</Text>);
      const textContent = screen.getByText(`Lorem ipsum ${index}`);
      expect(textContent).toHaveStyle(`font-size: ${testCase}px;`); // ...
    });
  });
});
