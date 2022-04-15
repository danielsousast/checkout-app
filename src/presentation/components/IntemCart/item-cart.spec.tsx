import React from 'react';
import {render} from '@testing-library/react-native';

import Component from './index';
import {RenderWithTheme} from '../../../../jest/renderWithProviders';
import {CartItem} from '../../../application/http/models/CartItem';

const renderWithTheme = (component: JSX.Element) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

const mockedProps: CartItem = {
  title: 'any',
  description: 'any',
  price: 'any',
  id: 1,
  category: 'any',
  image: 'any',
  quantity: 1,
};

describe('ItemCart Component', () => {
  test('should be render correctly', () => {
    const {getByTestId} = renderWithTheme(
      <Component
        data={mockedProps}
        onIncrementPress={jest.fn()}
        onDecrementPress={jest.fn()}
      />,
    );
    const component = getByTestId('item-cart');
    expect(component).toBeTruthy();
  });
});
