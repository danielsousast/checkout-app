import styled from 'styled-components/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

EntypoIcon.loadFont();

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 50px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 40px;
  position: absolute;
  left: 0;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const BackIcon = styled(EntypoIcon).attrs(({theme}) => ({
  name: 'chevron-small-left',
  size: 30,
  color: theme.colors.lightText,
}))``;

export const List = styled.FlatList`
  margin-top: 40px;
`;

export const TotalWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px 16px;
  justify-content: space-between;
  margin-bottom: 80px;
`;
