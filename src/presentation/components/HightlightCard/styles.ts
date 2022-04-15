import styled from 'styled-components/native';

export const Container = styled.View`
  width: 172px;
  border-radius: 10px;
  margin-right: 48px;
`;

export const ImageWrapper = styled.View`
  flex: 1;
  shadow-color: ${({theme}) => theme.colors.black};
  shadow-offset: 0px 6px;
  shadow-opacity: 0.1;
  shadow-radius: 2.65px;
  elevation: 8;
  border-radius: 12px;
`;

export const Image = styled.Image`
  height: 183px;
  width: 172px;
  border-radius: 10px;
  background-color: #f8f2e1;
`;

export const PriceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;
