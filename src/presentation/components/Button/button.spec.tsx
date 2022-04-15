import React from 'react';
import {render} from '@testing-library/react-native';

import Component from './index';
import {RenderWithTheme} from '../../../../jest/renderWithProviders';

const renderWithTheme = (component: JSX.Element) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

describe('Button Component', () => {
  test('should be render correctly', () => {
    const {getByTestId} = renderWithTheme(
      <Component onPress={jest.fn()} title="any_title" />,
    );
    const component = getByTestId('button');
    expect(component).toBeTruthy();
  });
});
