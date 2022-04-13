import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  margin-top: 24px;
  color: ${({theme}) => theme.colors.white};
`;

export const Description = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${({theme}) => theme.colors.white};
`;
