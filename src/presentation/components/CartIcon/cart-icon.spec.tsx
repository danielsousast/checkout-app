import React from 'react';
import {render} from '@testing-library/react-native';

import Component from './index';
import {RenderWithTheme} from '../../../../jest/renderWithProviders';

const renderWithTheme = (component: JSX.Element) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

describe('CartIcon Component', () => {
  test('should be show bedge if has products', () => {
    const {getByTestId} = renderWithTheme(
      <Component onPress={jest.fn()} cartLength={2} />,
    );
    const component = getByTestId('cart-bdge');
    expect(component).toBeTruthy();
  });
});
