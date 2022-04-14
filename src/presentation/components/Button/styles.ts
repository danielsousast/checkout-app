import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
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
