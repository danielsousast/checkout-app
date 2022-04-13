import {useNavigation} from '@react-navigation/native';
import React from 'react';
import BittonSheet from '../../components/BottonSheet';
import IntemCart from '../../components/IntemCart';
import {ProductTitle, SectionTitle} from '../../components/Typography';
import theme from '../../global/theme';
import {
  BackButton,
  BackIcon,
  Container,
  Header,
  HeaderTitle,
  List,
  TotalWrapper,
} from './styles';

const Cart: React.FC = () => {
  const {goBack} = useNavigation();
  function renderItem() {
    return <IntemCart />;
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <BackIcon />
        </BackButton>

        <HeaderTitle>CARRINHO</HeaderTitle>
      </Header>
      <SectionTitle>Meu carrinho</SectionTitle>
      <List
        data={['1', '2', '3', '4', '5', '6', '7', '8']}
        renderItem={renderItem}
      />
      <TotalWrapper>
        <ProductTitle>Total</ProductTitle>
        <ProductTitle>450</ProductTitle>
      </TotalWrapper>
      <BittonSheet
        title="FINALIZAR COMPRA"
        onPress={() => {}}
        bgColor={theme.colors.background}
        withShadow={false}
      />
    </Container>
  );
};

export default Cart;
