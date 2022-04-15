import React from 'react';
import {render} from '@testing-library/react-native';

import Component from './index';
import {RenderWithTheme} from '../../../../jest/renderWithProviders';
import {Product} from '../../../application/http/models/Product';

const renderWithTheme = (component: JSX.Element) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

const mockedProps: Product = {
  title: 'any',
  description: 'any',
  price: 'any',
  id: 1,
  category: 'any',
  image: 'any',
};

describe('Hightlight Component', () => {
  test('should be render correctly', () => {
    const {getByTestId} = renderWithTheme(
      <Component data={mockedProps} onAddToCartPress={jest.fn()} />,
    );
    const component = getByTestId('hightlight-card');
    expect(component).toBeTruthy();
  });
});
