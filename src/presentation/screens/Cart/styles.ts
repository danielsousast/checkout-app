import styled from 'styled-components/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

EntypoIcon.loadFont();

type StyledProps = {
  safe?: number;
};

export const Container = styled.SafeAreaView`
  flex: 1;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View<StyledProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
  margin-top: ${({safe}) => (safe ? 16 : 24)}px;
`;

export const HeaderTitle = styled.Text`
  flex: 1;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.text};
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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 16,
  },
})`
  margin-top: 24px;
`;

export const TotalWrapper = styled.View<StyledProps>`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${({theme}) => theme.colors.lightText};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.lightText};
  padding: 10px 16px;
  justify-content: space-between;
  margin-bottom: ${({safe}) => (safe ? 20 : 30)}%;
`;

export const EmptyWrapper = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 26px;
`;

export const EmptyDescription = styled.Text`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 14px;
  color: ${({theme}) => theme.colors.lightText};
`;
