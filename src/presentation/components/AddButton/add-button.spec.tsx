import React from 'react';
import {render} from '@testing-library/react-native';

import Component from './index';
import {RenderWithTheme} from '../../../../jest/renderWithProviders';

const renderWithTheme = (component: JSX.Element) => {
  return render(<RenderWithTheme>{component}</RenderWithTheme>);
};

describe('AddButton Component', () => {
  test('should be render correctly', () => {
    const {getByTestId} = renderWithTheme(<Component onPress={jest.fn()} />);
    const component = getByTestId('add-button');
    expect(component).toBeTruthy();
  });
});
