import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  height: 223px;
  width: ${width / 2 - 32}px;
  border-radius: 10px;
  overflow: hidden;
  flex-grow: 1;
`;

export const Image = styled.Image`
  height: 139px;
  width: 155px;
  border-radius: 10px;
`;

export const PriceWrapper = styled.View`
  margin-top: 4px;
`;
