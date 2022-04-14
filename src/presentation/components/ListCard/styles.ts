import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

type ContainerProps = {
  withMargin?: boolean;
};

const {width} = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 32;

export const Container = styled.View<ContainerProps>`
  height: 223px;
  width: ${CARD_WIDTH}px;
  border-radius: 10px;
  overflow: hidden;
  flex-grow: 1;
  ${({withMargin}) =>
    withMargin &&
    css`
      margin-right: ${24}px;
    `}
`;

export const Image = styled.Image`
  height: 139px;
  width: ${CARD_WIDTH}px;
  border-radius: 10px;
`;

export const PriceWrapper = styled.View`
  margin-top: 4px;
`;
