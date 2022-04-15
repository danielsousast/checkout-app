import styled from 'styled-components/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

EntypoIcon.loadFont();

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 11px;
  border-radius: 12px;
  margin-bottom: 16px;
  background-color: ${({theme}) => theme.colors.primaryLight};
`;

export const Content = styled.View`
  flex: 1;
  padding-left: 12px;
`;

export const ImageWrapper = styled.View`
  shadow-color: ${({theme}) => theme.colors.black};
  shadow-offset: 0px 6px;
  shadow-opacity: 0.1;
  shadow-radius: 2.65px;
  elevation: 8;
  border-radius: 12px;
`;

export const Image = styled.Image`
  width: 38px;
  height: 50px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonLeft = styled.TouchableOpacity`
  width: 36px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-right-width: 1px;
  border-right-color: ${({theme}) => theme.colors.lightText};
  background: ${({theme}) => theme.colors.white};
`;

export const ButtonRight = styled.TouchableOpacity`
  width: 36px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background: ${({theme}) => theme.colors.white};
`;

export const PlusIcon = styled(EntypoIcon).attrs(({theme}) => ({
  name: 'plus',
  size: 22,
  color: theme.colors.lightText,
}))``;

export const MinusIcon = styled(EntypoIcon).attrs(({theme}) => ({
  name: 'minus',
  size: 22,
  color: theme.colors.lightText,
}))``;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  width: 95%;
`;
