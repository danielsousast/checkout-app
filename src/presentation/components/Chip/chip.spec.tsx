import React from 'react';
import {render} from '@testing-library/react-native';

import Component from './index';
import {RenderWithTheme} from '../../../../jest/renderWithProviders';

const renderWithTheme = (component: JSX.Element) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

describe('Chip Component', () => {
  test('should be show bedge if has products', () => {
    const {getByTestId} = renderWithTheme(
      <Component onPress={jest.fn()} checked={true} category="any_category" />,
    );
    const component = getByTestId('chip');
    expect(component).toBeTruthy();
  });
});
