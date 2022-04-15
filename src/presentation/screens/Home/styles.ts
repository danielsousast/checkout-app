import styled from 'styled-components/native';

type HeaderProps = {
  safe: number;
};

type ContainerProps = {
  withPadding?: boolean;
};

export const Container = styled.ScrollView.attrs(
  ({withPadding}: ContainerProps) => ({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: withPadding ? 100 : 0,
    },
  }),
)<ContainerProps>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View<HeaderProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-top: ${({safe}) => (safe ? 42 : 8)}px;
  justify-content: space-between;
`;

export const CategoryTitle = styled.Text`
  font-weight: 700;
  font-size: 8px;
  line-height: 9px;
  color: ${({theme}) => theme.colors.text};
  margin-left: 16px;
  margin-top: 16px;
  text-transform: uppercase;
`;

export const ScrollWrapper = styled.View``;

export const CategoryScroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 16,
  },
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 6px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`;

export const HightlightScroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 16,
  },
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
  margin-bottom: 28px;
`;

export const ProductsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
`;

export const ProductsScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    padding: 16,
  },
  showsHorizontalScrollIndicator: false,
})``;
