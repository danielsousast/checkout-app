import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components/native';
import {useCart} from '../../../application/context/CartContext';
import BittonSheet from '../../components/BottonSheet';
import IntemCart from '../../components/IntemCart';
import {ProductTitle, SectionTitle} from '../../components/Typography';
import EmptyCart from './EmptyCart';
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
  const theme = useTheme();
  const {goBack, navigate} = useNavigation();
  const {cartProducts, increment, decrement} = useCart();
  const isEmpty = cartProducts?.length === 0;

  function onFinishSell() {
    navigate('Success' as any);
  }

  function onIncrement(id: number): void {
    increment(id);
  }

  function onDecrement(id: number): void {
    decrement(id);
  }

  const totalPrice = React.useMemo(() => {
    const total = cartProducts.reduce((accumulator, item) => {
      //@ts-ignore
      const price = item.quantity * item.price;
      return accumulator + price;
    }, 0);

    return `$${total.toFixed(2)}`;
  }, [cartProducts]);

  function renderItem({item}: any) {
    return (
      <IntemCart
        data={item}
        onIncrementPress={onIncrement}
        onDecrementPress={onDecrement}
      />
    );
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
      {!isEmpty && <List data={cartProducts} renderItem={renderItem} />}
      {!isEmpty && (
        <TotalWrapper>
          <ProductTitle>Total</ProductTitle>
          <ProductTitle>{totalPrice}</ProductTitle>
        </TotalWrapper>
      )}
      {isEmpty && <EmptyCart onPress={function (): void {}} />}
      {!isEmpty && (
        <BittonSheet
          title="FINALIZAR COMPRA"
          onPress={onFinishSell}
          bgColor={theme.colors.background}
          withShadow={false}
        />
      )}
    </Container>
  );
};

export default Cart;
