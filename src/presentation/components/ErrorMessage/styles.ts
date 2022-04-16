import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${height / 3}px;
  left: 0;
  right: 0;
`;

export const ErrorImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ErrorText = styled.Text`
  margin-top: 24px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 14px;
  width: 80%;
  color: ${({theme}) => theme.colors.lightText};
`;
