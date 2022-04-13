import styled from 'styled-components/native';

export const Container = styled.View``;

export const Badge = styled.View`
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${({theme}) => theme.colors.white};
  border: 0.5px solid rgba(219, 219, 219, 0.98);
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const BadgeText = styled.Text`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  color: ${({theme}) => theme.colors.primary};
`;
