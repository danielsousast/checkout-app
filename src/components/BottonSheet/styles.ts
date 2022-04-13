import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 108px;
  position: absolute;
  bottom: 0px;
  justify-content: center;
  padding: 0 16px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background-color: ${({theme}) => theme.colors.white};
  shadow-color: ${({theme}) => theme.colors.black};
  shadow-offset: 0px -4px;
  shadow-opacity: 0.1;
  shadow-radius: 2.65px;
  elevation: 8;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 50px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Text = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${({theme}) => theme.colors.white};
`;
